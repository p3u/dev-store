import React from 'react';
import AddCartButton from '../containers/AddCartButton';

export default function checkOutItem(props){
    return (
    <li key={props.itemInfo.id} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img className="w2 h2 w3-ns h3-ns br-100" src={props.itemInfo.avatarUrl} alt="Avatar"/>
        <div className="pl3 flex-auto">
          <span className="f6 db black-70">{props.itemInfo.name}</span>
          <span className="f6 db black-70">{props.itemInfo.org}</span>
        </div>
        <div className="pl5">
          <input className="f6 w3" type="number" name="quantity" min="0" value={props.itemInfo.hours}/>
        </div>
        <div className="pl3">
          <span className="f6 db black-70">{props.itemInfo.wage}/h</span>
          <span className="f6 db black-70">{props.itemInfo.hours * props.itemInfo.wage}</span>
        </div>
        <div className="pl5 pr4 red hover-dark-red grow grow:hover grow:focus">
          <AddCartButton devId={props.itemInfo.id}/>
        </div>
    </li>
  );
}
