const Contact = () => {

    const value = 20 + 30;

    let name = 'sina'

    return ( 
        <div className="wrapper">
            This is the template for contact
            <button id="btn" className="btnclass">click me please</button>
            <p>{value}</p>
            <p>{name}</p>
        </div>
     );
}
 
export default Contact;