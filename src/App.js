import './App.css';
import Movie from './components/Movie';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*App function depicting the three movies to the screen utilizing BS
for responsiveness, along with some imports from BS.*/
function App() {
  return (

    <Container>
        <h2 className='head'>List of Movies</h2>
    <Row>
      <Col lg md={8}><Movie /></Col>
      <Col lg md={8}><Movie /></Col>
      <Col lg md={8}><Movie /></Col>
    </Row>
  </Container>
);
}

export default App;
