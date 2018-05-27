import React from 'react';
import PropTypes from 'prop-types';
import './Artist.css';

/**
**@desc: 详情页演职员表
**@date: 2018/4/15
**@author: 程松(贰叁)
*/

const Artist = ({ data }) => {
  return (
    <div className="mArtist">
      <ul className="mArtist__list">
        {
          data.map(item => (
            <li className="" key={item.name}>
              <a href="#" className="artistInfo">
                <div className="artistInfo__image" style={{ backgroundImage: `url(${item.image})` }} />
                <div>
                  <dl className="artistInfo__name">{item.name}</dl>
                  <dd className="artistInfo__job">{item.job}</dd>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Artist.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Artist;
