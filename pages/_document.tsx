import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="OJE" />
          <meta property="og:description" content="Der Name ist Programm - bereits seit über 4 1/2 Jahrzehnten" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://oje.ooo/" />
          <meta property="og:image" content="https://oje.ooo/assets/imgages/ojeback.png" />
      
          <meta name="theme-color" content="#3e1d58" />
          <meta name="description" content="Eine TH OJE Webpräsenz" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}