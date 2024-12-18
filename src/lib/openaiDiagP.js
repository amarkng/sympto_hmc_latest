import axios from 'axios';

export const getDiagnosisFromAI = async (symptoms) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Kamu adalah asisten medis yang mendiagnosis penyakit berdasarkan gejala pasien. Berikan hanya satu diagnosis yang paling mungkin dan ringkas tanpa penjelasan tambahan.',
          },
          {
            role: 'user',
            content: `Gejala berikut: ${symptoms.join(
              ', '
            )}. Apa satu diagnosis penyakit yang paling mungkin? (gunakan bahasa indonesia)`,
          },
        ],
        max_tokens: 30,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return (
      response.data.choices[0]?.message?.content || 'Diagnosis tidak tersedia'
    );
  } catch (error) {
    console.error('Error response:', error.response?.data || error.message);
    return (
      'Maaf, sistem sedang sibuk. Silakan coba lagi dalam beberapa saat..' +
      (error.response?.data?.error?.message || error.message)
    );
  }
};
