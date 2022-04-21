/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  Image
} from 'react-native';
import { NavigationActions } from "react-navigation";
import Spinner from './Spinner';
import globleStyles from '../common/globleStyles';
import DrawerItem from './DrawerItem';
import { Box, HStack, VStack } from 'native-base';
import { colors } from '../common/theme';

export default function Drawer(props) {

  const onItemPress = (index) => {
    switch (index) {
      case 1:
        props.navigation.dispatch(NavigationActions.navigate({
          routeName: "Profile",
        }))
        break;
      case 7:
        props.navigation.dispatch(NavigationActions.navigate({
          routeName: "ArchivedClients",
        }))
        break;
      case 2:
        props.navigation.dispatch(NavigationActions.navigate({
          routeName: "ChangePass",
        }))
        break;
      case 3:
        props.navigation.dispatch(NavigationActions.navigate({
          routeName: "About",
        }))
        break;
      case 4:
        props.navigation.dispatch(NavigationActions.navigate({
          routeName: "PackagesList",
        }))
        break;
      case 5:
        props.navigation.dispatch(NavigationActions.navigate({
          routeName: "Feedback",
        }));
        break;
      case 6:
        //props.navigation.closeDrawer();
        onLogout();
        break;
      case 8:
        props.navigation.closeDrawer();
        props.restorePurcahse();
        break;
    }
  }

  const onLogout = () => {
    props.navigation.closeDrawer();
    Alert.alert(
      'SIGNOUT!',
      'Are you sure you want to signout?',
      [
        { text: 'NO', onPress: () => { console.log("sd") } },
        {
          text: 'YES', onPress: () => {
            props.logout();
            //logout();
          }
        },
      ],
      { cancelable: false }
    )
  }

  const logout = () => {
    /*props.navigation.dispatch(NavigationActions.navigate({
      routeName:"Auth",
    }))*/
    props.logoutUser();
    props.navigation.dispatch({
      type: NavigationActions.NAVIGATE,
      routeName: 'Login',
      key: null,
      action: {
        type: NavigationActions.RESET,
        index: 0,
        actions: [{ type: NavigationActions.RESET, routeName: 'Login' }]
      }
    })
  }

  const showSubscriptionBtn = () => {
    const { userData } = props;
    if (userData.type != "employee") {
      return <DrawerItem onPress={() => onItemPress(4)} index={4} label={"Subscription"} />
    }
  }

  const showRestoreButton = () => {
    const { userData } = props;
    if (userData.type != "employee") {
      return <DrawerItem onPress={() => onItemPress(8)} index={4} label={"Restore"} />
    }
  }

  const showLoader = () => {
    if (props.drawerLoading) {
      return <Spinner />
    }
  }
  const { userData } = props;

  // var fullName = userData.first_name.toUpperCase() + " " + userData.last_name.toUpperCase();
  return (
    <View style={globleStyles.drawerContainer}>
      <Box safeAreaTop bg="#ffffff" />
      <HStack pb="0" pt="2" mb="1">
        <Image
          source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
        <HStack justifyContent="space-between" flex="1" pl="2">
          <VStack justifyContent="center" >
            <Text style={globleStyles.drawerUsername}>Gautam</Text>
            <Text style={globleStyles.drawerUserEmail}>gautam@gmail.com</Text>
          </VStack>
          <VStack justifyContent="center">
            <Text style={globleStyles.drawerChangeLink}>change</Text>
          </VStack>
        </HStack>
      </HStack>
      <View style={globleStyles.drawerAvatarCont}>
        {/* <AvatarItem email={userData.email} onPress={() => onItemPress(1)} index={0} userName={fullName} /> */}
      </View>
      <View style={globleStyles.drawerItemCont}>
        <ScrollView bounces={false} >
          <DrawerItem onPress={() => onItemPress(1)} index={1} label={"Home"} iconname={"home-outline"}/>
          <DrawerItem onPress={() => onItemPress(7)} index={7} label={"User Management"} iconname={"person-outline"}/>
          <DrawerItem onPress={() => onItemPress(2)} index={2} label={"Received Quote"} iconname={"download-outline"}/>
          <DrawerItem onPress={() => onItemPress(3)} index={3} label={"Send Quote"} iconname={"send-outline"}/>
          <DrawerItem onPress={() => onItemPress(3)} index={3} label={"Complete Orders"} iconname={"checkmark-done-circle-outline"}/>
          <DrawerItem onPress={() => onItemPress(3)} index={3} label={"Chat"} iconname={"chatbox-ellipses-outline"}/>
          <DrawerItem onPress={() => onItemPress(3)} index={3} label={"Reports"} iconname={"receipt-outline"}/>
          <DrawerItem onPress={() => onItemPress(3)} index={3} label={"Profiles"} iconname={"person-circle-outline"}/>
          {/* {showSubscriptionBtn()} */}
          {/* {showRestoreButton()} */}
          <DrawerItem onPress={() => onItemPress(5)} index={5} label={"Notifications"} iconname={"notifications-outline"} switch/>
          <DrawerItem onPress={() => onItemPress(6)} index={6} label={"Logout"} iconname={"log-out-outline"}/>
        </ScrollView>
      </View>
      {showLoader()}
    </View>
  );



}
