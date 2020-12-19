const nextTranslate = require("next-translate");

module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 64],
    domains: ["images.unsplash.com", "images.pexels.com", "images.ctfassets.net", "placekitten.com", "placebear.com", "picsum.photos", "www.stevensegallery.com"],
    path: "/_next/image",
    loader: "default",
  },
  ...nextTranslate(),
};
