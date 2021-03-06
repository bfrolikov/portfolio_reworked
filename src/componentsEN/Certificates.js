import React from 'react';
import { Container, Image, Segment, Header } from 'semantic-ui-react';
import certFullStack from '../images/certificate-fullstack.png';
import certAndroid from '../images/certSamsung.jpg'
const Certificates = ({mobile}) => {
  
  return (
    <Container>
      <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
        <Segment.Group style={{ maxWidth: 900 }}>
          <Segment style={{padding:0}}>
            <Image src={certFullStack} style={{ width: '100%', height: 'auto' }} />
          </Segment>
          <Segment style={{ paddingTop: '15px', paddingBottom: '15px' }}>
            <Header style={{fontSize:mobile?'1.25em':'auto'}}>Full Stack Open 2019 from The University of Helsinki</Header>
          </Segment>
        </Segment.Group>
        <Segment.Group style={{ maxWidth: 900 }}>
          <Segment style={{padding:0}}>
            <Image src={certAndroid} style={{ width: '100%', height: 'auto' }} />
          </Segment>
          <Segment style={{ paddingTop: '15px', paddingBottom: '15px' }}>
            <Header style={{fontSize:mobile?'1.25em':'auto'}}>Samsung IT School</Header>
          </Segment>
        </Segment.Group>
      </div>
    </Container>
  )
}

export default Certificates;