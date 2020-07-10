import React, { useState } from "react";
import FilterItem from "./FilterItem";
import SelectDate from "./SelectDate";

const Controller = () => {
  const [filterOpen, setFilterOpen]=useState(false);
  const [addFilter, setAddFilter] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);

  const removeFilterOption = (option) => {
    var index = filterOptions.indexOf(option);
    if (index > -1) {
        filterOptions.splice(index, 1);
        setFilterOptions([...filterOptions]);
    }
  }

  return (
    <div className="search__main__sec">
      <div className="row">
        <div className="col-md-8">
          <div className="filter__btn">
            <ul className="btn__list__filter text__left campaigns__view__mobile">
              <li>
                <button className="btn btn-primary wow bounceIn animated mobile__display_none" data-wow-delay="0.5s">
                  <i className="fa fa-plus"></i> New Campaign
                </button>
              </li>

              <li className="mobile__view__datedropdown">
                <SelectDate view="mobile" />
              </li>

              {addFilter && 
                <FilterItem
                  filterOptions={filterOptions}
                  removeFilterOption={removeFilterOption}
                />
              }

              <li className="add__filter_main">
                <button 
                  onClick={()=>setFilterOpen(true)}
                  className="btn btn-default main__dropdown_open wow bounceIn animated"
                  data-wow-delay="0.5s"
                >
                  <i className="fa fa-filter" />
                  <span class="mobile__display_none">Add Filter</span>
                </button>

                <div className="mobile__search">
                  <a>
                    <i className="fa fa-search"></i>
                  </a>
                </div>

                {filterOpen && 
                  <div className="add__filter__dropdown">
                    <div className="dropdown__close__btn">
                      <i className="fa fa-times" onClick={()=>setFilterOpen(false)}></i>
                    </div>

                    <div className="dropdown__content__section">
                      <div className="dropdown__menu__list">
                        <a onClick={''} className="dropdown__open">
                          <h3>Status <span className="fa fa-angle-down"></span></h3>
                          <div className="checkbox__list" id="checboxList">
                            <form>
                              <div className="form-group">
                                <input type="checkbox" id="Active" />
                                <label for="Active">Active</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Pause" />
                                <label for="Pause">Pause</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Archive" />
                                <label for="Archive">Archive</label>
                              </div>
                            </form>
                          </div>
                        </a>
                      </div>
                      <div className="dropdown__menu__list">
                        <a onClick={''} className="dropdown__open__2">
                          <h3>Account Type <span className="fa fa-angle-down"></span></h3>
                          <div className="checkbox__list" id="checboxList2">
                            <form>
                              <div className="form-group">
                                <input type="checkbox" id="Click" />
                                <label for="Click">Click</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Leads" />
                                <label for="Leads">Leads</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Calss" />
                                <label for="Calss">Calss</label>
                              </div>
                            </form>
                          </div>
                        </a>
                      </div>                    
                      <div className="dropdown__menu__list">
                        <a onClick={''} className="dropdown__open__close">
                          <h3>Account Manager <span className="fa fa-angle-down"></span></h3>
                          <div className="checkbox__list" id="checboxList3">
                            <form>
                              <div className="form-group">
                                <input type="checkbox" id="Click" />
                                <label for="Click">Click</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Leads" />
                                <label for="Leads">Leads</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Calss" />
                                <label for="Calss">Calss</label>
                              </div>
                            </form>
                          </div>
                        </a>
                      </div>
                      <div className="dropdown__menu__list">
                        <a onClick={''} className="dropdown__open__close">
                          <h3>Company<span className="fa fa-angle-down"></span></h3>
                          <div className="checkbox__list" id="checboxList3">
                            <form>
                              <div className="form-group">
                                <input type="checkbox" id="Click" />
                                <label for="Click">Click</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Leads" />
                                <label for="Leads">Leads</label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id="Calss" />
                                <label for="Calss">Calss</label>
                              </div>
                            </form>
                          </div>
                        </a>
                      </div>

                    </div>
                    
                    <div className="done__btn">
                      <button 
                        className="btn btn-primary"
                        onClick={()=>{
                          setAddFilter(true);
                          setFilterOpen(false);
                          setFilterOptions([0,1]);
                        }} 
                      >
                        Done
                      </button>
                    </div>
                  </div>
                }

              </li> 

            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="searc__input mobile__display_none">
            <ul>
              <li>
                <div className="input-group wow fadeIn animated" data-wow-delay="0.7s">
                  <span className="input-group-addon" id="basic-addon1">
                    <i className="fa fa-search"></i>
                  </span>
                  <input type="text" className="form-control" placeholder="Search.."/>
                </div>
              </li>
              <li>
                <button className="btn btn-primary wow fadeIn animated mobile__display_none" data-wow-delay="0.8s">
                  <i className="fa fa-share-square-o" />Export
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Controller;