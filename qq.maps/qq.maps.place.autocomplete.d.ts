 declare module qq.maps.place {
     class Autocomplete {
         constructor(input: HTMLInputElement, options?: any);
         dispose():void;
     }

     interface AutocompleteOptions {
         offset: qq.maps.Size;
         location:string;
     }
 }