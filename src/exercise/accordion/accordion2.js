import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="flex flex-col gap-y-6 px-20 mx-20 w-1/2">
      {data.map((item, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={index}
          title={item.title}
          key={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={25}
        title={"TEST"}
        key={"TEST"}
      >
        <p>Coba dari Timur</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

const AccordionItem = ({ num, title, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div
      className={`grid grid-cols-[auto,1fr,auto] gap-x-6 gap-y-8 px-4 py-4 items-center shadow-sm ${
        isOpen && " border-t-4 border-green-600"
      }`}
      onClick={handleToggle}
    >
      <p className={`text-2xl ${isOpen ? "text-green-500" : "text-slate-400"}`}>
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className="text-2xl">{title}</p>
      <p className={`text-2xl ${isOpen ? "text-green-500" : ""}`}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="col-start-2 col-end-3">{children}</div>}
    </div>
  );
};

const Accordion2 = () => {
  return (
    <div className="flex justify-center">
      <Accordion data={faqs} />;
    </div>
  );
};

export default Accordion2;
