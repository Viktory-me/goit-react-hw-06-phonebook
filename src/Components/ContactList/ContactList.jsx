import { RiContactsLine, RiDeleteBinLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import {
  ListContact,
  ItemContact,
  Paragraph,
  Button,
} from "./ContactList.styled";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ListContact>
      {contacts.map(({ id, name, number }) => (
        <ItemContact key={id}>
          <RiContactsLine color='#c21111e2'></RiContactsLine>
          <Paragraph>
            {name}
          </Paragraph> <BsPhone color='#c21111e2'></BsPhone>{" "}
          <Paragraph>{number}</Paragraph>
          <Button onClick={() => onDeleteContact(id)}>
            <RiDeleteBinLine></RiDeleteBinLine>
          </Button>
        </ItemContact>
      ))}
    </ListContact>
  );
}
export default ContactList;
