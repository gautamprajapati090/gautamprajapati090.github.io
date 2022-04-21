import { Box, Center, FormControl, Stack, VStack, WarningOutlineIcon, ScrollView, Image, Icon, HStack } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Linking
} from 'react-native';
import { DummyText, FontSemiBold } from '../common/Constants';
import globleStyles, { height } from '../common/globleStyles';
import { colors } from '../common/theme';
import Header from '../components/Header';
import { InputCard } from '../components/InputCard';
import { Entypo, MaterialIcons } from 'react-native-vector-icons';
import MaterialButtonDark from '../components/MaterialButtonDark';
var { width } = Dimensions.get('window');

export default function ProductDetail(props) {

    return (
        <View style={globleStyles.mainView}>

            <Header title={''} onPress={() => props.navigation.goBack()} />

            <ScrollView _contentContainerStyle={{
                // px: "10px",
                mb: "4",
                minW: "72"
            }}>
                <Center w="100%">
                    <Box p="2" pt="0" w="100%" maxW="350">

                        <VStack space={3} mt="0">
                            <Image
                                source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
                                style={{ width: width, height: width * 0.8 }}
                            />
                            <Text style={globleStyles.subHeaderCenter}>Sole Proprietorship</Text>

                            <Text style={globleStyles.subHeader}>Quantity</Text>
                            <HStack style={{ borderColor: colors.PRIMARY_DARK, borderWidth: 1, alignSelf: 'flex-start' }}>
                                <Text style={{ ...globleStyles.normalText, padding: 5, paddingHorizontal: 8, color: colors.GREY_8 }}>200</Text>
                                <Text style={{ ...globleStyles.normalText, padding: 5, paddingHorizontal: 10, backgroundColor: colors.PRIMARY_DARK, color: colors.WHITE }}>KG</Text>
                            </HStack>

                            <Text style={globleStyles.subHeader}>Description</Text>
                            <Text style={{ ...globleStyles.normalText, color: colors.GREY_8 }}>{DummyText}</Text>

                            <Text style={globleStyles.subHeader}>Expected Date</Text>
                            <HStack style={{ borderColor: colors.PRIMARY_DARK, borderWidth: 1, alignSelf: 'flex-start', alignItems: 'center', paddingRight: 5 }}>
                                <Text style={{ ...globleStyles.normalText, padding: 5, paddingHorizontal: 8, color: colors.GREY_8 }}>20 December 2021</Text>
                                <Entypo name="calendar" color={colors.PRIMARY_DARK} size={20} />
                            </HStack>

                            <MaterialButtonDark onPress={() => props.navigation.navigate('Verification')}>Add To Cart</MaterialButtonDark>

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