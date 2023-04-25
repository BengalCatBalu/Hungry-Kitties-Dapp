import { useCallback } from 'react'
import { ethos} from 'ethos-connect'


const { wallet } = ethos.useWallet()

const register = useCallback(async() => {
    if (!wallet) return
    try {
        const result = await wallet.sign({
          message: 'Register To Me!',
        })
      } catch (e) {
        console.log('Error signing message', e)
      }
}, [wallet])

export default register;