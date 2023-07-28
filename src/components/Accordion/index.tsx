import { CaretDown } from "phosphor-react";

import { useState } from "react";

interface Info {
  title: string,
  content: string[] 
  backgroundColor: string
}

export function Accordion({ title, content, backgroundColor }: Info) {
  const [isExpanded, setIsExpanded] = useState(true);

  const containerHeight = 61 + 29 * content.length 

  const toggleAccordion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  console.log(backgroundColor)
  return (
    <div style={{
      height: isExpanded ? "61px" : `${containerHeight}px`, // Caso isExpanded seja falso o tamanho do background vai ser apenas da area que fica o titulo
      marginTop: "20px",
      borderRadius: "10px",
      backgroundColor: `${backgroundColor}`,
    
      transition: '.5s',
    }}>
      <div style={{
            cursor: "pointer",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
            borderRadius: "10px",
            backgroundColor: "#202d38",
            
            zIndex: "3",
            position: "relative",
        }} 
        onClick={toggleAccordion} 
      >
        <p>{title}</p>

        <CaretDown
          alt="seta"
          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: '.5s'}}
          size={50} 
        />
      </div>
        {content.map((contentList, index) => {
          const offset = (index + 1) * -29;  //
          
          return (
            <div style={{
              transition: '.5s',
              position: "relative",
              top: isExpanded ? `${offset}px` : '0',
              zIndex: '2',

            }}>
              <div style={{
                padding: "5px"
              }}>{contentList}</div>
              
            </div>
          )
        })}
    </div>
  );
}