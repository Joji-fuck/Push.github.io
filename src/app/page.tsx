import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@/Components/avatar/avatar";
import About from "@/Components/about/about";
import Links from "@/Components/links/links";
import styles from './page.module.css'

export default function Home() {
    return (
        <>
            <Stack className={styles.container}>
                <Avatar></Avatar>
                <About></About>
                <Links></Links>
            </Stack>
        </>
    );
}