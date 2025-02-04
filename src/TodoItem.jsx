import { ListItem, ListItemButton, Checkbox, IconButton, Input } from "@mui/joy";
import Delete from '@mui/icons-material/Delete';
import dingSound from "./assets/ding.m4a";
import trashSound from "./assets/trashcan.wav";


export default function TodoItem({ todo, remove, toggle, edit }) {

    function playAudio(sound, volume = 1) {
        let audio = new Audio(sound);
        audio.volume = volume;
        audio.play();
    }

    function toggleTodo() {
        if (!todo.completed) playAudio(dingSound, 0.9);
        toggle(todo.id);
    }

    function removeTodo() {
        playAudio(trashSound, 0.5);
        remove(todo.id);
    }

    return (
        <ListItem variant="plain" color="primary"
            startAction={
                <Checkbox checked={todo.completed} onChange={toggleTodo} sx={{ml: 2}}/>
            } endAction={
                <IconButton aria-label="Delete" size="sm" color="primary" onClick={removeTodo}
                    sx={{
                        mr: 1,
                        '&:hover': {
                            color: 'danger.plainColor'
                        }
                    }}>
                    <Delete />
                </IconButton>
            }
        >
                <Input
                    value={todo.text}
                    onChange={(evt) => {edit(evt.target.value, todo.id)}}
                    variant="soft"
                    sx={{
                      pl: 5.25,
                      pr: 11.9,
                      background: 'none',
                      transition: 'background .05s ease-out',
                      '--Input-radius': '0px',
                      borderBottom: '2px solid',
                      borderColor: 'neutral.outlinedBorder',
                      '&:hover': {
                        borderColor: 'neutral.outlinedHoverBorder',
                        background: 'var(--joy-palette-primary-100, #E3EFFB)'
                      },
                      '&::before': {
                        border: '1px solid var(--Input-focusedHighlight)',
                        transform: 'scaleX(0)',
                        left: 0,
                        right: 0,
                        bottom: '-2px',
                        top: 'unset',
                        transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                        borderRadius: 0,
                      },
                      '&:focus-within::before': {
                        transform: 'scaleX(1)',
                      },
                    }}
                />
        </ListItem>
    )
}