import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { strings } from '../../../string';
import { clearAction, getRoomAction, getRoomInfoAction, sendSellRoomAction } from '../../store/hotel';
import { useTypedSelector } from '../../store/store';
import ModalView from './modal';
import { stylesRoomHotel } from './style';

const RoomHotel = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const Route = useRoute();

  // @ts-ignore
  const {id} = Route.params;

  const [visible, setVisible] = useState(false);

  const [idRoom, setIdRoom] = useState("");

  const [dataRes, setdataRes] = useState(false);

  useEffect(()=>{
    dispatch(getRoomAction.request({id}))
  }, []);

  const room = useTypedSelector(s=>s.hotel.roomlist);

  const colors = {Other:"#F00",Your:"#FF0",Free:"#0F0"};

  const getColor = (status:keyof typeof colors)=>colors[status]

  const onOpenModal = () =>{
    setVisible(!visible)
  }

  const onOptionsModal=(id:string)=>{
    dispatch(getRoomInfoAction.request({id}));
    
    onOpenModal();

    setIdRoom(id);
  }

  const roomInf = useTypedSelector(s=>s.hotel.roomInfo);

  const onGoToRoomList = (id:string )=>{
    dispatch(sendSellRoomAction.request({id}));
  }

  const resSell=useTypedSelector(s=>s.hotel.result);

  useEffect(()=>{
    setdataRes(true);
  }, [resSell])

  return (
    <View style={stylesRoomHotel.main}>
      <FlatList data={room} numColumns={5} style={stylesRoomHotel.flat}  renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={[stylesRoomHotel.tochBlock,{backgroundColor:getColor(item.available)}]} onPress={()=>onOptionsModal(item.id)} >
                    <View>
                        <Text style={stylesRoomHotel.roomNumber}>#{item.number}</Text>
                    </View>
                    <View>
                      <Text>${item.price}</Text>
                    </View>
            </TouchableOpacity>
      )} />
      <ModalView  
        visible={visible} 
        onPressButtonVisible={onOpenModal} 
        id={idRoom} 
        numderRoom={roomInf?.number!}
        photo={roomInf?.photo!}
        available={roomInf?.available!}
        bedsAmount={roomInf?.bedsAmount!}
        roomsAmount={roomInf?.roomsAmount!}
        price={roomInf?.price!}
        colors={getColor(roomInf?.available!)}
        onSellRoomList={onGoToRoomList}
        dataResAnav={dataRes}
        money={resSell?.money!}
        result={resSell?.result!}
      />
    </View>
  );
};
export default RoomHotel;
