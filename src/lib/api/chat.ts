import { BACKEND_BASE_URL } from "../constant"

const getChatCompletions = async (messages: { role: string, content: string }[]) => {
    const res = await fetch(`${BACKEND_BASE_URL}/api/v1/chat/completions`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'digital-twin',
            messages: messages.map((message) => ({
                role: message.role,
                content: message.content,
            })),
            stream: false,
        }),
    });

    if (!res.ok) {
        throw new Error(`Chat API error: ${res.status}`);
    }

    const result = await res.json();

    return result.choices[0].message.content;
}

export { getChatCompletions }