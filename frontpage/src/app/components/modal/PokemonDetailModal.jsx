import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";


const PokemonDetailModal = ({ isOpen, selectedPokemon, onClose, openEditModal, handleRemove, isLoggedIn }) => {
  if (!isOpen || !selectedPokemon) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <FontAwesomeIcon className="back-btn" onClick={onClose} icon={faArrowLeft} />

          {isLoggedIn && (
            <div className="action-buttons">
              <FontAwesomeIcon className="edit-btn" onClick={() => openEditModal(selectedPokemon)} icon={faPen} />
              <FontAwesomeIcon className="delete-btn" onClick={() => handleRemove(selectedPokemon._id)} icon={faTrash} />
            </div>
          )}
        </div>

        <p>#{selectedPokemon.num}</p>
          <h2>{selectedPokemon.name}</h2>
          <div className="imageContainer">
            <img src={selectedPokemon.img} alt={selectedPokemon.name} className="modal-img" />
          </div>
          <br />
          <strong>Type: {selectedPokemon.type}</strong>
          <div className="modal-info">
            <div>
              <p><strong>Height:</strong> {selectedPokemon.height} </p>
              <p><strong>Egg:</strong> {selectedPokemon.egg} </p>
              <p><strong>Multipliers:</strong> {selectedPokemon.multipliers}</p>
              <p><strong>Candy Count:</strong> {selectedPokemon.candy_count}</p>
              <p><strong>Avg Spawns:</strong> {selectedPokemon.avg_spawns}</p>
              <p><strong>Next Evolution:</strong>  
                {selectedPokemon.next_evolution?.map(evo => evo.name).join(", ") || "None"} {/* ✅ ใช้ ?. ป้องกัน Error */}
              </p>
            </div>

            <div>
              <p><strong>Weight:</strong> {selectedPokemon.weight} </p>
              <p><strong>Candy:</strong> {selectedPokemon.candy}</p>
              <p><strong>Weaknesses:</strong> {selectedPokemon.weaknesses?.join(", ")}</p> {/* ✅ ใช้ ?. ป้องกัน Error */}
              <p><strong>Spawn Chance:</strong> {selectedPokemon.spawn_chance}</p>
              <p><strong>Spawn Time:</strong> {selectedPokemon.spawn_time}</p>
              <p><strong>Prev Evolution:</strong>  
                {selectedPokemon.prev_evolution?.map(evo => evo.name).join(", ") || "None"} {/* ✅ ใช้ ?. ป้องกัน Error */}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailModal;
