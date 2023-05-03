import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contact_Form from '../screens/ContactForm';
import Job_Form from '../screens/JobForm';
import RefreshTest from '../screens/RefreshTest';
import CV from "../screens/CV";
import QrCode from "../screens/QrCode";
import SaveInfo from "../screens/SaveInfo";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({color, size}) => ( <Ionicons name="home" color={color} size={size}/>)
        }} />
        <Tab.Screen name='Contact Form' component={Contact_Form} options={{
            tabBarIcon: ({color, size}) => ( <Ionicons name="document-text" color={color} size={size}/>)
        }} />
        <Tab.Screen name='Job Form' component={Job_Form} options={{
            tabBarIcon: ({color, size}) => ( <Ionicons name="file-tray-full" color={color} size={size}/>)
        }} />
        <Tab.Screen name='RefreshTest' component={RefreshTest} />
        <Tab.Screen name='Cv' component={CV} options={{
            tabBarIcon: ({color, size}) => ( <Ionicons name="reader" color={color} size={size}/>)
        }} />
        <Tab.Screen name='QrCode' component={QrCode} options={{
            tabBarIcon: ({color, size}) => ( <Ionicons name="" color={color} size={size}/>)
        }} />
        <Tab.Screen name='Save' component={SaveInfo}/>
    </Tab.Navigator>
  )
}
