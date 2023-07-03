import { useMemo } from 'react'

import { Container, Option } from './styles'
import { useTasksContext } from '../../context/TasksContext'

function FilterOptions() {
  const { tasks } = useTasksContext()

  const options = useMemo(() => {
    const filteredOptions = tasks.reduce(
      (result, task) => {
        task.done
          ? result.closed.push(task)
          : result.open.push(task)
        return result
      },
      { open: [], closed: [] }
    )

    return filteredOptions
  }, [tasks])

  console.log(options)

  return (
    <Container>
      <Option selected>
        All
        <div>
          <span>{tasks.length}</span>
        </div>
      </Option>
      <Option>
        Open
        <div>
          <span>{options.open.length}</span>
        </div>
      </Option>
      <Option>
        Closed
        <div>
          <span>{options.closed.length}</span>
        </div>
      </Option>
      <Option>
        Archived
        <div>
          <span>0</span>
        </div>
      </Option>
    </Container>
  )
}

export default FilterOptions
