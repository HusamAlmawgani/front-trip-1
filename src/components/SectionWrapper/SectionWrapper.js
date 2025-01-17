const SectionWrapper = ({tagline, title, children}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className='upprcase color-blue font-light'>{tagline}</div>
                    <h3 className="volkhov mt-3 mb-4">{title}</h3>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default SectionWrapper