module.exports = {
    "env": {
        browser: true,
        es2021: true
    },
    "extends": [
        "standard" // recomened
    ],
    "parserOptions": {
        ecmaVersion: 12,
        sourceType: "module"
    },
    "rules": {
        "semi": ["off", "always"], // warn error off
        "quotes": ["off", "single"],
        "indent": ["error", 4],
        "quote-props": ["error", "consistent-as-needed", { keywords: true, numbers: true }],
        "camelcase": ["off"]
    }
};