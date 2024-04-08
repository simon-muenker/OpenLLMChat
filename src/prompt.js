export const getPrompt = () => "System:\n{system}\n\n{chat}\n\nModel:"


export function fillPrompt(system, chat) {
    return getPrompt()
        .replace('{system}', system)
        .replace('{chat}', formatChat(chat))
}


export function formatChat(chat) {
    return (
        chat
            .map(message => `${message.name}:\n${message.text}`)
            .join('\n\n')
    ).trim()
}