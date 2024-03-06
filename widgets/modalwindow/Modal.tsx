import Image from "next/image";
import "./modal.scss";

const Modal = ({ pokimon, visibility, setOpenModal }) => {
  const onClose = () => setOpenModal((e) => !e);

  return (
    <div className="wrapper_modal">
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={() => setOpenModal(false)}>
            .
          </button>
          <div className="flex">
            <div className="imgSide">
              <Image
                width={341}
                height={348}
                src={pokimon.sprites.other.dream_world.front_default}
              />
              <div className="btns">
                <p className="mtype_1">{pokimon.types[0].type.name}</p>
                <p className="mtype_2">{pokimon.type}</p>
              </div>
            </div>
            <div className="discSide">
              <div className="up">
                <p>{pokimon.name}</p>
                <div className="gen">
                  <p>Generation 1</p>
                  <p className="order">{pokimon.order}</p>
                </div>
              </div>
              <div className="abils">
                <p>Abilities</p>
                <p>
                  {pokimon.abilities[0].ability.name} - {pokimon.ab}
                </p>
              </div>
              <div className="points">
                <div className="hp">
                  <p>Healthy Points</p>
                  <p className="pointsStyle">{pokimon.stats[0].base_stat}</p>
                  <div style={{ width: pokimon.stats[0].base_stat }}></div>
                </div>
                <div className="exp">
                  <p>Experience</p>
                  <p className="pointsStyle">{pokimon.expp}</p>
                  <div style={{ width: pokimon.expp }}></div>
                </div>
              </div>
              <div className="mstats">
                <div className="mstat">
                  <p className="num">{pokimon.stats[2].base_stat}</p>
                  <p>Defense</p>
                </div>
                <div className="mstat">
                  <p className="num">{pokimon.stats[1].base_stat}</p>
                  <p>Attack</p>
                </div>
                <div className="mstat">
                  <p className="num">{pokimon.stats[3].base_stat}</p>
                  <p>Sp Attack</p>
                </div>
                <div className="mstat">
                  <p className="num">{pokimon.stats[4].base_stat}</p>
                  <p>Sp Defense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
