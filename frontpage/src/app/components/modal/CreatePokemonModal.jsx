import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CreatePokemonModal = ({ isOpen, onClose, handleSubmit, handleChange, form }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <FontAwesomeIcon className="back-btn" onClick={onClose} icon={faArrowLeft} />
          <h2>Create Pokémon</h2>
        </div>

        <form onSubmit={handleSubmit}>
              <div className="modal-info">
                <div>

                  <label>ID:</label>
                  <input type="text" name="id" value={form.id} onChange={handleChange} placeholder="Enter Pokémon"  />

                  <label>Name:</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}  placeholder="Enter Pokémon Name"/>

                  <label>Image:</label>
                  <input type="text" name="img" value={form.img} onChange={handleChange}  placeholder="Paste image URL"/>

                  <label>Height:</label>
                  <input type="text" name="height" value={form.height} onChange={handleChange} placeholder="Enter height"  />

                  <label>Egg:</label>
                  <input type="text" name="egg" value={form.egg} onChange={handleChange} placeholder="Egg type"  />

                  <label>Multipliers:</label>
                  <input type="text" name="multipliers" value={form.multipliers} onChange={handleChange} placeholder="Enter multipliers" />

                  <label>Candy Count:</label>
                  <input type="text" name="candy_count" value={form.candy_count} onChange={handleChange} placeholder="Enter required candy" />

                  <label>Avg Spawns:</label>
                  <input type="text" name="avg_spawns" value={form.avg_spawns} onChange={handleChange} placeholder="Enter average spawns"  />

                  <label>Next Evolution:</label>
                  <input type="text" name="next_evolution" value={form.next_evolution} onChange={handleChange}  placeholder="List next evolutions"/>

                </div>

                <div>
                  <label>Number:</label>
                  <input type="text" name="num" value={form.num} onChange={handleChange} placeholder="Enter Pokémon Number" />

                  <label>Type:</label>
                  <input type="text" name="type" value={form.type} onChange={handleChange}  placeholder="List Type"/>

                  <label>Weight:</label>
                  <input type="text" name="weight" value={form.weight} onChange={handleChange} placeholder="Enter weight" />

                  <label>Candy:</label>
                  <input type="text" name="candy" value={form.candy} onChange={handleChange} placeholder="Candy type" />

                  <label>Weaknesses:</label>
                  <input type="text" name="weaknesses" value={form.weaknesses} onChange={handleChange}  placeholder="List weaknesses"/>

                  <label>Spawn Chance:</label>
                  <input type="text" name="spawn_chance" value={form.spawn_chance} onChange={handleChange} placeholder="Enter spawn chance" />

                  <label>Spawn Time:</label>
                  <input type="text" name="spawn_time" value={form.spawn_time} onChange={handleChange} placeholder="Enter spawn time" />

                  <label>Prev Evolution:</label>
                  <input type="text" name="prev_evolution" value={form.prev_evolution} onChange={handleChange}  placeholder="List previous evolutions"/>


                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="create-btn">Create</button>
              </div>
            </form>
      </div>
    </div>
  );
};

export default CreatePokemonModal;
