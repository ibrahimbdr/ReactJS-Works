// import * as React from 'react';
// import FormControl from '@mui/material/FormControl';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import { Add, AddToDriveOutlined } from '@mui/icons-material/';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import taskContext from '../context/Tasks';

    
// export default function ToDoList(props) {

//   const value = React.useContext(taskContext);

// const addTodo = props.newTodo
// const [todo, setTodo] = useState('')
// function writeTodo(e) {
//   // console.log(e.target.value);
//   setTodo(e.target.value);
// }

//   const addText = (e) => {
//     e.preventDefault();
//     addTodo(todo);
//     console.log(todo);
//   }


//         const lastTodo = value.tasksList.length;
//         const newtodosId = lastTodo.id + 1;
//         const newtodos = value.tasksList;
//         newtodos.push({
//             id: '1',
//             title: 'Task1',
//             done: false,
//         })

//   return (
//           <>
//             <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//               ToDo List
//             </Typography>
//             <form onSubmit={(e) => addText(e)}>
//             <FormControl>
//             <div
            
//             style={{display: 'flex', marginBottom: 20}}>
//             <TextField
//               id="standard-helperText"
//               label="New ToDo"
//               style={{ width: 450 }}
//               variant="standard"
//               value={todo}
//               onChange={(e) => writeTodo(e)}
//             />

//             <IconButton edge="end" aria-label="create" type="submit" style={{padding: '15px', marginLeft: '15px'}}>
//               <Add/>
//            </IconButton>
//             </div>
//             </FormControl>
//             </form>

            
//           </>

//   )
// }
