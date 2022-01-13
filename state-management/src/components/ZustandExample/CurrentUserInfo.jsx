import React, { useEffect } from 'react';
import axios from 'axios';
import create from 'zustand';

const useStore = create((set, get) => ({
  id: 2,
  setId: (id) => set({ id }),
  userName: 'nick',
  fetchUserName: async () => {
    const response = await axios.get(`/api/user-name?id=${get().id}`);
    set({ userName: response.data.name });
  },
}));

function CurrentUserUser() {
  const userName = useStore((state) => state.userName);

  return <h1>{userName}</h1>;
}

export default function CurrentUserInfo() {
  const [id, setId] = useStore((state) => [state.id, state.setId]);
  const fetchUserName = useStore((state) => state.fetchUserName);

  useEffect(() => {
    fetchUserName();
  }, [fetchUserName, id]);

  return (
    <>
      <CurrentUserUser />
      <input value={id} onChange={({ target: { value } }) => setId(value)} />
    </>
  );
}
