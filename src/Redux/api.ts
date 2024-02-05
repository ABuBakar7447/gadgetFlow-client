import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const gadgetApi = createApi({
    reducerPath: 'gadgetApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://gadget-flow-server.vercel.app/'}),
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
            invalidatesTags:['gadgetData'],
        }),

        gadgetDataUpdata: builder.mutation({
            query: ({id, data})=>({
                url: `gadgetdataupdate/${id}`,//use axiosSecure
                method: 'PUT',
                body:data
            }),
            invalidatesTags:['gadgetData'],
        }),

        gadgetDataAdd: builder.mutation({
            query:({product})=>({
                url:'gadgetdataAdd',//use axiosSecure
                method:'POST',
                body:product
            }),
            invalidatesTags:['gadgetData']
        }),

        gadgetquantityUpadate: builder.mutation({
            query: ({id, data})=>({
                url: `gadgetquantityUpadate/${id}`,
                method: 'PATCH',
                body:data
            }),
            invalidatesTags:['gadgetData'],
        }),

        userdata : builder.mutation({
            query:(data)=>({
                url:'userdata',//use axiosSecure
                method:'POST',
                body:data
            })
        }),


        sellsdata : builder.mutation({
            query:(data)=>({
                url:'sellsdata',//use axiosSecure
                method:'POST',
                body:data
            })
        })
    })
})


export const {useGetAllGedgetQuery, useGadgetDeleteMutation, useGadgetDataUpdataMutation, useGadgetDataAddMutation, useGadgetquantityUpadateMutation, useUserdataMutation, useSellsdataMutation} = gadgetApi;