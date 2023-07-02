import {
  Container,
  Button,
  FilterContainer,
  Header,
  Content,
  Option,
} from './styles'
import Card from './components/Card'

function App() {
  return (
    <Container>
      <Header>
        <div>
          <h1>Today's Task</h1>
          <span>Wednesday, 11 May</span>
        </div>

        <Button>+ New Task</Button>
      </Header>

      <FilterContainer>
        <Option selected>
          All
          <div>
            <span>35</span>
          </div>
        </Option>
        <Option>
          Open
          <div>
            <span>14</span>
          </div>
        </Option>
        <Option>
          Closed
          <div>
            <span>19</span>
          </div>
        </Option>
        <Option>
          Archived
          <div>
            <span>2</span>
          </div>
        </Option>
      </FilterContainer>

      <Content>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  )
}

export default App
