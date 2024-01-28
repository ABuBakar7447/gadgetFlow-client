import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const gadgetApi = createApi({
    reducerPath: 'gadgetApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    endpoints:(builder) =>({
        getAllGedget: builder.query({
            query:()=>'gadgetCollection'
        }),
        gadgetDelete: builder.mutation({
            query: (id)=>({
                url: `gadgetdelete/${id}`,
                method: 'DELETE'
            })
        }),
        gadgetDataUpdata: builder.mutation({
            query: ({id, data})=>({
                url: `gadgetdataupdate/${id}`,
                method: 'PUT',
                body:data
            })
        }),
    })
})


export const {useGetAllGedgetQuery, useGadgetDeleteMutation, useGadgetDataUpdataMutation} = gadgetApi;