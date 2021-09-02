module.exports = [
  {
    path: "packages/orbit-components/es/**/*.js",
    limit: "224 kB",
    ignore: ["react", "react-dom", `${__dirname}/packages/orbit-components/es/index.js`],
  },
];
