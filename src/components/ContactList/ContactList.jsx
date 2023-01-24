import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';


function ContactList({ contacts, deleteContact }) {
    return (
        <ul>
    {
     contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    deleteContact={()=>deleteContact(contact.id)}
                />
     ))}</ul>
    
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList