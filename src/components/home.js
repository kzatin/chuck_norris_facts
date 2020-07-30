import React from "react";
import { connect } from "react-redux";
import getFacts from "../actions/getFacts";
import makeFav from "../actions/makeFav";
import removeFacts from '../actions/removeFacts'
import removeFav from '../actions/removeFav'
import '../App.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      facts: []
    };
  }

  getData = () => {
    this.props.getFacts("factsOnly");
  };

  makeFavourite = id => {
    this.props.makeFav(id);
    this.props.getFacts("favoriteOnly");
  };

  /* Returns Jsx list of facts */
  renderFactsArr = () => {
    const { facts } = this.props;
    return (
      facts && facts.length>0 ?
      facts.map(el => {
        return (
          <ul key={el.id}>
            <li>
              {el.fact} 
              <i className="fa fa-heart" onClick={()=>this.makeFavourite(el.id)} 
              style={{color: el.favorite ? 'red' : 'black'}}></i>
            </li>
          </ul>
        );
      }) : <p>No Data</p>
    );
  };

  showFav=()=>{
      this.props.history.push('/favourites')
  }
  removeFacts=()=>{
     this.props.removeFacts()
  }
  removeFav=()=>{
    this.props.removeFav()
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.getData} className="buttonFacts"> Tell me a Chuck Norris fact </button>
        <button onClick={this.showFav} className="buttonFacts"> Show Favoutite </button>
        <button onClick={this.removeFacts} className="buttonFacts"> Delete Facts
         </button>
         <button onClick={this.removeFav} className="buttonFacts"> Delete Favourites
         </button>
        {this.renderFactsArr()}
      </React.Fragment>
    );
  }
}


const mapStateToProps = state =>
({
  facts: state.facts.facts
});

export default connect(mapStateToProps, { getFacts, makeFav,removeFacts,removeFav })(Home);
