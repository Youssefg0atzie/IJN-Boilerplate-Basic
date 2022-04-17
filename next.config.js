// If such a type existed...

const path = require('path')
const plugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  webpack(config, { webpack, isServer }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    )

    config.resolve.alias['@app'] = path.join(__dirname, 'app')
    config.resolve.alias['@config'] = path.join(__dirname, 'app/config')
    config.resolve.alias['@auth'] = path.join(__dirname, 'app/auth')
    config.resolve.alias['contents'] = path.join(
      __dirname,
      'resources/contents'
    )
    config.resolve.alias['views'] = path.join(__dirname, 'resources/views')
    config.resolve.alias['layouts'] = path.join(
      __dirname,
      'resources/views/layouts'
    )
    config.resolve.alias['pages'] = path.join(
      __dirname,
      'resources/views/pages'
    )
    config.resolve.alias['@models'] = path.join(__dirname, 'app/models')
    config.resolve.alias['@database'] = path.join(
      __dirname,
      'app/models/database'
    )
    config.resolve.alias['@libs'] = path.join(__dirname, 'libs')
    config.resolve.alias['@contexts'] = path.join(__dirname, 'app/contexts')
    config.resolve.alias['@store'] = path.join(__dirname, 'app/store')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public',
    runtimeCaching,
  },
}

// const withTM = require('next-transpile-modules')(['three', '@react-three/drei'])

module.exports = plugins([withPWA], nextConfig)
