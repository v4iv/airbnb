/**
 * Created by Vaibhav on 10/23/2016.
 */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './stylesheet';
import PriceBadge from '../PriceBadge/index';
import RatingWidget from '../RatingWidget/index';

export default class ListCard extends Component {

    render() {
        return (
            <View>
                <Image
                    style={styles.image}
                    source={{uri: this.props.listing.previewImageURL}}>
                    <PriceBadge
                        price={this.props.listing.price}
                        instantBook={this.props.listing.instantBook}
                        style={styles.priceBadge}
                    />
                </Image>
                <View style={styles.info}>
                    <View style={styles.main}>
                        <Text style={styles.name}>
                            {this.props.listing.name}
                        </Text>
                        <Text style={styles.details}>
                            {this.props.listing.typeText}
                            {' • '}
                            <RatingWidget
                                value={this.props.listing.starRating}
                                count={this.props.listing.reviewsCount}
                            />
                            {' • '}
                            {this.props.listing.location}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

