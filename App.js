import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function App() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState("X");
  const [vencedor, setVencedor] = useState(null);

  function verificarVencedor(novoTabuleiro) {
    const combinacoes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of combinacoes) {
      if (
        novoTabuleiro[a] &&
        novoTabuleiro[a] === novoTabuleiro[b] &&
        novoTabuleiro[a] === novoTabuleiro[c]
      ) {
        return novoTabuleiro[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (tabuleiro[index] || vencedor) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    const ganhador = verificarVencedor(novoTabuleiro);
    if (ganhador) {
      setVencedor(ganhador);
    } else {
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  }

  function reiniciarJogo() {
    setTabuleiro(Array(9).fill(null));
    setJogadorAtual("X");
    setVencedor(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Velha</Text>

      {vencedor ? (
        <Text style={styles.mensagem}>🏆 Jogador {vencedor} venceu!</Text>
      ) : (
        <Text style={styles.mensagem}>👉 Vez do jogador {jogadorAtual}</Text>
      )}

      <View style={styles.tabuleiro}>
        {tabuleiro.map((valor, index) => (
          <TouchableOpacity
            key={index}
            style={styles.celula}
            onPress={() => handleClick(index)}
          >
            <Text
              style={[
                styles.textoCelula,
                valor === "X" ? styles.textoX : styles.textoO,
              ]}
            >
              {valor}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botao} onPress={reiniciarJogo}>
        <Text style={styles.textoBotao}>🔄 Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
