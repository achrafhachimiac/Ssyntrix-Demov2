import React from 'react';
import FirstPart from './transaction/FirstPart';
import SecondPart from './transaction/SecondPart';
import ThirdPart from './transaction/ThirdPart';

export default function TransactionStats() {
    return (
        <div className='flex flex-col gap-4 p-2 w-fit'>
        <FirstPart></FirstPart>
        <SecondPart></SecondPart>
        <ThirdPart></ThirdPart>
    </div>
        
    );

};