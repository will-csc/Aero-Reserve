import axios, { AxiosPromise } from "axios"
import { ReserveData } from "../interface/ReserveData";
import { useQuery } from "@tanstack/react-query";

const API_UTRL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<ReserveData[]> => {
    const response = axios.get(API_UTRL + "/reserves");
    return response;
}

export function useReserveData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['reserve-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}