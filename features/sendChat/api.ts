export const sendChat = async (userId: string, details: string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;UTF-8',
            'X-NCP-CHATBOT_SIGNATURE': process.env.NEXT_PUBLIC_SECRET as string,
        },
        body: JSON.stringify({
            userId: userId,
            timestamp: new Date().getTime(),
            content: [
                {
                    type: 'text',
                    data: {
                        details: details,
                    },
                },
            ],
            event: 'send',
        }),
    }

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}` as string,
        requestOptions
    )
    return await response.json()
}
