import "../styles/globals.css";
import "../styles/styles.css";

import MainContainer from "../components/MainContainer";

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}

export default MyApp;
