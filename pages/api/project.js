export default function handler(req, res) {
    if(req.method === "GET") {
        console.log(req.body);
        res.status(200).send("test");
    } else {
        res.status(405).json("Method Not Allowed");
    }
}