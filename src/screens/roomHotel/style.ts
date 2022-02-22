import {StyleSheet} from 'react-native';
import { theme } from '../../../theme';

export const stylesRoomHotel = StyleSheet.create({
    main:{
        width:"100%",
        height:"100%",
        justifyContent:"center"
    },
    flat:{
        flexWrap:"wrap",
        width:"100%"
    },
    tochBlock:{
        width:"18%",
        height:60,
        margin:"1%",
        justifyContent:"center",
        alignItems:"center"
    },
    roomNumber:{
        fontSize:theme.fontSize.xl
    }
});
