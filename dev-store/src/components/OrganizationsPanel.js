import React from 'react';
import _ from 'lodash';

// TODO: Maybe I should abstract all panels into a single component to avoid
// duplicate code a more reusable component.

function renderOrgTile(org, key) {
  return (
    <div key={key} className="org-card fl w-100 w-third-ns pa2 tc bl br h-100">
      <img className="h4-l wh3-5-m h2" src={org.avatarURL} title="Organization Logo" />
      <p className="hyphenate dn db-l">{org.name}</p>
    </div>
  );
}

function renderOrgRow(orgs, key) {
   return (
        <div key={key} className="organizations-row cf ba h-100">
          { orgs.map( (org, idx) => renderOrgTile(org, idx) )  }
        </div>
   );
}

export default function OrganizationsPanel( {organizations: allOrgs, tilesPerRows} ){
  console.log(allOrgs)
  const orgsRows = _.chunk(allOrgs, tilesPerRows);
  console.log(orgsRows)
  return (
    <div className="w-100 h5-ns h4-m">
      <div className="ph3 white pv2 bb b--light-silver bg-black-70">
         Organizations
       </div>
       { orgsRows.map( (orgs, idx) => renderOrgRow(orgs, idx) )  }
    </div>
  );
}
