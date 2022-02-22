import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { getHotelListAction } from '../../store/hotel';
import { useTypedSelector } from '../../store/store';
import { stylesHome } from './style';

const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getHotelListAction.request({}))
  }, [])

  const hotelList = useTypedSelector(s=>s.hotel.hotelList)

  const omGoToInfHotel = (id:string)=>{
    // @ts-ignore
    navigation.navigate("infHotel", {id})

  }

  return (
    <View>
      <FlatList data={hotelList} style={stylesHome.flat} renderItem={({ item }) => (
            <TouchableOpacity style={stylesHome.flatBlock} onPress={()=>omGoToInfHotel(item.id)}>
                    <View>
                        <Image source={{ uri: item.photo }} style={stylesHome.flatBlockImg} />
                    </View>

                    <View style={stylesHome.flatBlockText}>  
                        <Text style={stylesHome.flatBlockTitle}>{item.title}</Text>
                          {console.log(item.title)}
                        <Text style={stylesHome.flatBlockDesc}>{item.description}</Text>
                    </View>
            </TouchableOpacity>
      )} />
    </View>
  );
};
export default HomeScreen;
