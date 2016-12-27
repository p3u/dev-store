import React from 'react';
import _ from 'lodash';

function renderOrgTile(org, key) {
  return (
    <div key={key} className="org-card fl w-100 w-third-ns pa2 tc h-100 ba b--dotted b--light-silver dt bg-white">
      <div className="dtc v-mid">
        <img className="h4" src={org.avatarURL} alt="Organization Logo" />
        <p className="hyphenate">{org.name}</p>
      </div>
    </div>
  );
}

function renderOrgRow(orgs, key) {
   return (
        <div key={key} className="organizations-row bg-white cf h5 ba b--dotted b--light-silver">
          { orgs.map( (org, idx) => renderOrgTile(org, idx) )  }
        </div>
   );
}

export default function OrganizationsPanel( {organizations: allOrgs, tilesPerRows} ){
  const orgsRows = _.chunk(allOrgs, tilesPerRows);
  return (
    <div className="w-100 h-100">
      <div className="pl2 white pv2 bb b--light-silver bg-black-70">
         <i className="fa fa-building-o" aria-hidden="true" />  Organizations
       </div>
       { orgsRows.map( (orgs, idx) => renderOrgRow(orgs, idx) )  }
    </div>
  );
}
