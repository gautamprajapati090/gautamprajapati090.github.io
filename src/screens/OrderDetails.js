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
import { Entypo, MaterialIcons } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
import { TabView, SceneMap } from "react-native-tab-view";
import CustomSwitch from '../components/CustomSwitch';
var { width } = Dimensions.get('window');

export default function OrderDetails(props) {

    const [tabIndex, setTabIndex] = useState(2)
    const [data, setData] = useState(Array(2).fill(0))

    const onSelectSwitch = index => {
        // alert('Selected index: ' + index);
        console.log('Selected index: ' + index);
        setTabIndex(index)
    };


    const renderItem = ({ item, index }) => {
        return <HStack borderBottomColor={colors.GREY_5} borderBottomWidth={1} pb="2" pt="1" mb="1">
            <Image
                source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
                style={{ width: 50, height: 50, borderRadius: 10 }}
            />
            <HStack justifyContent="space-between" flex="1" pl="2">
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

    const renderItem1 = ({ item, index }) => {
        return <HStack borderBottomColor={colors.GREY_5} borderBottomWidth={1} pb="2" pt="1" mb="1">
            <Checkbox value="one" my={0}>
                <Image
                    source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                />
            </Checkbox>
            <HStack justifyContent="space-between" flex="1" pl="2">
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
                title={'#23232323232232'}
                isTitleCenter={false}
                styleTitle={{ ...globleStyles.fontMedium }}
                onPress={() => { props.navigation.goBack()}}
            />

            <ScrollView _contentContainerStyle={{
                // px: "10px",
                mb: "4",
                minW: "72"
            }}>
                <Center w="100%" >
                    <Box pb="1" w="95%" maxW="350">

                        <Text style={styles.text1}>Order Date</Text>
                        <Text style={{ ...styles.text2, fontSize: 14, paddingTop: -5 }}>12 December 2021</Text>
                        <View style={{ height: 20 }} />
                        {data.map(obj => { return renderItem1(obj) })}
                        <HStack>
                            <MaterialIcons name="location-pin" color={colors.BLACK} size={20} style={{ alignSelf: "center" }} />
                            <VStack ml="2" w="95%">
                                <Text style={{ ...styles.text2, fontSize: 16 }}>Deliver At:</Text>
                                <Text style={{ ...styles.text1, marginTop: -2 }}>712 Fortune Business Hub, Sola</Text>
                            </VStack>
                        </HStack>
                        <Text style={{ ...globleStyles.subHeader, fontSize: 20, marginTop: 10 }}>Message</Text>
                        <InputCard
                            multiline
                            placeholder={"Enter message here up to 200 character"}
                            textInputStyle={{ paddingLeft: 0 }}
                            maxLength={200}
                        />

                        <HStack justifyContent={"space-between"} mt="4">
                            <Text style={{ ...globleStyles.subHeader, fontSize: 20 }}>Total Payment</Text>
                            <Text style={{ ...globleStyles.subHeader, color: colors.BLACK, fontSize: 20 }}>₹6000</Text>
                        </HStack>

                    </Box>
                </Center>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({

    text1: {
        ...globleStyles.fontSemiBold,
        fontSize: 16
    },
    text2: {
        fontSize: 15,
        ...globleStyles.fontMedium,
        color: colors.GREY_7,
        // lineHeight: 19,
        paddingTop: 2
    },
})