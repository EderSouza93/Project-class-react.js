import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

const Projects = () => {

    return (
        <>
            <Header/>
            <Banner title="projects" image="projects.jpg"/>
            <div className="container">
                
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Projects