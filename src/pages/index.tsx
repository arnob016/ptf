import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arnob Dey | Personal Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#205772] to-[#2879a1]">
        <div className="w-3/4 h-3/4 border border-white"></div>
      </main>
    </>
  );
}
