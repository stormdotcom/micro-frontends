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
                new ModuleFederationPlugin({
                    name: 'landingPage',
                    filename: 'static/runtime/remoteEntry.js',
                    exposes: {
                        "./HeaderComponent":
                            "./src/components/Project/Header.js",
                        "./Footer":
                            "./src/components/Project/Footer.js",
                    },
                    // remotes: {
                    //     mainApp: "mainApp@http://localhost:9000/remoteEntry.js"
                    // },

                    shared: {
                        react: {
                            singleton: true,
                            requiredVersion: false,
                        },
                        'react-dom': {
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                })
            );
        }
        return config;
    },
};

export default nextConfig;
