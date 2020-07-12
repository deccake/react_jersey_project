import React, { Component, useState } from "react";
import chat from "../static/images/chat.jpg";
import Modal from "react-bootstrap/Modal";


const CreatePostView = (props) => {
  const { heading, content, mediaFile } = props.postData;
  let { postHeadingErrorMsg, imgFile } = props;
  const [showPostModal, setShowPostModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  return (
    <React.Fragment>
      <div className="card my-0">
        <div className="card-body">
          <div className="direct-chat-msg">
            <img className="direct-chat-img" src={chat} alt="message user image" />
            <form
              className="example"
              onClick={(e) => {
                e.preventDefault();
                setShowPostModal(!showPostModal);
              }}
            >
              <input className="ml-3" type="text" placeholder="Write Somthing.." />
              <button>
                <i class="fa fa-camera"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal size="lg" show={showPostModal} onHide={() => setShowPostModal(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <img src={chat} />
            Create Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-2">
            <input value={heading} class="form-control" placeholder="What's in your mind?" name="postHeading" onChange={props.onPostHandleChange}></input>
            <span>
              <small className="text-danger">{postHeadingErrorMsg}</small>
            </span>
          </div>
          <div>
            <textarea value={content} onChange={props.onPostHandleChange} name="postContent" className="form-control" placeholder="Add more details"></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row text-right  ">
            <div class="col-md-4 image-upload ">
              <img src={require("../static/images/icons8-camera-48.png")} onClick={() => setImageModal(!imageModal)} />
            </div>
            <div className="col-md-4  ml-20">
              <button
                onClick={() => {
                  props.onHandleCreatePost();
                  heading ? setShowPostModal(false) : "";
                }}
                type="button"
                className="btn btn-primary"
              >
                Post
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal show={imageModal} onHide={() => setImageModal(!imageModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div className="col-md-4 image-upload ">
              <label htmlFor="file-input">
                <img src={require("../static/images/icons8-camera-48.png")} />
              </label>
              <input name="mediaFile" id="file-input" onChange={props.onPostHandleChange} type="file" />
            </div>
            <div className="sm mr-0 float-right">
              <img style={{ borderRadius: "50%", width: 100, height: 100 }} src={imgFile} alt="" />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={() => {
              props.onHandleUpdatePost("imageUpload", {});
              setImageModal(false);
            }}
            className="btn btn-primary"
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CreatePostView;
