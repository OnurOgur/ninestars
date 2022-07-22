import { Container, Row, Col } from 'react-bootstrap';
import Member from './Member';
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';
import team4 from '../assets/img/team/team-4.jpg';
import { useTranslation } from 'react-i18next';

function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="team section-padding">
        <Container>
            <Row>
                <Col sm={12} className="text-center">
                    <h3>{t('team')}</h3>
                    <h2>{t('teamH2')}</h2>
                    <div className="line"></div>
                </Col>
                <Member teamImg={team1} teamAlt="Member 1" name="Walter White" title={t('chiefExecutiveOfficer')} />
                <Member teamImg={team2} teamAlt="Member 2" name="Sarah Jhonson" title={t('productManager')} />
                <Member teamImg={team3} teamAlt="Member 3" name="William Anderson" title={t('cto')} />
                <Member teamImg={team4} teamAlt="Member 4" name="Amanda Jepson" title={t('accountant')} />
            </Row>
        </Container>
    </section>
  )
}

export default Team