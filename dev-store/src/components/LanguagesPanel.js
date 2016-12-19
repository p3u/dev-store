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
    <div className="programming-languages w-50-m fl-m">
      <ul className="list pl0 ml0 mv0 center mw5 ba b--light-silver br3">
        { renderPills(languages) }
      </ul>
    </div>
  );
}
