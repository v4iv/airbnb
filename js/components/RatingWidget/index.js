/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {Image, Text} from 'react-native';

export default class RatingWidget extends Component {
    render() {
        const stars = [];
        for (let star = 1; star <= 5; star++) {
            const source = this.props.value >= star
                ? require('../../img/star_full.png')
                : require('../../img/star_empty.png');
            stars.push(<Image key={star} source={source}/>);
        }
        return (
            <Text>
                {stars}
                {' '}
                ({this.props.count})
            </Text>
        )
    }
}