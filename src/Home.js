import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-row h-screen w-full'>

      <div className="flex flex-col h-full w-1/5 bg-blue-700">
        <div className='flex justify-center h-1/4 items-center '>
          <p className="text-white">
            logo
          </p>
        </div>
        <div className='flex flex-col h-1/2 justify-between'>

        <div className='flex justify-center items-center '>
          <p className="text-white">
            Dashbord
          </p>
          
        </div>
        <div className='flex justify-center items-center '>
          <p className="text-white">
            Column 2 Content
          </p>
        </div>
        <div className='flex justify-center items-center '>
          <p className="text-white">
            Column 3 Content
          </p>
        </div>
        <div className='flex justify-center items-center '>
          <p className="text-white">
            Column 4 Content
          </p>
        </div>
        </div>
      </div>

      <div className='bg-red-500 h-20 w-full'>
        <p>zakaria</p>
      </div>

    </div>
  );
}

export default Home;
