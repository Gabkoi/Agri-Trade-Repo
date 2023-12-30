import React,  {useState}from "react"
import { Text, StyleSheet, View, Button, TextInput, TouchableOpacity} from "react-native"



const  App = () =>{
  const [buttononPress, setbuttonPress] = useState(0)

  const handeruserButton = ()=>{
    setbuttonPress(buttononPress + 1); 
  }

  return(
    <View style={styles.container}>
      <Text>touchablepressCount: {buttononPress}</Text>
      <TouchableOpacity onPress={handeruserButton}>
      <Text>press me</Text>
      </TouchableOpacity>
    </View>
  );

};

export default App


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "row",
  }

})