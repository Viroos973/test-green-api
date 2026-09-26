import {Button, Flex, Input, Panel, Typography} from "@maxhub/max-ui";
import "./Login.css"
import {useLogin} from "./hooks/useLogin.ts";
import {Controller} from "react-hook-form";

const Login = () => {
    const { form, functions } = useLogin()

    return (
        <Panel mode="secondary" centeredX centeredY>
            <form onSubmit={functions.onSubmit}>
                <Flex direction="column" gap={16} className="login-card">
                    <Typography.Headline className="w-full text-center">Вход</Typography.Headline>
                    <Controller
                        name="idInstance"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div className="w-full">
                                <Input {...field} placeholder="idInstance" />
                                {fieldState.error && (
                                    <Typography.Body variant="small" className="text-red-500">
                                        {fieldState.error.message}
                                    </Typography.Body>
                                )}
                            </div>
                        )}
                    />
                    <Controller
                        name="apiTokenInstance"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div className="w-full">
                                <Input {...field} placeholder="apiTokenInstance" />
                                {fieldState.error && (
                                    <Typography.Body variant="small" className="text-red-500">
                                        {fieldState.error.message}
                                    </Typography.Body>
                                )}
                            </div>
                        )}
                    />
                    <Button stretched>Войти</Button>
                </Flex>
            </form>
        </Panel>
)
}

export default Login