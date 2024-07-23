/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Button,
  View,
  Animated
} from 'react-native';
import type {PropsWithChildren} from 'react';
import LineLogin from '@xmartlabs/react-native-line'
import { LoginPermission } from '@xmartlabs/react-native-line';

export default function App() {
  let animatedTriangle = new Animated.Value(120)
  let animatedCurve = new Animated.Value(0)
  let animatedStep1 = new Animated.Value(1)
  let animatedStep2 = new Animated.Value(0)

  const doLineLogin = async () => {
    try {
      const loginResult = await LineLogin.login({ 
        scopes: [LoginPermission.EMAIL, LoginPermission.OPEN_ID, LoginPermission.PROFILE]
      })
      console.log('loginResult', loginResult)
    } catch (error) {
      console.log('error', error)
    }
  }

  const doMoveRight = () => {
    Animated.timing(animatedTriangle, {
      toValue: 250,
      duration: 1000,
      useNativeDriver: false
    }).start()

    Animated.timing(animatedCurve, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false
    }).start()

    Animated.timing(animatedStep1, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false
    }).start()

    Animated.timing(animatedStep2, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }

  const doMoveLeft = () => {
    Animated.timing(animatedTriangle, {
      toValue: 120,
      duration: 1000,
      useNativeDriver: false
    }).start()

    Animated.timing(animatedCurve, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false
    }).start()

    Animated.timing(animatedStep1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start()

    Animated.timing(animatedStep2, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }

  //triangle-marginLeft = 140
  //curve-marginLeft = 0

  //triangle-marginLeft = 230
  //curve-marginLeft = 200

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Line Login" onPress={doLineLogin} />
      {/* <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(1,1,1,0.6)', position: 'absolute', zIndex: 1, opacity: 1 }}/>
      <View style={{ width: 400, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between', zIndex: 2 }}>
          <Button title="Move Right" onPress={doMoveRight} />
          <Button title="Move Left" onPress={doMoveLeft} />
        </View>
        <View style={{ marginTop: 16 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 16 }}>
              <Animated.View 
                style={{ paddingVertical: 12, paddingHorizontal: 16, borderRadius: 20 }}>
                <Button title="STEP 1" />
              </Animated.View>
            </View>
            <View style={{ marginLeft: 16 }}>
              <Animated.View style={{ paddingVertical: 12, paddingHorizontal: 16, borderRadius: 20 }}>
                <Button title="STEP 2" />
              </Animated.View>
            </View>
          </View>
        </View>
        <View style={{ zIndex: 1, position: 'absolute', flexDirection: 'row', top: 51 }}>
          <View style={{ marginRight: 16 }}>
              <Animated.View 
                style={{ paddingVertical: 12, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#ffffff', opacity: animatedStep1 }}>
                <Button title="STEP 1" />
              </Animated.View>
            </View>
            <View style={{ marginLeft: 16 }}>
              <Animated.View style={{ paddingVertical: 12, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#ffffff', opacity: animatedStep2 }}>
                <Button title="STEP 2" />
              </Animated.View>
            </View>
        </View>
        <View style={{ width: 400, zIndex: 2 }}>
          <Animated.View style={{ 
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderTopWidth: 0,
            borderRightWidth: 15,
            borderBottomWidth: 30,
            borderLeftWidth: 15,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#ffffff',
            borderLeftColor: 'transparent',
            marginLeft: animatedTriangle
           }}/>
          <Animated.View style={{ width: 200, backgroundColor: '#ffffff', borderRadius: 12, height: 65, marginLeft: animatedCurve }} />
        </View>
      </View> */}
    </SafeAreaView>
  );
}

