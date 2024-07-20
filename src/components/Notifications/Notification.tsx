import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { styles } from './NotificationStyles'
import { Send } from '@mui/icons-material'
import addNotification, { Notifications } from 'react-push-notification';

interface IState {
    color: string,
    text: string,
    mailsList: {
        color: string,
        id: number,
        text: string,
    }[],
}


function Home() {
    const [text, setText] = useState<IState['text']>('')
    const [mailsList, setMailsList] = useState<IState['mailsList']>([])
    const id = Date.now()
    const colors = ['#f5517d', '#f59173', '#849ff0', '#949903', '#039933', '#c42f06', '#543a06', '#05d5e8']
    const ranIndex = Math.ceil(Math.random() * colors.length - 1)
    const color = colors[ranIndex]

    const onKeyUpOnInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickSendButton()
        }
    }

    const onClickSendButton = () => {
        text !== '' && mailsList && setMailsList([{ color, id, text }, ...mailsList])
        setText('')

        if (text === '') {
            addNotification({
                title: 'Warning',
                subtitle: 'No text is added',
                message: 'Enter some text',
                duration: 6000,
                backgroundTop: '#f78307',
                backgroundBottom: '#ffffff',
                colorBottom: '#000',
                theme: 'light',
            });
        } else {
            addNotification({
                title: 'Success',
                subtitle: 'You have received mail',
                message: `Message - ${text}`,
                duration: 2000,
                theme: 'light',
                backgroundTop: '#039933',
                backgroundBottom: '#c8c8c8',
                colorBottom: '#000',

                onClick: (e: Event | Notification) => {
                    <Typography>{text}</Typography>
                },
            });
        }
    }

    return (
        <>
            <Notifications />
            <Box sx={styles.home_page}>
                <Box sx={styles.mails_container}>
                    {mailsList?.map(eachMail => (
                        <Box sx={styles.mail_content} key={eachMail.id}>
                            <Box sx={{ ...styles.profile, backgroundColor: eachMail.color }}>{eachMail.text !== '' && eachMail.text[0].toLocaleUpperCase()}</Box>
                            <Typography>{eachMail.text}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={styles.inputs_container}>
                    <Box component={'input'} type='text' placeholder='Type your text' sx={styles.user_input} value={text} onKeyUp={onKeyUpOnInput} onChange={(e) => setText(e.target.value)} />
                    <Box sx={styles.sending_button_container} onClick={onClickSendButton}>
                        <Send sx={styles.send_button} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home