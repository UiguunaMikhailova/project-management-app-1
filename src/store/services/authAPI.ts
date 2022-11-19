import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TSigninRequest, ISigninResponse, ISignupRequest, IUser } from 'interfaces/IUser';

export const authAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://back-project-app-production.up.railway.app/auth/',
  }),
  endpoints: (builder) => ({
    signin: builder.mutation<ISigninResponse, TSigninRequest>({
      query: (body) => ({
        url: 'signin',
        method: 'POST',
        body: body,
      }),
    }),
    signup: builder.mutation<IUser, ISignupRequest>({
      query: (body) => ({
        url: 'signup',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authAPI;
