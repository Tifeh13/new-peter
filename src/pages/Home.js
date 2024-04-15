import '../App.css';
import OffcanvasExample from '../components/Navbar';
import { CiLocationOn } from "react-icons/ci";
import { BsMagic } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";



function Home() {
  return (
    <div className="App">

        <div className="sect-1">
            <div className="sect-2">
                <div className="sect-3">
                    <OffcanvasExample />
                </div>
            </div>
        </div>

        <div className="sect-1-1">
          <div className="sect-2">
            <div className="sect-3">
                <div className="all">
                  <div className="sm-box">
                      Find Jobs, Employment & Career Opportunities
                  </div>
                  <h4>
                  Search Between More Then <br /><span>50,000</span> Open Jobs.
                    </h4>
                    <div className="all-white">
                        <div className="grid-new">
                              <div className="wave-group">
                                <input required type="text" className="input" />
                                <span className="bar"></span>
                                <label className="label">
                                  <span className="label-char" style={{'--index': 0}}>J</span>
                                  <span className="label-char" style={{'--index': 1}}>o</span>
                                  <span className="label-char" style={{'--index': 2}}>b</span>
                                  <span className="label-char" style={{'--index': 3}}>T</span>
                                  <span className="label-char" style={{'--index': 4}}>i</span>
                                  <span className="label-char" style={{'--index': 5}}>t</span>
                                  <span className="label-char" style={{'--index': 6}}>l</span>
                                  <span className="label-char" style={{'--index': 7}}>e</span>
                                  <span className="label-char" style={{'--index': 8}}>,</span>
                                  <span className="label-char" style={{'--index': 9}}>&nbsp;</span>
                                  <span className="label-char" style={{'--index': 10}}>K</span>
                                  <span className="label-char" style={{'--index': 11}}>e</span>
                                  <span className="label-char" style={{'--index': 12}}>y</span>
                                  <span className="label-char" style={{'--index': 13}}>w</span>
                                  <span className="label-char" style={{'--index': 14}}>o</span>
                                  <span className="label-char" style={{'--index': 15}}>r</span>
                                  <span className="label-char" style={{'--index': 16}}>d</span>
                                  <span className="label-char" style={{'--index': 17}}>s</span>
                                  <span className="label-char" style={{'--index': 18}}>,</span>
                                  <span className="label-char" style={{'--index': 19}}>&nbsp;</span>
                                  <span className="label-char" style={{'--index': 20}}></span>
                                  <span className="label-char" style={{'--index': 21}}>P</span>
                                  <span className="label-char" style={{'--index': 22}}>h</span>
                                  <span className="label-char" style={{'--index': 23}}>r</span>
                                  <span className="label-char" style={{'--index': 24}}>a</span>
                                  <span className="label-char" style={{'--index': 25}}>s</span>
                                  <span className="label-char" style={{'--index': 26}}>e</span>
                                  
                                </label>
                              </div>

                              <div className="wave-group">
                                <input required type="text" className="input" />
                                <span className="bar"></span>
                                <label className="label">
                                  <span className="label-char" style={{'--index': 0}}>E</span>
                                  <span className="label-char" style={{'--index': 1}}>m</span>
                                  <span className="label-char" style={{'--index': 2}}>a</span>
                                  <span className="label-char" style={{'--index': 3}}>i</span>
                                  <span className="label-char" style={{'--index': 4}}>l</span>
                                  <span className="label-char" style={{'--index': 5}}>&nbsp;&nbsp; </span>
                                  <span className="label-char" style={{'--index': 6}}>A</span>
                                  <span className="label-char" style={{'--index': 7}}>d</span>
                                  <span className="label-char" style={{'--index': 8}}>d</span>
                                  <span className="label-char" style={{'--index': 9}}>r</span>
                                  <span className="label-char" style={{'--index': 10}}>e</span>
                                  <span className="label-char" style={{'--index': 11}}>s</span>
                                  <span className="label-char" style={{'--index': 12}}>s</span>
                                </label>
                              </div>

                             <div className="select">
                                <select id="serviceContract">
                                  <option value="priorityService">Select Sector</option>
                                  <option value="priorityPlusService">Construction</option>
                                  <option value="priorityPlusService">Cordinator</option>
                                  <option value="priorityPlusService">Employer</option>
                                  <option value="priorityPlusService">Financial Career</option>
                                  <option value="priorityPlusService">Information Technology</option>
                                  <option value="priorityPlusService">Marketing</option>
                                  <option value="priorityPlusService">Quality Check</option>
                                  <option value="priorityPlusService">Real Estate</option>
                                  <option value="priorityPlusService">Sales</option>
                                  <option value="priorityPlusService">Suporting</option>
                                  <option value="priorityPlusService">Teaching</option>
                                </select>
                             </div>

                             <button className='btn-new-grid'>Find Job</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="sect-1">
          <div className="sect-2">
            <div className="sect-3">
                <div className="popular">
                  <div className="popular-1">
                    <h2>Popular Categories</h2>
                    <p>20+ Catetories work wating for you</p>
                  </div>
                  <div className="popular-2">
                    <div className="pop-1">
                      <h2>1800</h2>
                      <p>Job Posted</p>
                    </div>
                    <div className="pop-1">
                      <h2>4500</h2>
                      <p>Tasks Posted</p>
                    </div>
                    <div className="pop-1">
                      <h2>1500</h2>
                      <p>Freelancers</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="sect-1">
          <div className="sect-2">
            <div className="sect-3">
              <div className="design">
                  <div className="box">
                    <CiLocationOn />
                    <h1>Design, Art & Multimedia</h1>
                    <p>198 Open Positions</p>
                  </div>
                  <div className="box">
                    <BsMagic />
                    <h1>Education Training</h1>
                    <p>198 Open Positions</p>
                  </div>
                  <div className="box">
                    <LuWallet />
                    <h1>Accounting/Finance</h1>
                    <p>198 Open Positions</p>
                  </div>
                  <div className="box">
                    <CiLocationOn />
                    <h1>Design, Art & Multimedia</h1>
                    <p>198 Open Positions</p>
                  </div>
                  <div className="box">
                    <CiLocationOn />
                    <h1>Design, Art & Multimedia</h1>
                    <p>198 Open Positions</p>
                  </div>
                  <div className="box">
                    <CiLocationOn />
                    <h1>Design, Art & Multimedia</h1>
                    <p>198 Open Positions</p>
                  </div>
                  <div className="box">
                    <CiLocationOn />
                    <h1>Design, Art & Multimedia</h1>
                    <p>198 Open Positions</p>
                  </div>
                  <div className="box">
                    <CiLocationOn />
                    <h1>Design, Art & Multimedia</h1>
                    <p>198 Open Positions</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>

    
  );
}

export default Home;
