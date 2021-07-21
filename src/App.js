import './App.css';
import Navbar from './components/Navbar.jsx'
import { Container, Row } from 'react-bootstrap'
import TextIn from './components/TextIn';
import TextOut from './components/TextOut';

function App() {
  return (
    <div className="App">
      <Navbar />
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
