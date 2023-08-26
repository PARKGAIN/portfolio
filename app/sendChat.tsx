async function sendChat() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include" as RequestCredentials,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}`, requestOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await sendChat();

  return <main></main>;
}
