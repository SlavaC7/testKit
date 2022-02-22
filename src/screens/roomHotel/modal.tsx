import React, { useEffect } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View, Image } from 'react-native';
import Modal from "react-native-modal";
import { useDispatch } from 'react-redux';
import { strings } from '../../../string';
import { theme } from '../../../theme';


import { getRoomInfoAction } from '../../store/hotel';
import { useTypedSelector } from '../../store/store';
//import Close from "./../../icon/close.svg";

const ModalView: React.FC<{
    visible:boolean;
    numderRoom:string;
    photo:string;
    onPressButtonVisible:()=>void;
    onSellRoomList:(id:string)=>void;
    id:string;
    available:string;
    bedsAmount:number;
    roomsAmount:number;
    price:number;
    colors:string;
    dataResAnav:boolean;
    money:number;
    result:string;
}> = React.memo(({
    visible,
    numderRoom,
    onPressButtonVisible,
    photo,
    id,
    available,
    bedsAmount,
    roomsAmount,
    price,
    colors,
    onSellRoomList,
    dataResAnav,
    money,
    result
}) => {
  return (
        <Modal isVisible={visible}  onBackdropPress={onPressButtonVisible} animationOut={"fadeOut"}>
            <View style={stylesModal.main}>
                <View style={stylesModal.header}>
                        <TouchableOpacity onPress={onPressButtonVisible}>
                            {/* <Close style={stylesModal.close}/> */}
                        </TouchableOpacity>

                        <Text>Комната {numderRoom}</Text>
                </View>

                <View style={stylesModal.wrapper}>
                    <View style={stylesModal.infoBlock}>
                        <View>
                            <Image source={{uri:photo}} style={stylesModal.Img}/>
                        </View>
                        <View>
                            <Text style={stylesModal.modalItemText}>{strings.screens.roomInf.bedsAmount} {bedsAmount}</Text>

                            <Text style={stylesModal.modalItemText}>{strings.screens.roomInf.roomAmount} {roomsAmount}</Text>
                        </View>
                    </View>
                    <Text  style={stylesModal.modalItemText}>{strings.screens.roomInf.status} <Text style={{color:colors}}>{available}</Text></Text>

                    <Text style={stylesModal.modalItemText}>{strings.screens.roomInf.price} {price}</Text>

                    <TouchableOpacity style={stylesModal.button} onPress={()=>onSellRoomList(id)} >
                        <Text style={stylesModal.buttonText}>{strings.screens.roomInf.button}</Text>
                    </TouchableOpacity>

                    {dataResAnav && 
                        (
                            <View>
                                <Text>{result}</Text>
                                <Text>{strings.screens.roomInf.yourMoney}{money}</Text>
                            </View>
                        )

                    }

                    
                </View>

            </View>
        </Modal>
  );
});

const stylesModal = StyleSheet.create({
    main:{
        padding:10,
        borderRadius:10,
        backgroundColor:"white",
        
      },
      wrapper:{
        margin:10,
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"center",
      },
      infoBlock:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:'flex-start'
      },
      header:{
          width:"100%",
          flexDirection:'row',
          alignItems:"center"
      },
      close:{
          height:30,
          width:30,
          color:"black",
          margin:3,
      },
      modalItemText:{
          color:"black",
      },    
      Img:{
        width:60,
        height:60,
        margin:10
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

export default ModalView;
