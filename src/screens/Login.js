import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Stack, VStack, WarningOutlineIcon } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView,
    Linking
} from 'react-native';
import { colors } from '../common/theme';
import globleStyles from '../common/globleStyles';
import Header from '../components/Header';
import { InputCard } from '../components/InputCard';
import { Entypo } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
import { FontSemiBold } from '../common/Constants';
var { width } = Dimensions.get('window');

export default function Login(props) {

    return (
        <View style={globleStyles.mainView}>
            <Header title={'Login'} />

            {/* <View style={globleStyles.subMainView}>
                <Text style={globleStyles.subHeader}>Login Now</Text>
                <Text style={globleStyles.normalText}>Please enter your mobile number so we can send OTP for login</Text>
            </View> */}

            <Center w="100%">
                <Box safeArea p="2" py="8" w="95%" maxW="350">
                    
                    <Text style={globleStyles.subHeader}>Login Now</Text>
                    <Text style={globleStyles.normalText}>Please enter your mobile number so we can send OTP for login</Text>

                    <VStack space={3} mt="10">
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
                                <Entypo name="mobile" color="black" size={20} />
                            </InputCard>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Please enter a phonenumber!
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <MaterialButtonDark onPress={() => props.navigation.navigate('Verification')}>Send Verification Code</MaterialButtonDark>
                        
                        <View style={globleStyles.actionLine}>
                            <Text style={globleStyles.actionText}>{`Don't have an account?`}</Text>
                            <TouchableOpacity style={globleStyles.actionItem} onPress={() => props.navigation.navigate('Register')}>
                                <Text style={{ ...globleStyles.actionText, color: colors.PRIMARY_DARK, fontFamily: FontSemiBold }}>{'Sign up'}</Text>
                            </TouchableOpacity>
                        </View>
                    </VStack>
                </Box>
            </Center>

        </View>
    );
}


const styles = StyleSheet.create({
    
    // title: {
    //     fontFamily: 'Sofia-Pro-Bold',
    //     fontSize: width * 0.045,
    //     color: colors.DARK_BLUE,
    //     textAlign: 'center',
    //     textDecorationLine: "underline",
    //     marginVertical: 5
    // }
})