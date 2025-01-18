import Button from "../components/Button/Button"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Home = () => {

    return (
        <>
            <Header/>
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle="secondary" arrow >Olá!</Button>
            <Banner title="Home" image="about.jpg" />
            <Footer/>
        </>
    )
}

export default Home