// Translation.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Translation = () => {
  const { t, i18n } = useTranslation();
  console.log("Current Language:", i18n.language);

  return (
    <div>
      <label>{t('label')}</label>
    </div>
  );
};


export default Translation;