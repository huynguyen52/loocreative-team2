import React from "react";
import { WorkData } from "../Works";
import { useTranslation } from "react-i18next";

interface WorkListProps {
  workList: WorkData[];
  setShowModal: any;
}
const WorkBlock: React.FC<WorkListProps> = ({ workList, setShowModal }) => {
  const { t } = useTranslation();
  
  return (
    <div className="works-list">
      {workList.map((item, index) => (
        <div
          key={index}
          className="works-card"
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => setShowModal(true)}
        >
          <p className="works-card__type">{item.type}</p>
          <h3 className="works-card__title">
            {t(`worksData.${index}.title`)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default WorkBlock;
