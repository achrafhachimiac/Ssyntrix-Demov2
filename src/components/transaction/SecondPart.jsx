import React from 'react';




import { BsHourglass } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { BsBell } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { FaArrowsAltH } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";




export default function SecondPart() {
    const TableHead = [
        "", "STATUS", "TRANSACTION ID", "DATE & HOUR", "LINKED TRANSACTIONS", "SENDER NAME", "BENEFICIARY NAME", "CURRENCY", "AMOUNT", "BRANCH/APP", "RISK", "SCORE", "INVESTIGATOR"
    ]
    const statusIcons = {
        "Pending": <BsHourglass />,
        "Processed": <BsCheck2Circle />,
        "Cancelled": <ImCancelCircle />,
        "Flagged": <BsBell />,
        "Additional checks sent": <VscSend />
    };

    const tableContent1 = {
        status: "Pending",
        id: "UC98",
        date: "2024/02/11",
        linkedTransactions: ["UC13, UC19"],
        senderName: "Syntrix Ahmed",
        beneficiaryName: "Abdul Kuwair",
        currency: "AED",
        amount: "4 000",
        branch: "Abu Dhabi", // Utilisation de l'option "Abu Dhabi" de la sélection de branche
        risk: "Medium",
        transactionScore: 4.5,
        Investigator: "Emma Johnson"
    }
    const tableContent2 = {
        status: "Processed",
        id: "UC99",
        date: "2022/07/01",
        linkedTransactions: ["UC14, UC20"],
        senderName: "John Doe",
        beneficiaryName: "Jane Smith",
        currency: "USD",
        amount: "2 500",
        branch: "Al Fujiairah", // Utilisation de l'option "Al Fujiairah" de la sélection de branche
        risk: "Low",
        transactionScore: 8.2,
        Investigator: "Michael Brown"
    }
    const tableContent3 = {
        status: "Cancelled",
        id: "UC100",
        date: "2022/05/09",
        linkedTransactions: ["UC15, UC21"],
        senderName: "Alice Johnson",
        beneficiaryName: "Bob Williams",
        currency: "EUR",
        amount: "6 000",
        branch: "App", // Utilisation de l'option "App" de la sélection de branche
        risk: "High",
        transactionScore: 2.1,
        Investigator: "Sarah Williams"
    }
    const tableContent4 = {
        status: "Flagged",
        id: "UC101",
        date: "2023/02/15",
        linkedTransactions: ["UC16, UC22"],
        senderName: "Emily Davis",
        beneficiaryName: "James Wilson",
        currency: "GBP",
        amount: "8 000",
        branch: "Doha", // Utilisation de l'option "Doha" de la sélection de branche
        risk: "High",
        transactionScore: 6.7,
        Investigator: "David Taylor"
    }
    const tableContent = {
        status: "Additional checks sent",
        id: "UC102",
        date: "2023/05/17",
        linkedTransactions: ["UC17, UC23"],
        senderName: "Sophia Thompson",
        beneficiaryName: "Daniel Anderson",
        currency: "CAD",
        amount: "3 000",
        branch: "Dubai", // Utilisation de l'option "Dubai" de la sélection de branche
        risk: "Medium",
        transactionScore: 5.3,
        Investigator: "Olivia Martin"
    }


    const fakeData = [tableContent, tableContent1, tableContent2, tableContent3, tableContent4]
    const handleAllSelection = (e) => {
        const checkBoxes = document.querySelectorAll(".Transaction_check")
        checkBoxes.forEach(box => box.checked = e.target.checked)
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-white flex flex-col w-full overflow-x-auto gap-4  rounded-large"
                style={{ padding: '30px 30px 30px 30px' }}>
                <p className="text-xl">Transactions - Filters</p>
                <div className="flex flex-col  gap-4 p-2">
                    <div className="flex flex-row gap-2 justify-between">
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="TransactionID">Transaction ID</label>
                            <input type="text" className="border-1 rounded-large p-1" name="transactions" id="TransactionID" placeholder="Transaction ID"></input>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Amount">Amount</label>
                            <div className='flex justify-between'>

                                <input className="border-1 w-[40%]  rounded-large p-1" id="Amount" placeholder="Min"></input>
                                <span className='flex items-center'> <FaArrowsAltH size={28} /> </span>
                                <input className="border-1 w-[40%]  rounded-large p-1" id="Amount" placeholder="Max"></input>
                            </div>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="LinkedTransactions">Linked Transactions</label>
                            <select className="border-1 rounded-large p-1" name="LinkedTransactions" id="LinkedTransactions">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="DateAndHour">Date & Hour</label>
                            <input className="border-1 rounded-large p-1" type="date"></input>
                        </div>
                    </div>


                    <div className="flex flex-row gap-2 justify-between">
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="SenderName">Sender Name</label>
                            <input className="border-1 rounded-large p-1" id="SenderName" placeholder="Sender Name"></input>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Currency">Currency</label>
                            <select className="border-1 rounded-large p-1" name="Currency" id="Currency">
                                <option value="AED">AED</option>
                                <option value="EUR">EUR</option>
                                <option value="INR">INR</option>
                                <option value="PKR">PKR</option>
                                <option value="QAR">QAR</option>
                                <option value="SAR">SAR</option>
                                <option value="USD">USD</option>
                            </select>
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
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="BeneficiaryName">Beneficiary Name</label>
                            <input className="border-1 rounded-large p-1" id="BeneficiaryName" placeholder="Beneficiary Name"></input>
                        </div>
                    </div>


                    <div className="flex flex-row gap-2 justify-between">
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Branch">Branch</label>
                            <select className="border-1 rounded-large p-1" name="Branch" id="Branch">
                                <option value="Abu Dhabi">Abu Dhabi</option>
                                <option value="Al Fujiairah">Al Fujiairah</option>
                                <option value="App">App</option>
                                <option value="Doha">Doha</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Mumbay">Mumbay</option>
                                <option value="New Delhi">New Delhi</option>
                                <option value="Ras Al-Khaimah">Ras Al-Khaimah</option>
                                <option value="Sharjah">Sharjah</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Status">Status</label>
                            <select className="border-1 rounded-large p-1" name="Status" id="Status">
                                <option value="Accepted">Additional checks sent</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Declined">Declined</option>
                                <option value="Declined">Flagged</option>
                                <option value="Pending">Pending</option>
                                <option value="Pending">Processed</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Risk">Risk</label>
                            <select className="border-1 rounded-large p-1" name="Risk" id="Risk">
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
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
                    </div>
                    <div className="flex flex-row gap-2 justify-between">

                        <div className="flex flex-col w-[23%]">
                            <label className="bg-blue-custom mb-[2px] text-white pr-1 pl-1 text-sm rounded-[4px] w-fit" for="Investigator">Investigator</label>
                            <select className="border-1 rounded-large p-1" name="LinkedTransactions" id="LinkedTransactions">
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
            <div className="bg-white flex flex-col gap-4 w-full rounded-large"
                style={{ padding: '30px 30px 30px 30px' }}>
                <p className="text-xl">Bulk Actions on Selection</p>

                <div className="flex flex-row justify-between">
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
                            <MdOutlineAssignmentInd />
                            Assign
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
                            <GrUpdate />
                            Modify Status
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
                            <BiLogoGmail />
                            Send Mail
                        </button>
                        <button
                            className="bg-gray-00 text-white rounded-large flex justify-center items-center gap-2"
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
                            <LiaDownloadSolid />
                            Excel Export
                        </button>
                    </div>
                    <div className="flex items-center">
                        <p className='flex items-center' style={{ marginLeft: 'auto' }}>1 to 50 from 1500+ transactions <GoChevronLeft className=' ml-2 pr-1' /> <GoChevronRight className='pl-1' /></p>
                    </div>
                </div>

                <table className="caption-bottom">
                    <thead>
                        <tr>
                            {TableHead.map((element, index) => {
                                const centerAlignedColumns = ["STATUS", "CURRENCY", "AMOUNT", "SCORE"];
                                const textAlign = centerAlignedColumns.includes(element) ? "text-center" : "text-start";
                                if (element === "")
                                    return (
                                        <th
                                            className="bg-blue-custom text-white whitespace-nowrap text-ssm text-start px-1"
                                            scope="col"
                                            style={{ lineHeight: 'unset', fontWeight: '500', padding: '2px 10px 2px 5px', borderRadius: index === 0 ? '4px 0 0 4px' : index === TableHead.length - 1 ? '0 4px 4px 0' : 'unset' }}>

                                            <input class="allSelector" id="allSelector" type="checkbox" onClick={handleAllSelection}
                                                style={{ transform: "translateY(8%)", lineHeight: 'unset', verticalAlign: 'top', marginTop: '-7px', marginLeft: '4px' }} />
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
                                                padding: '2px 10px 5px 2px',
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
                                case 'Pending':
                                    textColorClass = 'text-orange-500'; // Orange pour "Pending"
                                    break;
                                case 'Processed':
                                    textColorClass = 'text-green-700'; // Vert pour "Processed"
                                    break;
                                case 'Cancelled':
                                    textColorClass = 'text-grey'; // Gris pour "Cancelled"
                                    break;
                                case 'Flagged':
                                    textColorClass = 'text-red-600'; // Rouge pour "Flagged"
                                    break;
                                case 'Additional checks sent':
                                    textColorClass = 'text-orange-500'; // Orange pour "Additional checks sent"
                                    break;
                                default:
                                    textColorClass = ''; // Par défaut, pas de classe définie
                            }

                            return (
                                <tr className={backgroundColorClass} style={{}}>
                                    <th className="whitespace-nowrap" style={{ lineHeight: 'unset', verticalAlign: 'top', marginTop: '-4px', padding: '0px 10px 0px 5px' }} scope="row">
                                        <input className="Transaction_check" style={{ lineHeight: 'unset', verticalAlign: 'top' }} type="checkbox"></input>
                                    </th>
                                    {Object.entries(data).map(([key, value]) => {
                                        let textAlignClass = 'text-start'; // Classe pour l'alignement du texte
                                        switch (key) {
                                            case 'status':
                                            case 'currency':
                                            case 'amount':
                                            case 'transactionScore':
                                                textAlignClass = 'text-center'; // Centrer le texte pour ces colonnes
                                                break;
                                            default:
                                                textAlignClass = 'text-start'; // Par défaut, aligner à gauche
                                        }

                                        return (
                                            <td
                                                key={key}
                                                className={`whitespace-nowrap ${textAlignClass} px-1 ${textColorClass}`}
                                                style={{
                                                    display: 'table-cell',
                                                    unicodeBidi: 'isolate',
                                                    lineHeight: 'unset',
                                                    padding: '0px 10px 0px 5px',
                                                    fontSize: '0.73rem'
                                                }}
                                                onClick={() => {
                                                    if (rowIndex === 1) {
                                                        navigate('/transaction/info');
                                                    }
                                                }}
                                            >
                                                {key === 'status' ? (
                                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        {statusIcons[value]}
                                                    </div>
                                                ) : (
                                                    value
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <caption>
                    <div className="flex flex-row gap-6 p-2">
                        <span className="flex flex-row items-center gap-2"><BsHourglass /><p className="text-sm text-gray-600">  Pending</p></span>
                        <span className="flex flex-row items-center gap-2"><BsCheck2Circle /><p className="text-sm text-gray-600">  Processed</p></span>
                        <span className="flex flex-row items-center gap-2"><ImCancelCircle /><p className="text-sm text-gray-600">  Cancelled</p></span>
                        <span className="flex flex-row items-center gap-2"><BsBell /><p className="text-sm text-gray-600">  Flagged</p></span>
                        <span className="flex flex-row items-center gap-2"><VscSend /><p className="text-sm text-gray-600">  Additional checks sent</p></span>
                    </div>
                </caption>

            </div>
        </>
    )
}