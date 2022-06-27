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
                    Mom and Pop business: I would value the 1TB of bandwidth, 3,000
                    deployments per day, security and email support from Vercel.
                </li>
                <li>
                    NFT: I would value the security, custom deploments per day, team
                    collaboration, custom bandwidth and support from Vercel.
                </li>
                <li>
                    Marketing Page for Nintendo: I would value dedicated infrastructure
                    and scalable resources to keep up with customer demand. I would also
                    value the tools to accelerate team development, security, and support 
                    provided by Vercel.
                </li>
            </ol>
        </div>
        </body>
        </>
    );
}