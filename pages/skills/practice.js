import Link from 'next/link';
import Head from 'next/head';

export default function Practice(){
    return(
        <>
        <Head>
            <title>Practice Emails</title>
            
        </Head>
        
        <div className='container'>
        <button className='home-btn'><Link href='/'>Home</Link></button>
        <h2>Practice Email Responses</h2>
        <div className='email'>
           <p>To: Joe Fox</p>
           <p>Subject: Sales Lead for barnesandnoble.com</p>
           <p>From: Vercel</p>
           <p>Dear Joe Fox,<br></br><br></br>
                Thank you for considering Vercel to host your new site! We are 
                are more than happy to assist you with more information regarding our 
                Enterprise plan. Our Enterprise plan is for teams looking for the 
                freedom to iterate, instantly deploy, scale, and securely deliver
                exceptional experiences to their customers. <br></br><br></br> This includes website 
                security and support from code to production. This plan is suited to 
                 your business needs with custom bandwidth, custom Serverless Function 
                 Execution, custom Concurrent Builds and much more. <br></br><br></br>
                 I would like to set up a time to speak in person and go over all
                 features that would be available to you. <br></br><br></br>
                 Looking forward to speaking with you.<br></br><br></br>
                 Desiree Garcia<br></br>
                 Vercel Product Advocate</p>
        </div>
        <div className='email'>
           <p>To: Melissa Wright</p>
           <p>Subject: Sales Lead for hipcamp.com</p>
           <p>From: Vercel</p>
           <p>Dear Melissa Wright,<br></br><br></br>
             We are excited to have you consider Vercel for your website needs! We will 
             be more than happy to assist you with information regarding which plan
             would better suit your needs.<br></br>
             Our Pro plan is $20/month per member and up to 10 members. It comes with 
             unlimited previewers, unlimited domains per project and 3,000 Deployments
             per day. The Bandwidth is 1TB, 1,000 GB-hours of Serverless Function Execution
             and 24,000 minutes Build Execution. It has HTTPS/SSL by default, DDoS Mitigation
              and email support.<br></br>
             Our Enterprise plan includes custom team members. It comes with unlimited
             previewers, unlimited domains per Project, custom Deployments per day, custom
             Bandwidth, custom Serverless Function Execution, and custom Buil Execution. This
             plan also has HTTPS/SSL by default, DDoS Mitigation and also includes Password
             Protected Previews, SAML SSO and 2FA, SSO Protected Previews and Custom Firewall Rules.
             This plan includs much more support than the Pro version.<br></br>
             I would like to set up a time to speak in person at your earliest conveniece to go
             over plan features and discuss what fits your needs.<br></br><br></br>
             Looking forward to speaking with you.<br></br><br></br>
             Desiree Garcia<br></br>
             Vercel Product Advocate </p>
        </div>
        </div>
        </>
    );
}