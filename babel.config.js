module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hoc': './src/hoc',
          '@screens': './src/screens',
          '@setup': './src/setup',
          '@utils': './src/utils',
          '@validationSchema': './src/validationSchema',
        },
      },
    ],
  ],
};
