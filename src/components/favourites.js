import React from "react";
import { connect } from "react-redux";

class Favourite extends React.Component {

  renderFactsArr = () => {
    const { facts } = this.props;
    let filteredFacts=facts &&  facts.filter((val)=> val.favorite===true)
     return (
        filteredFacts && filteredFacts.length>0?
          filteredFacts.map(el => {
            return (
              <ul key={el.id}>
                <li>
                  {el.fact}
                      <i className="fa fa-heart"  
                      style={{color: el.favorite ? 'red' : 'black'}}></i>
                </li>
              </ul>
           );
         }) : <p>No Favourites</p>
      );
   };
  render() {
    return (
      <React.Fragment>
     { this.renderFactsArr()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    facts: state.facts.facts
  });

export default connect(mapStateToProps) (Favourite);
