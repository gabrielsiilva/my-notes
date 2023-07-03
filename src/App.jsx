import { useMemo } from 'react';	

import {
  Container,
  Button,
  Header,
  Content,
} from './styles'
import Card from './components/Card'
import FilterOptions from './components/FilterOptions'
import { useTasksContext } from './context/TasksContext';
import { getFormattedDate } from './utils';

function App() {
  const { tasks, handleAddNewTask } = useTasksContext()

  const actualDate = useMemo(() => getFormattedDate(), [])

  return (
    <Container>
      <Header>
        <div>
          <h1>Today's Tasks</h1>
          <span>{actualDate}</span>
        </div>

        <Button onClick={handleAddNewTask}>+ New Task</Button>
      </Header>

      <FilterOptions />

      <Content>
        {tasks.map((task) => (
          <Card task={task} />
        ))}
      </Content>
    </Container>
  )
}

export default App
