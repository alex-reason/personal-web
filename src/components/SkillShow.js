const SkillShow = ({ data }) => {
    const renderedSkillContainer = data.map(skill => {
        const renderedSkills = skill.details.map(detail => {
            return <li>{detail}</li>
        });

        return (
            <div className='skill__item reveal'>
                <div className='skill__container skill__container-left'>{skill.logo}{skill.title}</div>
                <div className='skill__container skill__container-right'>{renderedSkills}</div>
            </div>
        )
    })
    return (
        <div className='skill'>
            {renderedSkillContainer}
        </div>
    )
};

export default SkillShow;