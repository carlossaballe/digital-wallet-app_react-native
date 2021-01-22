import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { SignUp } from './screens';
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent'
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

// const styles = StyleSheet.create({ });

export default App;
