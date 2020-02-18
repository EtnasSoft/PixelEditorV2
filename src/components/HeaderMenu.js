import React from 'react';
import {Menu, Dropdown} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';

function HeaderMenu() {
  const { t, i18n } = useTranslation();
  let inputFile = '',
    inputDownload = '';

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const openFile = () => {
    inputFile.click();
  };

  const downloadFile = () => {
    inputDownload.click();
  };

  return (
      <Menu stackable>
        <Dropdown item text={t('headerMenu.File')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('headerMenu.New')} />
            <Dropdown.Item text={t('headerMenu.Open')} description='Ctrl + O' onClick={openFile} />
            <Dropdown.Item text={t('headerMenu.Save')} description='Ctrl + S' />
            <Dropdown.Item text={t('headerMenu.SaveAs')} description='Ctrl + A' />
            <Dropdown.Item text={t('headerMenu.Rename')} description='Ctrl + R' />
            <Dropdown.Item text={t('headerMenu.MakeCopy')} />
            <Dropdown.Divider />
            <Dropdown.Item text={t('headerMenu.DownloadFile')} onClick={downloadFile} />
          </Dropdown.Menu>
        </Dropdown>
        <input ref={input => {
              inputFile = input;
          }} type="file" className="data__upload offset" id="data__upload" accept="*/*" />
        <a ref={input => {
          inputDownload = input;
        }} id="download" className="offset" href="/" download="">{t('commons.download')}</a>

        <Dropdown item text={t('headerMenu.Edit')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('headerMenu.UndoRedo')} />
            <Dropdown.Item text={t('headerMenu.StepForward')} description='Shift + Ctrl + Z' />
            <Dropdown.Item text={t('headerMenu.StepBackward')} description='Ctrl + Z' />
            <Dropdown.Divider />
            <Dropdown.Item text={t('headerMenu.Cut')} description='Ctrl + X' />
            <Dropdown.Item text={t('headerMenu.Copy')} description='Ctrl + C' />
            <Dropdown.Item text={t('headerMenu.CopyMerged')} description='Shift + Ctrl + C' />
            <Dropdown.Item text={t('headerMenu.Paste')} description='Ctrl + V' />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text={t('headerMenu.View')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('headerMenu.ZoomIn')} description='Ctrl + +' />
            <Dropdown.Item text={t('headerMenu.ZoomOut')} description='Ctrl + -' />
            <Dropdown.Item text={t('headerMenu.FitTheArea')} description='Ctrl + 0' />
            <Dropdown.Item text={t('headerMenu.PixelToPixel')} description='Ctrl + 1' />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text={t('headerMenu.Language')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('headerMenu.Spanish')} onClick={() => changeLanguage('es')} />
            <Dropdown.Item text={t('headerMenu.English')} onClick={() => changeLanguage('en')} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
  )
}

export default HeaderMenu;
