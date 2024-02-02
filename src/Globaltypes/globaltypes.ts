
export interface ILaptop {
    _id:string;
    id: number;
    name: string;
    price: number;
    quantity: number;
    releaseDate: string;
    brand: string;
    modelNumber: string;
    category: string;
    operatingSystem: string;
    connectivity: string[];
    powerSource: string;
    features: {
        processor: string;
        RAM: string;
        storageCapacity: string;
        screenSize: string;
    };
    img: string;
    status:boolean;
    addedquantity:number
}
