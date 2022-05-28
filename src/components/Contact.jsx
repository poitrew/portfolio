function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact-header">
                    <p>Have some <span>idea</span>?<br className="br"/> Let's work together.</p>
                </div>
                <form className="contact-form">
                    <div className="input-wrapper">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="E.g: John Doe"></input>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="E.g: johndoe@email.com"></input>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Tell me about your idea.."></textarea>
                    </div>
                    <button className="btn" type="submit">Send</button>
                </form>
                <footer>
                    <p>Built and design by Poitrew a.k.a Dat Dang.<br />Copyright © 2022 All Rights Reserved.</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact