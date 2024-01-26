import { Accordion, Button } from "react-bootstrap";

const Questions = () => {
  return (
    <div className="questions-container width-80 mx-auto pb-5">
      <div className="questions-title d-flex justify-content-between my-5">
        <h2 className="">ხშირად დასმული კითხვები</h2>
      </div>
      <Accordion className="questions-accordion-container pb-5 border-0">
        <Accordion.Item
          eventKey="0"
          className="bg-black border-0 border-bottom"
        >
          <Accordion.Header className="question-accordion-header ">
            <h3 className="fs-4">
              როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?
            </h3>
          </Accordion.Header>
          <Accordion.Body className="text-light fs-6 p-0">
            <div className="accordion-answer-container">
              <p className="">
                კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:
              </p>
              <div className="ps-4 my-5">
                <p>
                  <span>I ეტაპი</span> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი
                  კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც
                  განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის
                  დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.
                </p>
                <p>
                  <span>II ეტაპი</span> - შერჩევის მეორე ეტაპი კურსების მიხედვით
                  განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ
                  კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის
                  შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
                </p>
                <p>
                  <span>III ეტაპი</span> - მესამე ეტაპი კურსების მიხედვით
                  განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული
                  ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი
                  ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის
                  წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური
                  დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
                </p>
                <p>
                  <span>IV ეტაპი</span> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს
                  გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით
                  გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი
                  ხელშეკრულება.
                </p>
              </div>
              <p className="pb-4">
                * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით
                წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და
                გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="1"
          className="bg-black border-0 border-bottom"
        >
          <Accordion.Header className="question-accordion-header fs-2">
            <h3 className="fs-4">როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?</h3>
          </Accordion.Header>
          <Accordion.Body className="text-light fs-6 p-0">
            <div className="accordion-answer-container">
              <p className="pb-4">
                TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ
                კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა
                Information Security და Python კურსებისა, სადაც Basic დონის
                გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="2"
          className="bg-black border-0 border-bottom"
        >
          <Accordion.Header className="question-accordion-header fs-2">
          <h3 className="fs-4">როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?</h3>
          </Accordion.Header>
          <Accordion.Body className="text-light fs-6 p-0">
            <div className="accordion-answer-container">
              <p className="pb-4">
                პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია
                თიბისი ბანკისა და USAID-ის მიერ.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="all-questions-btn">
        <Button variant="link" className="text-decoration-none ">
          ყველა კითხვა
        </Button>
      </div>
    </div>
  );
};

export default Questions;
