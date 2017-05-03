# ykit-config-antd

<b class="ykit-tip">
该插件已内置 ykit-config-react & ykit-config-es6，不需要单独引入。
</b>

## Features

- 编译 ES6+, JSX 代码
- 通过 happypack 提升编译速度
- 内置 ant-design & react

## 安装

在项目中执行：

```
$ npm install ykit-config-antd --save
```

编辑 `ykit.js`，引入插件即可：

```javascript
module.exports = {
    plugins: ['antd']
    // ...
};
```

## 使用

<b class="ykit-tip">
使用组件需要先手动引入 ant-design 样式。
</b>

在工程中的 style.css(style.scss/style.less) 中添加：

```css
@import '~antd/dist/antd.css';
```

使用组件：

```javascript
import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, mountNode);
```

## 示例

查看：https://github.com/roscoe054/ykit-starter-antd
