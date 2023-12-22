import React from "react";
import { View, Text, StyleSheet, ScrollView, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const AddToCard = () =>{
    return(
        <ScrollView>
            <View style={styles.ViewOne}>
            <Image
            source={require('../assets/Orangepic.jpeg')}
            style={[styles.image1]}/>
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                <Text style={{fontSize: 20, fontWeight:"bold"}}>Rice Seeds </Text>
                <Ionicons name="add-outline" size={20} color="red" style={styles.imageIcon} />
                </View>
                <View style={styles.textRow}>
                <Text style={{fontSize:15, color: "green"}}>Avialable in Stack</Text>
                <Text style={styles.textkg}>3kg</Text>
                </View>

                <View style={styles.textRow}>
                <Text>200 Ld</Text>
                <Ionicons name="add-outline" size={20} color="red" style={styles.imageIcon} />
                </View>
                

            </View>
            
            </View>
        </ScrollView>
    )
}
export default AddToCard



const styles = StyleSheet.create({

    ViewOne:{
        flex:1,
        flexDirection: "row",
        marginTop: 10
    },

    textContainer:{
        flexDirection: "column",
        marginLeft: 10,
        marginTop: 20
    },

    textRow:{
        flexDirection: "row",
        alignItems: "center"

    },

    try:{
        marginTop:20
    },

    textkg:{
        marginLeft: 20,
    },

    image1:{
        width:140,
        height: 100,
        marginLeft: 16
    }

})