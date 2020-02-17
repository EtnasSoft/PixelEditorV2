import React from 'react'
import {useTranslation} from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <section>
      <p>Copyright @2020. EtnasSoft</p>
    </section>
  );
}

export default Footer;
