import React, { useState } from "react";

import ColorPickerr from "material-ui-color-picker";

const ColorPicker = () => {
   const [color, setColor] = useState("");

   return (
      <ColorPickerr
         name="color"
         defaultValue="Color"
         value={color}
         onChange={(color) => setColor(color)}
      />
   );
};

export default ColorPicker;
