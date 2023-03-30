import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';

export const ContactList=()=>{
    const contacts = useSelector(getContacts);
    console.log(contacts)
    return(
        <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            
          />
        );
      })}
    </List>
    )
}