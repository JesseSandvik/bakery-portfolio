import Button from "../../components/atoms/button/Button";
import ExternalLink from "../../components/atoms/externalLink/ExternalLink";
import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import NavigationLink from "../../components/atoms/navLink/NavLink";
import Paragraph from "../../components/atoms/paragraph/Paragraph";
import Small from "../../components/atoms/small/Small";

function Contact() {
  return (
    <main id="contact">
      <div>
        <Heading level="2">review our booking policy</Heading>
        <section>
          <article>
            <Heading level="3">booking policy</Heading>
            <ul>
              <li>
                <Paragraph>
                  All orders are taken on a first come/first serve basis & are
                  subject to availability.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Orders requested within two weeks of the event date cannot be
                  guaranteed for your specific date. In addition, orders taken
                  within two weeks of the event date are subject to an
                  additional expedition fee.
                </Paragraph>
              </li>
              <li>
                <Paragraph>Dates cannot be held!</Paragraph>
              </li>
              <li>
                <Paragraph>
                  Orders & dates can only be guaranteed with a deposit &
                  completed contract.
                </Paragraph>
              </li>
            </ul>
          </article>
          <article>
            <h4>contracts</h4>
            <Paragraph>
              Contracts & deposits must be receieved a minimum of two weeks
              prior to the event date.
            </Paragraph>
            <Paragraph>
              Contracts must be properly filled out upon submission. Failing to
              do so may result in possible delays, as well as the cancellation
              of an order.
            </Paragraph>
          </article>
          <article>
            <h4>deposits</h4>
            <Paragraph>
              Contracts & deposits must be receieved a minimum of two weeks
              prior to the event date.
            </Paragraph>
            <Paragraph>
              We accept the following methods of payment for deposits:
            </Paragraph>
            <ul>
              <li>
                <Paragraph>Credit Card</Paragraph>
              </li>
              <li>
                <Paragraph>PayPal</Paragraph>
              </li>
              <li>
                <Paragraph>Venmo</Paragraph>
              </li>
            </ul>
          </article>
        </section>
        <article>
          <Heading level="3">cancellations</Heading>
        </article>
        <article>
          <Heading level="3">delivery</Heading>
        </article>
      </div>
      <div>
        <Heading level="2">contact us</Heading>
        <section id="contact-info">
          <Heading level="3">We would love to hear from you!</Heading>
          <ol>
            <li>
              <Heading level="4">contact us by phone:</Heading>
              <ExternalLink href="tel:5168194035">
                <i className="fa-solid fa-square-phone" />
                <Heading level="5">516 - 819 - 4035</Heading>
              </ExternalLink>
            </li>
            <li>
              <Heading level="4">contact us by email:</Heading>
              <ExternalLink href="mailto: stacyscakesny@gmai.com">
                <i className="fa-solid fa-square-envelope" />
                <Heading level="5">stacyscakesny@gmail.com</Heading>
              </ExternalLink>
            </li>
            <li>
              <Heading level="4">like us on facebook:</Heading>
              <ExternalLink href="https://www.facebook.com/stacyscakesandcupcakes">
                <i className="fa-brands fa-facebook-square" />
                <Heading level="5">Stacy&apos;s Cakes NY</Heading>
              </ExternalLink>
            </li>
            <li>
              <Heading level="4">follow us on instagram:</Heading>
              <ExternalLink href="https://www.instagram.com/stacyscakesny">
                <i className="fa-brands fa-instagram-square" />
                <Heading level="5">STACYSCAKESNY</Heading>
              </ExternalLink>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

export default Contact;
