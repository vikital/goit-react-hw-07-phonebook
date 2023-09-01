import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, Heading } from './App.styled';

function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
