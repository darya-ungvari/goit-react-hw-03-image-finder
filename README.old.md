npx create-react-app .

cd 'my-app'

npm start

добавляем хаски, линтер и приттиер npm install --save-dev prettier husky
lint-staged

в корне проекта создаем файл .huskyrc и в нем: { "hooks": { "pre-commit":
"lint-staged" } }

в файле .lintstagedrc: { "src//_.{json,css,scss,md}": ["prettier --write"],
"src//_.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] }

в файле .prettierrc.json: { "printWidth": 80, "tabWidth": 2, "useTabs": false,
"semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing":
true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always"
}

Ссылки на документацию по интеграции плагинов в популярные редакторы.

Prettier editor integration ESLint editor integration Настройки VSCode Для
комфортной работы, после установки плагинов, нужно добавить несколько настроек
редактора для автосохранения и форматирования файлов.

{ "files.autoSave": "onFocusChange", "editor.formatOnSave": true,
"editor.codeActionsOnSave": { "source.fixAll.eslint": true } }

ABsolute import: create file "jsconfig.json" in file: { "compilerOptions": {
"baseUrl": "src" }, "include": ["src"] }

in file index.css: @import-normalize; /_ bring in normalize.css styles _/

or

use modern-normalize: in file index.js @import
'modern-normalize/modern-normalize.css';

sass(!!only fo mixins, pleceholders etc): npm install node-sass -save

DEPLOY

npm run build

in package.json add: "homepage":
"https://darya-ungvari.github.io/goit-react-hw-03-phonebook",

npm run build

npm install --save gh-pages

Add the following scripts in your package.json: "scripts": { "predeploy": "npm
run build", "deploy": "gh-pages -d build", }

npm run deploy

# goit-react-hw-03-image-finder
