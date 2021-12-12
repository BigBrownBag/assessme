import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export const BASE_URL: string = 'localhost:3000'
const root = 'https://assessme.paulislava.space'

class DataRepository {
    constructor(private readonly root: string) {
    }

    static instance(url: string): DataRepository {
        return new DataRepository(url)
    }

    get< T = any, R = AxiosResponse<T> >(url: string, params?: any, config: AxiosRequestConfig = {}): Promise<R> {
        return axios.get<T, R>(
            this.root + (url ? `/${url}` : ''),
            {
                ...config,
                params
            }
        )
    }

    post<P = any, R = any, C = AxiosRequestConfig>(url: string, data: P, config: C = {} as any): Promise<R> {
        return axios.post(
            `${this.root}/${url}`,
            data,
            {
                ...config
            }
        )
    }

    put<P = any, R = any>(url: string, data: P, config: AxiosRequestConfig = {}): Promise<R> {
        return axios.put(
            this.root + (url ? `/${url}` : ''),
            data,
            {
                ...config
            }
        )
    }

    patch<P = any, R = any>(url: string, data: P): Promise<R> {
        return axios.patch(
            this.root + (url ? `/${url}` : ''),
            data
        )
    }

    delete(url: string) {
        return axios.delete(
            `${this.root}/${url}`
        )
    }
}

export default DataRepository.instance(root)