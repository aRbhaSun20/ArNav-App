module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
// const path = require('path');
// const pak = require('../package.json');

// module.exports = {
//   presets:["babel-preset-expo"],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         extensions: ['.tsx', '.ts', '.js', '.json'],
//         alias: {
//           [pak.name]: path.join(__dirname, '..', pak.source),
//         },
//       },
//     ],

//   ]
// };
