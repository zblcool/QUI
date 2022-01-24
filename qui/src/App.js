
import Dashboard from './page/dashboard';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './component/Header/Header';
import './user.scss'

function App() {
  return (
    <div className="App">
    <Container fluid>
      <Row>
        <Col xs={{ span: 6, offset: 0 }}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Dashboard />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
