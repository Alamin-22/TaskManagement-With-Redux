import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
    
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => `/tasks`,
            providesTags: ["task"]
        }),
        updateTask: builder.mutation({
            query: ({ _id, data }) => ({
                url: `/patch-tasks/${_id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["task"]
        }),
        AddTask: builder.mutation({
            query: (data) => ({
                url: "/post-tasks",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["task"]
        })
        ,
        DeleteTask: builder.mutation({
            query: ({ _id }) => ({
                url: `/delete-tasks/${_id}`,
                method: "DELETE"
            })
        })
    }),
})

export const { useGetTaskQuery, useUpdateTaskMutation, useAddTaskMutation } = taskApi;