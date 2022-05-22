import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set('Authorization', token);
        }
        return headers;
      },
    }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        contacts: builder.query({
            query: (limit = '') => `contacts?${limit && `_limit=${limit}`}`,
            method: 'GET',
            providesTags: result =>
        result
          ? result.map(({ id }) => ({ type: 'Contacts', id }))
          : ['Contacts'],
    }),
        addContact: builder.mutation({
            query: newContact => ({
                url: 'contacts',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {useContactsQuery,useAddContactMutation,useDeleteContactMutation} = contactsApi;