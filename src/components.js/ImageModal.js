import React from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ImageModal = ({ toggleModale, modal }) => {
  //get state from redux store
  const dogImages = useSelector((state) => state.dogImages);
  const { dogPicture, isImage } = dogImages;
  return (
    <div>
      <Modal show={modal} size='lg'>
        <Modal.Header>
          <Modal.Title
            id='contained-modal-title-vcenter'
            className='d-flex flex-wrap'>
            <Row>
              <Col md={7} className='align-self-start'>
                <h4>Dogs List Of Selected Breed </h4>
              </Col>
              <Col md={4} style={{ paddingLeft: "250px" }}>
                <Button
                  className='btn btn-danger'
                  onClick={() => toggleModale()}>
                  X
                </Button>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            {isImage &&
              Object.keys(dogPicture.message).map((url, index) => (
                <Col md={2} className='px-1' key={index}>
                  <img
                    className='pl-1 pr-1'
                    src={dogPicture.message[url]}
                    alt='images'
                    style={{ width: "150px", height: "150px" }}
                  />
                </Col>
              ))}
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn btn-danger' onClick={() => toggleModale()}>
            Close
          </Button>
          <Button onClick={() => toggleModale()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageModal;
