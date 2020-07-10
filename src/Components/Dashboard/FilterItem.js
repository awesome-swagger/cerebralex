import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const FilterDropDown = ({
    items, onClose, onSelect
}) => {
    return(
        <div className="status__dropdown">
            <div className="status__dropdown_close__btn">
                <i
                    className="fa fa-times"
                    onClick={onClose}
                />
            </div>

            <form className="checkbox__list" defaultValue={{Active:1}}>
                {items.map((item, index)=>(
                    <div className="form-group" key={index}>
                        <input
                            type="checkbox"
                            name={item}
                        />
                        <label>{item}</label>
                    </div>
                ))}
            </form>

        </div>
    );
}
FilterDropDown.propTypes = {
    items: PropTypes.object,
    onSelect: PropTypes.func,
    onClose: PropTypes.func,
}


const FilterItem = ({
    filterOptions=[],
    removeFilterOption 
}) => {
    const [dropOption, setDropOption] = useState(-1);

    return (
        <span className="selectted__status">
            { filterOptions.includes(0) &&
                <li>
                    <div onClick={(e) => {
                        if (e.target.tagName === "I")
                            removeFilterOption(0);
                        else
                            setDropOption(0);
                    }}>
                        Status:
                        <span>Active <i className="fa fa-times"></i></span>
                    </div>
                    {dropOption === 0 && 
                        <FilterDropDown 
                            items={['Active', 'Pause', 'Archive']}
                            onClose={()=>setDropOption(-1)}
                        />
                    }
                </li>
            }
            { filterOptions.includes(1) &&
                <li>
                    <div onClick={(e) => {
                        if (e.target.tagName === "I")
                            removeFilterOption(1);
                        else
                            setDropOption(1);
                    }}>
                        Company:
                        <span>Liberty Mutual <i className="fa fa-times"></i></span>
                    </div>

                    {dropOption === 1 && 
                        <FilterDropDown 
                            items={['Liberty Mutual', 'Pause', 'Archive']}
                            onClose={()=>{setDropOption(-1)}}
                        />
                    }
                </li>
            }
        </span>
    )
}

FilterItem.propTypes = {
    filterOptions: PropTypes.object,
    removeFilterOption: PropTypes.func,
}

export default FilterItem;