import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl text-white">Get in touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-white">{CONTACT.address}</p>
        <p className="my-4 text-white">{CONTACT.phoneNo}</p>
        <a href="ishankashyap0001@gmail.com" className="border-b text-white">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contacts;
