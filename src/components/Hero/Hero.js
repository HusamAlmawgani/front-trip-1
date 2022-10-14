import traveller from '../../assets/images/traveller.png'

const Hero = () => {
    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <h1>Travel, enjoy<br/>and live a new<br/>and full life</h1>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={traveller} alt='traveller girl' />
                </div>
            </div>
        </div>
    )
}
export default Hero