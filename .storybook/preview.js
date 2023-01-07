import { addDecorator } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../src/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: 0.25s;
    color: #000;
  }
`;

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));
