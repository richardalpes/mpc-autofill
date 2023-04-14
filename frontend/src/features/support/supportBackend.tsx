import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { useGetBackendInfoQuery } from "@/app/api";

interface SupportBackendModalProps {
  show: boolean;
  handleClose: {
    (): void;
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  };
}

export function SupportBackendModal(props: SupportBackendModalProps) {
  const backendInfoQuery = useGetBackendInfoQuery();

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Support {backendInfoQuery.data?.name ?? "Your Server Manager"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>TODO</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}