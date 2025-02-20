import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from 'configs/constants';
import { IBoard, IColumn, TColumnRequest, ITaskResponse, TTaskRequest } from 'interfaces/IBoard';
import { IUser, TUpdateUser } from 'interfaces/IUser';

export const boardAPI = createApi({
  reducerPath: 'boardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        document.location.href = 'https://melodious-tartufo-4b154e.netlify.app/';
      }
      return headers;
    },
  }),
  tagTypes: ['Boards', 'Columns', 'Tasks', 'User'],
  endpoints: (builder) => ({
    getAllBoards: builder.query({
      query: () => 'boards',
      providesTags: ['Boards'],
    }),
    getBoardById: builder.query<IBoard, string>({
      query: (id) => `boards/${id}`,
      providesTags: ['Boards', 'Columns', 'Tasks', 'User'],
    }),
    createBoard: builder.mutation<IBoard, { title: string; description: string }>({
      query: (body) => ({
        url: 'boards',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Boards'],
    }),
    updateBoard: builder.mutation<IBoard, { title: string; description: string; id: string }>({
      query: ({ id, ...body }) => ({
        url: `boards/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteBoard: builder.mutation({
      query: (id) => ({
        url: `boards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards'],
    }),
    getAllColumns: builder.query({
      query: (idBoard) => `boards/${idBoard}/columns`,
      providesTags: ['Columns'],
    }),
    getColumnById: builder.query({
      query: ({ boardId, columnId }) => `boards/${boardId}/columns/${columnId}`,
      providesTags: ['Columns'],
    }),
    createColumn: builder.mutation<IColumn, { idBoard: string; body: { title: string } }>({
      query: ({ idBoard, body }) => ({
        url: `boards/${idBoard}/columns`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Columns'],
    }),
    updateColumn: builder.mutation<
      IColumn,
      { idBoard: string; idColumn: string; body: TColumnRequest }
    >({
      query: ({ idBoard, idColumn, body }) => ({
        url: `boards/${idBoard}/columns/${idColumn}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Columns'],
    }),
    deleteColumn: builder.mutation({
      query: ({ idBoard, idColumn }) => ({
        url: `boards/${idBoard}/columns/${idColumn}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
    getAllTasks: builder.query({
      query: ({ boardId, columnId }) => `boards/${boardId}/columns/${columnId}/tasks`,
      providesTags: ['Tasks'],
    }),
    getTaskById: builder.query({
      query: ({ boardId, columnId, taskId }) =>
        `boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      providesTags: ['Tasks'],
    }),
    createTask: builder.mutation<
      ITaskResponse,
      { boardId: string; columnId: string; body: TTaskRequest }
    >({
      query: ({ boardId, columnId, body }) => ({
        url: `boards/${boardId}/columns/${columnId}/tasks`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<
      ITaskResponse,
      { idTask: string; idColumn: string; body: TTaskRequest }
    >({
      query: ({ idTask, idColumn, body }) => ({
        url: `boards/${body.boardId}/columns/${idColumn}/tasks/${idTask}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation({
      query: ({ boardId, columnId, idTask }) => ({
        url: `boards/${boardId}/columns/${columnId}/tasks/${idTask}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    uploadFile: builder.mutation({
      query: (data) => ({
        url: 'file',
        method: 'POST',
        responseHandler: (response) =>
          response.status === 200 ? response.text() : response.json(),
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    }),
    getAllUsers: builder.query({
      query: () => 'users',
      providesTags: ['User'],
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ['User'],
    }),
    updateUser: builder.mutation<IUser, TUpdateUser>({
      query: (body) => ({
        url: `users/${body.id}`,
        method: 'PUT',
        body: body.user,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetAllBoardsQuery,
  useCreateBoardMutation,
  useDeleteBoardMutation,
  useGetBoardByIdQuery,
  useUpdateBoardMutation,
  useGetAllColumnsQuery,
  useCreateColumnMutation,
  useDeleteColumnMutation,
  useGetColumnByIdQuery,
  useUpdateColumnMutation,
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useUploadFileMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} = boardAPI;
