module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        node: true,
        es6: true,
        "jest/globals": true,
    },
    globals: {},
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:flowtype/recommended",
        "plugin:jest/recommended",
        "prettier",
    ],
    plugins: ["react", "flowtype", "jest"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    rules: {
        "new-cap": 0,
        "no-console": 1,
        "no-unused-vars": [1, { args: "none" }],
        "flowtype/generic-spacing": 0,
        "react/no-unused-prop-types": 1,
    },
};
