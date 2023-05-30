export const fetchSummary = async (conversation: string): Promise<string> => {
  const response = await fetch('/api/generateSummary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ conversation }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to generate summary: ${errorText}`);
  }

  const data = await response.json();
  return data.summary;
};

export async function fetchClinicalHistoryStream(summary: string, onTokenReceived: (token: string) => void): Promise<string> {
  try {
    const response = await fetch('/api/langchainstream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: summary }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Failed to generate clinical history');
    }

    const tokens = [];
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

    return new Promise((resolve, reject) => {
      reader.read().then(function processText({ done, value }) {
        if (done) {
          resolve(tokens.join(''));
          return;
        }
      
        tokens.push(value);
        onTokenReceived(value); // Call the callback with the received token
        return this.read().then(processText.bind(this));
      }.bind(reader)).catch((error) => {
        console.error('Error in fetchClinicalHistoryStream:', error);
        reject(error);
      });
    });
  } catch (error) {
    console.error('Error in fetchClinicalHistoryStream:', error);
    throw error;
  }
};
  
export async function fetchClinicalHistory(summary: string): Promise<string> {
  try {
    const response = await fetch('/api/generateClinicalHistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ summary }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Failed to generate clinical history');
    }

    const data = await response.json();
    return data.history;
  } catch (error) {
    console.error('Error in fetchClinicalHistory:', error);
    throw error;
  }
}