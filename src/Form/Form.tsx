import { ReactElement, VFC } from "react";
import { FormContext } from "./FormContext";
import { SubmitHandler, Validator } from "./types";
import { useForm } from "./useForm";

type Meta = {
    error?: {msg: string};
};

type RenderProps = {
    handleSubmit: () => void;
};

type FormProps = {
    onSubmit: SubmitHandler;
    render: (props: RenderProps) => ReactElement;
    validate?: Validator;
};

const defaultValidator = () => ({});

export const Form: VFC<FormProps> = ({onSubmit, render, validate = defaultValidator}) => {
    const {state, setState, handleSubmit, meta, setMeta} = useForm({onSubmit, validate});
    
    return (
        <FormContext.Provider value={{state, setState, meta, setMeta}}>
            {render({handleSubmit})}
        </FormContext.Provider>
    )
};