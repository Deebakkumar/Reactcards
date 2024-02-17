
import './App.css';

function App() {
  const data = [
    {
      cardtype: "Free",
      price: "$0",
      user: "✔ Single User",
      storage: "✔ 50GB storage",
      Public: "✔ unlimited public project",
      access: "✔ community Access",
      private: "✖ unlimited private project",
      support: "✖ Dedicate phone support",
      domain: "✖ Free subdomin",
      report: "✖ Monthly Status Reports"
    },
    {
      cardtype: "plus",
      price: "$9",
      user: "✔ Single User",
      storage: "✔ 50GB storage",
      Public: "✔ unlimited public project",
      access: "✔ community Access",
      private: "✔ unlimited private project",
      support: "✔ Dedicate phone support",
      domain: "✔ Free subdomin",
      report: "✖ Monthly Status Reports"
    },
    {
      cardtype:"pro", 
       price:"$49", 
       user:"✔ Single User", 
       storage:"✔ 50GB storage", 
       Public :"✔ unlimited public project", 
       access :"✔ community Access", 
       private :"✔ unlimited private project", 
       support :"✔ Dedicate phone support", 
       domain :"✔ Free subdomin", 
       report :"✔ Monthly Status Reports"
    }
  ];

  return (
    <div className="App">
        {data.map((ele, index) => (
          <PricingTable
            key={index}
            cardtype={ele.cardtype}
            price={ele.price}
            user={ele.user}
            storage={ele.storage}
            Public={ele.Public}
            access={ele.access}
            private={ele.private}
            support={ele.support}
            domain={ele.domain}
            report={ele.report}
          />
        ))}
    </div>
  );
}

function PricingTable(props) {
  return (
    <div className='card-content'>
        <h2>{props.cardtype}</h2>
        <h1>{props.price}<sub>/month</sub></h1>
        <hr></hr>
        <p>{props.user}</p>
        <p>{props.storage}</p>
        <p>{props.Public}</p>
        <p>{props.access}</p>
        <p>{props.private}</p>
        <p>{props.support}</p>
        <p>{props.domain}</p>
        <p>{props.report}</p>
        <button className='button'>BUTTON</button>
    </div>
  );
}

export default App;
