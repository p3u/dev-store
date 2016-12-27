import React from 'react';

export default function ProfilePicturePanel( {avatarUrl} ){
  return (
    <div className="fl db w-100 tc">
    <div className="pl2 white pl2 pv2 bb b--light-silver tl bg-black-70">
      <i className="fa fa-camera" aria-hidden="true" /> Profile Picture
     </div>
     <div className="dt w-100">
      <div className="w-100 h5 ba bg-white b--dotted b--light-silver dtc v-mid">
        <img className="profile-img br3" src={avatarUrl}
                                           alt="Avatar" />
      </div>
    </div>
  </div>
 );
}
