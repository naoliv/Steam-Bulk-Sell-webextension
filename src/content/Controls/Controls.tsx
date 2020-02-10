import React from 'react';
import { BUTTON_PRIMARY } from '../constants';

export const Controls = ({ sellHandler, id }) => (
  <div id={id}>
    <input
      type="button"
      onClick={sellHandler}
      value={browser.i18n.getMessage("controls_button_sell")}
      className={BUTTON_PRIMARY}
      style={{ marginTop: '10px', }}
    />
  </div>
)

export default Controls;
