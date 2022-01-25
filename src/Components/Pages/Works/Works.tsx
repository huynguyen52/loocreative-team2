import React, { useState } from "react";
import MenuTab from "./Components/MenuTab";
import WorksBlock from "./Components/WorkBlock";
import Footer from "./Components/Footer";
import img1 from "../../../Assets/Images/Works/1.jpg";
import img2 from "../../../Assets/Images/Works/2.jpg";
import img3 from "../../../Assets/Images/Works/3.jpg";
import img4 from "../../../Assets/Images/Works/4.jpg";
import img5 from "../../../Assets/Images/Works/5.jpg";
import img6 from "../../../Assets/Images/Works/6.jpg";
import img7 from "../../../Assets/Images/Works/7.jpg";
import img8 from "../../../Assets/Images/Works/8.jpg";
import img9 from "../../../Assets/Images/Works/9.jpg";
import img10 from "../../../Assets/Images/Works/10.jpg";
import img11 from "../../../Assets/Images/Works/11.jpg";
import img12 from "../../../Assets/Images/Works/12.jpg";
import img13 from "../../../Assets/Images/Works/13.jpg";
import img14 from "../../../Assets/Images/Works/14.jpg";
import img15 from "../../../Assets/Images/Works/15.jpg";
import img16 from "../../../Assets/Images/Works/16.jpg";
import img17 from "../../../Assets/Images/Works/17.jpg";
import img18 from "../../../Assets/Images/Works/18.jpg";
import img19 from "../../../Assets/Images/Works/19.jpg";
import img20 from "../../../Assets/Images/Works/20.jpg";
import WorkModal from "./Components/WorkModal";

export interface WorkData {
  id: number;
  title: string;
  type: string;
  image: string;
}

const data: WorkData[] = [
  {
    id: 1,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img1,
  },
  {
    id: 2,
    title: "Opening Title | The serene sea",
    type: "COMMERCIAL",
    image: img2,
  },
  {
    id: 3,
    title: "Opening Title | Sabotage City",
    type: "COMMERCIAL",
    image: img3,
  },
  {
    id: 4,
    title: "DIGILOCA | Teaser",
    type: "COMMERCIAL",
    image: img4,
  },
  {
    id: 5,
    title: "Kona Lucky Card",
    type: "COMMERCIAL",
    image: img5,
  },
  {
    id: 6,
    title: "KB | Liiv Next",
    type: "COMMERCIAL",
    image: img6,
  },
  {
    id: 7,
    title: "로카머니 | LOCAMONEY",
    type: "COMMERCIAL",
    image: img7,
  },
  {
    id: 8,
    title: "KLOUD | KLOUD X BTS",
    type: "COMMERCIAL",
    image: img8,
  },
  {
    id: 9,
    title: "Shinhan Life. | Brand ID",
    type: "COMMERCIAL",
    image: img9,
  },
  {
    id: 10,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img10,
  },
  {
    id: 11,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img11,
  },
  {
    id: 12,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img12,
  },
  {
    id: 13,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img13,
  },
  {
    id: 14,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img14,
  },
  {
    id: 15,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img15,
  },
  {
    id: 16,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img16,
  },
  {
    id: 17,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img17,
  },
  {
    id: 18,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img18,
  },
  {
    id: 19,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img19,
  },
  {
    id: 20,
    title: "2021 Looc Showreel",
    type: "SHOWREEL",
    image: img20,
  },
];

const Works: React.FC = () => {
  const [type, setType] = useState<string>("ALL");
  const [workList, setWorkList] = useState(data);
  const [showModal, setShowModal] = useState<boolean>(false);

  //handle filter type
  const handleTypeChange = (newType: string) => {
    if (newType === "ALL") {
      setWorkList(data);
    } else {
      const newWorkList = data.filter((item) => item.type === newType);
      setWorkList(newWorkList);
    }

    setType(newType);
  };

  return (
    <div className={showModal ? "bg-modal" : ""}>
      <div className="page-works container">
        <p className="works-title">WORKS</p>
        <MenuTab type={type} onTypeChange={handleTypeChange} />
        <WorksBlock workList={workList} setShowModal={setShowModal} />
        <Footer />
        <WorkModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Works;
