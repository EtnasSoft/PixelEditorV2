import React from 'react'
import {useTranslation} from "react-i18next";
import EditControls from "./EditControls";

function Workspace() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="pane__controls">
        <div className="panel__control mins__control">
          <label htmlFor="min_w">min_w:</label>
          <input type="text" name="min_w" id="min_w" />
            <label htmlFor="min_h">min_h:</label>
            <input type="text" name="min_h" id="min_h" />
        </div>

        <EditControls />

      </div>

      <section id="editor__view">
        <span id="edit__message" />
        <section className="canvas__area">
          <canvas id="editor" className="editor__canvas" width="" height="" />
          <canvas id="cursor" className="editor__canvas" width="" height="" />
        </section>
      </section>

    </div>
  );
}

export default Workspace;
