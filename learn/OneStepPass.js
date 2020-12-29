/**
 * Sample React Native App
 * 一键登录demo
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export const title = "OneStepPass";
export const description = "一键登录测试";
export default class OneStepPass extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={{marginTop: 20, marginBottom: 20}}>
                    <Text>OneStepPass</Text>
                </View>
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
