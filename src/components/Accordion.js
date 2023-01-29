import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretLeft } from 'react-icons/ai';

const Accordion = ({ data }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (clickedIndex) => {
        setExpandedIndex((curr) => {
            if (curr === clickedIndex) {
                return -1;
            } else {
                return clickedIndex;
            };
        }); 
    };

    const renderedItems = data.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span>{isExpanded ? <AiOutlineCaretDown /> : <AiOutlineCaretLeft />}</span>

        const renderedContent = item.content.map(detail => {
            return <li>{detail}</li>
        })

        return (
            <div className='accordion__container' key={item.id}>
                <div className='accordion__label' onClick={() => { handleClick(index) }}>
                    <p className='heading-link'>{item.label}</p>{icon}
                </div>
                {isExpanded && <div className='accordion__content'>{renderedContent}</div>}
            </div>
        )
    });

    return (
        <div className='accordion reveal'>
            {renderedItems}
        </div>
    );

};

export default Accordion;