import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Card, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Card sx={{ maxWidth: 400, margin: '24px auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>Список дел</Typography>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          label="Новая задача"
          variant="outlined"
          value={task}
          onChange={e => setTask(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAdd}>Добавить</Button>
      </Box>
      <List>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            {todo.text}
          </ListItem>
        ))}
      </List>
      {todos.length === 0 && <Typography color="text.secondary">Нет задач</Typography>}
    </Card>
  );
}
