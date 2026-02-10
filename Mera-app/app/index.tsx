import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index=()=>{
    return <View 
    style={{backgroundColor:"lightblue",
    flex:1,justifyContent:'center',
    alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:"800",color:"black"}}>Hello, Welcome to Mera App</Text>
      <Link href={"/about/index"}>Go to about page</Link>

   </View>; 
};

export default Index;