import Image from "next/image";
import styles from "./page.module.scss";
import pokemon from "@/image/pokemon.png"
import Button from "@/shared/button/button";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main__row}>
          <div className={styles.left__block}>
            <h1 className={styles.main__h1}> <span className={styles.h1__bold}>Find</span> all your favorite <span className={styles.h1__bold}>Pokemon</span></h1>
            <p className={styles.main__p}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
            <Button link='/pokedex' type={"green"}>See pokemons</Button>
          </div>
          
          <div className={styles.right__block}>
          <Image src={pokemon} alt="pokemon"/>
          </div>

        </div>
        
      </div>
    </main>
  );
}
