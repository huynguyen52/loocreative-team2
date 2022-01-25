import React from "react";
import { CloseOutlined } from "@ant-design/icons";

interface WorkModalProps {
  showModal: boolean;
  setShowModal: any;
}

const WorkModal: React.FC<WorkModalProps> = ({ showModal, setShowModal }) => {
  if (!showModal) return <></>;
  return (
    <div className="works-modal">
      <div className="close-btn" onClick={() => setShowModal(false)}>
        <CloseOutlined />
      </div>

      <div className="works-modal-body">
        <div className="works-modal-video">
          <iframe
            id="iMovie"
            title="mainVideo"
            name="movieFrame"
            width={"100%"}
            height={"100%"}
            src="https://player.vimeo.com/video/653576214"
            frameBorder="0"
          />
        </div>

        <div className="works-modal-info">
          <p className="works-modal-type">COMMERCIAL</p>
          <p className="works-modal-title">KB | Liiv Next</p>
        </div>

        <a href="mailto:loocreative@playlooc.com" className="works-contact">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default WorkModal;
