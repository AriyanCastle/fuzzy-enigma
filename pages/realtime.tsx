import React, { useState, useEffect } from 'react';
import { useWhisper } from '@chengsokdara/use-whisper';
import { fetchSummary, fetchClinicalHistory } from '../utils/apiHelpers';
import { auth } from "../lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import SignIn from "../components/SignIn";
import { saveUserData } from '../lib/dbHelpers';
import { User } from '@firebase/auth';

const TranscriptionPage: React.FC = () => {
  const {
    recording,
    speaking,
    transcribing,
    transcript,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: process.env.OPENAI_API_KEY,
    streaming: true,
    timeSlice: 2000, // 1 second
    whisperConfig: {
      language: 'zh',
      prompt: '用繁体轉錄香港中醫師與病人的廣東話診療內容'
    },
  });

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>('');
  const [clinicalHistory, setClinicalHistory] = useState<string>('');
  const [editedSummary, setEditedSummary] = useState<string>('');
  //const [user, setUser] = useState<firebase.User | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [currentTranscriptText, setCurrentTranscriptText] = useState('');


  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (transcript.event) {
      console.log('Transcript event:', transcript.event);
    }
  }, [transcript.event]);

  useEffect(() => {
    if (transcript.event) {
      const interimTranscript = transcript.event.results
        .filter((result) => !result.isFinal)
        .map((result) => result.alternatives[0].transcript)
        .join('');
  
      const finalTranscript = transcript.event.results
        .filter((result) => result.isFinal)
        .map((result) => result.alternatives[0].transcript)
        .join('');
  
      setCurrentTranscriptText((prevState) => {
        const newText = prevState + interimTranscript + finalTranscript;
        console.log('Current transcript text:', newText);
        return newText;
      });
    }
  }, [transcript.event]);

  useEffect(() => {
    if (currentTranscriptText) {
      console.log('Current transcript text:', currentTranscriptText); // Add this line
  
      const timer = setTimeout(async () => {
        if (typeof currentTranscriptText === 'string') {
          const generatedSummary = await fetchSummary(currentTranscriptText);
          setSummary(generatedSummary);
          setEditedSummary(generatedSummary);
        } else {
          console.error('Error: currentTranscriptText is not a string');
        }
      }, 15000); // Update summary every 15 seconds
  
      return () => clearTimeout(timer);
    }
  }, [currentTranscriptText]);
  
  
  const handleSaveData = async () => {
    if (user) {
      const userId = user.uid;
      const inputForClinicalHistory = editedSummary;
      const voiceRecording = recording;
      const transcribedText = typeof transcript.text !== 'undefined' ? transcript.text : '';
      const summaryData = summary;
      const clinicalHistoryData = clinicalHistory;
      await saveUserData(
        userId,
        inputForClinicalHistory,
        voiceRecording,
        transcribedText,
        summaryData,
        clinicalHistoryData
      );
    } else {
      console.error('User not signed in');
    }
  };
  
  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  const handleSummaryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedSummary(event.target.value);
  };

  const [loadingClinicalHistory, setLoadingClinicalHistory] = useState<boolean>(false);
  

  

  

  return (
  <div className="container mx-auto px-4 py-8">
    {!user ? (
      <SignIn signInWithGoogle={signInWithGoogle} />
    ) : (
      <div className="flex flex-col">
        <div className="flex justify-center mb-6">
          <button
            className={`${
              isRecording ? "bg-red-600" : "bg-blue-600"
            } text-white py-2 px-6 rounded focus:outline-none`}
            onClick={toggleRecording}
          >
            {isRecording ? "停止識別" : "AI語音識別"}
          </button>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">實時識別內容:</h3>
          <div className="bg-blue-100 border border-gray-300 p-4 rounded mb-6 whitespace-pre-wrap">
            {transcript.text}
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-2">
            <h3 className="font-bold text-lg mb-4">
              對話重點:(請先修改並確認內容)
            </h3>
            <textarea
              className="w-full h-28 p-4 border border-gray-300 rounded mb-6 resize-none"
              value={editedSummary}
              onChange={handleSummaryChange}
            />
          </div>
          <div className="w-1/2 pl-2">
            <h3 className="font-bold text-lg mb-4">筆記本:</h3>
            <textarea
              className="w-full h-28 p-4 border border-gray-300 rounded mb-6 resize-none"
            />
          </div>
        </div>
        

        {clinicalHistory && (
          <div>
            <h3 className="font-bold text-lg mb-4">病史:</h3>
            <div className="bg-blue-100 border border-gray-300 p-4 rounded mb-6 whitespace-pre-wrap">
              {clinicalHistory}
            </div>
          </div>
        )}
      </div>
    )}
  </div>
);
}
export default TranscriptionPage; 