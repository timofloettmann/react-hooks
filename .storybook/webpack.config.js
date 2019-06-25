const path = require('path');
const fs = require('fs');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('babel-loader'),
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    include: [path.resolve(__dirname, '../src')],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
          prettierConfig: JSON.parse(
            fs.readFileSync(path.resolve(__dirname, '../.prettierrc'))
          ),
        },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(path.resolve(__dirname, '../'));
  return config;
};
