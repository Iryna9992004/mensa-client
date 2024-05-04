import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuth=()=>{
    const router=useRouter();

    useEffect(()=>{
        const token=localStorage.getItem('adminToken');

        if(!token){
            router.push('/admin');
            alert('Адміністратор не авторизований!')
        }
    
    },[])

    return null;
}

export default useAuth;