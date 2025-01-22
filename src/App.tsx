import './App.css'
import { supabase } from './utils/setupSupabase';
import MyList from './components/MyList';
import AddItems from './components/AddItems';
import { useEffect, useState } from 'react';

export interface Item {
  task: string;
}

const App = () => {
  const [items, setItems] = useState<Item[]>([])

      async function getData() {
        const { data, error } = await supabase.from('todoTasks').select()
        if (error) console.log(error)
        else setItems(data)
      }

      useEffect(() => {
        getData()
      }, [])

      return ( 
        <div>
          <MyList task={items} />
          <AddItems setItems={setItems} />
        </div>
      );
}

export default App;