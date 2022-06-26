import Link from 'next/link';
import Head from 'next/head';

export default function Practice(){
    return(
        <>
        <Head>
            <title>Practice Emails</title>
            
        </Head>
        
        <body className='container'>
        <Link  href='/'>Home</Link>
        <h2>Practice Email Responses</h2>
        <div className='email'>
           <p>To: Joe Fox</p>
           <p>Subject: Sales Lead for barnesandnoble.com</p>
           <p>From: Vercel</p>
           <p>Dear Joe Fox, </p>
        </div>
        <div className='email'>
           <p>To: Melissa Wright</p>
           <p>Subject: Sales Lead for hipcamp.com</p>
           <p>From: Vercel</p>
           <p></p>
        </div>
        </body>
        </>
    );
}