import { StyleSheet } from "react-native";
const Common_Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 1,
    marginRight: 1,
    backgroundColor: "beige"
  },
  input_margin_left_and_right: {
    marginLeft: 5,
    marginRight: 5
  },
  input_margin_top_and_bottom: {
    marginBottom: 5,
    marginTop: 5
  },
  icon_size: {
    height: 24,
    width: 24
  },
  textWhite: {
    color: "#fff"
  },
  textBlack: {
    color: "#000"
  },

  lightIcon: {
    fontSize: 18,
    color: "#87838B"
  },

  headerC: {
    color: "#fff",
    fontSize: 18,
    marginTop: 20
  },

  // text colors
  textblue: { color: "#007bff" },
  textindigo: { color: "#6610f2" },
  textpurple: { color: "#6f42c1" },
  textpink: { color: "#e83e8c" },
  textred: { color: "#dc3545" },
  textorange: { color: "#fd7e14" },
  textyellow: { color: "#ffc107" },
  textgreen: { color: "#28a745" },
  textteal: { color: "#20c997" },
  textcyan: { color: "#17a2b8" },
  textwhite: { color: "#fff" },
  textgray: { color: "#6c757d" },
  textgraydark: { color: "#343a40" },
  textprimary: { color: "#007bff" },
  textsecondary: { color: "#6c757d" },
  textsuccess: { color: "#28a745" },
  textinfo: { color: "#17a2b8" },
  textwarning: { color: "#ffc107" },
  textdanger: { color: "#dc3545" },
  textlight: { color: "#f8f9fa" },
  textdark: { color: "#343a40" },
  textlightblue: { color: "#62B1F6" },

  // background colors

  bgPrimary: { backgroundColor: "#007bff" },
  bgSuccess: { backgroundColor: "#28a745" },
  bgInfo: { backgroundColor: "#17a2b8" },
  bgWarning: { backgroundColor: "#ffc107" },
  bgDanger: { backgroundColor: "#dc3545" },
  bgSecondary: { backgroundColor: "#6c757d" },
  bgDark: { backgroundColor: "#343a40" },
  bgLight: { backgroundColor: "#f8f9fa" },
  bgSilver: { backgroundColor: "#eeeeee" },
  bgOrange: { backgroundColor: "#FF6347" },

  //fonts
  FontOpenSansLight: { fontFamily: "OpenSansLight" },
  FontOpenSansRegular: { fontFamily: "OpenSansRegular" },
  FontRobotoLight: { fontFamily: "RobotoLight" },
  FontRobotoRegular: { fontFamily: "RobotoRegular" },
  FontRobotoThin: { fontFamily: "RobotoThin" },
  FontOpenSansCondensedBold: { fontFamily: "OpenSansCondensedBold" },
  FontOpenSansCondensedLight: { fontFamily: "OpenSansCondensedLight" },

  // Font sizes
  FontXXSmall: { fontSize: 10 },
  FontXSmall: { fontSize: 14 },
  FontSmall: { fontSize: 18 },
  FontMedium: { fontSize: 22 },
  FontLarge: { fontSize: 26 },
  FontXLarge: { fontSize: 30 },
  FontXXLarge: { fontSize: 35 },

  // font styles
  FontItalic: { fontStyle: "italic" },
  FontBold: { fontWeight: "bold" },

  // margins
  ma5: { margin: 5 },
  ma10: { margin: 10 },
  ma15: { margin: 15 },
  ma20: { margin: 20 },
  ma25: { margin: 25 },
  ma30: { margin: 30 },
  ma35: { margin: 35 },
  ma40: { margin: 40 },
  ma45: { margin: 45 },
  ma50: { margin: 50 },

  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt15: { marginTop: 15 },
  mt20: { marginTop: 20 },
  mt25: { marginTop: 25 },
  mt30: { marginTop: 30 },
  mt35: { marginTop: 35 },
  mt40: { marginTop: 40 },
  mt45: { marginTop: 45 },
  mt50: { marginTop: 50 },
  mt60: { marginTop: 60 },
  mt70: { marginTop: 70 },
  mt80: { marginTop: 80 },
  mt150: { marginTop: 150 },

  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb15: { marginBottom: 15 },
  mb20: { marginBottom: 20 },
  mb25: { marginBottom: 25 },
  mb30: { marginBottom: 30 },
  mb35: { marginBottom: 35 },
  mb40: { marginBottom: 40 },
  mb45: { marginBottom: 45 },
  mb50: { marginBottom: 50 },
  mb60: { marginBottom: 60 },
  mb70: { marginBottom: 70 },
  mb80: { marginBottom: 80 },
  mb150: { marginBottom: 150 },

  ml5: { marginLeft: 5 },
  ml10: { marginLeft: 10 },
  ml15: { marginLeft: 15 },
  ml20: { marginLeft: 20 },
  ml25: { marginLeft: 25 },
  ml30: { marginLeft: 30 },
  ml35: { marginLeft: 35 },
  ml40: { marginLeft: 40 },
  ml45: { marginLeft: 45 },
  ml50: { marginLeft: 50 },

  mr5: { marginRight: 5 },
  mr10: { marginRight: 10 },
  mr15: { marginRight: 15 },
  mr20: { marginRight: 20 },
  mr25: { marginRight: 25 },
  mr30: { marginRight: 30 },
  mr35: { marginRight: 35 },
  mr40: { marginRight: 40 },
  mr45: { marginRight: 45 },
  mr50: { marginRight: 50 },

  //paddings
  pa5: { padding: 5 },
  pa10: { padding: 10 },
  pa15: { padding: 15 },
  pa20: { padding: 20 },
  pa25: { padding: 25 },
  pa30: { padding: 30 },
  pa35: { padding: 35 },
  pa40: { padding: 40 },
  pa45: { padding: 45 },
  pa50: { padding: 50 },

  pt5: { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pt15: { paddingTop: 15 },
  pt20: { paddingTop: 20 },
  pt25: { paddingTop: 25 },
  pt30: { paddingTop: 30 },
  pt35: { paddingTop: 35 },
  pt40: { paddingTop: 40 },
  pt45: { paddingTop: 45 },
  pt50: { paddingTop: 50 },

  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb15: { paddingBottom: 15 },
  pb20: { paddingBottom: 20 },
  pb25: { paddingBottom: 25 },
  pb30: { paddingBottom: 30 },
  pb35: { paddingBottom: 35 },
  pb40: { paddingBottom: 40 },
  pb45: { paddingBottom: 45 },
  pb50: { paddingBottom: 50 },

  pl5: { paddingLeft: 5 },
  pl10: { paddingLeft: 10 },
  pl15: { paddingLeft: 15 },
  pl20: { paddingLeft: 20 },
  pl25: { paddingLeft: 25 },
  pl30: { paddingLeft: 30 },
  pl35: { paddingLeft: 35 },
  pl40: { paddingLeft: 40 },
  pl45: { paddingLeft: 45 },
  pl50: { paddingLeft: 50 },

  pr5: { paddingRight: 5 },
  pr10: { paddingRight: 10 },
  pr15: { paddingRight: 15 },
  pr20: { paddingRight: 20 },
  pr25: { paddingRight: 25 },
  pr30: { paddingRight: 30 },
  pr35: { paddingRight: 35 },
  pr40: { paddingRight: 40 },
  pr45: { paddingRight: 45 },
  pr50: { paddingRight: 50 },

  // alignments

  pullLeft: { alignSelf: "flex-start" },
  pullRight: { alignSelf: "flex-end" },

  textcenter: { textAlign: "center" },
  textleft: { textAlign: "left" },
  textright: { textAlign: "right" },
  elementcenter: { alignSelf: "center" },

  borderRadius5black1: {
    borderRadius: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  }
});
export default Common_Style;
