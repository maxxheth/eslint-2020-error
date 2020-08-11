# ES2020 Error Reproduction with ESLint VS plugin

Note: This project contains a locally installed version of ESLint and a ESLint config file.

Whenever I save changes in test-error.js with the ESLint extension enabled, it returns the following error:

`ESLint: /var/www/eslint-2020-error/.eslintrc.js: Environment key "es2020" is unknown . Please see the 'ESLint' output channel for details.`

To determine whether this was an error within ESLint itself, I ran "eslint test-error.js". ESLint ran as expected and returned no errors.
