import React from 'react';
import {Grid, Image, Card,Header } from 'semantic-ui-react';
import face from '../images/face.jpg';

const PhotoAndStory = () => {
  return (
    <Grid style={{marginBottom:'15px'}}>
      <Grid.Row>
        <Grid.Column style={{minWidth:'330px'}}>
            <Card style={{width:'330px'}}>
            <Image src={face}></Image>
          </Card>
        </Grid.Column>
        <Grid.Column width={6} style={{ textAlign:'left', fontSize:'1.5em',paddingTop:'25px'}}>
          <Header size = 'medium' inverted>Hi! My name is Boris Frolikov</Header>
          <p>Lorem ipsum dolor sit amet, consectetuer adipisci</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default PhotoAndStory;