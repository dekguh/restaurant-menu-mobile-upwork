import 'react-multi-carousel/lib/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../components/utils/redux/Store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default wrapper.withRedux(MyApp)
