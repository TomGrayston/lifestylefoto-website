import { ReactNode } from "react";

interface Props {
    icon: ReactNode,
    onClick: () => void;
}

const IconButton = ({icon, ...props}: Props) => {
    return(
        <button className="block px-1 py-1 text-3xl text-black bg-inherit focus:outline-none hover:bg-gray-200 " {...props}>
            {icon}
        </button>
    );
}

export default IconButton;