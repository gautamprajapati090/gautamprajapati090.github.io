import {
  Dimensions,
  StyleSheet,
  Platform
} from 'react-native';
import { FontBold, FontLight, FontMedium, FontRegular, FontSemiBold } from './Constants';
import { colors } from './theme';

export const { width, height } = Dimensions.get("window");
export const { colorApp } = colors;
const productsItemWidth = (width / 2) - 7;
const IS_IPHONE_X = height === 812 || height === 896;
const globleStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  mainViewWithColor: {
    flex: 1,
    backgroundColor: colors.PRIMARY_LIGHT,
  },
  subMainView: {
    marginHorizontal: 10,
    paddingBottom: 140
  },
  subHeader: {
    fontSize: 25,
    fontFamily: FontBold,
    color: colors.BLACK
  },
  subHeaderCenter: {
    fontSize: 25,
    fontFamily: FontBold,
    alignSelf: 'center'
  },
  normalText: {
    fontSize: 14,
    fontFamily: FontRegular,
    lineHeight: 18,
    color: colors.BLACK
  },
  normalTextWhite: {
    fontSize: 12,
    fontFamily: FontRegular,
    color: colors.WHITE
  },
  fontBold: {
    fontFamily: FontBold
  },
  fontSemiBold: {
    fontFamily: FontSemiBold
  },
  fontReg: {
    fontFamily: FontRegular
  },
  fontMedium: {
    fontFamily: FontMedium
  },
  fontLight: {
    fontFamily: FontLight
  },
  actionLine: {
    height: 20,
    flexDirection: "row",
    marginTop: 0,
    alignSelf: 'center'
  },
  actionItem: {
    height: 20,
    marginLeft: 5,
    marginRight: 15,
    alignSelf: "center"
  },
  actionText: {
    fontFamily: FontRegular,
    fontSize: 15,
  },
  profileIcon: {
    // backgroundColor: 'blue',
    resizeMode: 'cover',
    width: 100,
    height: 100,
    marginTop: 0,
    // marginLeft: 10,
    borderRadius: 10,
  },
  profileEditIcon: {
    width: 30,
    height: 30,
    right: width * 0.38,
    bottom: -5,
    // alignSelf: 'flex-end',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY_DARK,
    // textAlign: 'center',
    // textAlignVertical: 'center',
    borderRadius: 5,
    position: 'absolute',
  },
  profileEditView: {
    // width: 30,
    // height: 30,
    // right: width * 0.38,
    bottom: -5,
    // alignSelf: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY_DARK,
    // textAlign: 'center',
    // textAlignVertical: 'center',
    borderRadius: 5,
    position: 'absolute',
  },
  toggleIconView: { width: 45, height: 45, backgroundColor: colors.WHITE, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  drawerContainer: {
    backgroundColor: colors.WHITE,
    flex: 1,
    //paddingVertical:30,
    paddingHorizontal: 10,
  },
  drawerItemCont: {
    // flex: 3,
    //justifyContent:"center",
    paddingVertical: 20
  },
  drawerUsername: {
    fontSize: 16,
    fontFamily: FontBold,
    color: colors.BLACK,
  },
  drawerUserEmail: {
    fontSize: 16,
    fontFamily: FontRegular,
    color: colors.GREY_6,
  },
  drawerChangeLink: {
    fontSize: 16,
    fontFamily: FontRegular,
    color: colors.PRIMARY_DARK,
    textDecorationLine: 'underline'
  },
  drawerItemContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginBottom: 9,
    alignItems: 'center',
  },
  drawerItemText: {
    fontSize: 16,
    color: colors.BLACK,
    fontFamily: FontRegular,
    marginLeft: 10
    // textAlign: "right",
  },
  addIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: colors.PRIMARY_DARK,
    height: Platform.OS == 'ios' ? 35 : 45,
    width: Platform.OS == 'ios' ? 35 : 45,
    borderRadius: 5
  },
  cardIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: colors.PRIMARY_LIGHT,
    height: 30,
    width: 30,
    borderRadius: 5
  },
  cardTextLabel: {
    fontSize: 13,
    fontFamily: FontMedium,
    color: colors.GREY_7,
  },
  cardTextValue: {
    fontSize: 14,
    fontFamily: FontMedium,
    color: colors.BLACK,
  },
  errorText: {
    color: colors.RED,
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 12
  },
});
export default globleStyles;
