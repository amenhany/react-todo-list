import { Add } from "@mui/icons-material";
import { ListItem, Input, IconButton } from "@mui/joy";
import { useState } from "react";

export default function TodoForm({ add }) {
    const [text, setText] = useState("");

    function handleChange(evt) {
        setText(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        add(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <Input
                    variant="outlined"
                    color="primary"
                    sx={{color: "var(--joy-palette-neutral-700, #32383E)"}}
                    placeholder="Type something to do..."
                    startDecorator={
                        <IconButton type="submit" aria-label="Add" size="sm" color="primary">
                            <Add />
                        </IconButton>
                    }
                    value={text}
                    onChange={handleChange}
                />
            </form>
        </ListItem>
    );
}