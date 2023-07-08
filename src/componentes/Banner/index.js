import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu site pessoal! Eu sou Gabriel Lopes. FreeLancer 
          de Front-end. Aqui você pode ver algo sobre mim e conhecer meu
          trabalho. Espero que goste.
        </p>
      </div>

      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido} 
          src={circuloColorido} 
          aria-hidden={true}
          alt='bola colorida'
        />

        <img 
          className={styles.minhaFoto} 
          src='https://i.pinimg.com/originals/47/bc/3b/47bc3b45afcc71aba0c8ec67e4e9bdf1.jpg'
          alt='foto do Gabriel Lopes'
        />
      </div>
    </div>
  )
}
