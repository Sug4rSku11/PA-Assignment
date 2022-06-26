import Head from 'next/head';
import Link from 'next/link';

export default function Reflection() {
    return(
        <>
        <Head>
        <title>Reflection</title>
        </Head>
        
        <body className='container'>
        <Link href='/'>Home</Link>
            <h4>Reflection on Past Experience:</h4>
            <ol type='a'>
                <li>I'm looking for a postition where I can have the opportunity
                    to use my communication and technical skills. As a customer service 
                    representative and technical support speacialist, I would be
                     able to apply my years of experience as a successful product 
                     advocate. </li>
                <li>Technical article left the biggest positive impression</li>
            </ol>
        </body>
        </>
    ) ;
}