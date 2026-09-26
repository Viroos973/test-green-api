import {Button, Flex, Input, Panel, Typography} from "@maxhub/max-ui";
import './Login.css'

const Login = () => {
    return (
        <Panel mode="secondary" centeredX centeredY>
            <Flex direction="column" gap={16} className="login-card">
                <Typography.Headline className="w-full text-center">Вход</Typography.Headline>
                <div className="w-full">
                    <Input placeholder="idInstance"/>
                </div>
                <div className="w-full">
                    <Input placeholder="apiTokenInstance"/>
                </div>
                <Button stretched>Войти</Button>
            </Flex>
        </Panel>
)
}

export default Login