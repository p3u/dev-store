import React from 'react';
import _ from 'lodash';

// TODO: Maybe I should abstract all panels into a single component to avoid
// duplicate code a more reusable component.

function renderOrgTile(org, key) {
  return (
    <div key={key} className="org-card fl w-100 w-third-ns pa2 ba">
      <img src={org.avatarURL} title="Organization Logo" />
      <h4 className="hyphenate">{org.name}</h4>
    </div>
  );
}

function renderOrgRow(orgs, key) {
   return (
        <div key={key} className="organizations-row cf ph2-ns ba">
          { orgs.map( (org, idx) => renderOrgTile(org, idx) )  }
        </div>
   );
}

export default function OrganizationsPanel( {organizations: allOrgs, tilesPerRows} ){
  console.log(allOrgs)
  const orgsRows = _.chunk(allOrgs, tilesPerRows);
  console.log(orgsRows)
  return (
    <div className="organizations fl w-50-m w-100 w-third-ns pa2 ba">
       { orgsRows.map( (orgs, idx) => renderOrgRow(orgs, idx) )  }
    </div>
  );
}
