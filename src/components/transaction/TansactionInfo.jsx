import React from 'react';
import { BsHourglass } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import { IoCheckmark } from "react-icons/io5";
import { BsCheck2Circle } from "react-icons/bs";
import { RiPhoneLine } from "react-icons/ri";
import { TbMail } from "react-icons/tb";
import { FaGlobeAfrica } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti";
import { RiMailLine } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";
import { IoPhonePortraitSharp } from "react-icons/io5";


export default function TransactionInfo() {

    const statusIcons = {
        "Pending": <BsHourglass />,
        "Processed": <BsCheck2Circle />,
        "Cancelled": <ImCancelCircle />,
        "Flagged": <BsBell />,
        "Additional checks sent": <VscSend />
    };

    const TableHead = [
        "STATUS", "TRANSACTION ID", "DATE & HOUR", "SENDER NAME", "BENEFICIARY NAME", "CURRENCY", "AMOUNT", "IP ADRESS", "EMAIL", "PHONE NUMBER", "BRANCH", "RISK", "SCORE"
    ]

    const tableContent1 = {
        status: "Pending",
        id: "UC97",
        date: "2024/02/11",
        senderName: "Syntrix Ahmed",
        beneficiaryName: "Abdul Kuwair",
        currency: "AED",
        amount: "4 000",
        ip: "192.168.1.1",
        email: "Ahmed@Syntrix.com",
        phoneNumber: "+1234567890",
        branch: "Abu Dhabi", // Utilisation de l'option "Abu Dhabi" de la sélection de branche
        risk: "Medium",
        transactionScore: 4.5,
    }
    const tableContent2 = {
        status: "Processed",
        id: "UC99",
        date: "2022/07/01",
        senderName: "John Doe",
        beneficiaryName: "Jane Smith",
        currency: "USD",
        amount: "2 500",
        ip: "10.0.0.1",
        email: "Smith@Jane.com",
        phoneNumber: "+1987654321",
        branch: "Al Fujiairah", // Utilisation de l'option "Al Fujiairah" de la sélection de branche
        risk: "Low",
        transactionScore: 8.2,
    }
    const tableContent3 = {
        status: "Cancelled",
        id: "UC100",
        date: "2022/05/09",
        senderName: "Alice Johnson",
        beneficiaryName: "Bob Williams",
        currency: "EUR",
        amount: "6 000",
        ip: "172.16.0.1",
        email: "Johnson@Alice.com",
        phoneNumber: "+1122334455",
        branch: "App", // Utilisation de l'option "App" de la sélection de branche
        risk: "High",
        transactionScore: 2.1,
    }
    const tableContent4 = {
        status: "Flagged",
        id: "UC101",
        date: "2023/02/15",
        senderName: "Emily Davis",
        beneficiaryName: "James Wilson",
        currency: "GBP",
        amount: "8 000",
        ip: "192.168.0.1",
        email: "Davis@Emily.com",
        phoneNumber: "+9988776655",
        branch: "Doha", // Utilisation de l'option "Doha" de la sélection de branche
        risk: "High",
        transactionScore: 6.7,
    }
    const tableContent = {
        status: "Pending",
        id: "UC98",
        date: "2024/02/11",
        senderName: "Syntrix Ahmed",
        linkedTransactions: "UC97 , UC99, UC100, UC101, UC102",
        beneficiaryName: "Abdul Kuwair",
        currency: "AED",
        numberOfScenarios: "9",
        amount: "4 000",
        ip: "172.16.1.1",
        email: "Thompson@Sophia.com",
        phoneNumber: "+5544332211",
        branch: "Abu Dhabi", // Utilisation de l'option "Dubai" de la sélection de branche
        risk: "Medium",
        transactionScore: 5.3,
    }
    const tableContent5 = {
        status: "Pending",
        id: "UC102",
        date: "2024/02/11",
        senderName: "Sophia Thompson",
        beneficiaryName: "Daniel Anderson",
        currency: "CAD",
        amount: "3 000",
        ip: "172.16.1.1",
        email: "Thompson@Sophia.com",
        phoneNumber: "+5544332211",
        branch: "Dubai", // Utilisation de l'option "Dubai" de la sélection de branche
        risk: "Medium",
        transactionScore: 5.3,
    }
    const IpData = {
        ip: "156.35.67.84",
        country: "United Arab Emirates",
        city: "Sharjah",
        isBlackListed: false,
        isVpnProxy: false,
        isFlaggedNetwork: false,
        Isp: "DU Networks TeleCommunications"
    }
    const PhoneData = {
        number: "05473839553",
        verifiedIdentity: "n/a",
        country: "United Arab Emirates",
        Type: "Mobile",
        IsValid: true,
        IsDisposable: "n/a",
        Carrier: "Etisalat",
        OnlineAccounts: 5
    }
    const PaymentData = {
        PaymentMode: "credit card",
        IsValid: true,
        Bin: "443913",
        Bank: "Emirates NBD",
        Country: "United Arab Emirates"
    }
    const emailData = {
        mail: "ahmed.syntrix@gmail.com",
        estimatedAge: 7,
        isSuspicious: false,
        IsDisposable: false,
        RegisterName: "MarkMonitor Inc",
        isPublic: true,
        documentedDataLeaks: true,
        OnlineAccounts: 4
    }
    const fakeData = [tableContent1, tableContent2, tableContent3, tableContent4, tableContent5]
    const handleAllSelection = (e) => {
        const checkBoxes = document.querySelectorAll(".Transaction_check")
        checkBoxes.forEach(box => box.checked = e.target.checked)
    }
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4" style={{ lineHeight: '1.40rem' }}>
                <div className="flex flex-col  leading-7 bg-white rounded-[8px] w-[50%]"
                    style={{ padding: '25px 30px 30px 30px' }}>

                    <div className='flex h-full'>
                        <div className='flex flex-col gap-7'>
                            <h2 className="text-2xl   text-blue-custom">TRANSACTION INFORMATIONS</h2>
                            <div className="flex flex-col leading-7 gap-2" >
                                <p><strong>Status</strong> : {tableContent.status}</p>
                                <p><strong>Transaction ID</strong> : {tableContent.id}</p>
                                <p><strong>Date &amp; Hour</strong> : {tableContent.date}</p>
                                <p><strong>Linked Transactions</strong> : {tableContent.linkedTransactions}</p>
                                <p><strong>Sender Name</strong> : {tableContent.senderName}</p>
                                <p><strong>Beneficiary Name</strong> : {tableContent.beneficiaryName}</p>
                                <p><strong>Currency</strong> : {tableContent.currency}</p>
                                <p><strong>Amount</strong> : {tableContent.amount}</p>
                                <p><strong>Number Of Scenarios</strong> : {tableContent.numberOfScenarios}</p>
                                <p><strong>Branch</strong> : {tableContent.branch}</p>
                                <p><strong>Risk</strong> : {tableContent.risk}</p>
                                {/* <p><strong>Transaction Score</strong> : {tableContent.transactionScore}</p> */}
                            </div>
                        </div>
                        <div className='justify-between' style={{ gap: '10px' }}>
                            <div className="flex items-end">
                                <div className="w-40 h-40 flex flex-col items-center justify-center border-2 border-blue-custom rounded-full">
                                    <p className='text-md font-bold'>Offline Score :</p>
                                    <p className="text-md">5</p>
                                </div>
                            </div>
                            <div className="flex flex-col" style={{ paddingTop: '128px' }}>
                                <div className="w-40 h-40 flex flex-col items-center justify-center border-2 border-blue-custom rounded-full">
                                    <p className='text-md font-bold'>TrustScore :</p>
                                    <p className="text-md">4.5</p>
                                </div>
                                <div className=' w-full pt-2'>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex items-center whitespace-nowrap w-[100%]">
                                            <button
                                                className="bg-blue-custom text-white rounded-large flex justify-center items-center w-[100%]"
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
                                                Run TrustScore
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-[50%] grid-rows-2" style={{ lineHeight: '1.40rem' }}>
                    <div className="justify-around bg-white rounded-[8px] h-full leading-7"
                        style={{ padding: '25px 30px 30px 30px' }}>
                        <h2 className="text-2xl pb-6 text-blue-custom">IP</h2>
                        <div className="text-sm w-fit" style={{ lineHeight: '1.40rem' }}>
                            <p><strong className="flex flex-row items-center gap-1" ><FaGlobeAfrica />{IpData.ip}</strong></p>
                            <p><strong>Country</strong> : {IpData.country}</p>
                            <p><strong>City</strong> : {IpData.city}</p>
                            <p><strong>Is blacklisted</strong> : {IpData.isBlackListed ? "Yes" : "No"}</p>
                            <p><strong>Is VPN/proxy</strong> : {IpData.isVpnProxy ? "Yes" : "No"}</p>
                            <p><strong>Is part of flagged network</strong> : {IpData.isFlaggedNetwork ? "Yes" : "No"}</p>
                            <p><strong>ISP</strong> : {IpData.Isp}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-[8px] h-full"
                        style={{ padding: '25px 30px 30px 30px' }}>
                        <div>
                            <h2 className="text-2xl pb-6 text-blue-custom">PAYMENT</h2>
                        </div>
                        <div className="text-sm w-fit flex flex-col justify-start">
                            <p><strong>Payment Mode</strong> : {PaymentData.PaymentMode}</p>
                            <p className="flex flex-row items-center gap-1"><strong>Is valid</strong> : {PaymentData.IsValid ? <BsCheck2Circle /> : <ImCancelCircle />}</p>
                            <p><strong>BIN</strong> : {PaymentData.Bin}</p>
                            <p><strong>Bank</strong> : {PaymentData.Bank}</p>
                            <p><strong>Country</strong> : {PaymentData.Country}</p>
                        </div>
                    </div>
                    <div className="justify-around bg-white rounded-[8px] h-full"
                        style={{ padding: '25px 30px 30px 30px' }}>
                        <div>
                            <h2 className="text-2xl pb-6 text-blue-custom">PHONE</h2>
                        </div>
                        <div className="text-sm w-fit">
                            <p><strong className="flex flex-row items-center gap-1"><RiPhoneLine />{PhoneData.number}</strong></p>
                            <p><strong>Verified identity</strong> : {PhoneData.verifiedIdentity}</p>
                            <p><strong>Country</strong> : {PhoneData.country}</p>
                            <p><strong>Type</strong> : {PhoneData.Type}</p>
                            <p className="flex flex-row items-center gap-1"><strong>Is valid</strong> : {PhoneData.IsValid ? <BsCheck2Circle /> : <ImCancelCircle />}</p>
                            <p><strong>Is disposable</strong> : {PhoneData.IsDisposable}</p>
                            <p><strong>Carrier</strong> : {PhoneData.Carrier}</p>
                            <p><strong>Online accounts</strong> : {PhoneData.OnlineAccounts}</p>
                        </div>
                    </div>
                    <div className="justify-around bg-white rounded-[8px] h-full"
                        style={{ padding: '25px 30px 30px 30px' }}>
                        <div>
                            <h2 className="text-2xl pb-6 text-blue-custom">EMAIL</h2>
                        </div>
                        <div className="text-sm w-fit">
                            <p><strong className="flex flex-row items-center gap-1"><TbMail />{emailData.mail}</strong></p>
                            <p><strong>Estimated age</strong> : {emailData.estimatedAge}y</p>
                            <p><strong>Is suspicious</strong> : {emailData.isSuspicious ? "Yes" : "No"}</p>
                            <p><strong>Is disposable</strong> : {emailData.IsDisposable ? "Yes" : "No"}</p>
                            <p><strong>Registrar name</strong> : {emailData.RegisterName}</p>
                            <p className="flex flex-row items-center gap-1"><strong>Is public</strong> : {emailData.isPublic ? <BsCheck2Circle /> : <ImCancelCircle />}</p>
                            <p className="flex flex-row items-center gap-1"><strong>Documented dataleaks</strong> : {emailData.documentedDataLeaks ? <BsCheck2Circle /> : <ImCancelCircle />}</p>
                            <p><strong>Online accounts</strong> : {emailData.OnlineAccounts}</p>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="bg-white flex flex-col w-full overflow-x-auto gap-4 rounded-large"
                style={{ padding: '25px 30px 30px 30px' }}>
                <p className="text-xl">Linked Transactions</p>

                <table className="caption-bottom">
                    <thead>
                        <tr>
                            {TableHead.map((element, index) => {
                                if (element === "")
                                    return (
                                        <th
                                            className="bg-blue-custom text-white whitespace-nowrap text-ssm text-start px-1"
                                            scope="col"
                                            style={{ lineHeight: 'unset', fontWeight: '500', padding: '2px 15px 2px 10px', borderRadius: index === 0 ? '4px 0 0 4px' : index === TableHead.length - 1 ? '0 4px 4px 0' : 'unset' }}>

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
                            let textColorClass = ''; // Classe pour la couleur du texte
                            switch (data.status) {
                                case 'Pending':
                                    textColorClass = 'text-orange-500'; // Orange pour "Pending"
                                    break;
                                case 'Processed':
                                    textColorClass = 'text-green-700'; // Vert pour "Processed"
                                    break;
                                case 'Cancelled':
                                    textColorClass = 'text-green-700'; // Rouge pour "Cancelled"
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
                            let textColorClass1 = "text-black"; // First text color
                            let textColorClass2 = "text-black"; // Second text color
                            let textColorClass3 = "text-black"; // Third text color

                            // Choose which text color will be red
                            if (rowIndex === 0) {
                                textColorClass1 = "text-red-700";
                            } else if (rowIndex === 1) {
                                textColorClass2 = "text-red-700";
                            } else {
                                textColorClass3 = "text-red-700";
                            }
                            return (
                                <tr className={backgroundColorClass} style={{}}>
                                    {Object.entries(data).map(([key, value]) => {
                                        let textAlignClass = 'text-start'; // Classe pour l'alignement du texte
                                        switch (key) {
                                            case 'currency':
                                            case 'amount':
                                            case 'transactionScore':
                                                textAlignClass = 'text-center'; // Centrer le texte pour ces colonnes
                                                break;
                                            default:
                                                textAlignClass = 'text-start'; // Par défaut, aligner à gauche
                                        }
                                        let cellContent = value;
                                        let textColorClass = "";
                                        if (key === "status") {
                                            return (
                                                <td
                                                    className={`text-ssm whitespace-nowrap text-center px-1 ${textColorClass}`}
                                                    style={{
                                                        display: 'table-cell',
                                                        unicodeBidi: 'isolate',
                                                        lineHeight: 'unset',
                                                        padding: '0px 15px 0px 10px',

                                                    }}
                                                >
                                                    <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                        {statusIcons[value]}
                                                    </div>

                                                </td>
                                            );
                                        }

                                        else if (key === "email") {
                                            textColorClass = textColorClass1;
                                            cellContent = <RiMailLine className='w-4' />;
                                            return (
                                                <td key={`${key}-${rowIndex}`} className={`text-ssm whitespace-nowrap ${textColorClass}`}
                                                    style={{
                                                        textAlign: 'center',
                                                        display: 'table-cell',
                                                        unicodeBidi: 'isolate',
                                                        lineHeight: 'unset',
                                                        padding: '0px 15px 0px 10px',
                                                        verticalAlign: 'middle'
                                                    }}>
                                                    <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                        {cellContent}
                                                    </div>
                                                </td>
                                            );

                                        } else if (key === "ip") {
                                            textColorClass = textColorClass2;
                                            cellContent = <MdLaptopMac />;
                                            return (
                                                <td key={`${key}-${rowIndex}`} className={`text-ssm text-center whitespace-nowrap ${textColorClass}`}
                                                    style={{
                                                        unicodeBidi: 'isolate',
                                                        lineHeight: 'unset',
                                                        padding: '0px 15px 0px 10px',
                                                        display: 'table-cell', // Revenir à l'affichage par défaut des cellules de tableau
                                                        verticalAlign: 'middle' // Alignement vertical par défaut
                                                    }}>
                                                    <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                        {cellContent}
                                                    </div>
                                                </td>
                                            );

                                        } else if (key === "phoneNumber") {
                                            textColorClass = textColorClass3;
                                            cellContent = <IoPhonePortraitSharp />;
                                            return (
                                                <td key={`${key}-${rowIndex}`} className={`text-ssm whitespace-nowrap ${textColorClass}`}
                                                    style={{
                                                        textAlign: 'center',
                                                        display: 'table-cell',
                                                        unicodeBidi: 'isolate',
                                                        lineHeight: 'unset',
                                                        padding: '0px 15px 0px 10px',
                                                        verticalAlign: 'middle'
                                                    }}>
                                                    <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                        {cellContent}
                                                    </div>
                                                </td>
                                            );
                                        }

                                        else {
                                            return (
                                                <td
                                                    className={`text-ssm whitespace-nowrap ${textAlignClass} px-1`}
                                                    style={{
                                                        display: 'table-cell',
                                                        unicodeBidi: 'isolate',
                                                        lineHeight: 'unset',
                                                        padding: '0px 15px 0px 10px',
                                                        fontSize: '0.73rem',
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



            <div className="flex  justify-end">

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
                        <IoCheckmark /> Approve
                    </button>
                    <button
                        className="bg-red-600 text-white rounded-large flex justify-center items-center gap-2"
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
                        Decline
                    </button>
                </div>

            </div>
        </div>
    )
}