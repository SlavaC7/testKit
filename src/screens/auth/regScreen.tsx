import {Link, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacityBase, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';

import {stylesAuth} from "./style"
import { strings } from '../../../string';
import { registerAction } from '../../store/auth';
import { useTypedSelector } from '../../store/store';
import AuthInputGroup from './authInputGroup';

const RegScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [authData, setAuthData] = useState({login:"", password:"", userName:""});

  const [markData, setMarkData] = useState({login:"", password:"", userName:""});

  const token = useTypedSelector(s=>s.auth.token);

  const regPass = /^[0-9a-zA-Z]{9,}$/.test(authData.password);

  const regName = /^[a-zA-Z ]{2,30}$/.test(authData.login);

  const regUserName = /^[a-zA-Z ]{2,30}$/.test(authData.userName);

  const onChangeDataLogin=(even:string)=>{
    setAuthData(prev=>({...prev,login:even}))
  }

  const onChangeDataPass=(even:string)=>{
    setAuthData(prev=>({...prev,password:even}))
  }

  const onChangeDataUserName=(even:string)=>{
    setAuthData(prev=>({...prev,userName:even}))
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

    if(!regUserName){
      setMarkData(prev=>({...prev, userName:strings.screens.reg.markLogin}))
    }else{
      setMarkData(prev=>({...prev, userName:""}))
    }

    if(regName && regPass && regUserName){
      dispatch(registerAction.request({
        login:authData.login, 
        password:authData.password, 
        userName:authData.userName,
      }))
    }
  }

  useEffect(()=>{
    //@ts-ignore
    navigation.navigate("home");
  }, [token])

  return (
      <View style={stylesAuth.main}>
        <View style={stylesAuth.textBlock}>
          <Text style={stylesAuth.titleText}>{strings.screens.reg.titleText}</Text>

          <Text style={stylesAuth.descText}>{strings.screens.reg.titleDesc}</Text>
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

          <AuthInputGroup 
            mark={markData.userName} 
            value={authData.userName} 
            onChange={onChangeDataUserName}
            isPass={false}
            isLog={false}
          />
        </View>

        <View>
            <Text style={stylesAuth.defText}>{strings.screens.reg.textReg} <Link to={"/auth"} style={stylesAuth.link}>{strings.screens.reg.textlink}</Link></Text>
        </View>

        <View>
          <TouchableOpacity style={stylesAuth.onLogButton} onPress={()=>onPressReg()}>
            <Text>{strings.screens.default.reg}</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};



export default RegScreen;
