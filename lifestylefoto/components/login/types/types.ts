import { Dispatch, SetStateAction } from "react";

export type SetState<S> = Dispatch<SetStateAction<S>>;

export type LoginDetails = {
    email: string,
    pwd: string
}