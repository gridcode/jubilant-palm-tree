import Link from "next/link"
import Layout from "components/Layout"

export default () => {
  return (
    <Layout>
      <Link href="/" passHref><a>Home</a></Link>
      <Link href="/signin" passHref><a>Sign in</a></Link>
      <Link href="/signup" passHref><a>Sign up</a></Link>
    </Layout>
  )
}
