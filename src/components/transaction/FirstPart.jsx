export default function FirstPart() {
    const generalInformations = {
        caseName: "Case 1",
        caseNumber: "1 766",
        assignedUser: "Support",
        lastScenario: "2023/05/09",
        creationDate: "2022/02/05",
        startDate: "2022/02/05",
        endDate: "2024/02/03"
    }
    const Data = {
        amount: "6 000",
        numberOfTransactions: 9
    }
    const Alert = {
        numberOfAlert: 40,
        criticalAlerts: 20,
        lastAlertTriggered: "GrayList Match",
        lastAlertTriggeredDate: "2024/05/09",
        numberOfTriggeredAlerts: 5,
        FirstAlertDate: "2022/11/14"
    }
    const Scenarios = ["Behavior Pattern - Fraud", "ForeGrip", "GrayList match"]
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex flex-row gap-4 items-center justify-center">
                <div className="flex flex-col gap-4 bg-white rounded-[8px] h-full w-[50%]"
                style={{padding:'30px 30px 30px 30px'}}>


                    <h2 className="text-2xl pb-4 text-blue-custom">STATUS</h2>
            <div className="flex items-center justify-start">
                    <select className="w-[100%] border-1 rounded-large flex justify-center items-center " name="Transaction Status" id="transaction-status">
                        <option value="Awaiting">Awaiting</option>
                        <option value="Analysed">Analysed</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Not analysed">Not analysed</option>
                        <option value="Under surveillance">Under Surveillance</option>
                    </select>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-40 h-40 flex flex-col items-center justify-center border-2 border-blue-custom rounded-full">
                            <p>SCORE :</p>
                            <p className="text-2xl">3</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white  rounded-[8px] h-full w-[50%] test-base leading-7"
                style={{padding:'30px 30px 30px 30px'}}>
                    <h2 className="text-2xl pb-5 text-blue-custom">GENERAL INFORMATIONS</h2>
                    <p><strong>Case name</strong> : {generalInformations.caseName}</p>
                    <p><strong>Case n°</strong> : {generalInformations.caseNumber}</p>
                    <p><strong>Assigned user</strong> : {generalInformations.assignedUser}</p>
                    <p><strong>Last scenario</strong> : {generalInformations.lastScenario}</p>
                    <p><strong>Creation date</strong> : {generalInformations.creationDate}</p>
                    <p><strong>Start date</strong> : {generalInformations.startDate}</p>
                    <p><strong>End date</strong> : {generalInformations.endDate}</p>
                    {/* informations here */}
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
                <div className="bg-white rounded-[8px] h-full w-[50%] leading-7"
                style={{padding:'30px 30px 30px 30px'}}>
                    <p className="text-2xl pb-4 text-blue-custom">DATA</p>
                    <p><strong>Amount :</strong> {Data.amount} AED</p>
                    <p><strong>Number of transactions :</strong> {Data.numberOfTransactions}</p>
                </div>
                <div className="bg-white rounded-[8px] h-full w-[50%] leading-7"
                style={{padding:'30px 30px 30px 30px'}}>
                    <p className="text-2xl pb-4 text-blue-custom">ALERT</p>
                    <p><strong>Number of alerts :</strong> {Alert.numberOfAlert} AED</p>
                    <p><strong>Critical alerts (%):</strong> {Alert.criticalAlerts}%</p>
                    <p><strong>Last Triggered alerts :</strong> {Alert.lastAlertTriggered}</p>
                    <p><strong>Last Triggered alerts date :</strong> {Alert.lastAlertTriggeredDate}</p>
                    <p><strong>Number Triggered alerts :</strong> {Alert.numberOfTriggeredAlerts}</p>
                    <p><strong>First alert date :</strong> {Alert.FirstAlertDate}</p>
                </div>
            </div>
            <div className="bg-white rounded-[8px]"
            style={{padding:'30px 30px 30px 30px'}}>
                <p className="text-2xl pb-4 text-blue-custom">COMMENTS / NOTES</p>
                <div className="border-1 max-w h-fit p-2">
                    n/a
                </div>
            </div>
            <div className="bg-white rounded-[8px] leading-7"
            style={{padding:'30px 30px 30px 30px'}}>
                <p className="text-2xl pb-4 text-blue-custom">SCENARIOS</p>
                <p><strong>Number of scenarios :</strong> {Scenarios.length}</p>
                {Scenarios.length && Scenarios.map((scene, index) => {
                    return (
                        <p><strong>Scenario {index + 1}:</strong> {scene}</p>
                    )
                })}

            </div>
        </div>
    )
}