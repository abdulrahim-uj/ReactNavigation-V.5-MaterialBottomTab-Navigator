import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main_Tab_Screen from './src/components/screeners/MainTabScreen';






const Drawer = createDrawerNavigator();



const App = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home">
                <Drawer.Screen 
                    name="Home"
                    component={Main_Tab_Screen}
                />
                {/* <Drawer.Screen 
                    name="Details"
                    component={DetailStackScreen}
                /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;

