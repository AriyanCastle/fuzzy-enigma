import React, { useState } from 'react';
import axios from 'axios';

const Index = () => {
    const [summaryInput, setSummaryInput] = useState('');
    const [transcription, setTranscription] = useState('');
    const [summary, setSummary] = useState('');
    const [clinicalHistory, setClinicalHistory] = useState('');
    const [differentialDiagnosis, setDifferentialDiagnosis] = useState('');
    const [obgynHistory, setObgynHistory] = useState('');
    const [traumatologyHistory, setTraumatologyHistory] = useState('');

    const handleTranscribe = async () => {
        try {
            const response = await axios.get('http://localhost:8000/transcribe');
            setTranscription(response.data.transcription);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGenerateSummary = async () => {
        try {
            const response = await axios.get('http://localhost:8000/summary');
            setSummary(response.data.summary);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGenerateClinicalHistory = async () => {
        try {
            const response = await axios.post('http://localhost:8000/generate_clinical_history', {
                summary: summaryInput,
            });
            setClinicalHistory(response.data.content);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGenerateDifferentialDiagnosis = async () => {
        try {
            const response = await axios.post('http://localhost:8000/generate_differential_diagnosis', {
                summary: summaryInput,
            });
            setDifferentialDiagnosis(response.data.content);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGenerateObgynHistory = async () => {
        try {
            const response = await axios.post('http://localhost:8000/generate_obgyn_history', {
                summary: summaryInput,
            });
            setObgynHistory(response.data.content);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGenerateTraumatologyHistory = async () => {
        try {
            const response = await axios.post('http://localhost:8000/generate_traumatology_history', {
                summary: summaryInput,
            });
            setTraumatologyHistory(response.data.content);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Endpoints</h1>

            <div className="endpoint">
                <h2>/transcribe</h2>
                <button onClick={handleTranscribe}>Transcribe</button>
                <p>Transcription: {transcription}</p>
            </div>

            <div className="endpoint">
                <h2>/summary</h2>
                <button onClick={handleGenerateSummary}>Generate Summary</button>
                <p>Summary: {summary}</p>
            </div>

            <div className="endpoint">
                <h2>/generate_clinical_history</h2>
                <input
                    type="text"
                    value={summaryInput}
                    onChange={(e) => setSummaryInput(e.target.value)}
                    placeholder="Enter summary"
                />
                <button onClick={handleGenerateClinicalHistory}>Generate Clinical History</button>
                <p>Clinical History: {clinicalHistory}</p>
            </div>

            <div className="endpoint">
                <h2>/generate_differential_diagnosis</h2>
                <input
                    type="text"
                    value={summaryInput}
                    onChange={(e) => setSummaryInput(e.target.value)}
                    placeholder="Enter summary"
                />
                <button onClick={handleGenerateDifferentialDiagnosis}>Generate Differential Diagnosis</button>
                <p>Differential Diagnosis: {differentialDiagnosis}</p>
            </div>

            <div className="endpoint">
                <h2>/generate_obgyn_history</h2>
                <input
                    type="text"
                    value={summaryInput}
                    onChange={(e) => setSummaryInput(e.target.value)}
                    placeholder="Enter summary"
                />
                <button onClick={handleGenerateObgynHistory}>Generate OBGYN History</button>
                <p>OBGYN History: {obgynHistory}</p>
            </div>

            <div className="endpoint">
                <h2>/generate_traumatology_history</h2>
                <input
                    type="text"
                    value={summaryInput}
                    onChange={(e) => setSummaryInput(e.target.value)}
                    placeholder="Enter summary"
                />
                <button onClick={handleGenerateTraumatologyHistory}>Generate Traumatology History</button>
                <p>Traumatology History: {traumatologyHistory}</p>
            </div>

            <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        .title {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .endpoint {
          margin-bottom: 30px;
        }

        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        button {
          padding: 8px 16px;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        input {
          padding: 8px 12px;
          font-size: 16px;
          margin-right: 10px;
          border-radius: 4px;
          border: 1px solid #ddd;
        }

        p {
          margin-top: 10px;
        }
      `}</style>
        </div>
    );
};

export default Index;
