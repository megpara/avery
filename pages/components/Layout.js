import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Avery Ellis</title>
        <meta name="description" content="Avery Ellis" />
        <link rel="icon" href="/favicon3.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      {children}
    </div>
  );
}
