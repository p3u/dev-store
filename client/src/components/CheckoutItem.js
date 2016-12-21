import React, { Component } from 'react';

class CheckoutItem extends Component {
  render(){
    return (
      <li key={this.props.itemInfo.id} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
          <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" alt="Avatar"/>
          <div className="pl3 flex-auto">
            <span className="f6 db black-70">Mrmrs</span>
            <span className="f6 db black-70">Medium Hexagon, LLC</span>
          </div>
          <div className="pl5">
            <input className="f6 w3" type="number" name="quantity" min="0" value={this.props.itemInfo.hours}/>
          </div>
          <div className="pl3">
            <span className="f6 db black-70">{this.props.itemInfo.wage}/h</span>
            <span className="f6 db black-70">{this.props.itemInfo.hours * this.props.itemInfo.wage}</span>
          </div>
          <div className="pl5 pr4 red hover-dark-red grow grow:hover grow:focus">
            <a href="tel:" className="f3 link red">x</a>
          </div>
      </li>
    );
  }
}

export default CheckoutItem
