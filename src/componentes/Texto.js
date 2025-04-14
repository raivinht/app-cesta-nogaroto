import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}) {
    let estilo = estilos.texto

        const estiloFlattened = Array.isArray(style)
        ? Object.assign({}, ...style)
        : style || {};

    if (estiloFlattened.fontWeight === "bold") {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[estilo, style]}>{children}</Text>;
}


const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    },
})


/* import React from "react";
import {  } from "react-native";

export default function () {
    return;
} */