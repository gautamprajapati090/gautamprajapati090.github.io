import { Box, Center, FormControl, Stack, VStack, WarningOutlineIcon, ScrollView, Input, Icon, Radio, HStack } from 'native-base';
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

export default function AddProduct(props) {

    return (
        <View style={globleStyles.mainView}>

            <Header title={'Add Product'} onPress={() => props.navigation.goBack()} isTitleCenter={false} />
            <ScrollView _contentContainerStyle={{
                // px: "10px",
                mb: "4",
                minW: "72"
            }}>
                <Center w="100%">
                    <Box p="2" w="95%" maxW="350">

                        <VStack space={3} mt="0">
                            <Stack style={{ marginVertical: 10, alignItems: 'center' }}>
                                {/* {capturedImage ?
                                <Image
                                    source={{ uri: capturedImage }}
                                    style={styles.profileIcon}
                                />
                                : */}
                                <Image
                                    source={require('../../assets/icon.png')}
                                    style={globleStyles.profileIcon}
                                />
                                {/* } */}
                                {/* image picker */}
                                <TouchableOpacity activeOpacity={.5} style={globleStyles.profileEditView} onPress={null}>
                                    <Text style={globleStyles.normalTextWhite}>Upload</Text>

                                </TouchableOpacity>

                            </Stack>
                            <FormControl isRequired isInvalid>
                                <InputCard
                                    label={'Product Name'}
                                    // onChangeText={loginEmailChange}
                                    blurOnSubmit={false}
                                    // ref={"emailCont"}
                                    inputRef={"email"}
                                    // onSubmitEditing={() => this.onSubmit("email")}
                                    // value={email}
                                    // returnKey={"next"}
                                    // keyboardType={"email-address"}
                                    secureEntry={false}
                                    placeholder={"Enter Product Name"} >
                                    {/* <Entypo name="user" color={colors.GREY_7} size={20} /> */}
                                    <MaterialIcons name="person" color={colors.GREY_7} size={20} />
                                </InputCard>
                                {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Please enter a phonenumber!
                                </FormControl.ErrorMessage> */}
                            </FormControl>
                            <FormControl isRequired isInvalid>
                                <InputCard
                                    label={'Description'}
                                    // onChangeText={loginEmailChange}
                                    blurOnSubmit={false}
                                    // ref={"emailCont"}
                                    inputRef={"email"}
                                    // onSubmitEditing={() => this.onSubmit("email")}
                                    // value={email}
                                    // returnKey={"next"}
                                    // keyboardType={"email-address"}
                                    secureEntry={false}
                                    placeholder={"Enter Description up to 200 characters"}
                                    multiline
                                    maxLength={200}
                                    textInputStyle={{ paddingLeft: 0}}>
                                </InputCard>
                            </FormControl>

                            <FormControl isInvalid>
                                <Text style={{ ...globleStyles.normalText, ...globleStyles.fontSemiBold }}>Quantity Type</Text>
                                <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
                                    <HStack space={4}>
                                        <Radio value="1" my={1} colorScheme="blue" color="green" selectedColor="yellow">
                                            KG
                                        </Radio>
                                        <Radio value="2" my={1} colorScheme="blue">
                                            LBS
                                        </Radio>
                                    </HStack>
                                </Radio.Group>
                            </FormControl>

                            <MaterialButtonDark onPress={() => props.navigation.navigate('Verification')}>Submit</MaterialButtonDark>

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