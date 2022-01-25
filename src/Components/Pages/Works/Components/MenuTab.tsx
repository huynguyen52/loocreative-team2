import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { useEffect } from "react";
const { Option } = Select;

const menus = [
  "ALL",
  "SHOWREEL",
  "COMMERCIAL",
  "MOTION",
  "OPENING TITLE",
  "MV",
  "ARTWORK",
  "DESIGN",
];

interface MenuTabProps {
  type: string;
  onTypeChange(newType: string): void;
}

const Menu = (props: MenuTabProps) => {
  const { type, onTypeChange } = props;
  return (
    <ul>
      {menus.map((item, index) => (
        <li
          key={index}
          className={type === item ? "select" : ""}
          onClick={() => onTypeChange(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const DropSelect = (props: MenuTabProps) => {
  const { type, onTypeChange } = props;
  return (
    <Select
      defaultValue={type}
      style={{ width: "100%" }}
      onChange={onTypeChange}
    >
      {menus.map((item, index) => (
        <Option value={item} key={index}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

const MenuTab: React.FC<MenuTabProps> = ({ type, onTypeChange }) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else if (window.innerWidth < 1024) {
      setIsDesktop(false);
    }
  }, []);

  return (
    <div className="menu_tab">
      {isDesktop ? (
        <Menu type={type} onTypeChange={onTypeChange} />
      ) : (
        <DropSelect type={type} onTypeChange={onTypeChange} />
      )}
    </div>
  );
};

export default MenuTab;
