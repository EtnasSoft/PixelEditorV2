import React from 'react'
import {useTranslation} from "react-i18next";
import {Icon, Menu} from 'semantic-ui-react'

function SidebarTools() {
  const { t } = useTranslation();

  const handleItemClick = (e, {callback}) => {
    console.info( 'Menu button data: ', e, callback );
    window[callback]();
  };

  return (
    <Menu icon vertical>
      <Menu.Item
          title={t('sidebarTools.editHalfTurn')}
          name='gamepad'
          callback='edit_half_turn'
          onClick={handleItemClick}>
        <Icon name='gamepad'/>
      </Menu.Item>
      <Menu.Item
        title={t('sidebarTools.editClockwise')}
        name='gamepad'
        callback='edit_clockwize'
        onClick={handleItemClick}>
        <Icon name='gamepad'/>
      </Menu.Item>
      <Menu.Item
        title={t('sidebarTools.editCounterClockwise')}
        name='gamepad'
        callback='edit_counter_clockwise'
        onClick={handleItemClick}>
        <Icon name='gamepad'/>
      </Menu.Item>
      <Menu.Item
        title={t('sidebarTools.editHorizontal')}
        name='gamepad'
        callback='edit_horisonal'
        onClick={handleItemClick}>
        <Icon name='gamepad'/>
      </Menu.Item>
      <Menu.Item
        title={t('sidebarTools.editVertical')}
        name='gamepad'
        callback='edit_vertical'
        onClick={handleItemClick}>
        <Icon name='gamepad'/>
      </Menu.Item>
      <Menu.Item
        title={t('sidebarTools.editInvert')}
        name='gamepad'
        callback='edit_invert'
        onClick={handleItemClick}>
        <Icon name='gamepad'/>
      </Menu.Item>
    </Menu>
  );
}

export default SidebarTools;
