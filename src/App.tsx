import { Component, For } from "solid-js";
import { examples, getExamples } from "./store";

const App: Component = () => {
  getExamples();

  return (
    <div>
      <For each={examples}>
        {(example) => (
          <div>
            <div>{example.id}</div>
            <div data-testid="header">{example.header}</div>
          </div>
        )}
      </For>
    </div>
  );
};

export default App;
