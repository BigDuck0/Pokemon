import { useState, useEffect } from "react";
import { getdata, create, update, remove } from "../functions/pokemon";



const usePokemon = () => {
    
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    loadData();
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    console.log("🔍 Checking token:", token);
    setIsLoggedIn(!!token);
  };

  const loadData = async () => {
    try {
      const res = await getdata();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await create(form);
      resetForm();
      setIsCreateModalOpen(false);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await update(selectedPokemon._id, form);
      resetForm()
      setIsEditModalOpen(false);
      setSelectedPokemon(null);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (id) => {
    try {
      await remove(id);
      setIsEditModalOpen(false);
      setSelectedPokemon(null);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  const resetForm = () => {
    setForm({
      id: "",
      num: "",
      name: "",
      img: "",
      type: "",
      height: "",
      weight: "",
      egg: "",
      candy: "",
      multipliers: "",
      weaknesses: "",
      candy_count: "",
      spawn_chance: "",
      avg_spawns: "",
      spawn_time: "",
      prev_evolution: "",
      next_evolution: "",
    });
  };

  return {
    data,
    form,
    isOpen,
    selectedPokemon,
    isCreateModalOpen,
    isEditModalOpen,
    isLoggedIn,
    setIsOpen,
    setIsCreateModalOpen,
    setIsEditModalOpen,
    setSelectedPokemon,
    handleChange,
    handleSubmit,
    handleEditSubmit,
    handleRemove,
    openModal: (pokemon) => {
      setSelectedPokemon(pokemon);
      setIsOpen(true);
    },
    closeModal: () => {
      setIsOpen(false);
      setSelectedPokemon(null);
    },
    openEditModal: (pokemon) => {
      setSelectedPokemon(pokemon);
      setForm({
        id: pokemon.id,
        num: pokemon.num,
        name: pokemon.name,
        img: pokemon.img,
        type: pokemon.type,
        height: pokemon.height,
        weight: pokemon.weight,
        egg: pokemon.egg,
        candy: pokemon.candy,
        multipliers: pokemon.multipliers,
        weaknesses: pokemon.weaknesses.join(", "),
        candy_count: pokemon.candy_count,
        spawn_chance: pokemon.spawn_chance,
        avg_spawns: pokemon.avg_spawns,
        spawn_time: pokemon.spawn_time,
        prev_evolution: pokemon.prev_evolution
          ? pokemon.prev_evolution.map((evo) => evo.name).join(", ")
          : "",
        next_evolution: pokemon.next_evolution
          ? pokemon.next_evolution.map((evo) => evo.name).join(", ")
          : "",
      });
      loadData();
      setIsEditModalOpen(true);
    },
    closeEditModal: () => {
      setIsEditModalOpen(false);    
      resetForm();
    },
  };
};

export default usePokemon;
