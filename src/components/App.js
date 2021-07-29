import './App.css';
import { Container, Row } from 'react-bootstrap'
import DropIn from './Main Cards/DropIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <DropIn />
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
