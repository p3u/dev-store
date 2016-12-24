import React from 'react';
import AddCartButton from '../containers/AddCartButton';
import DevHoursInput from '../containers/DevHoursInput';
import { Link } from 'react-router';

export default function checkOutItem(props){

    debugger
    if(props.itemInfo.name === undefined) {
      return <p> Loading... </p>
    }

    return (
    <li key={props.itemInfo.id} className="flex items-center lh-copy pv3 bb b--black-10">
        <Link to={`/profile/${props.itemInfo.id}`}>
          <img className="w2 h2 w3-ns h3-ns br-100" src={props.itemInfo.avatarUrl} alt="Avatar"/>
        </Link>
        <Link to={`/profile/${props.itemInfo.id}`}>
          <div className="pl3 w4 flex-auto">
            <span className="f6 db black-70">{props.itemInfo.name}</span>
          </div>
        </Link>
        <div className="pl2 w2-5">
          <DevHoursInput devId={props.itemInfo.id} />
        </div>
        <div className="pl3 w4">
          <span className="f6 db black-70">R${props.itemInfo.wage} <span className="f6 db black-70 fr ml1">hour</span></span>
          <span className="f6 db black-70">R${props.itemInfo.hours * props.itemInfo.wage} <span className="f6 db black-70 fr ml1">total</span></span>

        </div>
        <div className="pl3  pr2 red hover-dark-red grow grow:hover grow:focus">
          <AddCartButton devId={props.itemInfo.id} removeIcon={true} />
        </div>
    </li>
  );
}
