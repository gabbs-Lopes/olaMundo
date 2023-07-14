import React from 'react'
import PostModelo from 'componentes/PostModelo'
import styles from './SobreMim.module.css'

import fotoCapa from 'assets/sobre_mim_capa.png'

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>
        Olá eu sou o Gabriel!
      </h3>

      <img
        src="https://i.pinimg.com/originals/d6/78/1f/d6781fbc63891411726c5f6cb880cebf.jpg"
        alt='Foto do Gabriel Lopes'
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, meu nome è Gabriel Lopes, sou FreeLancer de Front-end e estou feliz de te ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou na Etec Bartolomeu Bueno da Silva, quando 
        comecei o ensino médio integrado ao curso de Informática para a internet. Onde aprendi
        lógica de programação e o básico de algumas linguagens como HTML, CSS, PHP e JavaScript. 
      </p>

      <p className={styles.paragrafo}>
        Durante o curso me apaixonei por programação e decidi que iria me tornar um programador. 
        Porém, não contentei apenas com o que me ensinavam e comecei a fazer cursos de programação
        em casa também.
      </p>

      <p className={styles.paragrafo}>
        Com isso tive minha experiência de dev mais próxima da realidade, com projetos como esse e 
        desafios apenas entregando o design. Desde então, tem sido apenas estudar e melhorar meu 
        repositório.
      </p>
    </PostModelo>
  )
}
