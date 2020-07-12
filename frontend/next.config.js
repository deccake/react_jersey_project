let currentDate = new Date();
let buildId =
  currentDate.getDate() +
  "_" +
  currentDate.getMonth() +
  "_" +
  currentDate.getHours() +
  "_" +
  currentDate.getMinutes();
module.exports = {
  generateBuildId: async () => {
    return buildId;
  }
};

const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withCSS(
  withImages(
    withFonts({
      webpack(config, options) {
        return config;
      }
    })
  )
);
