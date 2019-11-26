module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          app: './app',
          utils: './app/utils',
          components: './app/components',
          containers: './app/containers',
          globalStyles: './app/global-styles'
        }
      }
    ]
  ]
}
