import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p>
        If you have any questions or concerns about this refund policy, please contact us at:
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:vijay@duradior.com">vijay@duradior.com</a>
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        <a href="tel:+919717871753">+91 97178 71753</a>
      </p>

      <address>
        Duradior Tech<br />
        GPL Eden Heights, H-1403, 14th Floor<br />
        Sector 70, Darbaripur Road<br />
        Gurgaon, Haryana, 122101<br />
        India
      </address>
    </div>
  );
}
