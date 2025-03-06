import fetch from "node-fetch";

export default async function handler(req, res) {
    const { address } = req.query;
    if (!address) {
        return res.status(400).json({ error: "缺少钱包地址参数" });
    }

    const apiUrl = `https://claim.elixir.xyz/backend/wallet/eligibility?address=${address}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "API 请求失败", details: error.message });
    }
}
