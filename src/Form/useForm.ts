import { useCallback, useState } from "react";
import { FormMeta, FormState, SubmitHandler, Validator } from "./types";

type UseFormParams = {
    onSubmit: SubmitHandler;
    validate: Validator;
};

const getMetaWithErrors = (meta: FormMeta, errors: Record<string, string>): FormMeta => [...new Set([...Object.keys(meta), ...Object.keys(errors)])].reduce((metaWithErrors, key) => {
    if (!errors[key]) {
        metaWithErrors[key] = meta[key];
    } else {
        metaWithErrors[key] = {...meta[key], error: errors[key]};
    }
    return metaWithErrors;
}, {} as FormMeta);

export const useForm = ({onSubmit, validate}: UseFormParams) => {
    debugger
    const [state, setState] = useState<FormState>({});
    const [meta, setMeta] = useState<FormMeta>({});
    const handleSubmit = useCallback(() => {
        const errors = validate(state);
        const hasErrors = !!Object.keys(errors).length;
        debugger
        if (hasErrors) {
            setMeta(prev => getMetaWithErrors(prev, errors));
        } else {
            onSubmit(state);
        }
    }, [onSubmit, state, validate]);

    return {
        state,
        setState,
        meta,
        setMeta,
        handleSubmit
    };
};