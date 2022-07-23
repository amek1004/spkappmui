module.exports = {
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
      },
    ];
  },
};

const { withSuperjson } = require("next-superjson");

module.exports = withSuperjson()({});
