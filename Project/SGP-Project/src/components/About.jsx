export const About = () => {
    return (
        <>
            <div className="about-section common-section" id="about">
    <div className="container">
        <div className="my-3 my-lg-0 text-center">
            <span className="subtitle">About our hostel</span>
            <h1 className="mt-4 common-h1-heading"><span>About Us</span></h1>
            {/* <p>...</p> */}
        </div>
        <div className="row">
            <div className="col-12 col-lg-6 text-center about-section--para">
                <h1 className="py-3 px-5 common-about-heading"><span>Know more about us</span></h1>
                <p className="px-3" style={{ color: '#c6c6c6' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, mollitia. Maiores quisquam,
                    voluptates rem incidunt commodi debitis sequi! Maiores quisquam,
                    voluptates rem incidunt commodi debitis sequi!
                </p>
                <button className="main-btn my-4 w-25">Join Us</button>
            </div>
            <div className="col-12 col-lg-6 about-section--image-section">
                <img className="img-fluid about-section--image" src="/images/building.svg" alt="Image not found" />
            </div>
        </div>
    </div>
</div>

        </>
    )
}