import { useEffect } from 'react';
import PropTypes from "prop-types";
import c from "./Contacts.module.css";
import { useSelector} from "react-redux";
import { useContactsQuery,useDeleteContactMutation } from '../../redux/contactsApi';

export default function Contacts() {
  const {data:contacts,error} =useContactsQuery();
  const [removeContact,{isLoading}]=useDeleteContactMutation();
  const filtered = useSelector(state=>state.filter);
  // const normalizedFilter = filter;
  let visibleContacts = [];
  console.log(filtered)
  console.log(contacts)
  if(contacts){
  visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered));
  }
    useEffect(() => {
      if (error) {
        error(`Server error`);
      }
    }, [error]);

  return (
    <ul className={c.contacts_list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {number}</span>
          <button type="button" disabled={isLoading} id={id} onClick={()=>removeContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nick: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  DeleteContact: PropTypes.func,
};