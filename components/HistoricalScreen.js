// This screen is used to display list of places according to the category chosen.
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    Button,
    TouchareOpacity,
    ScrollView,
    FlatList, ActivityIndicator
} from 'react-native';
import { Dimensions } from 'react-native';
import ListItem from './ListItem';
import '../firebase.js';
import { getDatabase, ref, onValue, query, limitToLast, equalTo } from "firebase/database";
import { async } from '@firebase/util';

const HistoricalScreen = ({ navigation, route }) => {

    const selectedCategory = route.params;

    // get data from DB for the selected category 
    // Get a reference to the database service 
    const db = getDatabase();

    // state variable to display list of places in the FlatList
    const [arr, setArr] = useState(null);
    // state variable ; if true show Flatlist otherwise show loader  
    const [isLoaded, setisLoaded] = useState(false);
    // store data received from the DB
    let dataList = [];

    /**
   * fetchData
   * Purpose: This function fetches data from the Firebase Database for the selected category
   * Parameter(s): N/A
   * 
   * Precondition(s): N/A
   * 
   * Returns: N/A
   * 
   * Side effect:
   *  <1> FlatList is populated and data is dislayed. 
   * */

    async function fetchData() {
        const reference = ref(db, selectedCategory);
        onValue(reference, (snapshot) => {

            snapshot.forEach((child) => {
                const itemId = child.val().Category + '/Place_ID' + child.val().ID
                const imageTag = child.val().ImageURL.IMG1;
                dataList.push({ name: child.val().Name, id: itemId, address: child.val().Address, image: imageTag });
            })

        });

        if (dataList.length == 0) {
            await delay(3);
        }

        if (dataList.length > 0) {
            setisLoaded(true);
        }

        setArr(dataList);
    }

    useEffect(() => {

        fetchData();

    }, [])

    /**
    * delay
    * Purpose: This function adds a delay in time so that in the meantime data is fetched from the server. 
    * Parameter(s): 
    * <1> n: numeric value for number of seconds to wait
    * 
    * Precondition(s):
    * <1> The length of list(dataList) which stores data from the DB has to be 0.
    * 
    * Returns: N/A
    * 
    * Side effect:
    *  <1> The app waits for data to be fetched. 
    * */

    function delay(n) {
        return new Promise(function (resolve) {
            setTimeout(resolve, n * 1000);
        });
    }


    /**
   * detailsFunction
   * Purpose: Get the unique ID of the specific item clicked on the FlatList and navigates to another screen to display details of the item selected.
   * Parameter(s):
   * <1> itemClicked: object of the data dispalyed on the Flatlist
   * 
   * Precondition(s):
   * <1> FlatList has to be rendered. 
   * 
   * Returns: N/A
   * 
   * Side effect:
   *  <1> It navigates to the Details Screen. 
   * */

    const detailsFunction = (itemClicked) => {
        navigation.navigate('Details', itemClicked.id);
    }
    const renderSeperator = () => (
        <View style={{ backgroundColor: 'black', height: 0.5 }}></View>
    );

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} backgroundColor="#04555c" />

            <View style={styles.header}>
                <Text style={styles.headerText}>{selectedCategory}</Text>
            </View>
            <View style={styles.listContainer}>
                {isLoaded ? (
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={arr}
                        ItemSeparatorComponent={renderSeperator}
                        renderItem={({ item }) => (
                            <ListItem item={item} pressHandler={detailsFunction} />
                        )}
                        style={styles.flatList}
                    />) : (<ActivityIndicator size="large" color="#04555c"
                        style={styles.loaderStyle} />)}
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#04555c',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    listContainer: {
        backgroundColor: 'white',
        flexGrow: 0,
        height: Dimensions.get('window').height - 50,
    },
    flatList: {

    },
    footer: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#04555c',

    },
    loaderStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 200
    }
});
export default HistoricalScreen;
