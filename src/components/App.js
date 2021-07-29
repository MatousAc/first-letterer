import React from 'react'
import { useRoutes } from 'hookrouter'
import { Container, Row } from 'react-bootstrap'
import NotFound from './Pages/NotFound'
import PBE from './Pages/PBE'
import './App.css';

const routes = {
  '/' : () => <PBE />
  // '/about*' : () => <About />,
  // '/contact/:name' : ({ name }) => <Contact name={name} />,
}

function App() {
  const match = useRoutes(routes)

  return (
    <div className="App">
      <header className="App-header">
        <Container><Row>
            {match || <NotFound /> }
        </Row></Container>
      </header>
    </div>
  );
}

export default App;
