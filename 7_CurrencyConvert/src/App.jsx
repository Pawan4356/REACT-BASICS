import './App.css'
import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("jpy");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  useEffect(() => {
    if (currencyInfo[to] && amount !== "") {
      const result = Number(amount) * currencyInfo[to]
      setConvertedAmount(result.toFixed(2)) // keeps it clean
    } else {
      setConvertedAmount("")
    }
  }, [amount, from, to, currencyInfo])


  return (
    <div
      className="w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <h2 className="w-full bg-blue-600 text-white px-4 py-3 mb-4 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </h2>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
