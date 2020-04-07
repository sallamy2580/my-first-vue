module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import '@/scss/variables.scss';`
            }
        }
    },
    lintOnSave: false,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    }
}
