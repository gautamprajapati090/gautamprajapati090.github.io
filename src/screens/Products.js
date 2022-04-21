import { Box, Center, VStack, WarningOutlineIcon, ScrollView, Input, Icon, Pressable, HStack, Spacer, StatusBar, useColorModeValue, Stack, Switch } from 'native-base';
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Platform,
    Image
} from 'react-native';
import globleStyles, { height } from '../common/globleStyles';
import { colors } from '../common/theme';
import Header from '../components/Header';
import { InputCard } from '../components/InputCard';
import { Entypo, Ionicons } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
import { DummyText } from '../common/Constants';
var { width } = Dimensions.get('window');

export default function Products(props) {

    const [tabIndex, setTabIndex] = useState(2)
    const [data, setData] = useState(Array(12).fill(0))

    const renderItem1 = ({ item, index }) => {
        return <HStack borderColor={colors.PRIMARY_DARK} borderWidth={1} borderRadius={5} p="1" marginY="1">
            <Image
                source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
                style={{ width: 85, borderRadius: 5 }}
            />
            <VStack justifyContent="space-between" space={1} paddingX="1.5" flex={1} >
                <Stack>
                    <Text style={globleStyles.cardTextLabel}>Name</Text>
                    <Text style={globleStyles.cardTextValue} numberOfLines={1}>Carbon Grophite</Text>
                </Stack>
                <VStack justifyContent="space-between" flex={1}>
                    <Stack flex={1}>
                        <Text style={globleStyles.cardTextLabel}>Description</Text>
                        <Text style={{ ...globleStyles.cardTextValue }} numberOfLines={3}>{DummyText}</Text>
                    </Stack>
                    <Switch size="md" width={30} height={30} alignSelf={'flex-end'} top="1.5" />
                </VStack>
            </VStack>

            <VStack justifyContent="space-between">
                <Stack style={globleStyles.cardIconView}>
                    <Ionicons name={'create-outline'} size={20} color={colors.PRIMARY_DARK} />
                </Stack>
                <Stack style={globleStyles.cardIconView}>
                    <Ionicons name={'eye-outline'} size={20} color={colors.PRIMARY_DARK} />
                </Stack>
                <Stack style={globleStyles.cardIconView}>
                    <Ionicons name={'trash-outline'} size={20} color={colors.PRIMARY_DARK} />
                </Stack>
            </VStack>
        </HStack>
    }



    return (
        <View style={globleStyles.mainView}>

            <Header title={'Products'} isLeftIconHide isTitleCenter={false} />

            {/* <Center w="100%" > */}
            <Box pb="185" w="95%" maxW="350" alignSelf={'center'}>

                <HStack space={2}>

                    <InputCard
                        // onChangeText={loginEmailChange}
                        blurOnSubmit={false}
                        // ref={"emailCont"}
                        inputRef={"email"}
                        // onSubmitEditing={() => this.onSubmit("email")}
                        // value={email}
                        // returnKey={"next"}
                        // keyboardType={"email-address"}
                        secureEntry={false}
                        placeholder={"Start typing..."}
                        cardInputStyle={{ flex: 1, borderColor: colors.PRIMARY_DARK }}
                        textInputStyle={{ paddingLeft: 0 }}
                        rightIcon={<Entypo name="magnifying-glass" color={colors.PRIMARY_DARK} size={20} />}
                        onPressRightIcon={() => console.log('hide gst pressed')}>
                    </InputCard>
                    <TouchableOpacity activeOpacity={0.8} style={globleStyles.addIconView} onPress={() => props.navigation.navigate("AddProduct")}>
                        <Ionicons name={'person-add-outline'} size={25} color={colors.WHITE} />
                    </TouchableOpacity>
                </HStack>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem1}
                // style={{ maxHeight: height - 210 }}
                />
            </Box>
            {/* </Center> */}
        </View>
    );
}


const styles = StyleSheet.create({
    materialButton: { height: 30, minWidth: 70, position: 'absolute', right: 0, bottom: 0, marginVertical: 0 }
})