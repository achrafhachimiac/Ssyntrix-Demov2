import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaArrowsAltH } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { BsHourglass } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import { RiSurveyLine } from "react-icons/ri";
import { ImNotification } from "react-icons/im";
import { GrUpdate } from "react-icons/gr";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";






export default function Cases() {
    const TableHead = [
        "", "STATUS", "CASE NAME", "AMOUNT", "NUMBER OF SCENARIOS", "NUMBER OF TRANSACTION", "SCENARIOS/TNX(%)", "SCENARIO DATE ", "SCORE", "RISK"
    ]
    const statusIcons = {
        "Not analyzed": <ImNotification />,
        "Awaiting": <BsHourglass />,
        "Under surveillance": <RiSurveyLine />,
        "Cancelled": <ImCancelCircle />,
        "Analyzed": <BsCheck2Circle />
    };
    const tableContent = {
        status: "Not analyzed",
        casename: "Case 2",
        amount: "AED 2 300",
        numberOfScenarios: 7,
        numberoftransaction: 5,
        scenariostnx: "40%",
        scenariodate: "2022/03/22",
        score: 4,
        risk: "High",
    }
    const tableContent1 = {
        status: "Awaiting",
        casename: "Case 1",
        amount: "AED 6 000",
        numberOfScenarios: 3,
        numberoftransaction: 9,
        scenariostnx: "10%",
        scenariodate: "2023/05/09",
        score: 3,
        risk: "Medium",
    }
    const tableContent2 = {
        status: "Under surveillance",
        casename: "Case 5",
        amount: "AED 1 000",
        numberOfScenarios: 6,
        numberoftransaction: 2,
        scenariostnx: "30%",
        scenariodate: "2022/01/12",
        score: 7.5,
        risk: "Medium",
    }
    const tableContent3 = {
        status: "Cancelled",
        casename: "Case 3",
        amount: "AED 9 000",
        numberOfScenarios: 2,
        numberoftransaction: 6,
        scenariostnx: "5%",
        scenariodate: "2024/01/29",
        score: 6,
        risk: "Low",
    }
    const tableContent4 = {
        status: "Analyzed",
        casename: "Case 4",
        amount: "AED 4 000",
        numberOfScenarios: 5,
        numberoftransaction: 3,
        scenariostnx: "20%",
        scenariodate: "2024/03/22",
        score: 4,
        risk: "Low",
    }
    const fakeData = [tableContent, tableContent1, tableContent2, tableContent3, tableContent4]
    const handleAllSelection = (e) => {
        const checkBoxes = document.querySelectorAll(".Transaction_check")
        checkBoxes.forEach(box => box.checked = e.target.checked)
    }
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white flex flex-col gap-4  rounded-large"
                style={{ padding: '30px 30px 30px 30px' }}>
                <p className="text-xl">Cases - Filters</p>
                <div className="flex flex-col  gap-4 p-2">
                    <div className="flex flex-row gap-2 justify-between">
                        <div className="flex flex-col w-[23%] ">
                            <label className="bg-blue-custom mb-[2px] font-medium text-white pr-1 pl-1 text-sm rounded-[4px] w-fit " for="Cases name">Case Name</label>
                            <input className="border-1 rounded-large p-1 " id="Cases name" placeholder="Case Name"></input>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="TransactionID">Last Scenario Date</label>
                            <input className="border-1 rounded-large p-1" type="date"></input>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] font-medium text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Status">Status</label>
                            <select className="border-1 rounded-large p-1" name="Status" id="Status">
                                <option value="Analysed">Analysed</option>
                                <option value="Awaiting">Awaiting</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Not analysed">Not analysed</option>
                                <option value="Under surveillance">Under Surveillance</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Scenarios/Tnx(%)">Scenarios/Tnx(%)</label>
                            <select className="border-1 rounded-large p-1" name="Scenarios/Tnx(%)" id="Scenarios/Tnx(%)">
                                {[...Array(21).keys()].map((_, index) => (
                                    <option key={index} value={index * 5}>{index * 5}%</option>
                                ))}
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
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="ScoreTransaction">Score Case</label>
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
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Risk">Risk</label>
                            <select className="border-1 rounded-large p-1" name="Risk" id="Risk">
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
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
            </div>
            <div className="bg-white flex flex-col w-full overflow-x-auto gap-4 mb-7 rounded-large"
                style={{ padding: '30px 30px 30px 30px' }}>
                <p className="text-xl">Filter Results - List of All Cases</p>
                <div className="flex flex-row justify-between">
                    <div className="flex items-center whitespace-nowrap gap-2">
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
                            <GrUpdate />
                            Modify Status
                        </button>
                        <button
                            className="bg-gray-700 text-white rounded-large flex justify-center items-center gap-2"
                            onClick={() => { navigate('/cases/add'); }}
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
                            Create New Case
                        </button>

                    </div>
                    <div className="flex items-center">
                        <p className='flex items-center' style={{ marginLeft: 'auto' }}>1 to 50 from 100+ cases <GoChevronLeft className=' ml-2 pr-1' /> <GoChevronRight className='pl-1' /></p>
                    </div>
                </div>

                <table className="caption-bottom w-fit"
                style={{
                    width:'auto'
                }}>
                    <thead>
                        <tr>
                            {TableHead.map((element, index) => {
                                if (element === "")
                                    return (
                                        <th
                                            className="bg-blue-custom text-white whitespace-nowrap text-ssm text-start px-1"
                                            scope="col"
                                            style={{ lineHeight: 'unset', fontWeight: '500', padding: '2px 20px 2px 15px', borderRadius: index === 0 ? '4px 0 0 4px' : index === TableHead.length - 1 ? '0 4px 4px 0' : 'unset' }}>
                                            <input class="allSelector" id="allSelector" type="checkbox" onClick={handleAllSelection}
                                                style={{ transform: "translateY(8%)", lineHeight: 'unset', verticalAlign: 'top', marginTop: '-7px' }} />
                                        </th>
                                    )
                                else
                                    return (
                                        <th
                                            className="bg-blue-custom text-white whitespace-nowrap text-ssm px-1 text-start"
                                            scope="col"
                                            style={{
                                                color: '#fff',
                                                fontWeight: '500',
                                                textAlign: 'left',
                                                display: 'table-cell',
                                                unicodeBidi: 'isolate',
                                                lineHeight: 'unset',
                                                
                                                padding: '2px 20px 2px 20px',
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
                            let textColorClass = ''; // Classe pour la couleur du texte
                            switch (data.status) {
                                case 'Awaiting':
                                    textColorClass = 'text-orange-500'; // Orange pour "Pending"
                                    break;
                                case 'Analyzed':
                                    textColorClass = 'text-green-700'; // Vert pour "Processed"
                                    break;
                                case 'Cancelled':
                                    textColorClass = 'text-grey'; // Rouge pour "Cancelled"
                                    break;
                                case 'Under surveillance':
                                    textColorClass = 'text-red-600'; // Rouge pour "Flagged"
                                    break;
                                case 'Not analyzed':
                                    textColorClass = 'text-orange-500'; // Orange pour "Additional checks sent"
                                    break;
                                default:
                                    textColorClass = ''; // Par défaut, pas de classe définie
                            }
                            return (
                                <tr className={backgroundColorClass} style={{}}>
                                    <th className="whitespace-nowrap" style={{ lineHeight: 'unset', verticalAlign: 'top', marginTop: '-4px', padding: '0px 20px 0px 15px' }} scope="row">
                                        <input className="Transaction_check" style={{ lineHeight: 'unset', verticalAlign: 'top' }} type="checkbox"></input>
                                    </th>
                                    {Object.entries(data).map(([key, value]) => {
                                        let textAlignClass = 'text-start'; // Classe pour l'alignement du texte
                                        switch (key) {
                                            case 'numberOfScenarios':
                                            case 'numberoftransaction':
                                            case 'scenariostnx':
                                            case 'score':
                                                textAlignClass = 'text-center'; // Centrer le texte pour ces colonnes
                                                break;
                                            default:
                                                textAlignClass = 'text-start'; // Par défaut, aligner à gauche
                                        }
                                        
                                        if (key === "status") {
                                            return (
                                                <td
                                                    className={` font-bold whitespace-nowrap text-start px-1 ${textColorClass}`}
                                                    style={{
                                                        textAlign: 'left',
                                                        display: 'table-cell',
                                                        unicodeBidi: 'isolate',
                                                        lineHeight: 'unset',
                                                        padding: '0px 20px 0px 15px',
                                                        fontSize: '0.7rem'

                                                    }}
                                                    onClick={() => {
                                                        if (rowIndex === 1) {
                                                            navigate('/transaction/stats');
                                                        }
                                                    }}
                                                >
                                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                                        {statusIcons[value]} {/* Affiche l'icône */}
                                                        <span style={{ marginLeft: '5px' }}>{value}</span> {/* Affiche la valeur */}
                                                    </span>
                                                </td>
                                            );
                                        } else {
                                            return (
                                                <td
                                                    className={` whitespace-nowrap ${textAlignClass} px-1 ${textColorClass}`}
                                                    style={{
                                                        display: 'table-cell',
                                                        unicodeBidi: 'isolate',
                                                        lineHeight: 'unset',
                                                        padding: '0px 20px 0px 15px',
                                                        fontSize: '0.9rem'
                                                    }}
                                                    onClick={() => {
                                                        if (rowIndex === 1) {
                                                            navigate('/transaction/stats');
                                                        }
                                                    }}
                                                >
                                                    {value}
                                                </td>
                                            );
                                        }
                                    })}
                                </tr>
                            );

                        })}
                    </tbody>
                    <caption>
                        <div className="flex flex-row gap-6 p-2">
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-3 w-3 bg-red-700  text-sm"></div>
                                <p className=" text-sm text-gray-600">High risk</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-3 w-3 bg-orange-400 text-sm" ></div>
                                <p className="text-sm text-gray-600">Medium risk</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-3 w-3 bg-green-700  text-sm text-gray-400"></div>
                                <p className="text-sm text-gray-600">Low risk</p>
                            </div>
                        </div>
                    </caption>
                </table>
            </div>
        </div>
    )
}



