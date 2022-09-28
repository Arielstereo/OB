
export default function Contact({ contact }) {

  return (
    <div>
      <h2>Nombre: {contact.name}</h2>
      <h2>Apellido: {contact.surname}</h2>
      <h2>Email: {contact.email}</h2>
      <h2>Estado: {contact.conect ? 'contacto en linea' : 'contacto no disponible'}</h2>
    </div>
  );
}
