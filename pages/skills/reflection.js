import Head from 'next/head';
import Link from 'next/link';

export default function Reflection() {
    return(
        <>
        <Head>
        <title>Reflection</title>
        </Head>
        <Link href='/'>Home</Link>
        <body>
            <h4>Reflection on Past Experience:</h4>
            <ol type='a'>
                <li>In my next role, I'm looking to learn...</li>
                <li>technical article left the biggest positive impression</li>
            </ol>
        </body>
        </>
    ) ;
}