// Test generated by RoostGPT for test springMongoDB using AI Type Open AI and AI Model gpt-4

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Login from './components/Login';

jest.mock('./components/Login', () => {
  return function DummyLogin() {
    return (
      <div data-testid="child">Login Component</div>
    );
  };
});

describe('App', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = render(<App />);
  });

  test('renders app container', () => {
    const containerElement = appComponent.getByRole('parent');
    expect(containerElement).toBeInTheDocument();
  });

  test('renders title correctly', () => {
    const titleElement = appComponent.getByText(/This is React Testing Tutorial/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Login component', () => {
    const loginElement = appComponent.getByTestId('child');
    expect(loginElement).toBeInTheDocument();
  });
});
