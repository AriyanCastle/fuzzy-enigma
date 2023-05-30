import React, { useState } from 'react';
import { useWhisper } from '@chengsokdara/use-whisper';
import { fetchSummary, fetchClinicalHistoryStream } from '../utils/apiHelpers';
import styles from './TranscriptionPage.module.css';

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
      prompt: '用简体字转录医生与患者在诊疗当中的对话内容'
    },
  });

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>('');
  const [clinicalHistory, setClinicalHistory] = useState<string>('');
  const [editedSummary, setEditedSummary] = useState<string>('');


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
  

  const displayToken = (token: string) => {
    // Assuming "clinicalHistory" is a state variable containing the displayed text
    setClinicalHistory((prevClinicalHistory) => prevClinicalHistory + token);
  };
  
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
    if (typeof editedSummary === 'string') {
      const generatedClinicalHistory = await fetchClinicalHistoryStream(editedSummary, displayToken);
      setClinicalHistory(generatedClinicalHistory);
    } else {
      console.error('Error: editedSummary is not a string');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col">
        <div className="flex justify-center mb-6">
          <button
            className={`${
              isRecording ? "bg-red-600" : "bg-blue-600"
            } text-white py-2 px-6 rounded focus:outline-none`}
            onClick={toggleRecording}
          >
            {isRecording ? "停止转录" : "转录对话"}
          </button>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">实时对话转录:</h3>
          <div className="bg-blue-100 border border-gray-300 p-4 rounded mb-6 whitespace-pre-wrap">
            {transcript.text}
          </div>
          <button
            className="bg-green-600 text-white py-2 px-6 rounded focus:outline-none float-right mb-6"
            onClick={handleGenerateSummary}
          >
            摘取重点
          </button>
        </div>
        {summary && (
          <div>
            <h3 className="font-bold text-lg mb-4">对话重点:(请先修改并确认内容，然后才生成现病史)</h3>
            <textarea
              className="w-full h-28 p-4 border border-gray-300 rounded mb-6 resize-none"
              value={editedSummary}
              onChange={handleSummaryChange}
            />
            <button
              className="bg-green-600 text-white py-2 px-6 rounded focus:outline-none float-right mb-6"
              onClick={handleGenerateClinicalHistory}
            >
              生成现病史
            </button>
          </div>
        )}
        {clinicalHistory && (
          <div>
            <h3 className="font-bold text-lg mb-4">现病史:</h3>
            <div className="bg-blue-100 border border-gray-300 p-4 rounded mb-6 whitespace-pre-wrap">
              {clinicalHistory}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranscriptionPage;