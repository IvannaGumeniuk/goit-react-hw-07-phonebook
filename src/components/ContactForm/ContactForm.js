import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import { setIsLoading } from "redux/action";
import styles from "./ContactForm.module.css";


function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contactsValue = useSelector(state => state.entities);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        if (isLoading === "addSuccess") {
            alert(`You have added the contact ${name}, to your list`);
            setName('');
            setNumber('');
            dispatch(setIsLoading());
        }
    }, [dispatch, isLoading, name]);


    const handleChange = event => {
        const currentTarget = event.currentTarget.name;
        const value = event.currentTarget.value;
        if (currentTarget === 'name') {
            setName(value);
        }

        if (currentTarget === "number") {
            setNumber(value);
        }
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();

        const nameValue = contactsValue.map(ar => ar.name.toLowerCase());
            if (nameValue.includes(name.toLowerCase())) {
                alert(`${name} is alredy in your contacts`);
            } else {
                dispatch(addContact({ name, phone: number }));
                }
        };

        return (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.name}> Name   
                        <input className={styles.input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <br></br>
                    <label className={styles.name}> Number  
                        <input className={styles.input}
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />         
                    </label>
                <br></br>
                <button type="submit"> Add contact </button>
                </form>
        )
}
    
export default ContactForm;