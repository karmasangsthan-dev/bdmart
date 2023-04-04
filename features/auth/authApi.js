import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: (token) => ({
        url: "/user/me",
        headers: {
          authorization: `Bearer ${token}`,
        },
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["User"],
    }),
    socialLogin: builder.mutation({
      query: (data) => ({
        url: "/user/socialLogin",
        method: "POST",
        body: data,
      }),
    }),
    updateProfileImage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/profile/image/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSocialLoginMutation,
  useUpdateProfileImageMutation,
  useGetMeQuery,
} = authApi;
