function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact">
                    <div className="contact-text">
                        <p>Wanna have a coffee and talk about how we can build things together? <span>Let me know.</span></p>
                    </div>
                    <form className="contact-form">
                        <div className="input-wrapper">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="E.g: John Doe" required></input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="E.g: johndoe@email.com" required></input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Tell me about your idea.." required></textarea>
                        </div>
                        <button className="btn" type="submit">Send</button>
                    </form>
                </div>
                <footer className="footer">
                    <p>Built and designed by Henry Dang a.k.a Dat Dang.</p>
                    <p>Copyright © 2022 All Rights Reserved.</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact