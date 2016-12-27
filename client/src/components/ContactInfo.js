import React from 'react';

export default function OrganizationsPanel( {dev} ){
  return (
    <div>
      <div className="pl2 white pv2 bg-black-70">
        <i className="fa fa-info" aria-hidden="true" /> Contact Info
      </div>
      <div className="pl2 h5 dib bg-white w-100 ba b--dotted b--light-silver overflow-y-auto">
        <p className="hyphenate"><i className="fa fa-user" aria-hidden="true" /> {dev.name}</p>
        <p className="hyphenate"><i className="fa fa-envelope-o" aria-hidden="true" /> {dev.email || 'E-mail not available'}</p>
        <a href={dev.website} className="hyphenate"><i className="fa fa-link" aria-hidden="true" /> {dev.website || 'Website not available'}</a>
        <p className="hyphenate"><i className="fa fa-map-marker" aria-hidden="true" /> {dev.location || 'Location not available'}</p>
        <p><i className="fa fa-money" aria-hidden="true" /> R$ {dev.wage}</p>
        <article className="hyphenate"><i className="fa fa-file-text-o" aria-hidden="true" /> {dev.bio || 'Short bio not available'}</article>
      </div>
    </div>
  );
}
