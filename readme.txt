技术栈
	react               Vue
	redux               vuex
	react-router        vue-router


	项目构建 facebook官方脚手架
	create-react-app    vue-cli
  	node >=6
  	npm 5.2+

  	npx create-react-app my-app
  	cd my-app
  	npm start

	数据mock

  canvas

	sass css3
    cnpm install --save-dev node-sass-chokidar
    package.json配置
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",

    npm install -g create-react-app
    create-react-app my-app
    cnpm install sass-loader node-sass --save-dev
    在node_modules/react-scripts/config下找到 webpack.config.dev.js 和webpack.config.prod.js文件，在 exclude 中添加 /.scss$/,
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    package.json配置
    "build-css": "node-sass src/ -o src/",
    "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",
    npm start 和 npm run watch-css同时开启


    cnpm install --save-dev npm-run-all
    修改package.json配置
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",

    reset.css 页面样式重置 简单粗暴
    normalize.css 页面样式做统一的设置

	eslint 编码规范
  	cnpm install eslint --save-dev
  	配置.eslint和.eslintignore
  	sublime安装 Sublime​Linter 和 SublimeLinter-eslint插件

	editorConfig  editorconfig.org
  	配置 .editorconfig 参考facebook的react
    sublime 安装EditorConfig 插件

	编写测试 Jest

	项目发布上线

  查看进程占用
    netstat -ano，列出所有端口的情况
    查看被占用端口对应的PID，输入命令：netstat -aon|findstr "3000",
    继续输入tasklist|findstr  "4304"（PID），回车，查看是哪个进程或者程序占用了1008端口

react  https://reactjs.org/

1.声明式的视图渲染
  <div>{this.state.text}</div>
JSX语法
  渲染逻辑 内聚
  React.createElement('h1', {className:'test', onClick:xxx}, children)
  virtul dom
  渲染出真实dom
事件绑定
  const a = Array.from({length:10},(v,i) => i);
  const text = 'hello world!';
  const isRenderHello = true;
  ReactDOM.render(
    <div className="test" onClick={() => {alert(888)}}>{a.map(i => <p>{isRenderHello && text}</p>)}</div>,
    document.getElementById('root')
  );
2.基于组件的
functional component
  const FuncComponent = (props) => {
    return <div>hello,{props.name}</div>
  }
  ReactDOM.render(
    <FuncComponent name="world" />,
    document.getElementById('root')
  );
class component
  class ClassComponent extends React.Component {
    state = {

    },
    methodA () => {

    },
    lifeCicle...
    render(){
      return <div>hello,{this.props.name}</div>
    }
  }
  ReactDOM.render(
    <ClassComponent name="world" />,
    document.getElementById('root')
  );

3.多平台

4.生命周期
componentWillMount render渲染之前调用 √
componentDidMount  render渲染之后调用 √

componentWillReceiveProps  props发生改变时调用 √
shouldComponentUpdate  组件是否更新 （性能优化，避免不必要的渲染）

componentWillUpdate 不能执行setState
componentDidUpdate   组件更新后调用

componentWillUnmount 组件将被销毁 解绑定时器等

  class ClassComponent extends React.Component {
    state = {
      color:'red'
    }
    componentWillMount = () => {
     this.setState({
       color:'green'
     })
    }
    componentDidMount = () => {
      console.log(document.getElementById("childElement"));
    }
    render(){
      return <div style={{color:this.state.color}}>
        <span id="childElement" />
        hello,{this.props.name}</div>
    }
  }
  ReactDOM.render(
    <ClassComponent name="world" />,
    document.getElementById('root')
  );

5. state props
  const ChildEle = (props) => {
    return <span>{props.age}/{props.color}/{props.name}</span>
  }
  class ClassComponent extends React.Component {
    state = {
      color:'red'
    }
    changeColor = () => {
     this.setState((preState) => ({
       color:preState.color === 'green' ? 'red' : 'green'
     }));
     console.log(this.state);
    }
    render(){
      return <div onClick={this.changeColor} style={{color:this.state.color}}>
        hello,{this.props.name}
        <hr/>
        <ChildEle age="18" color={this.state.color} name={this.props.name}/>
      </div>
    }
  }
  ReactDOM.render(
    <ClassComponent name="world" />,
    document.getElementById('root')
  );

react-router  https://reacttraining.com/
 router dom √
 router native

 npm install react-router-dom

   BrowserRouter
    baidu.com/a/b
   HashRouter
    baidu.com/#/a/b

  inclusive router
    /test  =>  /
               /test

    <BrowserRouter>
      <div>
        <Route path="/" component={Home} />
        <Route path="/test" component={Test1} />
        <Route path="/test/test" component={Test2} />
      </div>
    </BrowserRouter>
  exclusive router
    只要匹配上了就不往下匹配了
    <BrowserRouter>
      <Switch>
        <Route path="/test/test" component={Test2} />
        <Route path="/test" component={Test1} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    精确匹配
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </BrowserRouter>

    条件路由
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route path="/user" exact render={() => isLogin ? <User/> : <Login/>} />
      </Switch>
    </BrowserRouter>

    =>
    重定向
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route path="/login" exact component={Login} />
        <Route path="/user" exact render={() => isLogin ? <User/> : <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>

    404
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route path="/login" exact component={Login} />
        <Route path="/user" exact render={() => isLogin ? <User/> : <Redirect to="/login" />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

快捷方式   react snippets
rccp 回车










