
import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards';
import Credit from './components/Credit/Credit';
import Header from './components/Header/Header'
 import { ToastContainer, toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts,setCarts] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(0);
    const total = 20;




  const handleAddToCarts = card => {
      const isExist = carts.find((title) => title.id == card.id);
      let temp = card?.credit;
      if(isExist){
      return toast(" This course already added");
    }
    else{
      carts.forEach((item) => {
        temp += item.credit;
      });
      const sum = total - temp;
      if (temp > 20) {
        return toast('total credit hour 20')
      } 
      else {
      const newCarts = [...carts, card];
      setCarts(newCarts)
      setTotalCredit(temp);
      setRemainingCredit(sum);
      }
    }
   };
  

  return (
    <>
      <Header></Header>
      <main className=" bg-[#F3F3F3] md:flex justify-evenly max-w-7xl mx-auto m-8 gap-8">
        <div className="w-2/3 ">
          <Cards handleAddToCarts={handleAddToCarts}></Cards>
        </div>
        <div className="w-1/3">
          <Credit
            carts={carts}
            totalCredit={totalCredit}
            remainingCredit={remainingCredit}
          ></Credit>
         <ToastContainer></ToastContainer>
        </div>
      </main>
    </>
  );
}

export default App;
