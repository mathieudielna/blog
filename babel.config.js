const { UseBuiltInsOption } = require("@babel/preset-env/lib/options");

module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                UseBuiltIns: "usage",
                corejs: 3,
                debug: true,
                targets: ">30%, not dead"
            }
        ]
    ]
};