import webpack from 'webpack';
const { container } = webpack;
const { ModuleFederationPlugin } = container;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.plugins.push(
                // new ModuleFederationPlugin({
                //     name: 'landing',
                //     filename: 'static/runtime/remoteEntry.js',
                //     remotes: {
                //         mainApp: "mainApp@http://localhost:9000/remoteEntry.js"
                //     },

                //     shared: {
                //         react: {
                //             singleton: true,
                //             requiredVersion: false,
                //         },
                //         'react-dom': {
                //             singleton: true,
                //             requiredVersion: false,
                //         },
                //     },
                // })
            );
        }
        return config;
    },
};

export default nextConfig;
