import PropTypes from "prop-types";
import React from "react";
import f from "./Filter.module.css";
import {useDispatch, useSelector } from "react-redux";
import {filterContact} from "../../redux/actions";


export default function Filter() {
  const filtered = useSelector(state=>state.filter);  
  const dispatch = useDispatch();
  
  const handleFilterChange = (e) => {
    dispatch(filterContact( e.target.value));
  };
  
  return (
    <label className={f.filter_title}>
      Filter by name
      <input name="filter" type="text" value={filtered.filter} onChange={handleFilterChange} />
    </label>
  );
};
Filter.propTypes={
  handleFilterChange:PropTypes.func,
  filtered: PropTypes.string,
}


