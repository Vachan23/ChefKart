import React from 'react';

import './Recommended.css';

export default function Recommended({ dishes }) {
  console.log(dishes);
  return (
    <div className="Recommended default">
      <nav className="Recommended-nav">
        <div className="Recommended-filter">Recommended</div>
        <div className="Recommended-menu">menu</div>
      </nav>
      <div className="Recommended-list">
        <ul className="Recommended-items">
          {dishes.length > 0
            ? dishes.map((dish) => (
                <li className="Recommended-item">
                  <div className="item-left">
                    <div className="left-heading">
                      <h3>{dish.name}</h3>
                      <div className="more"></div>
                      <div className="rating">
                        {dish.rating} <span>star</span>
                      </div>
                    </div>
                    <div className="left-utils">
                      <ul className="appliances-items">
                        {dish.equipments.map((util) => (
                          <li className="appliance-item">{util}</li>
                        ))}
                        <li className="appliance-item"></li>
                      </ul>
                      <div className="ingredients">
                        <h3>Ingredients</h3>
                        <div className="view-more"></div>
                      </div>
                    </div>
                    <div className="desc">{dish.description}</div>
                  </div>
                  <div className="item-right">
                    <div className="item-container">
                      <img src={dish.image} alt={dish.name} />
                    </div>
                    <div className="add-btn">
                      <button className="button">Add</button>
                      {/* <div className="button-more">
                  <button>-</button>
                  <div className="button-more-content">1</div>
                  <button>+</button>
                </div> */}
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
