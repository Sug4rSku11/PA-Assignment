import Link from 'next/link';
import Head from 'next/head';

export default function Recommendations(){
    return(
        <>
        <Head>
            <title>Recommendations</title>
            
        </Head>
        
        <body className='container'>
        <button className='home-btn'><Link href='/'>Home</Link></button>
        <div>
            <ol>
                <li>
                    Mom and Pop business: 
                </li>
                <li>
                    NFT:
                </li>
                <li>
                    Marketing Page for Nintendo: 
                </li>
            </ol>
        </div>
        </body>
        </>
    );
}