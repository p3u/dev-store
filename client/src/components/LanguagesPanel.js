import React from 'react';

function renderPills(languages) {
  return languages.map((language) => {
    return (
      <li key={language.name} className="ph3 pv2 bb b--light-silver">
        <span style={{backgroundColor: language.color}} className="dib br-100 h1 w1" /> {language.name}
      </li>
    );
  });
}

export default function LanguagesPanel( {languages} ){
  return (
    <div className="w-100">
      <ul className="list pl0 ml0 mv0 center ba b--light-silver">
        <li className="ph3 white pv2 bb b--light-silver bg-black-70">
          <i className="fa fa-code" aria-hidden="true" /> Programming Languages
        </li>
        { renderPills(languages) }
      </ul>
    </div>
  );
}
