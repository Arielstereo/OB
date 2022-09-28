import React from 'react'
import Contact from './Contact'

export default function ContactList() {

  const newContact = {name: 'Ariel', surname: 'Martinez', email: 'ariel@gmail.com', conect: true}

  return (
    <div>
      <h1>
        Contact: 
      </h1>
      <Contact contact={newContact} />
    </div>
  )
}
