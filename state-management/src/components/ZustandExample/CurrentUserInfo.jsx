import React from 'react';
import axios from 'axios';
import create from 'zustand';

const useStore = create((set, get) => ({
  id: 2,
  setId: (id) => set({ id }),
  userName: 'nick',
  fetchUserName: async (id) => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    set({ userName: response.data.name });
  },
}));

function CurrentUserUser() {
  const userName = useStore((state) => state.userName);

  return <h1>{userName}</h1>;
}

export default function CurrentUserInfo() {
  const fetchUserName = useStore((state) => state.fetchUserName);

  return (
    <>
      <CurrentUserUser />
      <input onChange={({ target: { value } }) => fetchUserName(value)} />
    </>
  );
}
