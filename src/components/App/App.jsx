import { useSelector } from "react-redux";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactsList";
import { Filter } from "../Filter/Filter";
import { Layout } from "../Layout/Layout";
import {getContacts} from '../../redux/selectors'



export const App = () => {
const contacts = useSelector(getContacts)

  return (
    <Layout>
      <ContactForm/>
      {contacts.length > 0 && (
        <>
         <Filter/>
      <ContactList/>
        </>)}
        {contacts.length === 0 && <p>There is no contacts</p>}
      
     
    </Layout>
  );
};
