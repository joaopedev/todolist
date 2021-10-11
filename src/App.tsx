import * as C from './AppStyles'
import { useState } from 'react'
import {Item} from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'


const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Estudar react', done: false},
  ])

const handleAddTask = (taskName: String) =>{
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false,
  });
  setList(newList)
}

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}></AddArea>

        {list.map((item, index) =>(
            <ListItem key={index} item={item} />
            ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
