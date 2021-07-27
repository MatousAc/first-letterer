import './App.css';
import { Container, Row } from 'react-bootstrap'
import DropIn from './textInOut/DropIn'

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
