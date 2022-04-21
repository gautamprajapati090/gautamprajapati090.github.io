import { Box, Center, VStack, WarningOutlineIcon, ScrollView, Input, Icon, Pressable, HStack, Spacer, StatusBar, useColorModeValue, Stack, Image, Checkbox } from 'native-base';
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    TextInput,
    Platform
} from 'react-native';
import globleStyles, { height } from '../common/globleStyles';
import { colors } from '../common/theme';
import Header from '../components/Header';
import { InputCard } from '../components/InputCard';
import { Entypo, MaterialIcons } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
import { TabView, SceneMap } from "react-native-tab-view";
import CustomSwitch from '../components/CustomSwitch';
import { isIphoneWithNotch } from '../common/Constants';
var { width } = Dimensions.get('window');

export default function ChatBoard(props) {

    const [message, setMessage] = useState("")

    const onMessageSend = async () => {
    }

    return (
        <View style={globleStyles.mainView}>

            <Header
                title={'#23232323232232'}
                isTitleCenter={false}
                styleTitle={{ ...globleStyles.fontMedium }}
                onPress={() => { props.navigation.goBack() }}
            />

            <View style={{ flex: 1 }}></View>

            <View style={styles.messageEnterContainer}>
                <TouchableOpacity style={styles.sendButtonContainer} onPress={null}>
                    {/* <Image source={Assets.plus} style={style.sendImage} resizeMode={"contain"} /> */}
                    <Entypo name="plus" color={colors.DARK_BLUE} size={25} style={styles.sendImage} />
                </TouchableOpacity>
                <TextInput
                    placeholder={'Write a message'}
                    style={styles.messageInput}
                    value={message}
                    placeholderTextColor={colors.GREY_7}
                    multiline={true}
                    // numberOfLines={3}
                    onChangeText={(message) => setMessage(message)}
                />
                <TouchableOpacity style={styles.sendButtonContainer} onPress={onMessageSend}>
                    {/* <Image source={Assets.send} style={style.sendImage} resizeMode={"contain"} /> */}
                    {/* <Entypo name="direction" color="red" size={20} style={style.sendImage} /> */}
                    <MaterialIcons name="send" color={colors.DARK_BLUE} size={20} style={styles.sendImage} />
                </TouchableOpacity>
            </View>

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
    messageEnterContainer: {
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: colors.GREY_1,
        flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center',
        marginBottom: isIphoneWithNotch() || Platform.OS == "android" ? 0 : -28
    },
    messageInput: {
        flex: 1, ...globleStyles.fontReg, textAlignVertical: 'center',
        padding: 10, marginTop: 5, paddingVertical: Platform.OS == "android" ? 0 : 10, maxHeight: 70,
    },
    sendImage: {
        width: 20,
        height: 20,
    },
    receiverImage: { alignSelf: "flex-end", marginRight: 10, width: 30, height: 30, borderRadius: 60 },
    messageImage: { width: 170, height: 170, padding: -10, borderRadius: 10 }
})