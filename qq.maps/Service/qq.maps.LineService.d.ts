 declare module qq.maps {

     class LineService {
         constructor(options?: baseServiceOptions<LineInfo>);

         searchById(id: string);
         setComplete(callback: (result:baseServiceOptions<LineInfo>)=>void):void;
         setError(callback:()=>void):void;

     }

 }