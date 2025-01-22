import { FC } from "react";
import MyItems from "./MyItems";
import { Item } from "../App";

interface List {
    task: Array<Item>
}

const MyList: FC<List> = ({ task }) => {
    return ( 
        <ul>
            {task.map((singleItem, key) => (
                <li key={key}>
                <MyItems task={singleItem.task} />
                </li>
            ))}
        </ul>
    );
}

export default MyList;