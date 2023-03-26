import styledComponents from "styled-components";

export const Card = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const CardContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

export const CardTitle = styledComponents.h2`
  font-size: 1.6rem;
  text-align: center;
  justify-content: center;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 0;
  }
`

export const CardBody = styledComponents.p`	
  font-size: 1.2rem;
  text-align: center;
  justify-content: center;
  margin-top: 1rem; 
  margin-bottom: 1rem;
  margin-left: 1rem;
  text-align: center;
  align-items: center;
  line-height: 1.5;
  text-transform: ;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    justify-content: center;  
    width: 100%;
    margin-left: 0;
  }
`

export const CardComment = styledComponents.p`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`
export const CardCommentText = styledComponents.p`
  font-size: 1.2rem;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  line-height: 1.5;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    justify-content: center;  
    width: 100%;
    margin-left: 0;
  }
` 

export const ButtonComment = styledComponents.button`
  font-size: 1.2rem;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  background-color: #red;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    justify-content: center;
  }
  `
  