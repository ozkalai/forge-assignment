import React from "react";
import MoreIcon from "@atlaskit/icon/glyph/more";

import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

const DropdownMenuCustom = ({ asJSON, asCSV }) => (
  <DropdownMenu
    triggerButtonProps={{ iconBefore: <MoreIcon label="more" /> }}
    triggerType="button"
  >
    <DropdownItemGroup>
      <DropdownItem>Download as JSON</DropdownItem>
      <DropdownItem>Download as CSV</DropdownItem>
    </DropdownItemGroup>
  </DropdownMenu>
);

export default DropdownMenuCustom;
