import { Badge, Box, Flex, HStack, Pressable, Image, AspectRatio } from 'native-base';
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
import globleStyles from '../common/globleStyles';
import { colors } from '../common/theme';
var { width } = Dimensions.get('window');

export default function Home(props) {

    const [datas, setDatas] = useState(Array(10).fill(0))
    const renderData = ({ item, index }) => {
        return <TouchableOpacity activeOpacity={0.5} style={styles.mainCard} onPress={() => props.navigation.navigate("ProductDetail")}>
            <Image
                source={{ uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" }}
                style={styles.box_icon}
            />
            <Text style={styles.text}>Carbons</Text>
        </TouchableOpacity>;
    }

    return (
        <View style={globleStyles.mainViewWithColor}>
            <Box safeAreaTop bg={colors.PRIMARY_LIGHT} />
            <View style={globleStyles.subMainView}>

                <Text style={globleStyles.normalText}>Hello</Text>
                <Text style={globleStyles.subHeader}>Gautam</Text>
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
        fontFamily: 'Sofia-Pro-Bold',
        fontSize: width * 0.045,
        color: colors.DARK_BLUE,
        textAlign: 'center',
        textDecorationLine: "underline",
        marginVertical: 5
    },
    box_icon: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        // color: AppStyles.colorMain.color,
        textAlign: 'center',
        ...globleStyles.fontMedium,
        marginTop: 5,
        marginLeft: 0,
        marginRight: 0,
    },
    mainCard: {
        width: Dimensions.get('window').width / 2.25,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingTop: 15,
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
        elevation: 9,
    },
})