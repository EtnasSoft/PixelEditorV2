import React from 'react'
import {useTranslation} from "react-i18next";

function PreviewPanel() {
  const { t } = useTranslation();

  return (
    <section className="preview__panel">
      <canvas id="preview__canvas" />
    </section>
  );
}

export default PreviewPanel;
