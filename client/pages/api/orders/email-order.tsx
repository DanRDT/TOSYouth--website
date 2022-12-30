import nodemailer from 'nodemailer'
import getHTML from '../../../components/tempSolution/functions/getHTML'

export default async function handler(req, res) {  
    
    const orderReq = req.body


    const transporter = nodemailer.createTransport({
        "service": "hotmail",
        "auth": {
            "user": process.env.EMAIL_USERNAME,
            "pass": process.env.EMAIL_PASSWORD
        }
    })

    const orderDetails = getHTML(orderReq)


    const internalEmail = {
        "from": `TOSY Youth <${process.env.EMAIL_USERNAME}>`,
        "to": process.env.EMAIL_USERNAME,
        "subject": `Order for ${orderReq.customer_info.first_name} ${orderReq.customer_info.last_name}`,
        "html": orderDetails
    }

    const customerEmail = {
        "from": `TOSY Youth <${process.env.EMAIL_USERNAME}>`,
        "to": orderReq.customer_info.email,
        "subject": `Order for ${orderReq.customer_info.first_name} ${orderReq.customer_info.last_name}`,
        "html": orderDetails
    }
    

    await transporter.sendMail(internalEmail, (err, info) => {
        if (err) {
            console.log(err);
            res.status(200).json({"status": "failed"});
            return
        }
        console.log(`Sent: ${info.response}`);

        transporter.sendMail(customerEmail, (err, info) => {
            if (err) {
                console.log(err);
                res.status(200).json({"status": "failed"});
                return
            }
            console.log(`Sent: ${info.response}`);
            res.status(200).json({"status": "success"});
            
        })
    })
    


  
}