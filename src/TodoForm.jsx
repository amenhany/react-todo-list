import { Add, InfoOutlined, SettingsPhoneRounded } from "@mui/icons-material";
import { ListItem, Input, IconButton, FormControl, FormHelperText } from "@mui/joy";
import { useState } from "react";

export default function TodoForm({ add }) {
    const [text, setText] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);

    function handleChange(evt) {
        if (evt.target.value !== "") setIsFormValid(true);
        setText(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (text !== "") {
            add(text);
            setText("");
        }
        else setIsFormValid(false);
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <FormControl error={!isFormValid}>
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
                    { !isFormValid &&
                        <FormHelperText>
                            <InfoOutlined />
                            Can not add an empty Todo!
                        </FormHelperText>
                    }
                </FormControl>
            </form>
        </ListItem>
    );
}