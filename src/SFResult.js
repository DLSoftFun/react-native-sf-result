/**
 * Created by SF on 2018/4/16.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import Result from 'antd-mobile/lib/result';
import Icon from 'antd-mobile/lib/icon'
import PropTypes from 'prop-types';

export default class SFResult extends Component {

    static propTypes = {
        title: PropTypes.string,
        titleColor: PropTypes.string,
        content: PropTypes.string,
        iconCode: PropTypes.string, // \ue  + code
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {style, title, titleColor, content, contentColor} = this.props;
        return (
            <View style={[style, {
                alignItems: 'center',
                justifyContent: 'center',
            }]}>
                <Result
                    img={this.setIcon()}
                    title={
                        <Text
                            style={{
                                fontSize: 20,
                                color: titleColor ? titleColor : 'rgba(69,69,69,1)'
                            }}>{title}</Text>
                    }
                    message={
                        <Text
                            style={{
                                fontSize: 15,
                                color: contentColor ? contentColor : 'rgba(169,169,169,1)'
                            }}>{content}</Text>
                    }
                />
            </View>
        )
    }

    setIcon = () => {
        if (!this.props.imgComponent) {
            return (
                <Icon
                    type={this.props.iconCode}
                    className="spe"
                    color="rgba(35,142,227,1)"
                    size={50}
                />
            )
        }
        else {
            return this.props.imgComponent;
        }
    }

}