import { Dimensions, Platform } from "react-native";

const base_width = 414;
const base_height = 736;

const screen_width = Dimensions.get("window").width
const screen_height = Dimensions.get("window").height

const deviceWidth = Platform.OS == 'web' && screen_width > 500 ? base_width : screen_width;
const deviceHeight = Platform.OS == 'web' && screen_height > 1000 ? base_height : screen_height;
//Platform.OS == 'web' && screen_height > base_height ? base_height : screen_height;
// the zeplin screens are provided for a screen resolution of 375 x 812 px
// to make the screen layout equivalent on all screen sizes, we use the original pixel size provided in zeplin
// the sizes are scaled according to the device specific width x height using a normalization factor
// example: {height: 30 * window.normH, width: 100 * window.normW}

export default {
  window: {
    deviceWidth,
    deviceHeight,
    normW: Math.fround(deviceWidth / base_width),
    normH: Math.fround(deviceHeight / base_height),
    toNormW: (width: number, dW: number = deviceWidth) => {
      return (width * dW) / base_width;
    },
    toNormH: (height: number, dH: number = deviceHeight) => {
      return (height * dH) / base_height;
    },
  },
  isSmallDevice: deviceWidth < 375,
};
