import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mercy foundation</title>
        <meta name="description" content="Mercy foundation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="menu">
          <a href="#">
            <span className="s1"></span>
            <span className="s2"></span>
            <span className="s3"></span>
          </a>
        </div>
        <h1>
          <span>Coming </span>Soon...
        </h1>
      </div>
    </div>
  );
}
