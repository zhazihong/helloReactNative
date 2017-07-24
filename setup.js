/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
//使用组件导出的变量import HelloComponent,{name,address}from './learn/HelloComponent';
import HelloComponent from './learn/HelloComponent';
import LifecycleComponent from './learn/LifecycleComponent';
import PropsTest from './learn/PropsTest';
import StateTest from './learn/StateTest'
import RefTest from './learn/RefTest'

export default class helloReactNative extends Component {
    constructor(props) {
        super(props)
        this.state = {
            remove: false,
            count: 0,
            refCount: 0
        }
    }

    render() {
        var view = this.state.remove ? null : <LifecycleComponent {...this.state}></LifecycleComponent>
        var text = this.state.remove ? '模拟组件装载' : '模拟组件卸载'
        //延展操作符...
        var params = {describes: '我是属性描述', describes1: '我是属性描述1'}
        /*
        * 传递属性：
        *       <PropsTest
        *          describes={params.describes}
        *          describes1={params.describes1}
        *       />
        *   ES6： :  <PropsTest
        *        {...params}
        *       />
        *
        *       var {describes,describes1}=params
        *       <PropsTest
        *          describes={describes}
        *          describes1={describes1}
        *       />
        * */
        return (
            <View style={styles.container}>
                <HelloComponent
                    name='PROPS'
                />
                <Text
                    onPress={() => {
                        this.setState({
                            remove: !this.state.remove
                        })
                    }}
                >{text}</Text>
                <Text
                    onPress={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >点击更改props</Text>
                {view}
                <PropsTest
                    describes={params.describes}
                    describes1={params.describes1}
                />
                <StateTest/>
                <Text
                    onPress={() => {
                        //    获取组件两种方式,1, this,refs.reftest  2,this.refs[reftest]
                        //     var c=this.refs.reftest.getCount()
                        //     var c=this.refs['reftest'].getCount()
                        var c2 = this.reftest.getCount()
                        this.setState({
                            refCount: c2,
                        })
                    }}
                >RefTest：refCount={this.state.refCount}</Text>
                <RefTest
                    // 定义两种方式
                    // 方式1
                    // ref="reftest"
                    //方式2
                    ref={reftest => this.reftest = reftest}
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('helloReactNative', () => helloReactNative);
