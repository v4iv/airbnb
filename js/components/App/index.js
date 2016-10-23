/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {AppRegistry, ScrollView, View, StatusBar, Text} from 'react-native';
import {fetch} from 'fetch';
import ListCard from '../ListCard/index';
import styles from './stylesheet';

export default class MainScreen extends Component {
    constructor() {
        super();
        this.state = {
            listings: [],
        };
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/frantic/892564944e2230ee712a76f2a214365d/raw/397b9e29a703a3acf5d31cb507e231fb0aaa41e5/listings.json')
            .then(response => response.json())
            .then((data) => {
                this.setState({listings: data});
            });
    }

    render() {
        const listCards = this.state.listings.map((listing) => <ListCard key={listing.id} listing={listing}/>);
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    translucent={true}
                />
                <View style={styles.toolbar}>
                    <Text>Santa Cruz</Text>
                    <Text style={styles.results}>
                        {this.state.listings.length} homes
                    </Text>
                </View>
                <ScrollView
                    style={styles.container}>
                    {listCards}
                </ScrollView>
            </View>
        );
    }
}