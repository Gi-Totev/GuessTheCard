import axios from "axios";

const api = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck/",
});

export const initializeDeck = async () => {
  const { data } = await api.get("new/shuffle/", { params: { deck_count: 1 } });
  const deck = await drawAll(data.deck_id);

  return deck;
};

const drawAll = async (deckId) => {
  const { data } = await api.get(`${deckId}/draw`, { params: { count: 52 } });

  return data.cards;
};
