import React from 'react';

const SelectedPlayers = ({ purchasedPlayers, removePlayer}) => {
    return (
        <div className='container mx-auto'>
            {
                purchasedPlayers.map(player =>
                    <div key={player.id} className='flex justify-between items-center p-3 mt-5 border border-gray-200 rounded-xl'>
                        <div className='flex items-center gap-5'>
                            <img className='h-[50px] w-[50px] rounded-xl' src={player.image} alt="" />
                            <div>
                                <h1 className='text-lg'>{player.name}</h1>
                                <p className='text-sm'>{player.country}</p>
                            </div>
                        </div>
                        <div onClick={removePlayer}>
                        <img src="https://i.ibb.co.com/4n2rF6kn/Vector.png" alt="" />

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SelectedPlayers;