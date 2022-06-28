import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import mypic from '../pages/images/mypic.JPG'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desiree Garacia</title>
      </Head>

      <main className={styles.main}>
        <Image className="pic"
                src={mypic}
                width={200} 
                height={250}
                alt="Picture of Desiree Garcia" />
        <h1 className={styles.title}>
          Desiree Garcia - Product Advocate
        </h1>
        <div>
          <ol>
            <li> <Link href='/skills/responsibilites'>
              <a>Things a Product Advocate Might Do</a>
            </Link>
            </li>
            <li><Link href='/skills/reflection'>
              <a>Reflection on Past Experience</a>
            </Link>
            </li>
            <li> 
              <a>Temporary Redirect - /skills/redirect</a>
            </li>
            <li><Link href='/skills/practice'>
            <a>Practice Email Responses</a>
            </Link>
            </li>
            <li>
            <Link href='/skills/recommendations'>
              <a>Personal Recommendations</a>
            </Link>
            </li>
          </ol>
        </div>
        
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
