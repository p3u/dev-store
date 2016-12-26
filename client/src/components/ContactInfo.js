import React from 'react';

export default function OrganizationsPanel( {dev} ){
  return (
    <div>
      <div className="ph3 white pv2 bb b--light-silver bg-black-70">
         Contact Info
      </div>
      <div className="h5-ns h4-m">
        <p><i className="fa fa-user" aria-hidden="true" /> {dev.name}</p>
        <p><i className="fa fa-envelope-o" aria-hidden="true" /> {dev.email}</p>
        <a href={dev.website}><i className="fa fa-link" aria-hidden="true" /> {dev.website}</a>
        <p><i className="fa fa-map-marker" aria-hidden="true" /> {dev.location}</p>
        <p><i className="fa fa-money" aria-hidden="true" /> R$ {dev.wage}</p>
        <article><i className="fa fa-file-text-o" aria-hidden="true" /> {dev.bio || 'No short bio available'}</article>
      </div>
    </div>
  );
}
