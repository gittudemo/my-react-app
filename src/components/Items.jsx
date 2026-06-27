// import React from 'react'

const Items = () => {
  const age = 2;
  return (
    <div>
      {age >= 18 ? (
        <>
          <h1>you can drive</h1>
        </>
      ) : (
        <>
          <h1>you cannot Drive</h1>
        </>
      )}
    </div>
  );
};

export default Items;
