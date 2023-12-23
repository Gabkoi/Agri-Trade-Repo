import React from "react";
import { View, Text, StyleSheet, ScrollView, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const AddToCard = () =>{
    return(
        <ScrollView style={styles.ScrollContiner}>
            <View style={styles.Container}>
            <Image
            source={require('../assets/Orangepic.jpeg')}
            style={[styles.image1]}/>

            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                <Text style={styles.headingText}>Rice Seeds </Text>
                <Ionicons name="add-outline" size={20}color="red" style={styles.positiveIcon}/>
            </View>

            <View style={styles.textRow}>
                <Text style={styles.avialbleText}>Avialable in Stack</Text>
                <Text style={styles.textkg}>3kg</Text>
                </View>
                <View style={styles.textRow}>
                <Text>200 Ld</Text>
                <AntDesign name="minus" size={24} color="black" style={styles.negitiveIcon} />
            </View>

            </View>
            
            </View>
        </ScrollView>
    )
}
export default AddToCard



const styles = StyleSheet.create({

    Container:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#fffcfc"
    },

    ScrollContiner:{
        padding:15
    },
    
    textContainer:{
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 10,
        marginTop:10
    
    },

    textRow:{
        flexDirection: "row",
        alignItems: "center",
    },

    headingText:{
        fontSize: 20,
        fontWeight: "bold"
    },

    textkg:{
        marginLeft: 20,
        color: "black",
        fontWeight: "bold",
        marginTop: 5
    },

    positiveIcon: {
        marginLeft: 20,
        backgroundColor: "green",
        borderRadius: 20,
        color: "white"
    },

    negitiveIcon:{
        marginLeft: 90,
        backgroundColor: "green",
        borderRadius: 20,
        color: "white",
        marginTop: 5
    },

    avialbleText:{
        color: "green",
        fontSize: 14
    },

    image1:{
        width:150,
        height: 100,
    },

})