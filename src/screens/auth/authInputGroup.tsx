import React from 'react';
import { Text, TextInput, View } from 'react-native';
import {stylesAuth} from "./style"
import { strings } from '../../../string';

const AuthInputGroup:React.FC<{
    mark:string,
    value:string,
    onChange:(text:string)=>void;
    isPass:boolean,
    isLog:boolean
}> = ({
    mark,
    value,
    onChange,
    isPass,
    isLog,
}) => {

  const title = isPass?strings.screens.auth.password:isLog?strings.screens.auth.login:strings.screens.reg.UserName;
  return (
        <View style={stylesAuth.group}>
            <Text style={stylesAuth.defText}>{title}</Text>
            <TextInput
              style={stylesAuth.input}
              onChangeText={(InputEmail)=>onChange(InputEmail)}
              value={value}
              placeholder={strings.screens.auth.placeholderLogin}
              secureTextEntry={isPass}
            />
            <Text style={stylesAuth.markText}>{mark}</Text>
          </View>
  );
};
export default AuthInputGroup;