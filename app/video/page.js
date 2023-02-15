'use client';
import styles from '../page.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GetVideo() {

    const router = useRouter();
    const [key, setKey] = useState(null);
    const [videoLink, setVideoLink] = useState("");
    const err_massage = "您的播放鏈接無效或已經過期,您需要再次請求一個合法鏈接!";


    useEffect(() => {
        let query = window.location.search.substring(1);
        let vars = query.split('&');
        vars.forEach((value) => {
            let pair = value.split('=');
            if (pair[0] == 'key') {
                console.log(pair[1]);
                setKey(pair[1]);
            }
        })
    }, [])


    return (
        <>
            {key ? (
                <main className={styles.main}>
                    <h1 className={styles.h3_title}>{key}</h1>
                </main>) : (
                <main className={styles.main}>
                    <h1 className={styles.h3_title}>{err_massage}</h1>
                </main>)}
        </>
    )
}