/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default class LikeButton extends Component {
    render() {
        const source = this.props.isLiked ? require('../../img/liking@2x.png') : require('../../img/like@2x.png');
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image source={source}/>
            </TouchableOpacity>
        );
    }
}