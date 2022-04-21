import { Box, HStack, Stack, Text } from "native-base"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../common/theme"
import { Entypo } from 'react-native-vector-icons';
import globleStyles from "../common/globleStyles";

export default function Header(props) {

    return <>
        <Box safeAreaTop bg="#ffffff" />
        <HStack style={[styles.headerView, props.style, props.isBorder && styles.headerView1]}>
            {props.isLeftIconHide ? null : <TouchableOpacity onPress={props.onPress}>
                <Entypo name="chevron-left" color="black" size={25} />
            </TouchableOpacity>
            }
            <View style={[props.isTitleCenter || props.isTitleCenter == null ? styles.centerTitleView : styles.LeftTitleView]}>
                <Text style={[styles.headerText, props.styleTitle]}>{props.title}</Text>
            </View >
        </HStack>
    </>
}

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 0,
        paddingHorizontal: 10,
        backgroundColor: colors.WHITE,
        // borderBottomWidth: 1,
        // borderBottomColor: colors.GREY_4
    },
    headerView1: {
        borderBottomWidth: 1,
        borderBottomColor: colors.GREY_4
    },
    headerText: {
        color: colors.BLACK,
        fontSize: 22,
        ...globleStyles.fontBold
    },
    centerTitleView: { alignSelf: 'center', flex: 1, alignItems: 'center', position: 'absolute', left: 1, right: 1 },
    LeftTitleView: { alignSelf: 'center', flex: 1, alignItems: 'flex-start', left: 10 }
})