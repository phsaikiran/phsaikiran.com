const path = require("path");

module.exports = {
    style: {
        postcss: {
            plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
            ],
        },
    },
    webpack: {
        alias: {
            api: path.resolve(__dirname, "src/api/"),
            components: path.resolve(__dirname, "src/components/"),
            types: path.resolve(__dirname, "src/types/"),
            images: path.resolve(__dirname, "src/images/"),
            profile: path.resolve(__dirname, "src/components/profile/")
        }
    }
}
