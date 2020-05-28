import React, { useState } from 'react'
import { Segment, Popup, Header, Transition } from 'semantic-ui-react';
const BotCard = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Popup
            content={expanded ?'Click for less information' : 'Click for more information'}
            trigger={
                <Segment.Group raised style={{ marginBottom: '65px' }} onClick={() => { setExpanded(!expanded) }} >
                    <Segment>
                        <Header style={{ fontSize: '1.6em' }}>Calculator bot</Header>
                        <p style={{ fontSize: '1.4em', marginTop: '-10px',marginBottom:'0px' }}>A highschooler friend asked me to build a VK bot to help him with his geometry lessons. Every lesson they were given small tests in which they had to manually calculate certain properties of given geometric objects. And since the tests were automatically generated, I build a chat bot in <em>Node.js</em> to handle these calculations. Works great to this day.</p>
                        <Transition visible={expanded}>
                            <p style={{ fontSize: '1.4em'}}> ses</p>
                        </Transition>
                    </Segment>
                </Segment.Group>
            }
            position="bottom center"
            style={{ fontSize: '1.1em' }}

        />
    );
}
export default BotCard;