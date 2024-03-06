import { useEffect, useState } from "react";
import style from "./card.module.scss";
import Image from "next/image";
import Modal from "../modalwindow/Modal";

const Card = ({ pokimon }) => {
  const [isPokemon, setPokemon] = useState();

	const [openModal, setOpenModal] = useState(false)

  const path = `${pokimon}`;
  // console.log(path)

  useEffect(() => {
    fetch(pokimon)
      .then((res) => res.json())
      .then(setPokemon);
  }, []);

  // function Fetch () {

  //       for (let i = 0; i <= 20; i++) {
  //           console.log(path[i])
  //       }
  //   }

  return (
    <>
      
      {isPokemon && (
        <>
					{openModal && <Modal pokimon={isPokemon} setOpenModal={setOpenModal}/>}
          <div className={style.card} onClick={() => setOpenModal(!openModal)}>
            <div className={style.left}>
              <h3 className={style.name}>{isPokemon.name}</h3>
              <div className={style.statuses}>
                <div>
                  <div className={style.sircle}>419</div>
                  <p>Attack</p>
                </div>
                <div>
                  <div className={style.sircle}>49</div>
                  <p>Defense</p>
                </div>
              </div>
              <div className={style.characts}>
                <div className={style.grass}>Grass</div>
                <div className={style.poison}>Poison</div>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              src={isPokemon.sprites.other.dream_world.front_default}
              alt={isPokemon.name}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Card;
