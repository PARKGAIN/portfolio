const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    pwa: {
        runtimeCaching,
        dest: 'public',
    },
}

const buildConfig = (_phase) => {
    const plugins = [withPWA]
    const config = plugins.reduce((acc, next) => next(acc), {
        ...nextConfig,
    })
    return config
}

module.exports = buildConfig
