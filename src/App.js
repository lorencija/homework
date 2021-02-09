import React from 'react';
import Form from './components/form';
import Input from './components/input';

function App() {
  return (
    <>
    <div className="container">
      <div className="searchLine">
        <Form />        
      </div>
        <Input />
     </div>
    </>
  );
}

export default App;