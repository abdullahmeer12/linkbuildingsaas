import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import Accordion from "react-bootstrap/Accordion";

const MobileNavMenu = () => {
  return (
    <>
      <ul className="mobile-main-menu__list">
      <Accordion defaultActiveKey="0">
        {menu_data.map((item, i) =>
          item?.has_dropdown ? (
           <Accordion.Item eventKey={i} key={i}>
            <li key={i} className="menu-item-has-children">
            <Accordion.Header> <Link href={item.link}>{item.title}</Link></Accordion.Header>
              {item.sub_menus && (
              <Accordion.Body>  <ul className="sub-menu">
                  {item.sub_menus.map((sub_item, sub_i) => (
                    <li key={sub_i}>
                      <Link href={sub_item.link}>{sub_item.title}</Link>
                    </li>
                  ))}
                </ul></Accordion.Body>
              )}
            </li>
            </Accordion.Item>
          
          ) : (
            <li key={i}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          )
        )}
        </Accordion>
      </ul>
    </>
  );
};

export default MobileNavMenu;
