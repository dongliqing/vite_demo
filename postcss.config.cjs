module.exports = {
    plugins: {
        "postcss-pxtorem": {
            rootValue: 37.5,
            propList: ["*"]
        }
    },
    tailwindcss: {},
    autoprefix: {
        overrideBrowserslist: ["Chrome > 31", "last 2 versions"], //所有主流浏览器最近两个版本
        grid: true
    },
    cssnano: {}
}