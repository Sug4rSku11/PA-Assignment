import Head from 'next/head';
import Link from 'next/link';

export default function Reflection() {
    return(
        <>
        <Head>
        <title>Reflection</title>
        </Head>
        
        <body className='container'>
        <button className='home-btn'><Link href='/'>Home</Link></button>
            <h4>Reflection on Past Experience:</h4>
            <ol type='a'>
                <li>I&aposm looking for a postition where I can have the opportunity
                    to use my communication and technical skills. As a customer service 
                    representative and technical support speacialist, I would be
                     able to apply my years of experience by engaging with customers
                     and collaborating with other teams. I can also use my knowledge of 
                     coding languages to assist customers with any questions they may have. </li>
                <li>The technical article that left the biggest positive impression
                    is <a href='https://www.ifixit.com/News/61140/what-is-right-to-repair'>
                        What is Right to Repair</a> by iFixit.com. As a consumer of
                        many different electronics, I like to take apart some of them to clean 
                        them or upgrade components. I believe consumers have the right
                        to open their electronics and make repairs as necessary. 
                </li>
            </ol>
        </body>
        </>
    ) ;
}