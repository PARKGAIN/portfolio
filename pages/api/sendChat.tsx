export default function sendChat({ data }: any) {
  return <div>{data}</div>;
}

export async function getServerSideProps() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;UTF-8",
      "X-NCP-CHATBOT_SIGNATURE": `${process.env.SECRET}`,
    },
  };
  const res = await fetch(process.env.BASEURL as string, requestOptions);
  console.log(process.env.BASEURL);

  const data = await res.json();
  return { props: { data } };
}
