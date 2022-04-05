import { ChangeEvent, ReactElement, useContext, useMemo, VFC } from "react";
import { FormContext } from "./FormContext";
import { FieldMeta, FormState, InputProps } from "./types";

type RenderProps = {
    input: InputProps;
    meta: FieldMeta;
};

type FieldProps = {
    name: string;
    render: (props: RenderProps) => ReactElement;
};

const isCheckable = (target: HTMLInputElement) => ['checkbox', 'radio'].includes(target.type);

export const Field: VFC<FieldProps> = ({name, render}) => {
    const {setState, state, meta} = useContext(FormContext);
    const fieldMeta = meta[name] ?? {};

    const input = useMemo<InputProps>(() => ({
        value: state[name] ?? '',
        checked: state[name] ?? false,
        onChange: ({target}) => setState((prev: FormState) => ({...prev, [name]: isCheckable(target as HTMLInputElement) ? (target as HTMLInputElement).checked : target.value}))
    }), [state, setState, name]);

    return (
        <>
            {render({input, meta: fieldMeta})}
        </>    
    )
};