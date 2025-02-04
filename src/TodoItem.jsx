import { ListItem, ListItemButton, Checkbox, IconButton, Input } from "@mui/joy";
import Delete from '@mui/icons-material/Delete';

export default function TodoItem({ todo, remove, toggle, edit }) {
    return (
        <ListItem variant="plain" color="primary"
        startAction={
            <Checkbox checked={todo.completed} onChange={toggle} sx={{ml: 2}}/>
        } endAction={
            <IconButton aria-label="Delete" size="sm" color="danger" onClick={remove} sx={{mr: 0.5}}>
                <Delete />
            </IconButton>
        }>
                <Input
                    value={todo.text}
                    onChange={(evt) => {edit(evt.target.value, todo.id)}}
                    variant="soft"
                    sx={{
                      pl: 5,
                      pr: 10,
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