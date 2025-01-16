import React from "react";

const Page = () => {
  return (
    <div>
      <head>
        <title>Hotspot Mobiles | Blog</title>
        <meta
          name="description"
          content="Latest updates and tips on smartphones, repairs, and accessories."
        />
      </head>

      <header
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h1>Hotspot Mobiles Blog</h1>
        <p>Your hub for the latest in smartphones and mobile technology.</p>
      </header>

      <main style={{ padding: "20px" }}>
        <section style={{ marginBottom: "40px" }}>
          <h2>Top 5 Latest Smartphones to Buy in 2024</h2>
          <p>📅 January 10, 2024 • By Hotspot Mobiles</p>
          <p>
            Discover the top 5 smartphones that are redefining technology in
            2024. From blazing-fast processors to stunning cameras, explore the
            future of mobile innovation.
          </p>
          <a href="/blog/latest-smartphones-2024" style={{ color: "#0070f3" }}>
            Read More →
          </a>
        </section>

        <section>
          <h2>Essential Mobile Maintenance Tips for Longer Lifespan</h2>
          <p>📅 January 5, 2024 • By Hotspot Mobiles</p>
          <p>
            Keep your smartphone running like new with these essential
            maintenance tips. Learn how to optimize battery life, storage, and
            performance.
          </p>
          <a href="/blog/mobile-maintenance-tips" style={{ color: "#0070f3" }}>
            Read More →
          </a>
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <p>© 2024 Hotspot Mobiles. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
