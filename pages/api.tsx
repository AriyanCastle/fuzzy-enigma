import axios from "axios";

export default function Api() {
    const startTranscription = async () => {
        try {
            const response = await axios.get("http://localhost:8000/transcribe");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getSummary = async () => {
        try {
            const response = await axios.get("http://localhost:8000/summary");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={startTranscription}>Start Transcription</button>
            <button onClick={getSummary}>Get Summary</button>
        </div>
    );
}
