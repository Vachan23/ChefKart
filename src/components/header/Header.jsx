import React from 'react';
import './Header.css';
export default function Header() {
  return (
    <div className="Header">
      <div className="timing-container default">
        <div className="timing">
          <div className="date">
            <div className="date-icon"></div>
            <div className="date-content">21 May 2021</div>
          </div>
          <div className="time">
            <div className="time-icon"></div>
            <div className="time-content">10:30 Pm - 12:30pm</div>
          </div>
        </div>
      </div>

      <div className="preference-container default">
        <ul className="preference-items">
          <li className="preference-item">Italian</li>
          <li className="preference-item">Indian</li>
          <li className="preference-item">Indian</li>
          <li className="preference-item">Indian</li>
        </ul>
      </div>
    </div>
  );
}
