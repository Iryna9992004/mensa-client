import '../styles/global.scss'
import { wrapper } from '../app/GlobalRedux/store'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

export default wrapper.withRedux(MyApp)