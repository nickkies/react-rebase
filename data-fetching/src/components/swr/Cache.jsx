import React from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import { Avator } from './Profile';

export default function Cache() {
  return (
    <SWRConfig value={{ refreshInterval: 1000 }}>
      <Page />
    </SWRConfig>
  );
}

const Page = () => {
  const { cache, mutate } = useSWRConfig();
  return (
    <div>
      <Avator id={1212} />
      <button
        onClick={() => {
          mutate('/api/user/1212');
          console.log(`check: ${JSON.stringify(cache.get('/api/user/1212'))}`);
        }}
      >
        check
      </button>
    </div>
  );
};
