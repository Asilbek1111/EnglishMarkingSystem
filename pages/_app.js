import "../styles/globals.css";
import "swiper/swiper.scss";
import '../styles/message.css'
import {ProviderContext} from "../contexts/context"


function MyApp({ Component, pageProps }) {
  return(
  <ProviderContext>
    <Component {...pageProps} />;
  </ProviderContext>
  )
}




export default MyApp;
