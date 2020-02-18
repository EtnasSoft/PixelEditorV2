import React from 'react'
import {useTranslation} from "react-i18next";

function EditControls() {
  const { t } = useTranslation();

  const setModeToCopy = () => {
    window.set_edit_mes('edit_copy');
  };

  const setModeToPaste = () => {
    window.set_edit_mes('edit_paste');
  };

  const setMergePaste = () => {
    window.set_merge_paste();
  };

  const editorCancel = () => {
    window.edit_cancel();
  };

  const editorUndo = () => {
    window.edit_undo();
  };

  const setModeToUndo = () => {
    window.set_edit_mes('edit_undo');
  };

  const setModeToAlert = () => {
    window.set_edit_alert();
  };

  const setModeToHex = () => {
    window.set_view_hex();
  };

  return (
    <section className="panel__control edit__control">
      <b>{t('commons.edit')}</b>
      <button onMouseOver={setModeToCopy}>{t('headerMenu.Copy')}</button> |
      <button onMouseOver={setModeToPaste}>{t('headerMenu.Paste')}</button>

      <input type="checkbox"
        name="merge_paste"
        id="merge_paste"
        onClick={setMergePaste}
        value="" />{t('headerMenu.Merge')} |

      <button onClick={editorCancel}>{t('commons.cancel')} (ESC)</button> |

      <span id="edit_undo">
        <button onClick={editorUndo} onMouseOver={setModeToUndo}>{t('commons.undo')} (Z)</button> |
      </span>

      <input type="checkbox" name="edit_alert" id="edit_alert" onClick={setModeToAlert} value=""/><span>{t('editControls.setModeToAlert')}</span>
      <input type="checkbox" name="view_hx" id="view_hx" onClick={setModeToHex} value=""/><span>{t('editControls.setModeToHex')}</span>
    </section>
  );
}

export default EditControls;
