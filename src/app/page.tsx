import Head from 'next/head';
import GithubForm from '@/components/GithubForm';

export default function Home() {

  return (
    <div>
      <Head> 
        <title>Github Users</title>
      </Head>

      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Insert Usernames</h1>
        <GithubForm />
      </main>
    </div>
  );
}
