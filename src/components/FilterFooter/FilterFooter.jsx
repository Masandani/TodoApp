/* eslint-disable no-undef */
import React, { useState } from 'react'
import './FilterFooter.css'

// eslint-disable-next-line no-unused-vars
const FilterFoter = ({ tasks, updateFilter }) => {

    const [filter, setFilter] = useState('all')

    const handleFilter =(filterName) =>{
        setFilter(filterName)
        updateFilter(filterName)
    }
    return (
        <div className="FilterFooter">
            <div className="FilterFooter__CountItem" >
                {tasks.length > 1 ? `${tasks.length} items` : `${tasks.length} item`}

            </div>
            <div className="FilterFooter__Filters">
                <ul>
                    <li>
                        <button onClick={() =>handleFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                    </li>
                    <li>
                        <button onClick={() =>handleFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
                    </li>
                    <li>
                        <button onClick={() =>handleFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterFoter;