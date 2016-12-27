import React from 'react';

function renderPills(languages) {
  return languages.map((language) => {
    return (
      <li className="pl2 pv2 ba bg-white dib w-50 w-100-l db-l b--dotted b--light-silver"
          key={language.name} >
        <span style={{color: language.color}} className="dib">•</span>
        {language.name}
      </li>
    );
  });
}

export default function LanguagesPanel( {languages} ){
  return (
    <div className="w-100">
      <ul className="list pl0 ml0 mv0 center">
        <li className="pl2 white pv2 bg-black-70">
          <i className="fa fa-code" aria-hidden="true" />
          Programming Languages
        </li>
        { renderPills(languages) }
      </ul>
    </div>
  );
}
