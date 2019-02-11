module.exports = {
    "env": {
        "browser": true,
        "node": true,
	"es6":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style":  [
		"warn",
		"windows"
	],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};
