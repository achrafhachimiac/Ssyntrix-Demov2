
import { IoCheckmark } from "react-icons/io5";


export default function AddCase() {
    return (
        <div className="bg-white flex flex-col gap-4 rounded-large"
            style={{padding:'30px 30px 30px 30px'}}>
            <p className="text-xl">Cases - Add New</p>
            <div className="flex flex-col  gap-4 p-2">
                <div className="flex flex-row gap-2 justify-between">
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="Amount">Case Name</label>
                        <input className="border-1 rounded-large p-1" id="Amount" placeholder="New Case Name"></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="NumberOfScenarios">Comments/Notes</label>
                        <input className="border-1 rounded-large p-1" id="NumberOfScenarios" placeholder="Enter Comments..."></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="TransactionID">Start Date</label>
                        <input className="border-1 rounded-large p-1" type="date"></input>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="TransactionID">End Date</label>
                        <input className="border-1 rounded-large p-1" type="date"></input>
                    </div>
                </div>


                <div className="flex flex-row gap-2 justify-start">
                    <div className="flex flex-col w-[23%] mr-5">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="TransactionID">Scenario</label>
                        <select className="border-1 rounded-large p-1" name="transactions" id="TransactionID">
                            <option value="Scenario 1">Scenario 1</option>
                            <option value="Scenario 2">Scenario 2</option>
                            <option value="Scenario 3">Scenario 3</option>
                            <option value="Scenario 4">Scenario 4</option>
                            <option value="Scenario 5">Scenario 5</option>
                            <option value="Scenario 6">Scenario 6</option>
                            <option value="Scenario 7">Scenario 7</option>
                            <option value="Scenario 8">Scenario 8</option>
                            <option value="Scenario 9">Scenario 9</option>
                            <option value="Scenario 10">Scenario 10</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[23%]">
                        <label className="bg-blue-custom mb-[2px] text-white pl-1 pr-1 text-sm rounded-[4px] w-fit" for="user name">Name of User Assigned</label>
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

                    <div className="flex flex-col w-[23%]">

                    </div>
                </div>

                <div className="flex flex-row justify-between" >
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
    )
}