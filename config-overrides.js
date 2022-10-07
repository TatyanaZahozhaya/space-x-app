const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@home': path.resolve(__dirname, 'src/home'),
            '@capsule': path.resolve(__dirname, 'src/capsule'),
            '@mission': path.resolve(__dirname, 'src/mission'),
            '@rocket': path.resolve(__dirname, 'src/rocket'),
            '@page_layout': path.resolve(__dirname, 'src/page_layout'),
            '@page_not_found': path.resolve(__dirname, 'src/page_not_found'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
    };

    return config;
};
