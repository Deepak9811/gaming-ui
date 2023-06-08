import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import RegisterSvg from '../assets/images/misc/registration.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        style={{paddingHorizontal: 25}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <RegisterSvg
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            }}>
            Register
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <GoogleSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <FacebookSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <TwitterSVG height={24} width={24} />
            </TouchableOpacity>
          </View>

          <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
            Or, Register with Email...
          </Text>

          <InputField
            label={'Full Name'}
            icon={
              <Ionicons
                name="person-outline"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
          />

          <InputField
            label={'Email ID'}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            keyboardType={'email-address'}
          />
          <InputField
            label={'Password'}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            inputType="password"
          />
          <InputField
            label={'Confirm-Password'}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            inputType="password"
          />

          <InputField
            label={'Date of Birth'}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            inputType="password"
          />

          <CustomButton label={'Register'} onPress={() => {}} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>Already registered?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
