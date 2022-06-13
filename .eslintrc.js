module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {
        // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        // Best Practices
        eqeqeq: "warn",
        "no-invalid-this": "warn",
        "no-return-assign": "warn",
        "no-unused-expressions": ["warn", { allowTernary: true }],
        "no-useless-concat": "warn",
        "no-useless-return": "warn",

        // Variable
        "init-declarations": "warn",
        "no-use-before-define": "warn",

        // Stylistic Issues
        "array-bracket-newline": ["warn", { multiline: true, minItems: null }],
        "array-bracket-spacing": "warn",
        "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
        "block-spacing": "warn",
        "comma-dangle": "warn",
        "comma-spacing": "warn",
        "comma-style": "warn",
        "computed-property-spacing": "warn",
        "func-call-spacing": "warn",
        "implicit-arrow-linebreak": ["warn", "beside"],
        indent: ["warn", 2],
        "keyword-spacing": "warn",
        "multiline-ternary": ["warn", "never"],
        "no-lonely-if": "warn",
        "no-mixed-operators": "warn",
        "no-multiple-empty-lines": ["warn", { max: 2, maxEOF: 1 }],
        "no-tabs": "warn",
        "no-unneeded-ternary": "warn",
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": "warn",
        "object-property-newline": [
            "warn",
            { allowAllPropertiesOnSameLine: true },
        ],
        "quote-props": ["warn", "consistent"],
        quotes: ["warn", "single"],
        semi: ["warn", "never"],
        "semi-spacing": "warn",
        "space-before-blocks": "warn",
        "space-before-function-paren": "warn",
        "space-in-parens": "warn",
        "space-infix-ops": "warn",
        "space-unary-ops": "warn",

    // ES6
    'arrow-spacing': 'warn',
    'no-confusing-arrow': 'warn',
    'no-duplicate-imports': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    // 'prefer-const': 'warn',
    'prefer-template': 'warn',

        // Vue
        "vue/html-quotes": ["warn", "double"],
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
    },
};
