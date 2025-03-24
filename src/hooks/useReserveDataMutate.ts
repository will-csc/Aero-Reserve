import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ReserveData } from "../interface/ReserveData";

const API_UTRL = "http://localhost:8080";

const postData = async (data: ReserveData): AxiosPromise<any> => {
    const response = axios.post(API_UTRL + "/reserves", data);
    return response;
}

export function useReserveDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['reserve-data'])
        }
    })

    return mutate;
}