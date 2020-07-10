import React, { useState } from "react";
import PropTypes from 'prop-types';
import DatePicker from "../DatePicker";

const SelectDate = ({
    view = "desktop"
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [tab, setTab] = useState(1);

	const onSetOpen=()=>{
		setIsOpen(!isOpen);
	}
	return (
		<>
			<div 
                className={`date__dropdown wow bounceInDown ${view==="desktop" && "mobile__display_none"} animated`}
                data-wow-delay="0.4s"
				onClick={onSetOpen}
				data-wow-delay="0.4s"
			>
                {view === "mobile"
                ?   <h3>
                        <i className="fa fa-calendar-check-o"></i> Yesterday 
                        <span className="fa fa-angle-down"></span>
                    </h3>
                :   <>
                        <h3>Yesterday: 09 Jan 2020 - 24 Jan 2020 <span className="fa fa-angle-down"></span></h3>
                        <p>vs. 10 Jan - 10 Jan</p>
                    </>
                }
			</div>

			{isOpen &&
				<div className="datepicker__dropdown">
					<div className="datepicker__header__close">
						<div className="datepicker__header__close__btn"	>
							<span 
								className="fa fa-times" 
								onClick={onSetOpen}
							></span>
						</div>
					</div>
					<div className="tab-menu">
						<ul>
							<li><a onClick={()=>setTab(1)} className="date-tab-a presents__card active-a">Presets</a></li>
							<li><a onClick={()=>setTab(2)} className="date-tab-a range__card">Custom Range</a></li>
						</ul>
					</div>

					<div className={`date-tab ${tab===1?'tab-active':''}`}>
						<div className="datepicker__dropdown__scroll">
							<div className="datepickre__list">
								<input id="tuesday" type="radio" name="tuesday" />
								<label for="tuesday" className="date--radio">Tuesday</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Yesterday</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Last 7 Days</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Last 30 Days</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">This March</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Last March</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Yesterday</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Last 7 Days</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Last 30 Days</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">This March</label>
							</div>
							<div className="datepickre__list">
								<input id="Yesterday" type="radio" name="Yesterday" />
								<label for="Yesterday" className="date--radio">Last March</label>
							</div>
						</div>
						<div className="done__btn date__picker__btn">
							<a onClick={""} className="btn btn-primary">Done</a>
						</div>
					</div>

					<div className={`date-tab ${tab===2?'tab-active':''}`}>
						<div className="datepicker__dropdown__scroll">
							<div className="date__row">
								<div className="date__col6">
									<div className="Showed__date">
										<h3>09/01/2020 <span>-</span> 09/01/2020</h3>
									</div>
								</div>
								<div className="date__col6"></div>
							</div>
							<div className="date__row">
								<div className="date__col6">
									<DatePicker name="datepicker1" />
								</div>
								<div className="date__col6">
									<DatePicker name="datepicker2" />
								</div>
							</div>
						</div>
						<div className="done__btn date__picker__btn">
							<a onClick={""} className="btn btn-primary">Done</a>
						</div>
					</div>
				</div>
			}
		</>
	);
}

SelectDate.propTypes = {
    view: PropTypes.string,
}

export default SelectDate;