import Image from "next/image";
import {Link} from "@mui/material";
import styles from './links.module.css'
import Stack from "@mui/material/Stack";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {useState} from "react";

import discord from '@/image/discord.png'
import github from '@/image/github.png'
import gmail from '@/image/gmail.png'
import telegram from '@/image/telegram.png'
import twitch from '@/image/twitch.png'
import vk from '@/image/vk.png'



export default function Links(){
    return(
        <Stack className={styles.links}>
            <Link href='https://github.com/Joji-fuck' className={styles.social}>
                <Image src={github} alt=''></Image>
            </Link>
            <Link href='mailto:maxpush13@gmail.com' className={styles.social}>
                <Image src={gmail} alt=''></Image>
            </Link>
            <Link href='http://t.me/NaGIBatOr72' className={styles.social}>
                <Image src={telegram} alt=''></Image>
            </Link>
            <Link href='https://www.twitch.tv/1push3' className={styles.social}>
                <Image src={twitch} alt=''></Image>
            </Link>
            <Link href='https://vk.com/yazheprogrammist' className={styles.social}>
                <Image src={vk} alt=''></Image>
            </Link>
        </Stack>
    )
}