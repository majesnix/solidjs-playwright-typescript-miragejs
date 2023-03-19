import { render } from "solid-testing-library";
import App from "./App";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom"; // 👈 this is imported in order to use the jest-dom matchers
import { createServer } from "miragejs";

describe("App", () => {
  const server = createServer({ environment: "test" });
  server.get("http://localhost:3000/examples", () => [
    { id: "abc", header: "init" },
  ]);

  it("should render the app", () => {
    const { queryAllByText } = render(() => <App />);
    expect(queryAllByText("init")).toBeTruthy();
  });
});
