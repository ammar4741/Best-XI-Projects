import React, { use } from 'react';
import iconimg from '../../assets/Group.png'

const AvailablePlayers = ({fetchPlayers}) => {
    const PlayerData = use(fetchPlayers) 
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 mb-10 container mx-auto'>
            {
                PlayerData.map(player => 
                    <div  key={player.id} >
                        <div className='p-3 min-h-[350px] max-h-[350px] shadow-xl rounded-xl'>
                <img className='max-h-[100px] min-w-[200px] mx-auto rounded-3xl' src={player.image} alt="" />
                <div className='flex gap-5 items-center my-2'>
                    <img className='w-[20px] h-[20px]' src={iconimg} alt="" />
                    <h1 className='text-lg font-bold'>{player.name}</h1>
                </div>
                <div className='flex justify-between pb-3'>
                    <span className='text-lg font-semibold'>{player.country}</span> <span className='text-lg font-semibold'>{player.role}</span>
                </div>
                <div className='flex justify-between items-center border-t-1 pt-4'><h1 className='font-bold'>Rating</h1> <h1 className='font-bold'>{player.rating}</h1></div>
                <div className='font-semibold flex justify-between my-5 gap-5'>
                    <span>{player.battingStyle}</span> <span>{player.bowlingStyle}</span>
                </div>
                <div className='font-semibold flex justify-between'><h1>${player.marketPrice}</h1> <button>Choose players</button></div>
            </div>
                    </div>
                )
            }
        </div>
    );
};

export default AvailablePlayers;