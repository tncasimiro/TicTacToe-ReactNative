import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textShadowColor: "#aaa",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    mensagem: {
        fontSize: 20,
        marginBottom: 20,
        color: "#555",
        fontWeight: "500",
    },
    tabuleiro: {
        width: 300,
        height: 300,
        flexDirection: "row",
        flexWrap: "wrap",
        borderWidth: 3,
        borderColor: "#444",
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    celula: {
        width: "33.3%",
        height: "33.3%",
        borderWidth: 1,
        borderColor: "#bbb",
        alignItems: "center",
        justifyContent: "center",
    },
    textoCelula: {
        fontSize: 40,
        fontWeight: "bold",
    },
    textoX: {
        color: "#d9534f", // vermelho
    },
    textoO: {
        color: "#0275d8", // azul
    },
    botao: {
        marginTop: 30,
        backgroundColor: "#5cb85c",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default styles;
