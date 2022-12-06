const endPoint = process.env.OPENAI_ENDPOINT || 'https://api.openai.com/v1/completions'
const apiKey = process.env.OPENAI_API_KEY || ''

const headers = {
  Authorization: `Bearer ${apiKey}`,
  'Content-type': 'application/json',
}
const defaultOptions = {
  muteHttpExceptions: true,
  headers,
  method: 'POST',
}
const defaultPayload = {
  model: 'text-davinci-003',
  prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative.`,
  temperature: 0.9,
  max_tokens: 3000,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.6,
  stop: [' Human:', ' AI:'],
}
type Options = typeof defaultOptions
type Payload = typeof defaultPayload
type OpenAIResponse = {
  choices: {
    text: string
    index: number
  }[]
}

export const fetchOpenAI = async (message, options: Options = defaultOptions) => {
  const requestBody: Payload = {
    ...defaultPayload,
    prompt: `${defaultPayload.prompt}\nHUMAN: ${message}\nAI: `,
  }

  const response = await fetch(endPoint, {
    ...defaultOptions,
    ...options,
    body: JSON.stringify(requestBody),
  })
  const json: OpenAIResponse = await response.json()

  console.log(json)

  return json.choices[0].text
}
