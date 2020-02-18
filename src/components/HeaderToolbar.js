import React from "react";
import {useTranslation} from "react-i18next";

function HeaderToolbar() {
  const {t} = useTranslation();

  const changeEditPixel = (width, height) => {
    window.change_edit_pixel(width, height);
  };

  const applyEditPixel = () => window.apply_edit_pixel();

  return (
    <section className="flex">
      <div className="scene__options flex">
        <div className="scene__options__title">
          <b>{t('headerToolbar.sceneName')}:</b> <input type="text" name="memo" id="memo" />
        </div>
        <div className="scene__options__size">
          <b>{t('headerToolbar.sceneSize')}:</b>
          <button onClick={() => changeEditPixel(8,8)}>8x8</button> |
          <button onClick={() => changeEditPixel(16,16)}>16x16</button> |
          <button onClick={() => changeEditPixel(32,32)}>32x32</button> |
          <button onClick={() => changeEditPixel(64,64)}>64x64</button> |
          <button onClick={() => changeEditPixel(128,64)}>128x64</button> |

          <input type="text" name="pixel_x" id="pixel_x" />x

          <select name="pixel_y" id="pixel_y">
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
            <option value="40">40</option>
            <option value="48">48</option>
            <option value="56">56</option>
            <option value="64">64</option>
          </select>

          <button className="btn btn--white" onClick={ applyEditPixel }>{t('commons.apply')}</button>
        </div>
      </div>
    </section>
  );
}

export default HeaderToolbar;
