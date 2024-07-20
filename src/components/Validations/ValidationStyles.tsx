export const styles = {
    main_page:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh',
    },
    form_card:{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap:4,
        width:'300px',
    },
    input_container:{
        display:'flex',
        flexDirection: 'column',
        width:'100%',
    },
    user_input:{
        borderRadius: '5px',
        padding: '10px',
        outline:'none',
        border:'1px solid #c8c8c8',
    },
    login_button:{
        border:'none',
        outline:'none',
        borderRadius: '5px',
        padding:'8px 15px',
        color:'#fff',
        backgroundColor:'#849ff0',
        cursor: 'pointer',
    },
    error:{
        color:'red',
        alignSelf: 'flex-start',
        marginTop: '0px',
    }
}