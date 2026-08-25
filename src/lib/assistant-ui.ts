import { AuiConfig, Suggestions, type ChatModelAdapter } from "@assistant-ui/react";

import { getChatCompletions } from "./api/chat";

const modelAdapter: ChatModelAdapter = {
    async run({ messages }) {
        const result = await getChatCompletions([...messages])
        
        return {
            content: [
                {
                    type: "text",
                    text: result,
                },
            ],
        };
    }
}

const config = AuiConfig({
    suggestions: Suggestions([
        "Tell me your experience with RAG!",
        "Have you ever worked with Swift?",
    ])
})

export { modelAdapter, config }