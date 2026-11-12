const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: process.env.X_API_KEY,
  appSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_SECRET,
});

async function main() {
  await client.v2.tweet({ text: "Hi" });
  console.log("Text-only test succeeded!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
