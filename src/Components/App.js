import React, { Component } from 'react';
import '../App.css';

import Contacts from './Contacts';

class App extends Component {

  constructor(props) {
    super(props);
    this.addContact=this.addContact.bind(this)
  }

  state = {
    contacts : [{
      name:"Cansu",
      phone:"0213658969"
    }, {
      name:"Ayşe",
      phone:"02145896547"
    }
    ]
  };

  addContact (contatc){
    const { contacts } = this.state;
    contacts.push(contatc);

    this.setState({
      contacts: contacts
    });
  }
  render() {
    return (
      <div className="App">
        <Contacts
          addContact = {this.addContact}
          contacts= {this.state.contacts}/>
      </div>
    );
  }
}

export default App;
