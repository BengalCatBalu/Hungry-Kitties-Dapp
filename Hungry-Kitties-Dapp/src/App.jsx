//import './App.css'
import { SignInButton, ethos } from "ethos-connect";

function App() {
  const { status, wallet } = ethos.useWallet();

  return (
    <div className="App">
      {!wallet ? (
        <SignInButton className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Connect
        </SignInButton>
      ) : (
        <div>
          <ethos.components.AddressWidget/>
        </div>
      )}
    </div>
  )
}

export default App