import axios from 'axios';

export const createUser = async (data) => {
    await axios.post(process.env.NEXT_PUBLIC_POKEMON_API + '/user/register', data);
};

export const checkUser = async () => { 
    return await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + '/user/register');
};


export const getdataUser = async () => {
    return await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + '/user');
};


