import React from "react";
import { Button } from "react-bootstrap";
import { IconTrash, IconUserPlus, IconUserMinus } from "@tabler/icons-react";
function ButtonSection({
  remove,
  handleFollowToggle,
  item,
  index,
  followStates,
}) {
  return (
    <div className="button-section">
      <Button
        className={followStates[index].isFollowing ? "follow" : "unfollow"}
        onClick={() => handleFollowToggle(item.id)}
      >
        {followStates[index].isFollowing ? (
          <>
            <span>
              <IconUserPlus size={16} />
            </span>
            <span>Follow</span>
          </>
        ) : (
          <>
            <span>
              <IconUserMinus size={16} />
            </span>
            <span>Unfollow</span>
          </>
        )}
      </Button>

      <Button
        className="delete"
        variant="outline-primary"
        size="md"
        onClick={() => remove(item.id)}
      >
        <IconTrash size={16} />
        <span></span>
        Delete
      </Button>
    </div>
  );
}

export default ButtonSection;
