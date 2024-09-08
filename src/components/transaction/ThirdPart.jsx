import { IoSearchOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegPlusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaArrowsAltH } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";


export default function ThirdPart() {

    const handleAllSelection = (e) => {
        const checkBoxes = document.querySelectorAll(".Transaction_check")
        checkBoxes.forEach(box => box.checked = e.target.checked)
    }

    const TableHead = ["", "ALERT NAME", "AMOUNT", "NBR OF TRANSACTIONS", "NBR OF SCENARIO", "SCORE", "NBR OF BRANCHES", "ACTIVATION DATE", "DETAILS"]
    const data = {
        alertName: "AG001",
        amount: "AED  10 000",
        nbrOfTransaction: "7",
        nbrOfScenario: 3,
        score: 4.5,
        nbrOfBranches: 10,
        activationDate: "10-11-2023",
    }
    const fakeData = [data, data, data, data, data]
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white flex flex-col gap-4 w-full rounded-large"
                style={{ padding: '25px 30px 30px 30px' }}>
                <p className="text-xl">Alerts - Filters</p>
                <div className="flex flex-row gap-2 justify-between">
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Alert Name">Alert Name</label>
                        <input className="border-1 rounded-large p-1" id="Alert Name" placeholder="Alert Name"></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Number of Branches">Number of Branches</label>
                        <input className="border-1 rounded-large p-1" id="Number of Branches" placeholder="Is Equal To ..."></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Number of transactions">Number of Transactions</label>
                        <input className="border-1 rounded-large p-1" id="Number of transactions" placeholder="Is Greater Than ..."></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Alert Creating date">Creation Date</label>
                        <input className="border-1 rounded-large p-1" id="Alert Creating date" type="date"></input>
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
                    <div className="flex flex-col w-[23%]"></div>
                </div>
                <div className="flex flex-row justify-between" style={{
                    marginTop: '10px'
                }}>
                    <div className="flex items-center whitespace-nowrap gap-2">
                        <button
                            className="bg-gray-700 text-white rounded-large flex justify-center items-center gap-2"
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
                            <IoSearchOutline /> Apply
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
                            Reset Filters
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-col w-full overflow-x-auto gap-4 mb-7 rounded-large"
                style={{ padding: '25px 30px 30px 30px' }}>
                <p className="text-xl">Filters Results - List of All Alerts</p>
                <div className="flex flex-row justify-between">
                    <div className="flex items-center whitespace-nowrap gap-2">
                        <button
                            className="bg-gray-700 text-white rounded-large flex justify-center items-center gap-2"
                            onClick={() => { navigate('/alerts/add'); }}
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
                            <FaPlus />
                            Create New Alert
                        </button>
                        <button
                            className="bg-blue-custom text-white rounded-large flex justify-center items-center gap-2"
                            style={{
                                padding: '10px 20px',
                                lineHeight: '24px',
                                color: '#fff',
                                position: 'relative',
                                fontSize: '15px',
                                fontWeight: '500',
                                display: 'flex',
                                transition: 'all 0.2s ease-in-out',
                                cursor: 'pointer',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                        >
                            <TiDeleteOutline />
                            Delete
                        </button>

                    </div>
                    <div className="flex items-center">
                        <p className='flex items-center' style={{ marginLeft: 'auto' }}>1 to 50 from 100+ alerts <GoChevronLeft className=' ml-2 pr-1' /> <GoChevronRight className='pl-1' /></p>
                    </div>
                </div>

                <table className="caption-bottom">
                    <thead>
                        <tr>
                            {TableHead.map((element, index) => {
                                const centerAlignedColumns = ["DETAILS", "NBR OF TRANSACTIONS", "NBR OF SCENARIO", "SCORE", "NBR OF BRANCHES"];
                                const textAlign = centerAlignedColumns.includes(element) ? "text-center" : "text-start";
                                if (element === "")
                                    return (
                                        <th
                                            className="bg-blue-custom text-white whitespace-nowrap text-ssm text-start px-1"
                                            scope="col"
                                            style={{ lineHeight: 'unset', fontWeight: '500', padding: '2px 15px 2px 10px', borderRadius: index === 0 ? '4px 0 0 4px' : index === TableHead.length - 1 ? '0 4px 4px 0' : 'unset' }}>

                                            <input class="allSelector" id="allSelector" type="checkbox" onClick={handleAllSelection}
                                                style={{ transform: "translateY(8%)", lineHeight: 'unset', height: 'unset', width: 'unset', verticalAlign: 'top', marginTop: '-7px' }} />
                                        </th>
                                    )
                                else
                                    return (
                                        <th
                                            className={`bg-blue-custom text-white whitespace-nowrap text-ssm px-1 ${textAlign}`}
                                            scope="col"
                                            style={{
                                                color: '#fff',
                                                fontWeight: '500',
                                                display: 'table-cell',
                                                unicodeBidi: 'isolate',
                                                lineHeight: 'unset',
                                                padding: '2px 15px 2px 10px',
                                                borderRadius: index === 0 ? '4px 0 0 4px' : index === TableHead.length - 1 ? '0 4px 4px 0' : 'unset'
                                            }}
                                        >
                                            {element}
                                        </th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {fakeData.map((data, rowIndex) => {
                            const backgroundColorClass = rowIndex % 2 === 0 ? 'bg-white cursor-pointer' : 'bg-gray-200 cursor-pointer';
                            return (
                                <tr className={backgroundColorClass} style={{}}>
                                    <th className="whitespace-nowrap" style={{ lineHeight: 'unset', verticalAlign: 'top', marginTop: '-4px', paddingRight: '17px' }} scope="row">
                                        <input className="Transaction_check" style={{ lineHeight: 'unset', verticalAlign: 'top', width: 'unset', }} type="checkbox"></input>
                                    </th>
                                    {Object.entries(data).map(([key, value]) => {
                                        let textAlignClass = 'text-start'; // Classe pour l'alignement du texte
                                        switch (key) {
                                            case 'nbrOfTransaction':
                                            case 'nbrOfScenario':
                                            case 'score':
                                            case 'nbrOfBranches':
                                                textAlignClass = 'text-center'; // Centrer le texte pour ces colonnes
                                                break;
                                            default:
                                                textAlignClass = 'text-start'; // Par défaut, aligner à gauche
                                        }
                                        return (
                                            <td
                                                className={`whitespace-nowrap px-1 ${textAlignClass}`}
                                                style={{
                                                    display: 'table-cell',
                                                    unicodeBidi: 'isolate',
                                                    lineHeight: 'unset',
                                                    padding: '0px 15px 0px 10px',
                                                    fontSize: '0.8rem'
                                                }}
                                            >
                                                {value}
                                            </td>
                                        );

                                    })}
                                    <td className="text-ssm whitespace-nowrap text-center px-1"
                                        style={{  verticalAlign: 'center'}}
                                    >   
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <button
                                            className="bg-gray-700 text-white rounded-large flex justify-center items-center gap-2 px-[4px]"
                                            style={{
                                                lineHeight: '24px',
                                                position: 'relative',
                                                fontSize: '13px',
                                                fontWeight: '500',
                                                display: 'flex',
                                                transition: 'all 0.2s ease-in-out',
                                                cursor: 'pointer',
                                                border: 'none',
                                                borderRadius: '4px',
                                                alignSelf: 'center'

                                            }}
                                        >
                                            See all
                                        </button>
                                        </div>
                                        </td>
                                </tr>
                            );

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}