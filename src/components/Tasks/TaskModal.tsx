import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useCreateTaskMutation, useUpdateTaskMutation } from 'store/services/boardAPI';
import { ITask, TTaskRequest } from 'interfaces/IBoard';
import { ErrorAuth } from 'interfaces/IUser';
import { Button, Box, TextField, Backdrop, CircularProgress } from '@mui/material';
import { useIntl } from 'react-intl';

export default function TaskModal({
  columnId,
  boardId,
  onClick,
  isCreate,
  task,
}: {
  columnId: string;
  boardId: string;
  onClick: () => void;
  isCreate: boolean;
  task?: ITask;
}) {
  const [createTask, { isLoading: isLoadingTaskCreate }] = useCreateTaskMutation();
  const [updateTask, { isLoading: isLoadingTaskUpdate }] = useUpdateTaskMutation();
  const userId = localStorage.getItem('userId') ?? '';

  const [titleState, setTitle] = useState(task?.title);
  const [descriptionState, setDescription] = useState(task?.description);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string; description: string }>({ mode: 'onChange' });

  const onSubmit = ({ title, description }: Omit<TTaskRequest, 'userId'>) => {
    if (isCreate) {
      createHandler({ title, description });
    } else {
      updateHandler({ title, description });
    }
  };

  const createHandler = async ({ title, description }: Omit<TTaskRequest, 'userId'>) => {
    try {
      await createTask({ columnId, boardId, body: { title, description, userId } });
    } catch (e) {
      const err = e as ErrorAuth;
      toast.error(err.data.message);
    }
    onClick();
  };

  const updateHandler = async ({ title, description }: Omit<TTaskRequest, 'userId'>) => {
    const idTask = task ? task.id : '';
    const body = {
      title,
      description,
      userId: task ? task.userId : '',
      order: task ? task.order : 0,
      boardId,
      columnId,
    };
    try {
      await updateTask({ idTask, idColumn: columnId, body });
    } catch (e) {
      const err = e as ErrorAuth;
      toast.error(err.data.message);
    }
    onClick();
  };

  const intl = useIntl();
  const ru = {
    title: intl.formatMessage({ id: `${'board_title'}` }),
    description: intl.formatMessage({ id: `${'board_description'}` }),
    create: intl.formatMessage({ id: `${'create'}` }),
    edit: intl.formatMessage({ id: `${'change'}` }),
    close: intl.formatMessage({ id: `${'close'}` }),
  };
  const theme = ru;

  return (
    <>
      {(isLoadingTaskCreate || isLoadingTaskUpdate) && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color="inherit" size={60} />
        </Backdrop>
      )}
      <div className="form-wrapper">
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
          <Box
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={(theme) => ({
              width: 350,
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { m: 1 },
              backgroundColor: '#ffffff',
              p: 3,
              borderRadius: 3,
              [theme.breakpoints.down('sm')]: {
                width: 300,
              },
            })}
            autoComplete="off"
          >
            <TextField
              label={errors.title ? errors.title.message : theme.title}
              error={!!errors.title}
              {...register('title', {
                required: {
                  value: true,
                  message: intl.formatMessage({ id: `${'title_required'}` }),
                },
                minLength: {
                  value: 1,
                  message: intl.formatMessage({ id: `${'task_min_length'}` }),
                },
                maxLength: {
                  value: 50,
                  message: intl.formatMessage({ id: `${'task_max_length'}` }),
                },
                pattern: {
                  value: /(?=.*\S)/,
                  message: intl.formatMessage({ id: `${'text_pattern'}` }),
                },
              })}
              value={titleState}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label={errors.description ? errors.description.message : theme.description}
              error={!!errors.description}
              {...register('description', {
                required: {
                  value: true,
                  message: intl.formatMessage({ id: `${'description_required'}` }),
                },
                minLength: {
                  value: 1,
                  message: intl.formatMessage({ id: `${'task_min_length'}` }),
                },
                maxLength: {
                  value: 100,
                  message: intl.formatMessage({ id: `${'description_max_length'}` }),
                },
                pattern: {
                  value: /(?=.*\S)/,
                  message: intl.formatMessage({ id: `${'text_pattern'}` }),
                },
              })}
              value={descriptionState}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                {isCreate ? theme.create : theme.edit}
              </Button>
              <Button variant="outlined" sx={{ mt: 2 }} onClick={onClick}>
                {theme.close}
              </Button>
            </Box>
          </Box>
        </Backdrop>
      </div>
    </>
  );
}
