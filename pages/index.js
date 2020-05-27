import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Job trak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link passHref href="/api"><a>Link to api</a></Link>
      </main>
    </Layout>
  )
}
