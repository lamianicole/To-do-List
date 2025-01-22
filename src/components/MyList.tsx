import { FC } from "react";
import MyItems from "./MyItems";
import { Item } from "../App";

interface List {
    task: Array<Item>
}

const MyList: FC<List> = ({ task }) => {
    return ( 
        <div>
            {
                task.map((singleItem, key) => <MyItems key={key} task={singleItem.task} />)
            }
        </div>
    );
}

export default MyList;