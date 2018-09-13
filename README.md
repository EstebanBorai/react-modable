# react-modable
> React.js modal management decorator

Modable is a react component that helps managing the renderization of modal components.
Use Modable when a lot of modals exists in your project and you should render them often.

## Installation
Using **npm**:
`npm install react-modable`

Using **yarn**:
`yarn add react-modable`

## Usage
Take the most advantage of Modable using the decorator in the very first parent component.
This way the modal is renderized at any moment, no matter which is the component that is shown in the moment
that you want to display a modal.

```javascript
// Main.jsx
import React from 'react';
import Modable from 'react-modable';
import SignUpModal as SignUp from 'components/SignUp';
import SignInModal as SignIn from 'components/SignIn';
import DeleteModal from 'components/DeleteModal';

const modals = new Map([
  ['sign-up', SignUp],
  ['sign-in', SignIn],
  ['delete', DeleteModal]
]);

@Modable(modals)
class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Component X</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec id dictum orci, vitae aliquet quam. Nunc hendrerit 
          scelerisque leo, non tristique urna hendrerit non. 
          Vestibulum ante dui, porttitor vestibulum ante id,
          porttitor egestas purus.
        </p>
        { this.modal() }
      </div>
    )
  }
}
```

At the moment Modable expects to receive props from the parent component.

```javascript
import React from 'react';
import Main from 'components/Main';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: 'sign-up'
    }

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      modal: null
    });
  }
  
  render() {
    return (
      <Main modal={this.state.modal} onModalClose={this.closeModal} />
    );
  }
}
```
`modal` and `onModalClose` are props expected by Modable from the parent component.

## Props and Parameters

### Parent Props
Name | Type | Description
------------ | ------------- | -------------
modal | String | The name (key) for the modal to be displayed from the *modals* Map.
onModalClose | Function | The function to call in order to hide the modal.

### Modable Decorator
`@Modable(modals, modalProps)`
Name | Type | Description
------------ | ------------- | -------------
modals | Map | Keeps the collection of modal components to manage using Modable.
modalProps | Object | Props to pass to the modal component.

## Credits
**react-modable** was originally created by Marco Scabbiolo, and is maintained by Esteban Borai.
