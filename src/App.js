// App.js
import React, { useState } from 'react';
import _Header from './_Header';
import _Body from './_Body';
import _Footer from './_Footer';
import useCurrentDate from './_Time'; // import custom hook
import './App.css';

function App() {
  const { dayName, dateString } = useCurrentDate(); // use hook

  const [quantity, setQuantity] = useState('');



  return (
    <div className="App">
      <_Header />
      <_Body
        quantity={quantity}
        setQuantity={setQuantity}
        dateString={dateString}
        dayName={dayName}
      />
      <_Footer />
    </div>
  );
}

export default App;
