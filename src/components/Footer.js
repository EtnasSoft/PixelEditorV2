import React from 'react'
import {useTranslation} from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <section>
      <p>{t('dummy.short')}</p>
    </section>
  );
}

export default Footer;
