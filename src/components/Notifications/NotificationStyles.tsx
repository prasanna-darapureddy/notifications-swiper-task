

export const styles = {
    home_page:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:'30px',
        gap:3
    },
    mails_container:{
        display: 'flex',
        flexDirection:'column',
        height:'550px',
        border: '1px solid #c8c8c8',
        width:'50%',
        padding:'30px',
        gap:4,
        visibility: 'scroll',
        overflowY: 'auto',
    },
    mail_content:{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
    },
    profile:{
        padding: '10px',
        borderRadius: '40px',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'20px',
        height:'20px',
        color:'#fff',
    },
    inputs_container:{
        display: 'flex',
        alignItems: 'center',
        gap:3,
    },
    user_input:{
        padding:'10px',
        borderRadius: '8px',
        outline:'none',
        border:'1px solid #c8c8c8',
        width:'300px',
    },
    sending_button_container:{
        backgroundColor:'#05d5e8',
        borderRadius: '40px',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        cursor:'pointer',
    },
    send_button:{
        padding:'10px',
        color:'#fff',
    },
}