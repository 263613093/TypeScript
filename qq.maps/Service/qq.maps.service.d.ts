interface baseServiceOptions<T> {
    complete?: (result: baseServiceResult<T>) => void;
    error?:()=>void;
}

interface baseServiceResult<T> {
    type: qq.maps.ServiceResultType;
    detail:T;
}