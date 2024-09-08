

import { IoCheckmark } from "react-icons/io5";
import { FaArrowsAltH } from "react-icons/fa";





export default function AlertsAdd() {
    return (
        <div className="bg-white flex flex-col gap-4 rounded-large"
        style={{padding:'30px 30px 30px 30px'}}>
            <p className="text-xl">Alerts - Add New</p>
            <div className="flex flex-col  gap-4 p-2">
                <div className="flex flex-row gap-2 justify-between">
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Amount">Alert Name</label>
                        <input className="border-1 rounded-large p-1" id="Amount" placeholder="Alert Name"></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="NumberOfScenarios">Number of Scenarios</label>
                        <div className='flex justify-between'>
                            <select className="border-1 rounded-large p-1 w-[40%]" name="LinkedTransactions" id="LinkedTransactions">
                                <option value="min">Min</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                            </select>
                            <span className='flex items-center'> <FaArrowsAltH size={28} /> </span>
                            <select className="border-1 rounded-large p-1 w-[40%]" name="LinkedTransactions" id="LinkedTransactions">
                                <option value="max">Max</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Amount">Number of Transacitons</label>
                        <input className="border-1 rounded-large p-1" id="Amount" placeholder="Is Greater Than ..."></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Currency">Customer</label>
                        <select className="border-1 rounded-large p-1" name="Currency" id="Currency">
                            <option value="Customer 1">Customer 1</option>
                            <option value="Customer 2">Customer 2</option>
                            <option value="Customer 3">Customer 3</option>
                            <option value="Customer 4">Customer 4</option>
                            <option value="Customer 5">Customer 5</option>
                            <option value="Customer 6">Customer 6</option>
                            <option value="Customer 7">Customer 7</option>
                            <option value="Customer 8">Customer 8</option>
                            <option value="Customer 9">Customer 9</option>
                            <option value="Customer 10">Customer 10</option>
                        </select>
                    </div>
                </div>


                <div className="flex flex-row gap-2 justify-between">
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Amount">Amount</label>
                        <div className='flex justify-between'>

                            <input className="border-1 w-[40%]  rounded-large p-1" id="Amount" placeholder="Min"></input>
                            <span className='flex items-center'> <FaArrowsAltH size={28} /> </span>
                            <input className="border-1 w-[40%]  rounded-large p-1" id="Amount" placeholder="Max"></input>
                        </div>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="ScoreTransaction">Score Transaction</label>
                        <div className='flex justify-between'>
                            <select className="border-1 rounded-large p-1 w-[40%]" name="LinkedTransactions" id="LinkedTransactions">
                                <option value="min">Min</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <span className='flex items-center'> <FaArrowsAltH size={28} /> </span>
                            <select className="border-1 rounded-large p-1 w-[40%]" name="LinkedTransactions" id="LinkedTransactions">
                                <option value="max">Max</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Currency">Linked Transactions</label>
                        <select className="border-1 rounded-large p-1" name="Currency" id="Currency">
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Currency">Severity</label>
                        <select className="border-1 rounded-large p-1" name="Currency" id="Currency">
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">High</option>
                        </select>
                    </div>
                </div>


                <div className="flex flex-row gap-2 justify-start">
                    <div className="flex flex-col w-[23%] mr-5">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Branch">Branch</label>
                        <select className="border-1 rounded-large p-1" name="Branch" id="Branch">
                            <option value="">Select applicable</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[23%] mr-5">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Status">Alert Reception Channel</label>
                        <select className="border-1 rounded-large p-1" name="Status" id="Status">
                            <option value="Channel 1">Channel 1</option>
                            <option value="Channel 2">Channel 2</option>
                            <option value="Channel 3">Channel 3</option>
                            <option value="Channel 4">Channel 4</option>
                            <option value="Channel 5">Channel 5</option>
                            <option value="Channel 6">Channel 6</option>
                            <option value="Channel 7">Channel 7</option>
                            <option value="Channel 8">Channel 8</option>
                            <option value="Channel 9">Channel 9</option>
                            <option value="Channel 10">Channel 10</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Risk">Email to Alert</label>
                        <select className="border-1 rounded-large p-1" name="Risk" id="Risk">
                            <option value="John Smith">John Smith</option>
                            <option value="Emma Johnson">Emma Johnson</option>
                            <option value="Michael Brown">Michael Brown</option>
                            <option value="Sarah Williams">Sarah Williams</option>
                            <option value="David Taylor">David Taylor</option>
                            <option value="Emily Davis">Emily Davis</option>
                            <option value="James Wilson">James Wilson</option>
                            <option value="Olivia Martin">Olivia Martin</option>
                            <option value="Daniel Anderson">Daniel Anderson</option>
                            <option value="Sophia Thompson">Sophia Thompson</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex items-center whitespace-nowrap gap-2">
                        <button
                            className="bg-green-600 text-white rounded-large flex justify-center items-center gap-2"
                            style={{
                                padding: '10px 20px',
                                lineHeight: '24px',
                                position: 'relative',
                                fontSize: '15px',
                                fontWeight: '500',
                                display: 'flex',
                                transition: 'all 0.2s ease-in-out',
                                cursor: 'pointer',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                        >
                            <IoCheckmark /> Create Alert
                        </button>
                        <button className="bg-blue-custom text-white rounded-large flex justify-center items-center gap-2"
                            style={{
                                top: '0',
                                padding: '10px 20px',
                                lineHeight: '24px',
                                color: '#fff',
                                position: 'relative',
                                fontSize: '15px',
                                fontWeight: '500',
                                display: 'inline-block',
                                transition: 'all 0.2s ease-in-out',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );

};