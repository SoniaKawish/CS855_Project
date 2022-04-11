// This screen is used to display the Fun-Facts
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import '../firebase.js';
import { getDatabase, ref, onValue, query } from "firebase/database";
import FactListItem from './FactListItem';


const FunFactScreen = ({ navigation, route }) => {

    // fetch data related to funfacts from the DB

    const db = getDatabase();
    // list variable to store data fetched from the DB
    const data = [];

    // state variable ; if true show Flatlist otherwise show loader 
    const [isLoaded, setisLoaded] = useState(false);
    // state variable to display the fun-facts in the FlatList
    const [dataList, setDataList] = useState(null);



    /**
   * fetchData
   * Purpose: This function fetches data from the Firebase Database related to fun-facts
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
        const reference = ref(db, 'Fun-Facts');
        onValue(reference, (snapshot) => {

            snapshot.forEach((child) => {
                data.push({ text1: child.val().Text1, id: child.val().ID, text2: child.val().Text2 });
            })

        });

        if (data.length == 0) {
            await delay(3);
        }

        if (data.length > 0) {
            setisLoaded(true);
        }

        setDataList(data);
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

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} backgroundColor="#04555c" />

            <View style={styles.header}>
                <Text style={styles.headerText}>Fun Facts </Text>
            </View>
            <View style={styles.listContainer}>
                {isLoaded ? (<FlatList data={dataList}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <FactListItem item={item} />
                    )}
                />) :
                    (<ActivityIndicator size="large" color="#04555c"
                        style={styles.loaderStyle} />)}

            </View>
        </View>
    )
}
styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#04555c',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    listContainer: {
        backgroundColor: 'white',
        flexGrow: 0,
        height: Dimensions.get('window').height - 50,
    },
    loaderStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 200
    },
});
export default FunFactScreen;