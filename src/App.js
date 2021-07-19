import './App.css';
import { Container, Row } from 'react-bootstrap'
import TextIn from './TextIn';
import TextOut from './TextOut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container
        style={{
          maxWidth: '90vw'
        }}
        >
          <Row>
            <TextIn />
            <TextOut />
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
