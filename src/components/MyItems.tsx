import { FC } from "react";

interface Items {
    task: string
}

const MyItems: FC<Items> = ({ task }) => {
    return ( 
        <p>
            {task}
        </p>
    );
}

export default MyItems;