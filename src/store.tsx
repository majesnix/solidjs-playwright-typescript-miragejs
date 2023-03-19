import { createStore } from "solid-js/store";

interface IExample {
  id: string;
  header: string;
}

export const [examples, setExamples] = createStore<IExample[]>([]);

export const getExamples = async () => {
  const examples = await fetch("https://localhost:3000/examples");
  setExamples([...(await examples.json())]);
};
