import Accordian from '../components/Accordion'

function AccordionPage(){

    const items = [
      {
        id: "123",
        label: "Can I use React on a project?",
        content: "You can use React in any project you want. You can use React in any project you want."
      },
      {
        id: "456",
        label: "Can I use JS on a project?",
        content: "You can use React in any project you want. You can use React in any project you want,",
      },
      {
        id: "789",
        label: "Can I use CSS  on a project?",
        content: "You can use React in any project you want. You can use React in any project you want,",
      }
    ]

    return (
      <Accordian items={items} />
    );
}

export default AccordionPage;