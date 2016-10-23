/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    info: {
        padding: 16,
        flexDirection: 'row',
    },
    main: {
        flex: 1,
    },
    name: {
        fontSize: 17,
        color: '#333',
        marginBottom: 4,
    },
    details: {
        fontSize: 12,
        color: '#999',
    },
    image: {
        height: 150,
    },
    priceBadge: {
        position: 'absolute',
        left: 0,
        bottom: 20,
    },
});

export default styles;