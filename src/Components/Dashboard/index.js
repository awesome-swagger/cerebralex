import React, { useState } from "react";
import SelectDate from './SelectDate';
import Controller from './Controller';

const Dashboard = () => {
  return (
    <div className="right_col" role="main" style={{minHeight: "880px"}}>
      <div className="right-col-spaceing">
        <div className="container">
          <div className="company__view">
            <div className="row">
              <div className="col-md-6">
                <h2 className="heder__title wow bounceInDown animated" data-wow-delay="0.4s">Campaigns View</h2>
              </div>
              <div className="col-md-6">
                <SelectDate />
              </div>
            </div>
            
            <Controller />

            <div className="table-responsive users__table">
              <table className="table">
                <thead>
                  <tr className="wow fadeIn fadeInUp" data-wow-delay="0.10s">
                    <th>
                      <div className="table__checkbox">
                        <div className="form-group">
                          <input type="checkbox" id="1" />
                          <label for="1"></label>
                        </div>
                      </div>
                    </th>
                    <th>Campaign Name</th>
                    <th>Daily Budget</th>
                    <th>Clicks</th>
                    <th>Impressions</th>
                    <th>CTR</th>
                    <th>Avg. CPC</th>
                    <th>Cost</th>
                    <th>Avg. Pos</th>
                    <th>Showed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="wow fadeIn fadeInUp" data-wow-delay="0.11s">
                    <th scope="row">
                      <div className="table__checkbox">
                        <div className="form-group">
                          <input type="checkbox" id="2" />
                          <label for="2"></label>
                        </div>
                      </div>
                    </th>
                    <td>Kissterra Auto - Mobile Clicks Gold</td>
                    <td>$25,000 <span className="green__color">+25%</span></td>
                    <td>4,856,857 <span className="red__color">-7%</span></td>
                    <td>27,856,857 <span className="green__color">+12%</span></td>
                    <td>43.13% <span className="green__color">+5%</span></td>
                    <td>$5.14 <span className="green__color">+7%</span></td>
                    <td>$24,959.84 <span className="green__color">+25%</span></td>
                    <td>1.95 <span className="green__color">+3%</span></td>
                    <td>70.00% <span className="green__color">+8%</span></td>
                  </tr>
                  <tr className="wow fadeIn fadeInUp" data-wow-delay="0.12s">
                    <th scope="row">
                      <div className="table__checkbox">
                        <div className="form-group">
                          <input type="checkbox" id="3" />
                          <label for="3"></label>
                        </div>
                      </div>
                    </th>
                    <td>Kissterra Auto - Mobile Clicks Gold</td>
                    <td>$25,000 <span className="green__color">+25%</span></td>
                    <td>4,856,857 <span className="red__color">-7%</span></td>
                    <td>27,856,857 <span className="green__color">+12%</span></td>
                    <td>43.13% <span className="green__color">+5%</span></td>
                    <td>$5.14 <span className="green__color">+7%</span></td>
                    <td>$24,959.84 <span className="green__color">+25%</span></td>
                    <td>1.95 <span className="green__color">+3%</span></td>
                    <td>70.00% <span className="green__color">+8%</span></td>
                  </tr>
                  <tr className="wow fadeIn fadeInUp" data-wow-delay="0.13s">
                    <th scope="row">
                      <div className="table__checkbox">
                        <div className="form-group">
                          <input type="checkbox" id="4" />
                          <label for="4"></label>
                        </div>
                      </div>
                    </th>
                    <td>Kissterra Auto - Mobile Clicks Gold</td>
                    <td>$25,000 <span className="green__color">+25%</span></td>
                    <td>4,856,857 <span className="red__color">-7%</span></td>
                    <td>27,856,857 <span className="green__color">+12%</span></td>
                    <td>43.13% <span className="green__color">+5%</span></td>
                    <td>$5.14 <span className="green__color">+7%</span></td>
                    <td>$24,959.84 <span className="green__color">+25%</span></td>
                    <td>1.95 <span className="green__color">+3%</span></td>
                    <td>70.00% <span className="green__color">+8%</span></td>
                  </tr>
                  <tr className="wow fadeIn fadeInUp" data-wow-delay="0.14s">
                    <th scope="row">
                      <div className="table__checkbox">
                        <div className="form-group">
                          <input type="checkbox" id="5" />
                          <label for="5"></label>
                        </div>
                      </div>
                    </th>
                    <td>Kissterra Auto - Mobile Clicks Gold</td>
                    <td>$25,000 <span className="green__color">+25%</span></td>
                    <td>4,856,857 <span className="red__color">-7%</span></td>
                    <td>27,856,857 <span className="green__color">+12%</span></td>
                    <td>43.13% <span className="green__color">+5%</span></td>
                    <td>$5.14 <span className="green__color">+7%</span></td>
                    <td>$24,959.84 <span className="green__color">+25%</span></td>
                    <td>1.95 <span className="green__color">+3%</span></td>
                    <td>70.00% <span className="green__color">+8%</span></td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

          <div className="top__campaings_sec mobile__display_none">
            <p>Top Campaigns</p>

            <div className="row">
              <div className="col-md-3">
                <div className="campaigns__tabs__main">
                  <ul className="nav nav-tabs campaigns__tabs" role="tablist">
                    <li role="presentation" className="active wow fadeIn fadeInLeftBig" data-wow-delay="0.12s">
                      <a href="#click" aria-controls="click" role="tab" data-toggle="tab">Click <span>4,856,857</span></a>
                    </li>
                    <li role="presentation" className="wow fadeIn fadeInLeftBig" data-wow-delay="0.20s">
                      <a href="#impration" aria-controls="impration" role="tab" data-toggle="tab">Impressions <span>27,856,857</span></a>
                    </li>
                    <li role="presentation" className="wow fadeIn fadeInLeftBig" data-wow-delay="0.35s">
                      <a href="#cost" aria-controls="cost" role="tab" data-toggle="tab">Cost <span>$24,959.84</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;