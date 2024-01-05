// MainPage.js
import React from 'react';
import LanguageSelector from './LanguageSelector';
import Translation from './Translation';

const MainPage = () => {
  return (
    <div>
      <LanguageSelector />
      <Translation/>
    </div>
  );
};

export default MainPage;
