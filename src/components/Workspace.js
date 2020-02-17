import React from 'react'
import {useTranslation} from "react-i18next";

function Workspace() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="scene__options">
        <div className="scene__options__title">
          <b>Memo:</b> <input type="text" name="memo" id="memo" />
        </div>
        <div className="scene__options__size">
          <b>Scene size:</b>
          <a href="javascript:change_edit_pixel(8,8);">8x8</a> |
          <a href="javascript:change_edit_pixel(16,16);">16x16</a> |
          <a href="javascript:change_edit_pixel(32,32);">32x32</a> |
          <a href="javascript:change_edit_pixel(64,64);">64x64</a> |
          <a href="javascript:change_edit_pixel(128,64);">128x64</a> |

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

          <a className="btn btn--white" href="javascript:apply_edit_pixel();">Apply</a>
        </div>
      </div>




      <div className="pane__controls">
        <a className="btn text-white" id="download" href="" download="" onClick="data_download()">
          <svg className="gsicon" viewBox="0 0 14 18" width="14" height="18" fill="black">
            <path d="M14,6 L10,6 L10,0 L4,0 L4,6 L0,6 L7,13 L14,6 L14,6 Z M0,14 L0,16 L14,16 L14,14 Z" />
          </svg>
          <label htmlFor="download">Download</label>
        </a>

        <div className="panel__control upload__control">
          <label htmlFor="data__upload">Upload</label>
          <input type="file" className="data__upload" id="data__upload" accept="*/*" />
        </div>

        <div className="panel__control mins__control">
          <label htmlFor="min_w">min_w:</label>
          <input type="text" name="min_w" id="min_w" />
            <label htmlFor="min_h">min_h:</label>
            <input type="text" name="min_h" id="min_h" />
        </div>

        <section className="panel__control edit__control">
          <b>Edit:</b>
          <a href="#" onMouseOver="set_edit_mes('edit_copy'); return false;">Copy</a> |
          <a href="#" onMouseOver="set_edit_mes('edit_paste');  return false;">Paste</a>
          <input type="checkbox"
            name="merge_paste"
            id="merge_paste"
            onClick="set_merge_paste()"
            value="" />Merge |
            <a href="javascript:edit_cancel();">Cancel(esc)</a> |
            <span id="edit_undo"><a href="javascript:edit_undo();"
              onMouseOver="set_edit_mes('edit_undo');">Undo(z)</a> | </span>
            <input type="checkbox" name="edit_alert" id="edit_alert" onClick="set_edit_alert()" value="" />None alert
        </section>
        {/*<input type="checkbox" name="view_hx" id="view_hx" onclick="set_view_hx()" value="">View Hex Data<br>*/}
      </div>

      <section className="editor__bar">
        <div className="edit__tools">
          <ul>
            <li onClick="edit_half_turn();" data=""><img alt="Half turn" src="/dist/img/fill.svg" /></li>
            <li onClick="edit_clockwize();" data=""><img alt="Clockwize" src="/dist/img/fill.svg" /></li>
            <li onClick="edit_counter_clockwise();" data=""><img alt="Counter Clockwize" src="/dist/img/fill.svg" /></li>
            <li onClick="edit_horisonal();" data=""><img alt="Horizontal" src="/dist/img/fill.svg" /></li>
            <li onClick="edit_vertical();" data=""><img alt="Vertical" src="/dist/img/fill.svg" /></li>
            <li onClick="edit_invert();" data=""><img alt="Invert" src="/dist/img/fill.svg" /></li>
          </ul>
        </div>
      </section>

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
