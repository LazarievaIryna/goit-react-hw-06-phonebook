import { useDispatch } from "react-redux"
import { filterContacts } from "redux/contactsSlice";
export const Filter=()=>{
    const dispatch=useDispatch()
    const handleFilter = () => dispatch(filterContacts());
    return(<>
    <h2>Contacts</h2>
      <p>Find contacts by name</p>
    <input type="text" onChange={handleFilter} />
    </>)
}