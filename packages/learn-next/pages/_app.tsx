import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('my app') // 打印能够在terminal中显示

  /**
   * MyApp是在所有的页面中都渲染的
   * Component 就是路由中渲染的组件
   * 访问 /about
   * 那么Component就是pages下的about.tsx
   */

  return <Component {...pageProps} />
}

export default MyApp
