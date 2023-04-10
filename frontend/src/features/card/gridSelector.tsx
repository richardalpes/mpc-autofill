/**
 * This module contains components which allows the user to select between
 * different card versions while seeing them all at once.
 * A generic component is provided as the basis for grid selectors,
 * and additional components extend this for use with `CardSlot` and `CommonCardback`.
 */

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Card } from "./card";
import Button from "react-bootstrap/Button";
import React, { memo } from "react";
import {
  bulkSetSelectedImage,
  setSelectedCardback,
  setSelectedImage,
} from "../project/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { Back } from "@/common/constants";
import { Faces } from "@/common/types";

interface GridSelectorProps {
  imageIdentifiers: Array<string>;
  show: boolean;
  handleClose: {
    (): void;
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  };
  onClick: {
    (identifier: string): void;
  };
}

// TODO: do we move this into `cardSlot.tsx`? same with the other component below
interface CardSlotGridSelectorProps {
  face: Faces;
  slot: number;
  searchResultsForQuery: Array<string>;
  show: boolean;
  handleClose: {
    (): void;
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  };
}

interface CommonCardbackGridSelectorProps {
  searchResults: Array<string>;
  show: boolean;
  handleClose: {
    (): void;
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  };
}

function GridSelector(props: GridSelectorProps) {
  return (
    <Modal show={props.show} onHide={props.handleClose} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title>Select Version</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="g-0" xxl={4} xl={4} lg={3} md={2} sm={2} xs={2}>
          {props.imageIdentifiers.map((identifier, index) => (
            <Card // TODO: paginate or lazy-load these
              imageIdentifier={identifier}
              cardHeaderTitle={`Option ${index + 1}`}
              imageOnClick={() => {
                props.onClick(identifier);
                props.handleClose();
              }}
              key={`gridSelector-${identifier}`}
              noResultsFound={false}
            />
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function CardSlotGridSelector(props: CardSlotGridSelectorProps) {
  const dispatch = useDispatch<AppDispatch>();
  function setSelectedImageFromIdentifier(selectedImage: string): void {
    dispatch(
      setSelectedImage({ face: props.face, slot: props.slot, selectedImage })
    );
  }
  return (
    <GridSelector
      imageIdentifiers={props.searchResultsForQuery}
      show={props.show}
      handleClose={props.handleClose}
      onClick={setSelectedImageFromIdentifier}
    />
  );
}

export const MemoizedCardSlotGridSelector = memo(CardSlotGridSelector);

export function CommonCardbackGridSelector(
  props: CommonCardbackGridSelectorProps
) {
  const projectCardback = useSelector(
    (state: RootState) => state.project.cardback
  );
  const dispatch = useDispatch<AppDispatch>();
  function setSelectedImageFromIdentifier(selectedImage: string): void {
    if (projectCardback != null) {
      dispatch(
        bulkSetSelectedImage({
          currentImage: projectCardback,
          selectedImage,
          face: Back,
        })
      );
      dispatch(setSelectedCardback({ selectedImage }));
    }
  }
  return (
    <GridSelector
      imageIdentifiers={props.searchResults}
      show={props.show}
      handleClose={props.handleClose}
      onClick={setSelectedImageFromIdentifier}
    />
  );
}

export const MemoizedCommonCardbackGridSelector = memo(
  CommonCardbackGridSelector
);