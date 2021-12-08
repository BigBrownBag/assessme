import {useEffect, useState} from "react";
import {abortController} from "../../../../utils/abort";
import DataRepository from "../../../../api/DataRepository";
import {User} from "../../../../utils/interface";

interface ProfileDataProps {
    id: number;
 }

 interface ProfileData {
    data: User | null;
    error: boolean;
    loading: boolean;
 }

 export const useProfileData = (params: ProfileDataProps): ProfileData => {
     const [data, setData] = useState<User | null>(null)
     const [error, setError] = useState<boolean>(false)
     const [loading, setLoading] = useState<boolean>(false)

     useEffect(() => {
         if (!params.id) {
             return;
         }
         const controller = abortController()
         setLoading(true)

         DataRepository.get(
             `user/${params.id}`,
             {signal: controller.signal}
         )
             .then(res => {
                 const data = res.data
                 setData(data);
             })
             .catch(err => setError(err))
             .finally(() => setLoading(false))

         return () => controller.abort()
     }, [])

    return {
       data,
       error,
       loading
    }
 }