import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Stack, VStack, WarningOutlineIcon } from 'native-base';
import React, { useState } from 'react';
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
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

var { width } = Dimensions.get('window');

export default function Verification(props) {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={globleStyles.mainView}>
            <Header title={'Verification'} onPress={() => props.navigation.goBack()} />
            <Center w="100%">
                <Box safeArea p="2" py="8" w="95%" maxW="350">

                    <Text style={globleStyles.subHeader}>Verification</Text>
                    <Text style={globleStyles.normalText}>Enter the OTP code from the mobile. We just sent you at ********42</Text>

                    <VStack space={3} mt="10">
                        <FormControl isRequired isInvalid>
                            <CodeField
                                ref={ref}
                                {...propss}
                                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                value={value}
                                onChangeText={setValue}
                                cellCount={4}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <Text
                                        key={index}
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />
                            {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Please enter a phonenumber!
                            </FormControl.ErrorMessage> */}
                        </FormControl>
                        <MaterialButtonDark onPress={() => props.navigation.navigate('HomePage')}>Verify</MaterialButtonDark>
                        <View style={globleStyles.actionLine}>
                            <Text style={globleStyles.actionText}>{`Didn't receive the code?`}</Text>
                            <TouchableOpacity style={globleStyles.actionItem} onPress={null}>
                                <Text style={{ ...globleStyles.actionText, color: colors.PRIMARY_DARK, fontFamily: FontSemiBold }}>{'Resend Code'}</Text>
                            </TouchableOpacity>
                        </View>
                    </VStack>
                </Box>
            </Center>

        </View>
    );
}


const styles = StyleSheet.create({
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 1,
        borderColor: colors.GREY_4,
        borderRadius: 5,
        textAlign: 'center',
        // marginHorizontal: 20
    },
    focusCell: {
        borderColor: '#000',
    },
})