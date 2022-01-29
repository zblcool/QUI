
import Dashboard from './page/dashboard';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './component/Header/Header';
import './user.scss'

function App() {
  return (
    <div className="App">
    <Container fluid>
      <Row>
        <Col xs={{ span: 7, offset: 0 }} className="custom-header">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <Dashboard />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
