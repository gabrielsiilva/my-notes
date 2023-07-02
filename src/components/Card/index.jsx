import { Container, Header, Content, Footer, CheckButton, AvatarContainer, Avatar, DateInformation } from './styles'
import DoneIcon from '@mui/icons-material/Done'

function Card() {
  return (
    <Container>
      <Header>
        <Content>
          <p>Client Review & Feedback</p>
          <span>Crypto Wallet Redesign</span>
        </Content>

        <CheckButton>
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
