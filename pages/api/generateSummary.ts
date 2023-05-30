import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const generateSummary = async (conversation: string): Promise<string> => {
  const prompt = `请根据以下提供的中文医生与患者之间的对话内容，总结成point form：\n${conversation}\n总结：（一个重点一行）`;

  // Initialize OpenAI API with the API key
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // API call to OpenAI
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: prompt }],
    temperature: 0,
  });

  // Extract the summary
  const summary = response.data.choices?.[0]?.message?.content?.trim() ?? "";
  return summary;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { conversation } = req.body;

  try {
    const summary = await generateSummary(conversation);
    res.status(200).json({ summary });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};