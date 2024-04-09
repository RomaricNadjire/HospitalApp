/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { COLORS, PADDING, TEXT_SIZE } from "../../outils/constantes";

const DashboardStyle = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
    },

    profile: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },

    userName: {
        fontSize: 20,
        color: COLORS.black,
    },

    scrolableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginRight: 10,
    },

    title: {
        fontSize: TEXT_SIZE.title,
        fontWeight: 'bold',
        color: COLORS.black,
        paddingHorizontal: PADDING.horizontal,
    },

    link: {
        color: COLORS.main,
    },

    doctorsContainer: {
        padding: PADDING.horizontal
    },

    doctorCard: {
        flex: 1,
        gap: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding: PADDING.horizontal,
        margin: 15,
        borderRadius: 6,
    },

    DoctorProfile: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
    },

});

export default DashboardStyle;

