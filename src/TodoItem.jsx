import { ListItem, ListItemButton, Checkbox, IconButton } from "@mui/joy";
import Delete from '@mui/icons-material/Delete';

export default function TodoItem({ todo, remove }) {
    return (
        <ListItem variant="plain" color="primary"
        startAction={
            <Checkbox checked={todo.completed}/>
        } endAction={
            <IconButton aria-label="Delete" size="sm" color="danger" onClick={remove}>
                <Delete />
            </IconButton>
        }>
            <ListItemButton>{todo.text}</ListItemButton>
        </ListItem>
    )
}