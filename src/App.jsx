import img from './assets/logo.png'
import imgDollar from './assets/dollar.png'
import banner from './assets/banner-main.png'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'

const fetchPlayers = fetch('/public/players.json')
.then(res => res.json())

function App() {

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
          <span>600000</span>
          <span>Coins</span>
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

    <div className='container mx-auto flex justify-between mt-10'>
      <h1 className='text-xl font-semibold'>Available Players</h1>
      <div className='space-x-6 text-xl'>
        <button>Available</button>
        <button>Selected</button>
      </div>
    </div>
{/* Available Players Section */}
<Suspense fallback={<p className='text-center mt-5'>Please Wait Data are Coming.....</p>}>
  <AvailablePlayers fetchPlayers={fetchPlayers}>

</AvailablePlayers>
</Suspense>

{/* Selected Players Section */}
<SelectedPlayers>

</SelectedPlayers>

    </>
  )
}

export default App
