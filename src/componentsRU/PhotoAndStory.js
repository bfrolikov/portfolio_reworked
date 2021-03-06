import React from 'react';
import {Grid, Image, Card,Header } from 'semantic-ui-react';
import face from '../images/face.jpg';

const PhotoAndStory = () => {
  return (
    <Grid stackable style={{marginBottom:'35px',marginTop:'25px'}}>
      <Grid.Row>
        <Grid.Column width={5}>
            <Card >
            <Image src={face}></Image>
          </Card>
        </Grid.Column>
        <Grid.Column width={7} style={{ textAlign:'left', fontSize:'1.7em',paddingTop:'25px',marginLeft:'5%'}}>
          <Header size = 'medium' inverted>Привет! Меня зовут Борис Фроликов</Header>
          <p>Тут должна быть копипаста про геосос</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default PhotoAndStory;