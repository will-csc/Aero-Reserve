import { useState } from 'react';
import './App.css'
import { Card } from "./components/card/card"
import { useReserveData } from './hooks/useReserveData';
import { CreateModal } from './components/card/create-modal/create-modal';

function App() {
  const {data} = useReserveData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (   
      <div className="container">
          <h1>Reservas</h1>
          <div className="card-grid">
            {data?.map(reserveData =>
             <Card 
              price={reserveData.price}
              location={reserveData.location}
              image={reserveData.image}
             />)}
             </div>
            {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
            <button onClick={handleOpenModal}>novo</button>
      </div>
  )
}

export default App
