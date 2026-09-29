import {Button, Flex, Input, Panel, Typography} from "@maxhub/max-ui";
import {useLogin} from "./hooks/useLogin.ts";
import {Controller} from "react-hook-form";

export const Login = () => {
    const { states, form, functions } = useLogin()

    return (
        <Panel mode="secondary" centeredX centeredY>
            <form onSubmit={functions.onSubmit}>
                <Flex direction="column"
                      gap={16}
                      className="w-[calc(100vw-32px)] max-w-[400px] rounded-2xl bg-[var(--background-primary)] p-6"
                >
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
                                <Input {...field}
                                       onChange={(value) => {
                                           field.onChange(value);
                                           functions.setInstanceError(null);
                                       }} placeholder="apiTokenInstance"
                                />
                                {fieldState.error && (
                                    <Typography.Body variant="small" className="text-red-500">
                                        {fieldState.error.message}
                                    </Typography.Body>
                                )}
                                {states.instanceError && (
                                    <Typography.Body variant="small" className="text-red-500">
                                        {states.instanceError}
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