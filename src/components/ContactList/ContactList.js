import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { deleteContact } from "redux/operations";
import styles from './ContactList.module.css';

export const ContactList = ({ name, id, phone }) => {
   const contacts = useSelector(state => state.entities);
   const isLoading = useSelector(state => state.isLoading);
   const filter = useSelector(state => state.filter);

   const dispatch = useDispatch();

   const visibleName = () => {
      return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
   };

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   return (
      <table className={styles.list}>
         <tbody>
            {contacts.length > 0 ?
               visibleName().map(({ id, name, phone }) => (
                  <tr className={styles.item} id={id} key={id}>
                     <td>{name}: {phone}</td>
                     <td>
                        <button className={styles.button}
                           type="button"
                           onClick={() => dispatch(deleteContact(id))}
                        > Delete
                        </button>
                     </td>
                  </tr>
               )) : !isLoading && <p>You dont have contacts</p>}
         </tbody>
      </table>
   );
};

export default ContactList;