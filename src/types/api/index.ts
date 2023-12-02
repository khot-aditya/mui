export type IResponse<T> = {
    "status": number,
    "message": string,
    "data": T,
    "totalRecords": number
}