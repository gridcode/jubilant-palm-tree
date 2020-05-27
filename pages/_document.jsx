import Document, {Html, Head, NextScript, Main} from 'next/document'
export default class _document extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </Html>
    )
  }
}
