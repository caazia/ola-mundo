import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"


export default function Sobremim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        > 
            <h3 className={styles.subtitulo}>
                Olá, eu sou Cássia!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto de Cassia Carvalho de fone"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Atualmente cursando o 2° semestre de Análise e Desenvolvimento de Sistemas. Durante minha jornada acadêmica tenho me dedicado intensamente ao aprendizado de programação, com o foco em Front-end. 
            </p>
            <p className={styles.paragrafo}>
                Minha paixão por ensinar e aprender me impulsiona a desenvolver continuamente minhas habilidades e conhecimentos. Estou buscando oportunidades que me permitam expandir meu conjunto de habilidades e ganhar experiência prática. 
            </p>
            <p className={styles.paragrafo}>
                Se você está procurando uma profissional apaixonada, com uma perspectiva multidisciplinar e disposta a enfrentar novos desafios, estou ansiosa para colaborar e contribuir em seus projetos.
            </p>
        </PostModelo>
    )
}