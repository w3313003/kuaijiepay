const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
    chainWebpack: config => {
        config.module
            .rule("ts")
            .use("ts-loader")
            .loader("ts-loader")
            .options({
                transpileOnly: true,
                getCustomTransformers: () => ({
                    before: [
                        tsImportPluginFactory({
                            libraryName: "vant",
                            libraryDirectory: "es",
                            style: true
                        })
                    ]
                }),
                compilerOptions: {
                    module: "es2015"
                }
            });
    },

}

