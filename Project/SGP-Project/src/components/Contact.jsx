export const Contact = () => {
    return (
        <>
            <section id="contact" className="contact_wrapper text-center">
    <div className="container mt-4 mb-4">
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 contact_details text-center">
                <span className="subtitle">For more details</span>
                <h1 className="mt-4 common-h1-heading contact-heading"><span>Contact Us</span></h1>
                {/*
                <div className="row call_details mb-4 d-flex" style={{ marginTop: '2.5rem' }}>
                    <div className="form_wrapper">
                        <label className="col-sm-3 col-lg-4" style={{ color: '#c6c9d8bf' }}>Call US directly:</label>
                        <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 ">
                            <a href="javascript:void(0)">+91 8320902499</a>
                        </div>
                    </div>
                    <div className="form_wrapper">
                        <label className="col-sm-3 col-lg-4" style={{ color: '#c6c9d8bf' }}>Contact Email:</label>
                        <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2">
                            <a href="mailto:example@gmail.com">krishilagrawal026@gmail.com</a>
                        </div>
                    </div>
                </div>
                */}
                <form action="">
                    <div className="mb-4">
                        <input type="text" className="form-control" placeholder="Your Name..." autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="form-control" placeholder="Your Phone..." autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="form-control" placeholder="Your Email..." autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <textarea cols="40" rows="4" className="form-control" id="message" placeholder="Write a Message..."></textarea>
                    </div>
                    <button type="submit" className="main-btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
</section>

        </>
    )
}