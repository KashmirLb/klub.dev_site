import { useEffect } from 'react'

const useTop = () => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },[])
}

export default useTop