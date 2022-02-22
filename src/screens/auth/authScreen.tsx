import {Link, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';

import {stylesAuth} from "./style"
import { strings } from '../../../string';
import { useTypedSelector } from '../../store/store';
import { signinAction } from '../../store/auth';
import AuthInputGroup from './authInputGroup';

const AuthScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [authData, setAuthData] = useState({login:"", password:""});

  const [markData, setMarkData] = useState({login:"", password:""});

  const token = useTypedSelector(s=>s.auth.token);

  const regPass = /^[0-9a-zA-Z]{9,}$/.test(authData.password);

  const regName = /^[a-zA-Z ]{2,30}$/.test(authData.login);

  const onChangeDataLogin=(even:string)=>{
    setAuthData(prev=>({...prev,login:even}))
  }

  const onChangeDataPass=(even:string)=>{
    setAuthData(prev=>({...prev,password:even}))
  }

  const onPressReg=()=>{
    if(!regName){
      setMarkData(prev=>({...prev, login:strings.screens.reg.markLogin}))
    }else{
      setMarkData(prev=>({...prev, login:""}))
    }

    if(!regPass){
      setMarkData(prev=>({...prev, password:strings.screens.reg.markPass}))
    }else{
      setMarkData(prev=>({...prev, password:""}))
    }

    if(regName && regPass){
      dispatch(signinAction.request({
        login:authData.login, 
        password:authData.password, 
      }))
    }
  }

  useEffect(()=>{
    if(!token){
      setMarkData(prev=>({...prev, login:strings.screens.reg.markToken}))
    }else{
      //@ts-ignore
      navigation.navigate("home");
    }
  }, [token])

  return (
      <View style={stylesAuth.main}>
        <View style={stylesAuth.textBlock}>
          <Text style={stylesAuth.titleText}>{strings.screens.auth.titleText}</Text>
          <Text style={stylesAuth.descText}>{strings.screens.auth.titleDesc}</Text>
        </View>
        <View style={stylesAuth.groupBlock}>

          <AuthInputGroup 
            mark={markData.login} 
            value={authData.login} 
            onChange={onChangeDataLogin}
            isPass={false}
            isLog={true}
          />

          <AuthInputGroup 
            mark={markData.password} 
            value={authData.password} 
            onChange={onChangeDataPass}
            isPass={true}
            isLog={false}
          />

          <View>
            <Text style={stylesAuth.defText}>{strings.screens.auth.textReg}<Link to={"/reg"} style={stylesAuth.link}>{strings.screens.auth.textlink}</Link></Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={stylesAuth.onLogButton} onPress={()=>onPressReg()}>
            <Text>{strings.screens.default.logIn}</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};



export default AuthScreen;
