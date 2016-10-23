/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './stylesheet';

export default class PriceBadge extends Component{

    render() {
        const flash = this.props.instantBook &&
            <Image style={styles.flash} source={require('../../img/flash.png')} />;
        return (
            <View style={[styles.container, this.props.style]}>
                <Text style={styles.price}>
                    ${this.props.price}
                </Text>
                <Text style={styles.units}>
                    USD{'\n'}PER NIGHT
                </Text>
                {flash}
            </View>
        );
    }
}