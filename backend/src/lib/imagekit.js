import Imagekit, { toFile } from "@imagekit/nodejs";

const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

function hasImagekitConfig() {
  return Boolean(process.env.IMAGEKIT_PRIVATE_KEY);
}

function createFileName(orignalName = "upload") {
  const safeName = orignalName.replace(/[^a-zA-Z0-9]/g, "_");

  return `chat-${Date.now()}-${safeName}`;
}

async function uploadChatMedia(file) {
  const fileName = createFileName(file.originalname);

  const result = await imagekit.upload({
    file: await toFile(file.buffer, fileName, { type: file.mimetype }),
    fileName,
    folder: "/chat-media",
  });

  return result.url;
}

export { hasImagekitConfig, uploadChatMedia };
