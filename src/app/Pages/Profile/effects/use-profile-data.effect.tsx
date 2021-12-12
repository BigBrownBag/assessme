import {useCallback, useEffect, useState} from "react";
import {abortController} from "../../../../utils/abort";
import DataRepository from "../../../../api/DataRepository";
import {Form, User} from "../../../../utils/interface";

interface ProfileDataProps {
    id: string | number;
 }

 interface ProfileData {
    data: User | null;
    error: boolean;
    loading: boolean;
    onProfileChange: (body: Form) => void;
 }

 export const useProfileData = (params: ProfileDataProps): ProfileData => {
     const [data, setData] = useState<User | null>(null)
     const [error, setError] = useState<boolean>(false)
     const [loading, setLoading] = useState<boolean>(false)
     const [syncTime, setSyncTime] = useState<number>()

     const onProfileChange = useCallback((body: Form) => {
         DataRepository.post(
             `updateProfile/${params.id}`,
             body
         )
             .then((res) => {
                 setSyncTime(Date.now())
             })
             .catch(err => {
                 //setError(true)
             })
     }, [params.id])

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
                 const newData = {
                     ...data,
                     org_title: data?.org?.title || null,
                     org_id: data?.org?.id || null,
                 }
                 setData(newData);
             })
             .catch(err => setError(err))
             .finally(() => setLoading(false))

         return () => controller.abort()
     }, [params.id, syncTime])

    return {
       data,
       error,
       loading,
        onProfileChange
    }
 }