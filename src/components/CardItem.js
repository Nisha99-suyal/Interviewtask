import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { IconStar } from "@tabler/icons-react";
import PersonDetail from "./PersonDetail";
import ButtonSection from "./ButtonSection";

export default function CardItem({
  dataAPI,
  img,
  remove,
  handleFollowToggle,
  followStates,
}) {
  return (
    <>
      {dataAPI.map((item, index) => (
        <Col lg="3" md="6" key={item.id}>
          <div className="card">
            <Card.Img src={img + item.name} />

            <Card.Body className="p-0">
              <Card.Title>
                {item.name} <span></span>
                {!followStates[index].isFollowing && (
                  <IconStar className="star" size={16} />
                )}
              </Card.Title>

              <PersonDetail item={item} />

              <ButtonSection
                item={item}
                index={index}
                remove={remove}
                handleFollowToggle={handleFollowToggle}
                followStates={followStates}
              />
            </Card.Body>
          </div>
        </Col>
      ))}
    </>
  );
}
