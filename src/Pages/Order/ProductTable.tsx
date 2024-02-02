import { ILaptop } from "../../Globaltypes/globaltypes";

interface Iprops {
    item: ILaptop;
    index:number;
}

const ProductTable = ({ item, index}: Iprops) => {
    return (
        <>

            <tr>
                <th>
                    <label>
                        {index + 1}
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{item.name}</div>
                            
                        </div>
                    </div>
                </td>
                <td>
                    {item.brand}
                    <br />
                    <span className="badge badge-ghost badge-sm">{item.modelNumber}</span>
                </td>
                <td>{item.addedquantity}</td>
                <td>
                    <button className="btn btn-ghost btn-xs">${item.price}</button>
                </td>
            </tr>

        </>
    );
};

export default ProductTable;