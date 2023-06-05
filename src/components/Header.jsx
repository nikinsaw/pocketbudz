import PropTypes from "prop-types";
import TextGeological from "./fonts/TextGeological";
import { RiMenu3Fill } from "react-icons/ri";
import { TbCoinRupee } from "react-icons/tb";

import "./Header.styles.css";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DRAWER_ITEM } from "../store/Constants";

const drawerItems = ["Day", "Week", "Month", "Year", "All Time"];

const Header = ({ value }) => {
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);
  const { selectedDrawerItem } = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleMenuDrawer = useCallback(() => {
    setShowMenuDrawer(!showMenuDrawer);
  }, [showMenuDrawer]);

  const onBarItemClick = useCallback(
    (selectedDrawerItem) => () => {
      dispatch({ type: SET_DRAWER_ITEM, payload: { selectedDrawerItem } });
    },
    [dispatch]
  );
  const onDrawerItemClick = useCallback(
    (selectedDrawerItem) => () => {
      dispatch({ type: SET_DRAWER_ITEM, payload: { selectedDrawerItem } });
      setShowMenuDrawer(false);
    },
    [dispatch]
  );

  return (
    <>
      <TextGeological size={3} color="white" weight={500} className="header">
        {value}
      </TextGeological>
      <div className="header__menu-bar">
        <ul className="header__menu-bar-list">
          {drawerItems.map((item, index) => (
            <li
              onClick={onBarItemClick(item)}
              key={index}
              className={
                (selectedDrawerItem === item &&
                  "header__menu-bar-list-item-active") ||
                "header__menu-bar-list-item"
              }
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="header__menu-income-and-expense">
          <TbCoinRupee color="#FFF" size={24} />
          <li className="header__menu-income-and-expense-item">
            {`Income: ${Math.floor(Math.random() * 1000)}`}
          </li>
          <TbCoinRupee color="#FFF" size={24} />
          <li className="header__menu-income-and-expense-item">
            {`Expense: ${Math.floor(Math.random() * 1000)}`}
          </li>
        </ul>
      </div>
      <RiMenu3Fill className="header__menu-icon" onClick={toggleMenuDrawer} />
      <div className={(showMenuDrawer && "header__menu-drawer") || ""}>
        {(showMenuDrawer && (
          <ul className="header__menu-drawer-list">
            {drawerItems.map((item, index) => (
              <li
                onClick={onDrawerItemClick(item)}
                key={index}
                className="header__menu-drawer-list-item"
              >
                {item}
              </li>
            ))}
          </ul>
        )) || (
          <div className="header__selected-menu-drawer-item">
            {selectedDrawerItem}
          </div>
        )}
      </div>
    </>
  );
};

Header.propTypes = {
  value: PropTypes.node,
};

export default Header;
