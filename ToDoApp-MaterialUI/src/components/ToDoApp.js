import React from 'react'
import ToDoList from './ToDoList';
import Task from './Task';
import { Container, Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Add, AddToDriveOutlined } from '@mui/icons-material/';
import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
import { Tag, Check, Delete } from "@mui/icons-material";
import {useState, useEffect} from 'react';


export default function ToDoApp() {
    const [todos, setTodos] = useState([
       
    ])  
    
    // useEffect(() => {
        
    //   }, [todos]);


    const deleteTask = (id) => {
        // console.log(id);
        const newtodos = todos.filter(function(todo) {
            return todo.id !== id;
        })

        setTodos(newtodos);
    }

    const addTodo = (todoTitle) => {
        const lastTodo = todos[todos.length-1];
        const newtodosId = lastTodo.id + 1;
        // const newtodos = todos;
        // newtodos.push({
        //     id: newtodosId,
        //     title: todoTitle,
        //     done: false,
        // })
        setTodos((todos) => [...todos, {
            id: newtodosId,
            Title: todoTitle,
            done: false
        }]);
        // setTodos((todos) => newtodos);
        
        // console.log(todos);
    }

    const checkTask = (id) => {
        console.log(id);
        const newtodos = todos;
        newtodos.forEach((todo) => {
            if(todo.id === id) {
                todo.done = true;
            }
        })
        setTodos(newtodos);
        console.log(todos);
    }
    const [todo, setTodo] = useState('')

    // const addTodo = props.newTodo
    // const [todo, setTodo] = useState('')
    function writeTodo(e) {
    // console.log(e.target.value);
    setTodo(e.target.value);
    }

  const addText = (e) => {
    e.preventDefault();
    const lastTodoId = todos.length || 0;
    console.log(lastTodoId);
    const newtodosId = lastTodoId + 1;
    console.log(newtodosId);
        if(lastTodoId === 0){
            setTodos([{
                id: newtodosId,
                Title: e.target[0].value,
                done: false
            }]);
            console.log({
                id: newtodosId,
                Title: e.target[0].value,
                done: false
            });
        }else{
            setTodos([...todos, {
                id: newtodosId,
                Title: e.target[0].value,
                done: false
            }]);
        }
        console.log(e.target[0].value);
        console.log(todos);

  }


  return (
    <Container maxWidth="sm">
      <Grid item xs={12} md={6}>
        {/* <ToDoList newTodo={addTodo}/> */}
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              ToDo List
            </Typography>
            <form onSubmit={(e) => addText(e)}>
            <FormControl>
            <div
            
            style={{display: 'flex', marginBottom: 20}}>
            <TextField
              id="standard-helperText"
              label="New ToDo"
              style={{ width: 450 }}
              variant="standard"
              value={todo}
              onChange={(e) => writeTodo(e)}
            />

            <IconButton edge="end" aria-label="create" type="submit" style={{padding: '15px', marginLeft: '15px'}}>
              <Add/>
           </IconButton>
            </div>
            </FormControl>
            </form>
        {/* <Task ToDoAppList={todos} DeleteTodoTask={deleteTask} CheckTodoTask={checkTask}/> */}
        {todos.map((task) => {
            return (
            <Paper elevation={3} style={{ padding: 10, marginTop: 10 }} key={task.id}>
                <IconButton aria-label="create">
                <Tag />
                </IconButton>
                {task.done ? <span style={{ textDecoration: "line-through" }}>{task.Title}</span>:
                <span style={{ textDecoration: "none" }}>{task.Title}</span>}
                <IconButton
                aria-label="delete"
                style={{ float: "right", color: "red" }}
                onClick={() => deleteTask(task.id)}
                >
                <Delete />
                </IconButton>
                <IconButton
                aria-label="check"
                style={{ float: "right" }}
                onClick={() => checkTask(task.id)}
                >
                <Check />
                </IconButton>
            </Paper>
            )
        })}
      </Grid>
      </Container>
  )
}
