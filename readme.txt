技术栈
	react               Vue
	redux               vuex
	react-router        vue-router

	项目构建
	facebook官方脚手架
	create-react-app    vue-cli
	node >=6
	npm 5.2+

	npx create-react-app my-app
	vd my-app
	npm start

	数据mock

	sass css3
  cnpm install --save node-sass-chokidar
  package.json配置
  "build-css": "node-sass-chokidar src/ -o src/",
  "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",

  cnpm install --save npm-run-all
  修改package.json配置
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build-js": "react-scripts build",
  "build": "npm-run-all build-css build-js",


	canvas

	eslint 编码规范
	cnpm install eslint --save-dev
	配置.eslint和.eslintignore
	sublime安装 Sublime​Linter 和 SublimeLinter-contrib-eslint插件

	editorConfig  editorconfig.org
	配置 .editorconfig 参考facebook的react
  sublime 安装EditorConfig 插件

	编写测试 Jest

	项目发布上线

	create react app



