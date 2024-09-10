import React from "react";
import {useState,useEffect} from 'react';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { CardGroup, InputGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel }  from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card';
import love2 from './covers/love2.jpg';
import scifi1 from './covers/scifi1.jpg';
import fanatsy1 from './covers/fantasy1.jpg';
import action1 from './covers/action1.jpg';
import action2 from './covers/action2.jpg';
import adv1 from './covers/adv1.jpg';
import adv2 from './covers/adv2.jpg';
import adv3 from './covers/adv3.jpg';
import comic1 from './covers/comic1.jpg';
import comic2 from './covers/comic2.jpg';
import fanatsy2 from './covers/fantasy2.jpg';
import fanatsy3 from './covers/fantasy3.jpg';
import history1 from './covers/history1.jpg';
import history2 from './covers/history2.jpg';
import horror1 from './covers/horror1.jpg';
import horror2 from './covers/horror2.jpg';
import love1 from './covers/love1.jpg';
import rom1 from './covers/rom1.jpg';
import rom2 from './covers/rom2.jpg';
import scifi2 from './covers/scifi2.jpg';
import scifi3 from './covers/scifi3.jpg';
import thriller1 from './covers/thriller1.jpg';
import thriller2 from './covers/thriller2.jpg';
import thriller3 from './covers/thriller3.jpg';
import user1 from './userpic/user1.jpg';
import user2 from './userpic/user2.jpg';

function Home(){
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
         setIndex(selectedIndex);

     const imgFold = require.context('./covers',true);
     };
    
    return(
        <>
        <br />
        <div align="center">
        <Container  width="25rem">
          
        <InputGroup size='lg'>
          <Form.Control placeholder="Enter book name that is fascinating you..."  />
          <Button variant="outline-primary">Search</Button>
        </InputGroup>
        </Container>
        </div>
        <br />
        
         
  
        <div align="center">
        <h3>Trending/Latest Releases</h3>
        <Carousel style={{width:'70vh'}}>
      <Carousel.Item interval={1000}>
       <img style={{height:'80vh'}}
      className="d-block w-100"
      src={love2}
      alt="First slide"
     />
      
     </Carousel.Item>
     
     <Carousel.Item interval={500}>
      <img style={{height:'80vh'}}
      className="d-block w-100"
      src={scifi1}
      alt="Second slide"
      />
      
       </Carousel.Item>
      
       <Carousel.Item>
        <img style={{height:'80vh'}}
      className="d-block w-100"
      src={fanatsy1}
      alt="Third slide"
      />
     
     </Carousel.Item> 
    </Carousel>
        </div>
       
        <Container>
          <Row>
          <Col>
        <div >
        
            
        <Container style={{overflowX:"auto"}}>
        <h4>Other Genre</h4>
        <Row xs="auto" align="left">
        <CardGroup>
        <Col >
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={adv1} />
        
        <Card.Body>
          <Card.Title>Adventure</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      
      </Col>
      
        <Col style={{marginInline:"15px"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={action1} />
        <Card.Body>
          <Card.Title>Action</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      </Col>
      
      
        <Col style={{marginInline:"10px"}}>
        <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={rom1} />
        <Card.Body>
          <Card.Title>Romance</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
        </Col>
        </CardGroup>
        
        
      </Row>
      
       </Container>
  </div>
    
  
   
    <br />
   <div>
   <Container style={{overflowX:"auto"}}>
        <h4>Top Picks</h4>
        <Row xs="auto" >
        <CardGroup>
        <Col >
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={comic1} />
        
        <Card.Body>
          <Card.Title>Comic</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      
      </Col>
      
        <Col style={{marginInline:"15px"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={love1} />
        <Card.Body>
          <Card.Title>Love</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      </Col>
      
      
        <Col style={{marginInline:"10px"}}>
        <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={scifi2} />
        <Card.Body>
          <Card.Title>Science and Fiction</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
        </Col>
        </CardGroup>
        
        
      </Row>
    </Container>

   </div>

   <br />
   <div>
   <Container style={{overflowX:"auto"}}>
        <h4>Highly Rated</h4>
        <Row xs="auto" >
        <CardGroup>
        <Col >
        <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={thriller1} />
        
        <Card.Body>
          <Card.Title>Thriller</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      
      </Col>
      
        <Col style={{marginInline:"15px"}}>
        <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={scifi3} />
        <Card.Body>
          <Card.Title>Science and Fiction</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      </Col>
      
      
        <Col style={{marginInline:"10px"}}>
        <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={action2} />
        <Card.Body>
          <Card.Title>Action</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
        </Col>
        </CardGroup>
        
        
      </Row>
    </Container>

   </div>
        
   <br />
   <div>
   <Container style={{overflowX:"auto"}}>
        <h4>Books your friend reads</h4>
        <Row xs="auto" >
        <CardGroup>
        <Col >
        <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={thriller3} />
        
        <Card.Body>
          <Card.Title>Thriller</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      
      </Col>
      
        <Col style={{marginInline:"12px"}}>
        <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={scifi1} />
        <Card.Body>
          <Card.Title>Science and Fiction</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      </Col>
      
      
        <Col style={{marginInline:"10px"}}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={adv3} />
        <Card.Body>
          <Card.Title>Adventure</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
        </Col>
        </CardGroup>
        </Row>
        </Container>
        </div>
        </Col>
        
        <Col>
        <h4>Suggested Users</h4>
        <Row xs={6} md={4}align="right">
        <CardGroup>
        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        </CardGroup>
        </Row>
      
    
        </Col>
      </Row>
      </Container>
       
       
     
    
   
    
    
   
       </> 
    );
}

export default Home;
