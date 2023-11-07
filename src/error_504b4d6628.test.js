// Test generated by RoostGPT for test springMongoDB using AI Type Open AI and AI Model gpt-4

import "@testing-library/jest-dom";

describe("Test console error override", () => {
  let originalError;

  beforeAll(() => {
    originalError = console.error;
  });

  afterEach(() => {
    console.error = originalError;
  });

  test("console.error is overridden and does not print warning for ReactDOM.render", () => {
    console.error = (...args) => {
      if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };

    console.error("Warning: ReactDOM.render is no longer supported in React 18.");
    expect(originalError).not.toHaveBeenCalled();
  });

  test("console.error is overridden and prints other messages", () => {
    const consoleSpy = jest.spyOn(console, 'error');
    console.error = (...args) => {
      if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };

    console.error("Another error message");
    expect(consoleSpy).toHaveBeenCalled();
  });
});
