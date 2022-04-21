import { Box, Center, VStack, WarningOutlineIcon, ScrollView, Input, Icon, Pressable, HStack, Spacer, StatusBar, useColorModeValue, Stack } from 'native-base';
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Animated
} from 'react-native';
import globleStyles, { height } from '../common/globleStyles';
import { colors } from '../common/theme';
import Header from '../components/Header';
import { InputCard } from '../components/InputCard';
import { Entypo, MaterialIcons } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
import { TabView, SceneMap } from "react-native-tab-view";
import CustomSwitch from '../components/CustomSwitch';
var { width } = Dimensions.get('window');

export default function Orders(props) {

    const [tabIndex, setTabIndex] = useState(2)
    const [data, setData] = useState(Array(12).fill(0))

    const onSelectSwitch = index => {
        // alert('Selected index: ' + index);
        console.log('Selected index: ' + index);
        setTabIndex(index)
    };


    const renderItem1 = ({ item, index }) => {
        return <TouchableOpacity activeOpacity={0.9} onPress={() => {
            if (index == 0)
                props.navigation.navigate('OrderDetails')
            else if (index == 1)
                props.navigation.navigate('OrderManagement')

        }}>
            <Stack borderBottomColor={colors.GREY_5} borderBottomWidth={1} pb="2" pt="1">
                <HStack justifyContent="space-between" >
                    <Text style={styles.text1}>#0202102122300</Text>
                    <Text style={styles.text1}>₹6000.00</Text>
                </HStack>
                <Text style={styles.text2}>5 Items</Text>
                <HStack justifyContent="space-between">
                    <VStack>
                        <Text style={styles.text2}>Oct 10, 2021 at 6:00 PM</Text>
                        <Text style={styles.text2}>Ferro Maganese</Text>
                    </VStack>
                    <MaterialButtonDark onPress={() => props.navigation.navigate("ChatBoard")} style={styles.materialButton}>Chat</MaterialButtonDark>
                </HStack>
            </Stack>
        </TouchableOpacity>
    }



    return (
        <View style={globleStyles.mainView}>

            <Header title={'Orders'} isLeftIconHide isTitleCenter={false} />

            <Center w="100%" >
                <Box pb="140" w="95%" maxW="350">

                    <HStack space={3} justifyContent="center">
                        <HStack justifyContent="space-between" style={{ flex: 1, borderColor: colors.PRIMARY_DARK, borderWidth: 1, alignItems: 'center', paddingRight: 5 }}>
                            <Text style={{ ...globleStyles.normalText, padding: 5, paddingHorizontal: 8, color: colors.GREY_8 }}>From</Text>
                            <Entypo name="calendar" color={colors.PRIMARY_DARK} size={20} />
                        </HStack>
                        <Text style={{ ...globleStyles.subHeader, fontSize: 20, ...globleStyles.fontMedium }}>To</Text>
                        <HStack justifyContent="space-between" style={{ flex: 1, borderColor: colors.PRIMARY_DARK, borderWidth: 1, alignItems: 'center', paddingRight: 5 }}>
                            <Text style={{ ...globleStyles.normalText, padding: 5, paddingHorizontal: 8, color: colors.GREY_8 }}>To</Text>
                            <Entypo name="calendar" color={colors.PRIMARY_DARK} size={20} />
                        </HStack>
                    </HStack>
                    <View style={{ alignItems: 'center', margin: 15 }}>
                        <CustomSwitch
                            selectionMode={2}
                            roundCorner={false}
                            option1={'Quote Request'}
                            option2={'Quote Received'}
                            option3={'Order Confirmed'}
                            onSelectSwitch={onSelectSwitch}
                            selectionColor={colors.PRIMARY_DARK}
                        />
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderItem1}
                        style={{ maxHeight: height - 210 }}
                    />
                </Box>
            </Center>
        </View>
    );
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.WHITE,
        //marginTop: StatusBar.currentHeight,
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Sofia-Pro-Bold',
        fontSize: width * 0.045,
        color: colors.DARK_BLUE,
        textAlign: 'center',
        textDecorationLine: "underline",
        marginVertical: 5
    },
    text1: {
        fontSize: 16,
        ...globleStyles.fontMedium,
    },
    text2: {
        fontSize: 15,
        ...globleStyles.fontMedium,
        color: colors.GREY_8,
        lineHeight: 19,
        paddingTop: 2
    },
    materialButton: { height: 30, minWidth: 70, position: 'absolute', right: 0, bottom: 0, marginVertical: 0 }
})