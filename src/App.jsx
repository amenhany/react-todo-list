// import '@fontsource/inter';
import { CssBaseline, Typography } from '@mui/joy';
import Todo from './Todo';

function App() {

  return (
    <>
      <CssBaseline />
      <Typography level="h1" color="primary" sx={{textAlign: "center", mt: 5, mb: 3, fontWeight: '200'}}>To-Do List</Typography>
      <Todo />
    </>
  )
}

export default App
