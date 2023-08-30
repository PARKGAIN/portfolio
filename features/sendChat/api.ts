export const sendChat = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;UTF-8",
        "X-NCP-CHATBOT_SIGNATURE": process.env.SECRET as string,
      },
    };
  
    const response = await fetch(process.env.BASEURL as string, requestOptions);
    const data = await response.json();
  };