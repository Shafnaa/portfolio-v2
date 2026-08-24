import { AuiConfig, Suggestions, type ChatModelAdapter } from "@assistant-ui/react";

import { getChatCompletions } from "./api/chat";

const modelAdapter: ChatModelAdapter = {
    async run({ messages }) {
        const result = await getChatCompletions(messages.map((message) => ({
            role: message.role,
            content: message.content[0].type === 'text' ? message.content[0].text : '',
        })))
        
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
        "Plan a project",
        "Explain a concept",
    ])
})

export { modelAdapter, config }