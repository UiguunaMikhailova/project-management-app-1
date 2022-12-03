import { Box, Paper } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useUploadFileMutation } from 'store/services/boardAPI';

export default function FileUploader({ taskId }: { taskId: string }) {
  const intl = useIntl();
  const theme = {
    drag: intl.formatMessage({ id: `${'file_drag'}` }),
    drop: intl.formatMessage({ id: `${'file_safe'}` }),
    success: intl.formatMessage({ id: 'file_success' }),
  };
  const [uploadFile] = useUploadFileMutation();
  const [drag, setDrag] = useState(false);
  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };
  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    try {
      e.preventDefault();
      [...e.dataTransfer.files].forEach(async (file) => {
        const data = new FormData();
        data.append('taskId', taskId);
        data.append('file', file);
        uploadFile(data).then(() => toast.success(theme.success));
      });
      setDrag(false);
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    }
  };
  return (
    <Box>
      <Paper
        sx={{
          m: 1,
          width: 286,
          height: 128,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        variant="outlined"
        onDragLeave={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler(e)}
      >
        {drag ? <div>{theme.drop}</div> : <div>{theme.drag}</div>}
      </Paper>
    </Box>
  );
}
