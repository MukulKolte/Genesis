import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";
import './Contact.css';

export default function Contact() {
    return (
        <div>
            <Header />
            <HomeNav />
            <div id="for-full-page">
            <div className="container">
                <h1 id="contact-heading">Contact Us</h1>

                <div id="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Social Media: <a href="#">Facebook</a>, <a href="#">Twitter</a>, <a href="#">Instagram</a></p>
                </div>

                <div id="location">
                    <h2>Location</h2>
                    <p>123 Main Street, City, Country</p>
                </div>

                <div id="hours">
                    <h2>Hours of Operation</h2>
                    <p>Monday-Friday: 9am - 5pm</p>
                </div>

                <div id="confirmation" style={{ display: "none" }}>
                    Thank you for contacting us! We'll be in touch shortly.
                </div>
            </div>
            </div>

            <Footer />
        </div>
    );
}
