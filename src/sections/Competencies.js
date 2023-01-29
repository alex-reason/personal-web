import Title from '../components/Title';
import Accordion from '../components/Accordion';
import SkillShow from '../components/SkillShow';
import CertificateShow from '../components/CertificateShow';
import {certData, skillsData, experienceData} from '../assets/data';

const Competencies = () => {
    return (
        <div id='competencies' className='section competencies'>
            <Title direction='left'>Certificates and Competencies </Title>
            <CertificateShow data={certData} />
            <SkillShow data={skillsData} />
            <Accordion data={experienceData} />
            <p className='competencies__summary reveal'>
                I regularly work with clients and lawyers, and as a paralegal, I deal with a huge database of information and documents.
                So, communication and attention-to-detail are skills I've greatly honed!
                I know these skills will be very useful in developer work.
            </p>
        </div>
    )
};

export default Competencies;