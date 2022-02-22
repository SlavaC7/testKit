import {StyleSheet} from 'react-native';
import { theme } from '../../../theme';

export const stylesInfHolet = StyleSheet.create({
    main:{
        width:"100%",
        height:"100%",
    },

    BlockInf:{
        borderBottomWidth:1,
        borderBottomColor:"black",
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-start",
        padding:5,
    },
    BlockImg:{
        width:80,
        height:80,
        borderRadius:100,
        margin:10
    },
    BlockText:{
        marginLeft:10,
        flexDirection:"column"
    },
    BlockTitle:{
        fontSize:20,
        fontWeight:"bold",
    },
    blockDesc:{
        margin:20,
    },
    descText:{
        fontSize:theme.fontSize.l
    },
    button:{
        padding:10,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:theme.colors.default.buttonColor,
        margin:5,
    },
    buttonText:{
        textAlign:"center"
    }
});
