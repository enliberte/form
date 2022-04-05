import { createContext } from "react";
import { FormContextValue } from "./types";

const noop = () => undefined;

export const FormContext = createContext<FormContextValue>({
    state: {}, 
    setState: noop,
    meta: {},
    setMeta: noop
});