import { Badge, Box, Flex, HStack, Pressable, Image, AspectRatio, VStack } from 'native-base';
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Linking
} from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import globleStyles from '../common/globleStyles';
import { colors } from '../common/theme';
var { width } = Dimensions.get('window');

export default function HomeAdmin(props) {

    const [datas, setDatas] = useState(Array(6).fill(0))
    const renderData = ({ item, index }) => {
        return <TouchableOpacity activeOpacity={0.5} style={styles.mainCard} onPress={() => props.navigation.navigate("ProductDetail")}>
            <VStack justifyContent="space-between" flex={1} marginY="1.5" zIndex={99999999} overflow="hidden" >
                <Text style={{...globleStyles.subHeader, fontSize:40, color:colors.GREY_9,paddingHorizontal: 10}}>150</Text>
                <Image
                    source={require('../../assets/user-menu-icon.png')}
                    style={styles.box_icon}
                />
                <Text style={styles.text}>Total Users</Text>
            </VStack>
        </TouchableOpacity>;
    }

    return (
        <View style={globleStyles.mainViewWithColor}>
            <Box safeAreaTop bg={colors.PRIMARY_LIGHT} />
            <View style={globleStyles.subMainView}>

                <HStack justifyContent='space-between'>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => { props.navigation.toggleDrawer() }}>
                        <View style={globleStyles.toggleIconView}>
                            <Entypo name="menu" color={colors.DARK_BLUE} size={30} />
                        </View>
                    </TouchableOpacity>
                    <Image
                        source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
                        style={{ width: 45, height: 45, borderRadius: 10 }}
                    />
                </HStack>

                <FlatList
                    refreshing={true}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    data={datas}
                    // extraData={this.state}
                    renderItem={renderData}
                    style={{
                        flex: 0, paddingTop: 5,
                        backgroundColor: colors.fullTransparent
                    }}
                    numColumns={2}
                    fadingEdgeLength={50}
                    contentContainerStyle={
                        {
                            backgroundColor: colors.fullTransparent,
                        }
                    }
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.WHITE,
        //marginTop: StatusBar.currentHeight,
    },
    title: {
        ...globleStyles.fontBold,
        fontSize: width * 0.045,
        color: colors.DARK_BLUE,
        textAlign: 'center',
        textDecorationLine: "underline",
        marginVertical: 5
    },
    box_icon: {
        width: 90,
        height: 90,
        position: 'absolute',
        right:-20,
        zIndex:-99999999
    },
    text: {
        fontSize: 25,
        ...globleStyles.fontMedium,
        color:colors.BLACK,
        paddingHorizontal: 10,
    },
    mainCard: {
        width: Dimensions.get('window').width / 2.25,
        height: Dimensions.get('window').width / 2.25,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginTop: 5,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 5,
    },
})