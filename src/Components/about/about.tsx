import Stack from "@mui/material/Stack";
import styles from "./about.module.css";

export default function About(){
    return(
        <Stack className={styles.about}>
            <h1>Привет, я Максим!</h1>
            <span>Будущий Front-end Developer</span>
        </Stack>
    )
}