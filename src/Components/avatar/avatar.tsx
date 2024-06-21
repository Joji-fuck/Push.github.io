import Image from "next/image";
import avatar from '@/image/Аватар.png'
import Stack from "@mui/material/Stack";
import styles from './avatar.module.css'

export default function Avatar(){
    return(
        <Stack className={styles.avatarBlock}>
            <Image src={avatar} alt='Аватар' width={300} className={styles.avatar}></Image>
        </Stack>
    )
}