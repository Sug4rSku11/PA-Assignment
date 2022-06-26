import Link from 'next/link';
import Head from 'next/head';

export default function Recommendations(){
    return(
        <>
        <Head>
            <title>Recommendations</title>
            
        </Head>
        
        <body className='container'>
        <Link href='/'>Home</Link>
        </body>
        </>
    );
}