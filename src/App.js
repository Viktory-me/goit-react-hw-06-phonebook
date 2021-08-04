import { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Section from "./Components/Section/Section";
import Container from "./Components/Container/Container";
import MyForm from "./Components/Form/Form";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";

const initialContacts = [
  { id: "11", name: "Mike Wazowski", number: "22445566778" },
  { id: "22", name: "James P. “Sulley” Sullivan", number: "55664411229" },
  { id: "23", name: "Randall “Randy” Boggs", number: "88999124562" },
];
function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const parsedContacts = JSON.parse(localStorage.getItem("contacts"));

      if (parsedContacts) {
        setContacts(parsedContacts);
      }

      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts, setContacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: uuid(),
      name,
      number,
    };
    contacts.find((contact) => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : setContacts([newContact, ...contacts]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <Container>
      <Section>
        <h1>Phonebook</h1>
        <MyForm onSubmit={addContact} contacts={contacts} />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        ></ContactList>
      </Section>
    </Container>
  );
}

export default App;
