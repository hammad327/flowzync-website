// Native disclosure elements keep answers readable without client JavaScript.
export default function FAQ({ items }) {
  return <div className="faq-list">{items.map(([question,answer],index)=><details className="faq faq-native" key={question} open={index===0}><summary>{question}<span aria-hidden="true"/></summary><div className="faq-native-answer"><p>{answer}</p></div></details>)}</div>;
}
