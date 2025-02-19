import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Partners from './components/partners/Partners'
import Production from './components/production/Production'
import OurServices from './components/ourservices/OurServices'
import Team from './components/team/Team'
import Portfolio from './components/portfolio/portfolio'
import OurPackages from './components/ourpackages/OurPackages'
import Casestudies from './components/casestudies/Casestudies'
import OurConcepts from './components/ourconcepts/OurConcepts'
import AwardWinning from './components/awardwinning/AwardWinning'
import Help from './components/help/Help'
import Process from './components/process/Process'
import Touch from './components/touch/Touch'
import Choose from './components/choose/Choose'
import Customers from './components/customers/Customers'
import Faqs from './components/faqs/Faqs'
import Footer from './components/footer/Footer'

const page = () => {

    return (
        <>
            <Header />
            <Banner />
            <Partners />
            <Production />
            <OurServices />
            <Team />
            <Portfolio />
            <OurPackages />
            <Casestudies />
            <OurConcepts />
            <AwardWinning />
            <Help />
            <Process />
            <Touch />
            <Choose />
            <Customers />
            <Faqs />
            <Footer />
        </>
    )
}

export default page
