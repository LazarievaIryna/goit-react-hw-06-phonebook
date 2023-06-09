import PropTypes from 'prop-types';
import { useDispatch } from "react-redux"
import { removeContacts } from "redux/contactsSlice"
import { Item, BtnDelete } from "./ContactItem.styled"

export const ContactItem=({name, number, id})=>{
 
    const dispatch=useDispatch()
    const handleDelete = () => dispatch(removeContacts(id));
    return(
        <>
      <Item key={id}>
        {name}: {number}
        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </Item>
    </>
    )
}
ContactItem.propTypes = {
  
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  
};