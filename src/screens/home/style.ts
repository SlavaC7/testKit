import {StyleSheet} from 'react-native';
import { theme } from '../../../theme';

export const stylesHome = StyleSheet.create({
    flat:{
    },
    flatBlock:{
        borderBottomWidth:1,
        borderBottomColor:"black",
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-start",
        padding:5,
    },
    flatBlockImg:{
        width:60,
        height:60,
        borderRadius:100,
        margin:5
    },
    flatBlockText:{
        marginLeft:10,
        flexDirection:"column"
    },
    flatBlockTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
    },
    flatBlockDesc:{
        color:"gray"
    }
});
