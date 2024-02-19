import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return (

        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='11046c2b-62a9-4618-9f73-be6aba3e9200'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage