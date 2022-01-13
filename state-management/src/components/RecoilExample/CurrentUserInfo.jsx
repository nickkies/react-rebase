import React from 'react';
import { atom, selector, selectorFamily, useRecoilValue } from 'recoil';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';

// const currentUserIDState = atom({
//   key: 'CurrentUserID',
//   default: 1,
// });

// const tableOfUsers = [{ name: 'nick' }, { name: 'jessy' }];

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

// const currentUserNameQuery = selector({
//   key: 'CurrentUserName',
//   get: async ({ get }) => {
//     const response = await axios.get(
//       `/api/user-name?id=${get(currentUserIDState)}`
//     );

//     return response.data.name;
//   },
// });

const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userID) => async () => {
    const response = await axios.get(`/api/user-name?id=${userID}`);

    return response.data.name;
  },
});

function CurrentUserUser() {
  const userName = useRecoilValue(userNameQuery(2));
  return <div>{userName}</div>;
}

export default function CurrentUserInfo() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUserUser />
      </React.Suspense>
    </ErrorBoundary>
  );
}
