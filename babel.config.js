module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          utils: './app/utils',
          components: './app/components',
          containers: './app/containers',
          globalStyles: './app/global-styles'
        }
      }
    ]
  ]
}
