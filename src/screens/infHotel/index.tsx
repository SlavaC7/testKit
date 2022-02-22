import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { strings } from '../../../string';
import { getHotelAction, getHotelListAction } from '../../store/hotel';
import { useTypedSelector } from '../../store/store';
import { stylesInfHolet } from './style';

const InfHotel = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const Route = useRoute();

  // @ts-ignore
  const {id} = Route.params;

  useEffect(()=>{
    dispatch(getHotelAction.request({id}))
  }, []);

  const hotelInf = useTypedSelector(s=>s.hotel.hotelInf);

  const onGoToRoomList = (id:string) =>{
    // @ts-ignore
    navigation.navigate("roomHotel", {id})
  }

  return (
    <View style={stylesInfHolet.main}>
      <View style={stylesInfHolet.BlockInf}>
        <View>
          <Image source={{ uri:hotelInf?.photo }} style={stylesInfHolet.BlockImg} />
        </View>

        <View style={stylesInfHolet.BlockText}>  
          <Text style={stylesInfHolet.BlockTitle}>{hotelInf?.title}</Text>
          <Text>{hotelInf?.description}</Text>
        </View>
      </View>
      <View style={stylesInfHolet.blockDesc} >
        <View>
          <Text style={stylesInfHolet.descText}>{strings.screens.hotelInf.address}{hotelInf?.address}</Text>
          <Text style={stylesInfHolet.descText}>{strings.screens.hotelInf.countRooms}{hotelInf?.rooms}</Text>
        </View>
        <View>
          <TouchableOpacity style={stylesInfHolet.button} onPress={()=>onGoToRoomList(id)} >
            <Text style={stylesInfHolet.buttonText}>{strings.screens.hotelInf.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default InfHotel;
