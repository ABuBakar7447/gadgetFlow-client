import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const gadgetApi = createApi({
    reducerPath: 'gadgetApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    tagTypes:['gadgetData'],
    endpoints:(builder) =>({
        getAllGedget: builder.query({
            query:()=>'gadgetCollection',
            providesTags:['gadgetData'],
        }),
        gadgetDelete: builder.mutation({
            query: (id)=>({
                url: `gadgetdelete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:['gadgetData']
        }),
        gadgetDataUpdata: builder.mutation({
            query: ({id, data})=>({
                url: `gadgetdataupdate/${id}`,
                method: 'PUT',
                body:data
            }),
            invalidatesTags:['gadgetData'],
        }),
        gadgetDataAdd: builder.mutation({
            query:({product})=>({
                url:'gadgetdataAdd',
                method:'POST',
                body:product
            }),
            invalidatesTags:['gadgetData']
        })
    })
})


export const {useGetAllGedgetQuery, useGadgetDeleteMutation, useGadgetDataUpdataMutation, useGadgetDataAddMutation} = gadgetApi;