import axios from "axios"

const instance = axios.create({
    baseURL: 'https://inf.cl.uni-trier.de',
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
    }
});

export function postChat(model, messages) {
    return instance.post("/chat/", {model: model, messages: messages})
        .then((response) => response.data)
}

export function postFeedback(id, content) {
    return instance.post("/feedback/", {id: id, content: content})
        .then((response) => response.data)
}

export function postRank(winner, loser) {
    return instance.post("/rank/", {winner: winner, loser: loser})
        .then((response) => response.data)
}

export function getModels() {
    return instance.get("/models/").then((response) => response.data)
}

export function getPersonas() {
    return instance.get("/personas/").then((response) => response.data)
}