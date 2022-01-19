// import React, { useEffect, useState } from 'react';

export default function Launches({ data }) {
  // CSR render
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchLaunches = async () => {
  //     const res = await fetch('https://api.spacexdata.com/v3/launches');
  //     const data = await res.json();

  //     setData(data);
  //   };

  //   fetchLaunches();
  // }, []);

  if (data == null) return null;

  return (
    <div>
      <ol>
        {data.map((launch, index) => (
          <li key={index}>{launch.mission_name}</li>
        ))}
      </ol>
    </div>
  );
}

// SSR render
export async function getServerSideProps() {
  const res = await fetch('https://api.spacexdata.com/v3/launches');
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
