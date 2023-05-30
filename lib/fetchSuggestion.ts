import formatTodoForGPT from "./formatTodoForGPT";

const fetchSuggestion = async (board: IBoard) => {
  const todos = formatTodoForGPT(board);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  const gptData = await res.json();
  const { content } = gptData;

  return content;
};

export default fetchSuggestion;
