import React, { useState } from 'react'

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  )
}

const url =
  'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json'

export default function TestMocking() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setData(json.data)
      })
      .catch((error) => setError(error))
  }

  if (error) {
    return <p>{error}</p>
  }
  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      {data && (
        <ul>
          {data.people.map(({ name, age }) => (
            <Item key={name + age} name={name} age={age} />
          ))}
        </ul>
      )}
    </div>
  )
}
