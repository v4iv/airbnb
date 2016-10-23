/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        padding: 5,
    },
    price: {
        fontSize: 18,
        color: 'white',
    },
    units: {
        marginLeft: 2,
        fontSize: 6,
        color: 'white',
    },
    flash: {
        marginLeft: 2,
    },
});

export default styles;