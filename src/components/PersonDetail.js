import React from "react";
import { IconAt, IconPhoneCall, IconWorld } from "@tabler/icons-react";
function PersonDetail({ item }) {
  return (
    <div className="details-block">
      <div className="detail">
        <IconAt size={16} />
        {item.email}
      </div>
      <div className="detail">
        <IconPhoneCall size={16} />
        {item.phone}
      </div>
      <div className="detail">
        <IconWorld size={16} />
        {item.website}
      </div>
    </div>
  );
}

export default PersonDetail;
