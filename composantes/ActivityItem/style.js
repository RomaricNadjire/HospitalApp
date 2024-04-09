/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
    scrolableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },

    scrolableListItem: {
        flexDirection: 'column',
        gap: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        margin: 5,
        elevation: 5,
        borderRadius: 5,
        maxWidth: '100%',
        shadowOpacity: 0.5,
    },

    mainText: {
        color: COLORS.black,
        flexWrap: 'wrap',
        fontWeight: 'bold',
    },

    subText: {
        marginTop: 3,
        fontSize: 10,
        color: COLORS.black,
        flexWrap: 'wrap',
    },
});

export default styles;
