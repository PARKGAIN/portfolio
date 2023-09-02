export const sendChat = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;UTF-8",
        "X-NCP-CHATBOT_SIGNATURE": process.env.NEXT_PUBLIC_SECRET as string,
      },
    };
  
    const response = await fetch(process.env.NEXT_PUBLIC_BASEURL as string, requestOptions);
    return await response.json();
  };