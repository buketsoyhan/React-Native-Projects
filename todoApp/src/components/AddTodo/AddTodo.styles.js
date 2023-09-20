import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:'#37474F'
    },
    input:{
        color:'white',
        fontSize:20,
        marginTop:10,
    },
    line: {
        margin:10,
        width:330,
        height: 1,   
        backgroundColor: '#78909C', // Çizgi rengini buradan ayarlayabilirsiniz
      },
    
    button:{
        backgroundColor:'#FFA500',
        display:'flex',
        borderRadius:20,
        margin:20
    },
    button_text:{
        paddingVertical:20,
        color:'white',
        fontSize:25,
        display:"flex",
        textAlign:'center'
    }
})