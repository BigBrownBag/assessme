import {useCallback, useEffect, useState} from "react";
import DataRepository from "../../../../api/DataRepository";
import {Form, User} from "../../../../utils/interface";
import getHeader from "../../../../api/Auth/auth";

interface ProfileDataProps {
    id: string | number | undefined;
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
             `updateProfile`,
             {
                 id: body.id,
                 username: body.username,
                 firstname: body.firstname,
                 surname: body.surname,
                 email: body.email
             },
             getHeader()
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
         setLoading(true)

         DataRepository.get(
             `user/${params.id}`,
             {},
             getHeader()
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
     }, [params.id, syncTime])

    return {
       data,
       error,
       loading,
        onProfileChange
    }
 }