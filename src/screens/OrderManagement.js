import { Box, Center, VStack, WarningOutlineIcon, ScrollView, Input, Icon, Pressable, HStack, Spacer, StatusBar, useColorModeValue, Stack, Image, Checkbox } from 'native-base';
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
import { Entypo, MaterialIcons, Ionicons } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
import { TabView, SceneMap } from "react-native-tab-view";
import CustomSwitch from '../components/CustomSwitch';
var { width } = Dimensions.get('window');

export default function OrderManagement(props) {

    const [tabIndex, setTabIndex] = useState(2)
    const [data, setData] = useState(Array(2).fill(0))

    const [timelineData, setTimelineData] = useState([
        {
            time: '10 Oct, 2021 06:00PM',
            status: 'Order Placed',
            icon: require('../../assets/order-placed-status-icon.png')
        },
        {
            time: '10 Oct, 2021 06:00PM',
            status: 'Order Confirmed',
            icon: require('../../assets/order-confirmed-status-icon.png')
        },
        {
            time: '10 Oct, 2021 06:00PM',
            status: 'Order Processing',
            icon: require('../../assets/order-processing-status-icon.png')
        },
        {
            time: '10 Oct, 2021 06:00PM',
            status: 'On The Way',
            icon: require('../../assets/ontheway-status-icon.png')
        },
        {
            time: '10 Oct, 2021 06:00PM',
            status: 'Delivered',
            icon: require('../../assets/delivered-status-icon.png')
        },
    ])

    const renderTimeline = ({ item, index }) => {
        return <HStack space={3}>
            <VStack alignItems={'flex-end'} flex='1'>
                <Text style={{ ...styles.text1, fontSize: 13 }}>10 Oct, 2021</Text>
                <Text style={styles.text1}>06:00 PM</Text>
            </VStack>
            <VStack alignItems={'center'} >
                <View style={{ backgroundColor: colors.PRIMARY_DARK, width: 10, height: 10, borderRadius: 50 }} />
                <View style={{ backgroundColor: colors.PRIMARY_LIGHT, width: 1, height: 66 }} />
            </VStack>
            <VStack justifyContent={'flex-start'} flex='2' paddingY={2}>
                {/* <View style={globleStyles.addIconView}> */}
                {/* <Ionicons name={'person-add-outline'} size={25} color={colors.PRIMARY_DARK} /> */}
                <Image
                    source={item.icon}
                    style={{ width: 35, height: 35, }}
                />
                {/* </View> */}
                <HStack>
                    <Text style={styles.text2}>Status : </Text>
                    <Text style={{ ...styles.text1, ...globleStyles.fontSemiBold, color: colors.PRIMARY_DARK, width: width * 0.42 }} numberOfLines={1}>{item.status}</Text>
                </HStack>
            </VStack>
        </HStack>
    }

    const renderItem = ({ item, index }) => {
        return <HStack borderBottomColor={colors.GREY_3} borderBottomWidth={1} pb="3" pt="3">
            <Image
                source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
                style={{ width: 50, height: 50, borderRadius: 10 }}
            />
            <HStack justifyContent="space-between" flex="1" pl="2" alignItems={'center'}>
                <VStack>
                    <Text style={styles.text1}>Ferro Alloys</Text>
                    <Text style={{ ...styles.text2, fontSize: 12, paddingTop: -5 }}>Expected date 12 December 2021</Text>
                </VStack>
                <VStack>
                    <Text style={{ ...styles.text1, textAlign: 'right' }}>20 Kg</Text>
                    <Text style={{ ...styles.text2, color: colors.BLACK, fontSize: 16, paddingTop: -5, textAlign: 'right' }}>₹6000</Text>
                </VStack>
            </HStack>
        </HStack>
    }



    return (
        <View style={globleStyles.mainView}>

            <Header
                title={'Order Management'}
                isTitleCenter={false}
                styleTitle={{ ...globleStyles.fontMedium }}
                onPress={() => { props.navigation.goBack() }}
            />

            <ScrollView _contentContainerStyle={{
                // px: "10px",
                mb: "4",
                minW: "72"
            }}>
                <Center w="100%" >
                    <Box pt="2" pb="3" w="95%" maxW="350">

                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            data={timelineData}
                            // extraData={this.state}
                            renderItem={renderTimeline}
                            scrollEnabled={false}
                        />

                        <HStack mt="2">
                            <MaterialIcons name="location-pin" color={colors.BLACK} size={20} style={{ alignSelf: "center" }} />
                            <VStack ml="2" w="95%">
                                <Text style={{ ...styles.text2, fontSize: 14 }}>Deliver At:</Text>
                                <Text style={{ ...styles.text1, fontSize: 14, marginTop: -2 }}>712 Fortune Business Hub, Sola</Text>
                            </VStack>
                        </HStack>

                        <View style={{ height: 1, backgroundColor: colors.GREY_3, marginVertical: 10, marginBottom: 0 }} />


                        {/* <Text style={styles.text1}>Order Date</Text>
                        <Text style={{ ...styles.text2, fontSize: 14, paddingTop: -5 }}>12 December 2021</Text> */}
                        {/* <View style={{ height: 20 }} /> */}
                        {data.map(obj => { return renderItem(obj) })}


                        <HStack justifyContent={"space-between"} mt="2">
                            <Text style={{ ...styles.text1, fontSize: 15 }}>Item Total</Text>
                            <Text style={{ ...styles.text1, fontSize: 15 }}>₹12000.00</Text>
                        </HStack>
                        <HStack justifyContent={"space-between"} mt="1">
                            <Text style={{ ...styles.text1, fontSize: 15 }}>Delivery Charges</Text>
                            <Text style={{ ...styles.text1, fontSize: 15 }}>₹500.00</Text>
                        </HStack>
                        <HStack justifyContent={"space-between"} mt="1">
                            <Text style={{ ...styles.text1, fontSize: 15 }}>Taxes and Charges</Text>
                            <Text style={{ ...styles.text1, fontSize: 15 }}>₹60.50</Text>
                        </HStack>
                        <View style={{ height: 1, backgroundColor: colors.GREY_3, marginVertical: 10 }} />
                        <HStack justifyContent={"space-between"}>
                            <Text style={{ ...styles.text1, fontSize: 15, ...globleStyles.fontSemiBold }}>Total Pay</Text>
                            <Text style={{ ...styles.text1, fontSize: 15, ...globleStyles.fontSemiBold }}>₹12560.50</Text>
                        </HStack>
                        <HStack justifyContent={"space-between"} mt="1">
                            <Text style={{ ...styles.text1, fontSize: 15 }}>Payment Menthod</Text>
                            <Text style={{ ...styles.text1, fontSize: 15 }}>Cheque</Text>
                        </HStack>

                    </Box>
                </Center>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({

    text1: {
        ...globleStyles.fontMedium,
        fontSize: 15,
        color: colors.BLACK
    },
    text2: {
        fontSize: 15,
        ...globleStyles.fontMedium,
        color: colors.GREY_6,
        // lineHeight: 19,
        // paddingTop: 2
    },
})