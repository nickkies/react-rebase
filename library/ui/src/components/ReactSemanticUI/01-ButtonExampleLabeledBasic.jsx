import React from 'react';
import { Button, Icon, Label, Segment } from 'semantic-ui-react';

const ButtonExampleLabeledBasic = () => (
  <div>
    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button>

    <Segment inverted>
      <Button inverted>Standard</Button>
      <Button inverted color='red'>
        Red
      </Button>
      <Button inverted color='orange'>
        Orange
      </Button>
      <Button inverted color='yellow'>
        Yellow
      </Button>
      <Button inverted color='olive'>
        Olive
      </Button>
      <Button inverted color='green'>
        Green
      </Button>
      <Button inverted color='teal'>
        Teal
      </Button>
      <Button inverted color='blue'>
        Blue
      </Button>
      <Button inverted color='violet'>
        Violet
      </Button>
      <Button inverted color='purple'>
        Purple
      </Button>
      <Button inverted color='pink'>
        Pink
      </Button>
      <Button inverted color='brown'>
        Brown
      </Button>
      <Button inverted color='grey'>
        Grey
      </Button>
      <Button inverted color='black'>
        Black
      </Button>
    </Segment>
    <Button color='red'>Red</Button>
    <Button color='orange'>Orange</Button>
    <Button color='yellow'>Yellow</Button>
    <Button color='olive'>Olive</Button>
    <Button color='green'>Green</Button>
    <Button color='teal'>Teal</Button>
    <Button color='blue'>Blue</Button>
    <Button color='violet'>Violet</Button>
    <Button color='purple'>Purple</Button>
    <Button color='pink'>Pink</Button>
    <Button color='brown'>Brown</Button>
    <Button color='grey'>Grey</Button>
    <Button color='black'>Black</Button>

    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus' /> Google Plus
    </Button>
    <Button color='vk'>
      <Icon name='vk' /> VK
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </div>
);

export default ButtonExampleLabeledBasic;
