/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/all-projects",
        permanent: true,
      },
      {
        source: "/writing/dsa",
        destination: "https://dsa.dankibiwott.com/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/DAN-BIWOTT",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/dankibiwott/",
        permanent: true,
      },
      {
        source: "/undergrad-thesis",
        destination:
          "https://drive.google.com/file/d/1t95E0oJWrLI9KoxyiY9bYehc0wOcvo-3/view",
        permanent: true,
      },
      {
        source: "/undergrad-thesis-code",
        destination:
          "https://drive.google.com/file/d/1HfgV--iOkd3073NwQke1ETPY6omd0bmB/view",
        permanent: true,
      },
      {
        source: "/experiments/0001",
        destination: "https://mathew-bushuru-chess.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
