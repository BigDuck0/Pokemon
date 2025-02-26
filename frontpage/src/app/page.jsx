"use client";
import PokemonCard from "./components/PokemonCard";
import Header from "./components/Header"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import BackgroundImage from "./BackgroundImage"
import "./styleCSS/Modal.css"
import CreatePokemonModal from "./components/modal/CreatePokemonModal";
import EditPokemonModal from "./components/modal/EditPokemonModal";
import PokemonDetailModal from "./components/modal/PokemonDetailModal";
import usePokemon from "../app/hooks/usePokemon";



export default function Home() {
  
  const {
    data,
    isLoggedIn,
    isCreateModalOpen,
    isEditModalOpen,
    isOpen,
    selectedPokemon,
    openModal,
    closeModal,
    openEditModal,
    closeEditModal,
    setIsCreateModalOpen,
    handleSubmit,
    handleEditSubmit,
    handleRemove,
    handleChange,
    form,
  } = usePokemon();





  return (
    <main style={{ display: "flex", flexWrap: "wrap" }}>
      <BackgroundImage>
      <Header/>
      <div className="pokemon-list">
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", paddingTop: "100px" }}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} onClick={() => openModal(item)} className="pokemon-card">
          <PokemonCard num={item.num} name={item.name} img={item.img} />
          </div>
          
        ))
      ) : (
        <p>Loading Pokémon...</p>
      )}
      </div>
      </div>
      {isLoggedIn ? (
      <button className="create-modal-btn" onClick={() => setIsCreateModalOpen(true)}>
        <FontAwesomeIcon icon={faPlus} /> Create Pokémon
      </button>
      ) : (
        <></>
      )}

          {isLoggedIn && (
          <button className="create-modal-btn" onClick={() => setIsCreateModalOpen(true)}>
            + Create Pokémon
          </button>
        )}

        <CreatePokemonModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          form={form}
        />


<PokemonDetailModal
          isOpen={isOpen}
          onClose={closeModal}
          closeModal={closeModal}
          selectedPokemon={selectedPokemon}
          handleRemove={handleRemove}
          openEditModal={openEditModal}
          isLoggedIn={isLoggedIn}
        />

        <EditPokemonModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          handleEditSubmit={handleEditSubmit}
          handleChange={handleChange}
          form={form}
        />

      </BackgroundImage>
    </main>
  );
}
