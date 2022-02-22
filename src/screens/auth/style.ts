import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const stylesAuth = StyleSheet.create({
    main: {
      flex: 1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

    },
    input: {
      borderRadius: 20,
      opacity: 0.7,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:200,
      color:theme.colors.default.textBlack,
    },
    textBlock: {
      width: '100%',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color:theme.colors.default.textBlack,
    },
    groupBlock:{
      justifyContent:"center",
      alignItems:"center"
    },
    group: {
      margin: 5,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      width:"80%",
    },
    titleText:{
      fontSize:36,
      color:theme.colors.default.textBlack,
    },
    descText:{
        color:theme.colors.default.textBlack,
        textAlign:"center"
    },
    onLogButton:{
      padding:10,
      borderWidth:1,
      borderRadius:5,
      backgroundColor:theme.colors.default.buttonColor,
      margin:5
    },
    link:{
        color:theme.colors.default.link,
    },
    defText:{
        color:theme.colors.default.textBlack,
        margin:5,
    },
    markText:{
      color:"red",
      textAlign:"center",
      fontSize:12,
    },

  });