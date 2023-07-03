import {
  Container,
  Header,
  Content,
  Footer,
  CheckButton,
  AvatarContainer,
  Avatar,
  DateInformation,
} from './styles'
import DoneIcon from '@mui/icons-material/Done'
import { useTasksContext } from '../../context/TasksContext'
import { useCallback } from 'react'

function Card({ task }) {
  const { tasks, setTasks } = useTasksContext()
  const { id, title, description, done } = task

  const handleDoneTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <Container>
      <Header>
        <Content>
          <p>{title}</p>
          <span>{description}</span>
        </Content>

        <CheckButton done={done} onClick={handleDoneTask}>
          <DoneIcon />
        </CheckButton>
      </Header>

      <Footer>
        <DateInformation>
          <span>
            <strong>Today</strong>
          </span>
          <span>10:00 PM - 11:45 PM</span>
        </DateInformation>

        <AvatarContainer>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarContainer>
      </Footer>
    </Container>
  )
}

export default Card
