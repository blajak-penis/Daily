const fs = require("fs");
const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: process.env.X_API_KEY,
  appSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_SECRET,
});

async function main() {
  const imagePath = "./image.png";

  if (!fs.existsSync(imagePath)) {
    throw new Error("image.png was not found in the repository root.");
  }

  const mediaId = await client.v1.uploadMedia(imagePath);

  await client.v2.tweet({
    text: "Hi",
    media: { media_ids: [mediaId] },
  });

  console.log("Posted: Hi + image.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
