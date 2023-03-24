import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    font: string
}

const Options = ({children, font}: Props) => {
    return(
        <ul className={`flex flex-col w-full text-2xl text-white cursor-pointer bg-inherit place-items-start ${font} bg-inherit text-inherit`}>
            {children}
        </ul>
    );
}

export default Options;