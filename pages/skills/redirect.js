import Head from 'next/head';

export default function Redirect(){
    return(
        <>
        <Head>
            <title>Redirect</title>   
        </Head>
        <div className='container'>
            <h2>This Page Redirects to Vercel.com</h2>
        </div>
        </>
    );
}