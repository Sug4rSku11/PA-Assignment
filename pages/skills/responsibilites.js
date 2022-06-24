import Link from 'next/link';
import Head from 'next/head';

export default function Responsibilites(){
    return(
        <>
        <Head>
            <title>Responsibilities</title>
        </Head>

        <Link href='/'>Home</Link>
        <h2>Things a Product Advocate Might Do</h2>
        <div>
        <h4>Things I would be most interested in doing:</h4>
        <ol>
            <li>Organize, Schedule & book meetings for Account Executives with prospects</li>
            <li>Work with the Team to make sure email tone is consistent with the Vercel brand</li>
            <li>Attend weekly enablement meetings to level up your product and sales knowledge</li>
        </ol>
        </div>
        <div>
        <h4>Things I would be least interested in doing:</h4>
        <ol>
            <li>Hop on a Zoom call to do a product demo</li>
            <li>Research the headquarters & ownership of a company to dertermine who to route to</li>
            <li>Analyze sales inquiries to help spot trends in needs</li>
        </ol>
        </div>
        </>
    );
}