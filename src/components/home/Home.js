import Footer from '/home/moamen/prep-course/Travel-Destination/src/components/footer/Footer.js';
import Header from '/home/moamen/prep-course/Travel-Destination/src/components/header/Header.js';
import Tours from '/home/moamen/prep-course/Travel-Destination/src/components/tours/Tours.js';
const data = require('/home/moamen/prep-course/Travel-Destination/src/data/db.json')
function Home() {
    return (
        <>
            <Header />


            <Tours info={data} />

            <Footer />
        </>
    )
}
export default Home;