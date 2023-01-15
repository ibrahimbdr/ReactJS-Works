// import React from "react";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import { Tag, Check, Delete } from "@mui/icons-material";

// export default function Task(props) {
//   const tasks = props.ToDoAppList;
//   const deleteTask = props.DeleteTodoTask;
//   const checkTask = props.CheckTodoTask;
//   const taskStyle = true ? { textDecoration: "none" } : { textDecoration: "line-through" }

//   let List = tasks.map((task) => {
//     return (
//       <Paper elevation={3} style={{ padding: 10, marginTop: 10 }} key={task.id}>
//         <IconButton aria-label="create">
//           <Tag />
//         </IconButton>
//         <span style={taskStyle}>{task.Title}</span>
//         <IconButton
//           aria-label="delete"
//           style={{ float: "right", color: "red" }}
//           onClick={() => deleteTask(task.id)}
//         >
//           <Delete />
//         </IconButton>
//         <IconButton
//           aria-label="check"
//           style={{ float: "right" }}
//           onClick={() => checkTask(task.id)}
//         >
//           <Check />
//         </IconButton>
//       </Paper>
//     );
//   });

//   return <>{List}</>;
// }
