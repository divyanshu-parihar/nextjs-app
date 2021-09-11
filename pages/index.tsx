import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = ({data}) => {
  const recipies = data.recipies;

  return (
    <div>
      <Head>
        <title>WebDev NewZ</title>
        <meta name="Keywords" content="web development"></meta>
      </Head>
      <h1>Welcome to next!</h1>
      <p><Link href='/about'> Want to know about us!</Link></p>
    </div>
  )
}
export function getStaticProps() {
  return {
    props: {
      data: {
        recipies: [{ 'title': 'pineapple-smothies' }, { 'title': 'chocolate-smothies' }]
      }
    }
  }
}
export default Home
