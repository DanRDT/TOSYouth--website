
export default async function handler(req, res) {
    // const printifyRes = await fetch("https://api.printify.com/v1/shops/5414762/products.json", {
    //     method: 'GET',
    //     headers: {"Authorization": `Bearer ${process.env.PRINTIFY_TOKEN_READ_ONLY}`}
    // })
    // const data = await printifyRes.json()
    // res.status(200).json(data);
    res.status(200).json({"status": "denied"});
}