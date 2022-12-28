import nodemailer from 'nodemailer'

export default async function handler(req, res) {  
    
    const orderReq = req.body


    const transporter = nodemailer.createTransport({
        "service": "hotmail",
        "auth": {
            "user": process.env.EMAIL_USERNAME,
            "pass": process.env.EMAIL_PASSWORD
        }
    })

    const orderDetails = 
`
<div> 
    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/merch/items/${orderReq.quantity}" style="color: #000;text-decoration: none;">
        <h4 >${orderReq.name}</h4>
    </a>
    <p>$${orderReq.price}</p>
    <p >Size: ${orderReq.size}</p>
    <p >Color: ${orderReq.color}</p>
    <p >Quantity: ${orderReq.quantity}</p>
</div>
`
    


    const options = {
        "from": process.env.EMAIL_USERNAME,
        "to": process.env.TEST_EMAIL_RECIPIENT,
        "subject": `Order: ${orderReq.id}`,
        "html": orderDetails
    }
    

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(`Sent: ${info.response}`);
        
    })


  
    await res.status(200).json({"test": "test"});
}
