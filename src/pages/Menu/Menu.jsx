import React, { useState } from "react";
import classes from "./Menu.module.scss";

import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { AiFillStar, AiFillLike, AiFillDislike } from "react-icons/ai";
import { menu } from "../../data";

const Menu = () => {
  const [currentDish, setCurrentDish] = useState(menu[0]);
  const [arrowDirection, setArrowDirection] = useState(false);

  const rightArrowClick = () => {
    setArrowDirection(true);
    let n = menu.length;
    let key = currentDish.key;
    if (key < n - 1) setCurrentDish(menu[key + 1]);
    else setCurrentDish(menu[0]);
  };

  const leftArrowClick = () => {
    setArrowDirection(false);
    let n = menu.length;

    let key = currentDish.key;
    if (key > 0) setCurrentDish(menu[key - 1]);
    else setCurrentDish(menu[n - 1]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <div className={classes.imageSlider}></div>

        {/* Menu slider in the bottom implementation */}
        <div className={classes.menuSlider}>
          <BiSolidChevronLeft
            className={classes.leftArrow}
            onClick={leftArrowClick}
          />

          <div className={classes.menu}>
            {menu.map((item, key) => {
              return (
                <div
                  className={
                    currentDish.key == key
                      ? `${classes.menuItem} ${classes.active}`
                      : classes.menuItem
                  }
                  key={key}
                  // onClick={() => setCurrentDish(key)}
                >
                  <img src={item.image} className={classes.itemImage} />
                  <h4>{item.name}</h4>
                </div>
              );
            })}
            <div className={classes.indicator}></div>
          </div>

          <BiSolidChevronRight
            className={classes.rightArrow}
            onClick={rightArrowClick}
          />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.itemInfoBox}>
          <header className={classes.itemInfoNav}>
            <h4>Overview</h4>
            <h4>Ingredients</h4>
          </header>

          <section className={classes.itemInfo}>
            <div
              // key={currentDish.key}
              // className={`${classes.itemRating} ${
              //   arrowDirection ? classes.slide : classes.slideOut
              // }`}
              className={classes.itemRating}
              style={{ background: currentDish.color }}
            >
              <h1
                key={currentDish.key}
                className={arrowDirection ? classes.slideOut : classes.slideIn}
              >
                {currentDish.rating}
              </h1>
              <AiFillStar className={classes.starIcon} />
            </div>

            <div className={classes.infoData} key={currentDish.key}>
              <div>
                <h2>{currentDish.chef}</h2>
                <span>{currentDish.desg}</span>
              </div>
              <p>{currentDish.desc}</p>
            </div>

            <div className={classes.customerReview}>
              <div className={classes.circle}>
                <AiFillLike />
              </div>
              <div className={classes.circle}>
                <AiFillDislike />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Menu;
