import React from 'react'
import {useTranslation} from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <section>
      <p id="edit_info"/>
    </section>
  );
}

export default Footer;
