import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UsersDetailProps {
  user: User;
}

export default function UserDetail(props: UsersDetailProps) {
  const { user } = props;

  return (
    <Layout pageTitle="Detail User">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respons = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await respons.json();

  const paths = dataUsers.map((user: User) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: String;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;

  const respons = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await respons.json();

  return {
    props: {
      user,
    },
  };
}
