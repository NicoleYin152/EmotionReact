// ChatPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      const res = await axios.post('http://localhost:8000/messages', {
        text: message,
      });

      const data = res.data.data;

      const newEntry = {
        text: data.text,
        response: data.response,
      };

      setChatHistory((prev) => [...prev, newEntry]);
      setMessage('');
    } catch (err) {
      console.error('发送失败:', err);
      alert('请求失败，请确保后端正在运行。');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        🧠 AI 情感对话
      </Typography>

      <Paper
        style={{ height: 300, overflowY: 'auto', padding: 16, marginBottom: 16 }}
      >
        <List>
          {chatHistory.length === 0 && (
            <Typography color="textSecondary">暂无对话记录</Typography>
          )}
          {chatHistory.map((msg, idx) => (
            <ListItem key={idx} alignItems="flex-start">
              <ListItemText
                primary={`你：${msg.text}`}
                secondary={`系统：${msg.response}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          placeholder="输入你的心情..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          发送
        </Button>
      </Box>
    </Container>
  );
};

export default ChatPage;
