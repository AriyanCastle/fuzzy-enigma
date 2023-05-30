import React, { useState, useEffect } from 'react';
import { useWhisper } from '@chengsokdara/use-whisper';
import { fetchSummary, fetchClinicalHistory } from '../utils/apiHelpers';
import { auth } from "../lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import SignIn from "../components/SignIn";

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
    timeSlice: 1000, // 1 second
    whisperConfig: {
      language: 'zh',
      prompt: '用繁体轉錄香港中醫師與病人的廣東話診療內容'
    },
  });

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>('');
  const [clinicalHistory, setClinicalHistory] = useState<string>('');
  const [editedSummary, setEditedSummary] = useState<string>('');
  const [user, setUser] = useState<firebase.User | null>(null);


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
  

  const handleGenerateSummary = async () => {
    if (typeof transcript.text === 'string') {
      const generatedSummary = await fetchSummary(transcript.text);
      setSummary(generatedSummary);
      setEditedSummary(generatedSummary);
    } else {
      console.error('Error: transcript.text is not a string');
    }
  };

  const handleGenerateClinicalHistory = async () => {
    setLoadingClinicalHistory(true);
    if (typeof editedSummary === 'string') {
      const generatedClinicalHistory = await fetchClinicalHistory(editedSummary);
      setClinicalHistory(generatedClinicalHistory);
    } else {
      console.error('Error: editedSummary is not a string');
    }
    setLoadingClinicalHistory(false);
  };

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
          <button
            className="bg-green-600 text-white py-2 px-6 rounded focus:outline-none float-right mb-6"
            onClick={handleGenerateSummary}
          >
            摘取重點
          </button>
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
        <button
          className="bg-green-600 text-white py-2 px-6 rounded focus:outline-none float-right mb-6"
          onClick={handleGenerateClinicalHistory}
          disabled={loadingClinicalHistory}
        >
          {loadingClinicalHistory ? '病史生成中...' : '生成病史，需要將內容放入對話重點框'}
        </button>

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