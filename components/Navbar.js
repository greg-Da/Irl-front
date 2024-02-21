import { StyleSheet, Text, View } from "react-native";
import Radar from '../assets/radar.svg'
import Message from '../assets/message.svg'
import User from '../assets/user.svg'

export default function Navbar(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>IRL</Text>
            <View style={styles.svgContainer}> 
                <Radar width={40} height={40} />
                <Message width={40} height={40} />
                <User width={40} height={40} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#ABABAB',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text:{
        fontSize: 30,
        flex: 0.3,
    },
    svgContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.5,
    }
})