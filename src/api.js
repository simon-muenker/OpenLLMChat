export function postInference(model, system, messages) {
    return fetch("https://inf.cl.uni-trier.de/chat/", {
        method: "POST",
        body: JSON.stringify({
            model: model,
            system: system,
            messages: messages,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        mode: "cors",
        cache: "no-cache",
    })
        .then((response) => response.json())
}

export function postFeedback(id, content) {
    return fetch("https://inf.cl.uni-trier.de/feedback/", {
        method: "POST",
        body: JSON.stringify({
            id: id,
            content: content,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        mode: "cors",
        cache: "no-cache",
    })
        .then((response) => response.json())
}

export function getModels() {
    return fetch("https://inf.cl.uni-trier.de/models/", {method: "GET"})
        .then((response) => response.json())
}