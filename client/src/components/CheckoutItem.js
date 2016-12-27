import React from 'react';
import AddCartButton from '../containers/AddCartButton';
import DevHoursInput from '../containers/DevHoursInput';
import { Link } from 'react-router';

export default function checkOutItem(props){

    if(props.itemInfo.name === undefined) {
      return <p> Loading... </p>
    }

    return (
    <li key={props.itemInfo.id} className="flex items-center lh-copy pv3 bb b--black-10">
        <Link to={`/profile/${props.itemInfo.id}`}>
          <img className="dn dib-ns w2 h2 br-100" src={props.itemInfo.avatarUrl} alt="Avatar"/>
        </Link>
        <Link to={`/profile/${props.itemInfo.id}`}>
          <div className="pl3 w4 f6 flex-auto">
            <span className="f5 db black-70">{props.itemInfo.name}</span>
          </div>
        </Link>
        <div className="pl2 w2-5">
          <DevHoursInput devId={props.itemInfo.id} />
        </div>
        <div className="pl3 w4">
          <span className="f6 db black-70">R${props.itemInfo.wage}
            <span className="f6 db black-70 fr-ns ml1">hour</span>
          </span>
          <span className="f6 db black-70">R${props.itemInfo.hours * props.itemInfo.wage}
            <span className="f6 db black-70 fr-ns ml1">total</span>
          </span>
        </div>
        <div className="ph2 grow grow:hover">
          <AddCartButton className="w1" devId={props.itemInfo.id} removeIcon={true} />
        </div>
    </li>
  );
}
