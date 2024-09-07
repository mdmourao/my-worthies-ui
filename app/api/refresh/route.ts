export async function POST(req: Request) {
    const resp = await fetch(`http://localhost:7777/refresh`, { method: "POST", headers: req.headers })
    try {
        const data = await resp.json()
        return Response.json({ data }, { status: resp.status })
    } catch (e) {
        return Response.error
    }
}