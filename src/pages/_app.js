import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "../theme/default";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "JetBrainsMono";
    font-weight: 500;
    src:  url("/fonts/jetbrains-mono/JetBrainsMono-Medium.woff2") format("woff2"),
          url("/fonts/jetbrains-mono/JetBrainsMono-Medium.woff") format("woff"),
          url("/fonts/jetbrains-mono/JetBrainsMono-Medium.eot") format("eot");
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
