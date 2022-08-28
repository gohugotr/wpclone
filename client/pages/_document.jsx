import { Html, Head, Main, NextScript } from 'next/document'

const Document = ({ theme }) => {
  return (
    <Html>
      {/* <Head>
        <link rel='stylesheet' href={`/css/${theme}.css`} />
      </Head> */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
