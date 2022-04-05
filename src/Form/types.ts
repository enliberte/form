import { ChangeEvent } from "react";

export type FormState = Record<string, any>;

export type FieldMeta = {
    error?: string;
};

export type FormMeta = Record<string, FieldMeta>;

export type SubmitHandler = (state: FormState) => void;

export type Validator = (state: FormState) => Record<string, string>;

export type InputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export type FormContextValue = {
    state: FormState;
    setState: (state: FormState) => void;
    meta: FormMeta;
    setMeta: (meta: FormMeta) => void;
};