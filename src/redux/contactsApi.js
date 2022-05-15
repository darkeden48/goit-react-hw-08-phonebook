import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://627fe9e61020d85205780de8.mockapi.io/'}),
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