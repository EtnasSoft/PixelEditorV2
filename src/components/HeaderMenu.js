import React from 'react';
import {Menu, Dropdown} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';

function HeaderMenu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
      <Menu stackable>
        <Dropdown item text={t('HeaderMenu.File')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('HeaderMenu.New')} />
            <Dropdown.Item text={t('HeaderMenu.Open')} description='Ctrl + O' />
            <Dropdown.Item text={t('HeaderMenu.SaveAs')} description='Ctrl + A' />
            <Dropdown.Item text={t('HeaderMenu.Rename')} description='Ctrl + R' />
            <Dropdown.Item text={t('HeaderMenu.MakeCopy')} />
            <Dropdown.Divider />
            <Dropdown.Item text={t('HeaderMenu.DownloadAs')} />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text={t('HeaderMenu.Edit')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('HeaderMenu.UndoRedo')} />
            <Dropdown.Item text={t('HeaderMenu.StepForward')} description='Shift + Ctrl + Z' />
            <Dropdown.Item text={t('HeaderMenu.StepBackward')} description='Ctrl + Z' />
            <Dropdown.Divider />
            <Dropdown.Item text={t('HeaderMenu.Cut')} description='Ctrl + X' />
            <Dropdown.Item text={t('HeaderMenu.Copy')} description='Ctrl + C' />
            <Dropdown.Item text={t('HeaderMenu.CopyMerged')} description='Shift + Ctrl + C' />
            <Dropdown.Item text={t('HeaderMenu.Paste')} description='Ctrl + V' />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text={t('HeaderMenu.View')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('HeaderMenu.ZoomIn')} description='Ctrl + +' />
            <Dropdown.Item text={t('HeaderMenu.ZoomOut')} description='Ctrl + -' />
            <Dropdown.Item text={t('HeaderMenu.FitTheArea')} description='Ctrl + 0' />
            <Dropdown.Item text={t('HeaderMenu.PixelToPixel')} description='Ctrl + 1' />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text={t('HeaderMenu.Language')}>
          <Dropdown.Menu>
            <Dropdown.Item text={t('HeaderMenu.Spanish')} onClick={() => changeLanguage('es')} />
            <Dropdown.Item text={t('HeaderMenu.English')} onClick={() => changeLanguage('en')} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
  )
}

export default HeaderMenu;
