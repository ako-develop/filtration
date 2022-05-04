import React from "react";
import PropTypes from "prop-types"

const GroupList = ({items, valueProperty, contentProperty}) => {
    console.log(Object.keys(items));
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li key={items[item][valueProperty]} className="list-group-item">
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};
export default GroupList;