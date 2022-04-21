import { Box, Center, FormControl, Stack, VStack, WarningOutlineIcon, ScrollView, Input, Icon } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    Linking
} from 'react-native';
import { FontSemiBold } from '../common/Constants';
import globleStyles from '../common/globleStyles';
import { colors } from '../common/theme';
import Header from '../components/Header';
import { InputCard } from '../components/InputCard';
import { Entypo, MaterialIcons } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
var { width } = Dimensions.get('window');

export default function AddUser(props) {

    return (
        <View style={globleStyles.mainView}>

            <Header title={'Add User'} onPress={() => props.navigation.goBack()} isTitleCenter={false}/>
            <ScrollView _contentContainerStyle={{
                // px: "10px",
                mb: "4",
                minW: "72"
            }}>
                <Center w="100%">
                    <Box p="2" w="95%" maxW="350">
                        <VStack space={3}>
                            <FormControl isRequired isInvalid>
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
                                    placeholder={"Enter Full Name"} >
                                    {/* <Entypo name="user" color={colors.GREY_7} size={20} /> */}
                                    <MaterialIcons name="person" color={colors.GREY_7} size={20} />
                                </InputCard>
                                {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Please enter a phonenumber!
                                </FormControl.ErrorMessage> */}
                            </FormControl>
                            <FormControl isRequired isInvalid>
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
                                    placeholder={"Enter Email Address"} >
                                    <Entypo name="email" color={colors.GREY_7} size={20} />
                                </InputCard>
                            </FormControl>
                            <FormControl isRequired isInvalid>
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
                                    placeholder={"Enter Mobile Number"} >
                                    <Entypo name="mobile" color={colors.GREY_7} size={20} />
                                </InputCard>
                            </FormControl>
                            <FormControl isRequired isInvalid>
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
                                    placeholder={"Enter Company Name"} >
                                    <MaterialIcons name="business" color={colors.GREY_7} size={20} />
                                </InputCard>
                            </FormControl>
                            <FormControl isRequired isInvalid>
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
                                    placeholder={"Enter GST Number"}
                                    rightIcon={<Entypo name="eye-with-line" color={colors.GREY_7} size={20} />}
                                    onPressRightIcon={() => console.log('hide gst pressed')}>
                                    <Entypo name="calculator" color={colors.GREY_7} size={20} />
                                </InputCard>
                            </FormControl>
                            <MaterialButtonDark onPress={() => props.navigation.navigate('Verification')}>Register Now</MaterialButtonDark>

                        </VStack>
                    </Box>
                </Center>
            </ScrollView>
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
    }
})