import React from 'react';

export default function PurchaseConfirmation( {nStars, nFollowers, nRepos} ){
  return (
    <div className="w-100">
      <header className="tc ph4">


        {/* pen by LeePorter
            https://codepen.io/elevaunt/pen/JYRBzJ */}
      <svg className="checkmark" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
      </svg>


        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
          Order Completed!
        </h1>
        <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
          Thanks for shopping with us.
        </h2>
      </header>
    </div>
  );
}
