"use client"

import styles from "./page.module.scss"
import Image from "next/image"

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <h1 className={styles.title}>Conheça a família Mac</h1>
        <p className={styles.subtitle}>Superpotência para tudo o que você faz.</p>

        <div className={styles.products}>

          <div className={styles.product}>
            <span className={styles.badge}>Novo</span>
            <div className={styles.imageWrapper}>
              <Image
                src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
                alt="Macbook Air - Vista frontal mostrando design ultrafino"
                width={320}
                height={180}
                priority
              />
            </div>

            <h2 className={styles.productName}>MacBook Air</h2>
            
            <span className={styles.chip}>
              Chip M2 ou M3
            </span>

            <p className={styles.desc}>
              Design ultrafino. Velocidade impressionante para trabalhar e criar onde você estiver.
            </p>

            <div className={styles.priceContainer}>
              <span className={styles.priceLabel}>A partir de</span>
              <strong className={styles.price}>R$ 6.299</strong>
            </div>

            <div className={styles.actions}>
              <button className={styles.buyButton}>Comprar</button>
              <button className={styles.learnMoreButton}>Saiba mais</button>
            </div>
          </div>


          <div className={styles.product}>
            <span className={styles.badge}>Destaque</span>
            <div className={styles.imageWrapper}>
              <Image
                src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
                alt="Macbook Pro - Vista frontal mostrando tela Liquid Retina XDR"
                width={320}
                height={180}
              />
            </div>

            <h2 className={styles.productName}>MacBook Pro</h2>

            <span className={styles.chip}>
              M3, M3 Pro ou M3 Max
            </span>

            <p className={styles.desc}>
              Os notebooks mais avançados para fluxos de trabalho exigentes e profissionais.
            </p>

            <div className={styles.priceContainer}>
              <span className={styles.priceLabel}>A partir de</span>
              <strong className={styles.price}>R$ 8.499</strong>
            </div>

            <div className={styles.actions}>
              <button className={styles.buyButton}>Comprar</button>
              <button className={styles.learnMoreButton}>Saiba mais</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
