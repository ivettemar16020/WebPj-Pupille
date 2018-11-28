import React, { Component } from 'react';
import AddTheme from '../../components/NewTheme/index';
import Theme from '../../components/Theme/index';
import uuidv4 from 'uuid/v4';

class ThemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chismes: [],
      loading: false,
      newTheme: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.postMethod = this.postMethod.bind(this);
  }

  async postMethod(addedTheme){
    const headers = new Headers();
    headers.append('Content-Type', 'applicaction/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(addedTheme),
    }

    const request = new Request('http://127.0.0.1:8000/api/', options);
    const response = await fetch(request);
    const status = await response.status; 
    console.log(status);
  }

  handleChange(e) {
    this.setState({
      newTheme: e.target.valuetitle
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const addedTheme = {
      id: uuidv4(),
      title: this.state.newTheme,
      applied: false
    };
    this.setState({
      chismes: [...this.state.chismes, addedTheme],
      newTheme: ''
    });

    //this.postMethod(addedTheme);   
  }

  toggleTheme(id) {
    const chismes = this.state.chismes.map(chisme => {
      if (chisme.id === id) {
        chisme.applied = !chisme.applied;
      }
      return chisme;
    });

    this.setState({ chismes });
  }

  removeTheme(id) {
    const chismes = this.state.chismes.filter(chismes => chismes.id !== id);
    this.setState({
      chismes
    });
  }

  render() {
    const companies = (
      <div className="container">
        {this.state.chismes.map(chisme => (
          <Theme
            // these functions are bound here to lock the ID param to the method
            toggleTheme={this.toggleTheme.bind(this, chisme.id)}
            removeTheme={this.removeTheme.bind(this, chisme.id)}
            key={chisme.id}
            {...chisme}
          />
        ))}
        <AddTheme
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          postMethod={this.postMethod}
          value={this.state.newTheme}
        />
      </div>
    );
    return (
      <div>
        <div className="h4"> Themes </div>
        {this.state.loading ? (
          <div> cargando... </div>
        ) : (
          companies
        )}
      </div>
    );
  }
}

export default ThemeList;