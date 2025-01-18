import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Contact = () => {

    return (
        <>
            <Header/>
            <Banner title="Contact" image="contact.jpg"/>
            <div className="container">       
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}

export default Contact