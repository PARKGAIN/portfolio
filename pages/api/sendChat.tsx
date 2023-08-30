export async function getServerSideProps() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;UTF-8",
      "X-NCP-CHATBOT_SIGNATURE": process.env.SECRET as string,
    },
  };

  const res = await fetch(process.env.BASEURL as string, requestOptions);
  const data = await res.json();

  return { props: { data } };
}

const PageComponent = ({ data }: any) => {
  return <div>{data}</div>;
};

export default PageComponent;
