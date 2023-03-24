import IconButton from "../common/IconButton";
import { ReactNode } from "react";
import { SetState } from "../../../types/types";

interface Props {
    icon: ReactNode,
    setOpen: SetState<boolean>
}

const MenuToggleButton = ({ icon, setOpen }: Props) => {

    return (
        <>
            <IconButton onClick={() => setOpen(true)} icon={icon} />
        </>
    );
};

export default MenuToggleButton;
