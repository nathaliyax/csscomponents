import React from 'react';
import StandardCss from './components/StandardCss.jsx';
import ModuleCss from './components/ModuleCss.jsx';
import StyledComponent from './components/StyledComponents.jsx';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Tipos de Estilização</h1>
      <StandardCss />
      <ModuleCss />
      <StyledComponent />
    </div>
  );
}

export default App;