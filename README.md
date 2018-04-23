# react-native-sf-result

# 结果页

# 安装
> npm install react-native-sf-result
> npm i prop-types
> npm install antd-mobile --save

# Props
|  parameter  |  type  |  required  |   description  |  default  |
|:-----|:-----|:-----|:-----|:-----|
|style|style|no|布局|null|
|title|string|no|标题|null|
|titleColor|string|no|标题颜色|null
|content|string|no|内容|null|
|iconCode|string|no|图片代码 : \ue  + code|null| 

# 例子
```
import React, {Component} from 'react';
import {
StyleSheet,
View
} from 'react-native';
import SFResult from 'react-native-sf-result';

export default class App extends Component {
render() {
return (
<View
style={styles.container}>
<SFResult
style={{
width: 400,
height: 200
}}
title={'标题'}
content={'这是内容'}
// iconCode={'\ue629'}
/>
</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
});


```

