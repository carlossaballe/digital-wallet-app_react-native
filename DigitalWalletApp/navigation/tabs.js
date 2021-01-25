import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { Home, Scan } from '../screens';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    const TabBarCustomButton = ({ accesibilityLabel, accesibilityState, children, onPress }) => {
        
        let isSelected = accesibilityState.selected

        if(isSelected){
            return (
                <View style={{ felx: 1, alignItems: 'center '}}>
                    <View
                        style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 0
                        }}
                    >
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                        <Svg
                            width={75}
                            height={61}
                            viewBox='0 0 75 61'
                        >
                            <Path
                                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                                fill={COLORS.white}
                            />
                        </Svg>
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View>

                </View>
            )
        }
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'transparent',
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name= 'Home'
                component= {Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.more}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name= 'Scan'
                component= {Scan}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.scan}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name= 'User'
                component= {Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;