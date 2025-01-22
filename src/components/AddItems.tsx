import { FC, useState } from "react";
import { Item } from "../App";
import { supabase } from "../utils/setupSupabase";

interface AddItem {
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}


const AddItems: FC<AddItem> = ({ setItems }) => {

    const [task, setTask] = useState('')

    async function addItem() {
        const item: Item = {
            task
        }
        const { error } = await supabase.from('todoTasks').insert(item)
    if(error) console.log(error);

        setItems((prev: Item[]) => { return [...prev, item] })
    }
    return ( 
        <section>
            <h1>Meine To-do-Liste</h1>
            <div>
                <input type="text" name="name" id="	" onChange={(e) => setTask(e.target.value)} />
                <button onClick={addItem}>Hinzufügen</button>
            </div>
        </section>
    );
}

export default AddItems;