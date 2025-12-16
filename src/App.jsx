import img from './assets/logo.png'
import imgDollar from './assets/dollar.png'
import banner from './assets/banner-main.png'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const fetchPlayers = fetch('/public/players.json')
.then(res => res.json())

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(30000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = () => {
    if(purchasedPlayers.length > 0){
      const removedPlayer = purchasedPlayers[purchasedPlayers.length -1];
      setPurchasedPlayers(purchasedPlayers.slice(0, -1));
      setAvailableBalance(availableBalance + removedPlayer.marketPrice);
    }
  }

  return (
    <>
    {/* navbar section start */}
    <div className='flex justify-between p-3 container mx-auto '>
      <img className='w-[60px] h-[60px]' src={img} alt="" />
      <div className='flex gap-10'>
        <ul className='flex items-center gap-8 font-semibold'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <div className='flex items-center gap-2 text-lg'>
          <span>{availableBalance}</span>
          <img className='w-[20px]' src={imgDollar} alt="" />
        </div>
      </div>
    </div>
    {/* banner section start */}
 
  <div class="container mx-auto h-[450px] rounded-3xl bg-gradient-to-br from-[#1F1F20] via-[#2A2C35] to-[#3D3038] relative overflow-hidden flex flex-col items-center justify-center text-white">
  <div class="absolute inset-0 bg-gradient-to-br from-indigo-400/30 via-transparent to-pink-300/20 blur-3xl"></div>

  <div class="text-center">
    <img className='mx-auto mb-5' src={banner} alt="" />
    <h2 class="text-4xl font-bold mb-2">Assemble Your Ultimate Dream 11 Cricket Team</h2>
    <p class="text-gray-300 mb-6">Beyond Boundaries Beyond Limits</p>
    <button class="px-6 py-3 bg-lime-400 text-black font-semibold rounded-xl shadow-lg hover:bg-lime-300 transition">
      Claim Free Credit
    </button>
  </div>
</div>
    {/* banner section end */}

    {/* Available Players Title Section */}

    <div className='container mx-auto flex justify-between items-center mt-10'>
      <h1 className='text-xl font-semibold'>{
        toggle === true ? "Available Players":`Selected Players (${purchasedPlayers.length}/12)`
        }</h1>
      <div className='text-xl'>
        <button onClick={()=>setToggle(true)} className={`px-5 py-2 border-1 border-gray-400 rounded-l-xl border-r-0 ${toggle === true?"bg-[#e7fe29]":""}`}>Available</button>
        <button onClick={()=>setToggle(false)} className={`px-5 py-2 border-1 border-gray-400 rounded-r-xl border-l-0 ${toggle === false?"bg-[#e7fe29]":""}`}>Selected <span>{purchasedPlayers.length}</span></button>
      </div>
    </div>
    {
      toggle === true ?<Suspense fallback={<p className='text-center mt-5'>Please Wait Data are Coming.....</p>}>
  <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} fetchPlayers={fetchPlayers}>

</AvailablePlayers >
</Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}>

</SelectedPlayers>
    } 
    </>
  )
}

export default App
