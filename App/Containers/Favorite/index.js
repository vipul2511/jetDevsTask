import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import NoDataFound from '../../Components/NoDataFound';
import GenericIcon from '../../Components/GenericIcon';
import { wp, hp } from '../../utils/heightWidthRatio';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RandomUserDataAction } from '../../redux/actions';
import { addFavourite, unFavourite } from '../../redux/actions/favourite';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
function Favorite(props) {
    // To unfavourite the item and remove from the favourite list
    const unfavourite = async (detail, index) => {
        props.unFavourite(detail.email)
    }
    //favourite flatlist render item
    function renderItem(item, index) {
        if (item.fav == '1') {
            return (
                <View key={index}>
                    <View style={styles.Outercard}>
                        <View style={styles.card}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 10 }} onPress={() => { unfavourite(item, index) }} >
                                {item.fav == '0' ? <MaterialIcons name="favorite-border" color={"lightgray"} size={18} /> :
                                    <MaterialIcons name="favorite" color={"red"} size={18} />
                                }
                            </TouchableOpacity>
                            <View style={styles.innercard}>
                                <View style={{ margin: 5 }}>
                                    <FastImage
                                        source={{ uri: item.picture.large }}
                                        style={{ width: wp(80), height: hp(80), borderRadius: 80 }}
                                    />
                                </View>
                                <View>
                                    <View style={styles.NameView}>
                                        <Text style={styles.label}>Name -</Text>
                                        <Text style={styles.textname}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                                    </View>
                                    <View style={styles.EmailView}>
                                        <Text style={styles.label}>Email -</Text>
                                        <Text style={styles.textname}>{`${item.email}`}</Text>
                                    </View>
                                    <View style={styles.EmailView}>
                                        <Text style={styles.label}>Gender -</Text>
                                        <Text style={[styles.textname]}>{`${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}`}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.StreetView}>
                                <View>
                                    <Text style={styles.label}>City</Text>
                                    <Text style={[styles.textname]}>{`${item.location.city.charAt(0).toUpperCase() + item.location.city.slice(1)}`}</Text>
                                </View>
                                <View>
                                    <Text style={[styles.label]}>State</Text>
                                    <Text style={styles.textname}>{`${item.location.state.charAt(0).toUpperCase() + item.location.state.slice(1)}`}</Text>
                                </View>
                                <View>
                                    <Text style={[styles.label,]}>Country</Text>
                                    <Text style={styles.textname}>{`${item.location.country.charAt(0).toUpperCase() + item.location.country.slice(1)}`}</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.BackButtonContainer}>
                </View>
                <View style={styles.TitleContainer}>
                    <View
                        style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.TitleStyle}>Favorite</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.SearchContainer}
                    onPress={() => {
                        props.navigation.navigate('Login')
                    }}>
                    <Text style={styles.backButtonStyle}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={props.UserData}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    ListEmptyComponent={() => <NoDataFound text={'No Data Found'} />}
                    onEndReachedThreshold={0.1}
                    enableEmptySections={true}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    SearchContainer: {
        backgroundColor: '#1976D2',
    },
    backButtonStyle: {
        margin: 5,
        color: '#fff'
    },
    headerView: {
        height: 65,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1976D2',
        elevation: 2,
    },
    BackButtonContainer: {

        marginRight: 10,
        backgroundColor: '#1976D2',
    },
    TitleContainer: {
        flexDirection: 'row',
        flex: 0.95,
        backgroundColor: '#1976D2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        color: 'black',
        padding: 10,
        fontSize: wp(25)
    },
    Outercard: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: wp(width - 50),
        height: hp(200),
        backgroundColor: '#fff',
        elevation: 1,
        margin: 5,
    },
    innercard: {
        flexDirection: 'row',
    },
    NameView: {
        marginTop: hp(5),
        width: wp(200),
        flexDirection: 'row',
    },
    EmailView: {
        marginTop: hp(10),
        width: wp(200),
        flexDirection: 'row',
    },
    StreetView: {
        marginTop: hp(10),
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textname: {
        fontSize: wp(15)
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 200
    },
    label: {
        color: 'grey',
        fontSize: wp(15),
        marginRight: wp(3)

    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});
const mapStateToProps = (state) => {
    return {
        UserData: state.RandomUserDataReducer.data,
        isloading: state.RandomUserDataReducer.isLoading,
        error: state.RandomUserDataReducer.error,
        successData: state.RandomUserDataReducer.success
    };
};
const mapDispatchToProps = (dispatch) => ({
    RandomUserDataAction: (params) => dispatch(RandomUserDataAction(params)),
    addFavourite: (email) => dispatch(addFavourite(email)),
    unFavourite: (email) => dispatch(unFavourite(email))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorite);