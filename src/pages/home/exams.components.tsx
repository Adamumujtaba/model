import styled from 'styled-components';
import Waec from '../../images/waec.jpg';
import Neco from '../../images/neco.png';
import Nbias from '../../images/nbias.jpg';
import FCE from '../../images/fce.png';
import Jamb from '../../images/jamb.png';

const ExamComponents = () => {
  return (
    <Container>
      <ExamCard imgSrc={Jamb} title={'JAMB'} desc={'JOINT ADMISSIONS AND MATRICULATION BOARD '} />
      <ExamCard imgSrc={FCE} title={'FCE'} desc={'Federal College of Education'} />
      <ExamCard imgSrc={Waec} title={'WAEC'} desc={'West African Examination Council'} />
      <ExamCard imgSrc={Neco} title={'NECO'} desc={'National Examination Council (NECO)'} />
      <ExamCard imgSrc={Nbias} title={'NBAIS'} desc={'National Board for Arabic and Islamic Studies (NBAIS)'} />
    </Container>
  );
};

export default ExamComponents;

interface PropsCard {
  title: string;
  desc: string;
  imgSrc: any;
}

const ExamCard = ({ title, desc, imgSrc }: PropsCard) => {
  return (
    <>
      <Card>
        <div>
          <img alt="example" height={'100%'} width={'100%'} src={imgSrc} />
        </div>
        <div>
          <p>
            <strong>{title}</strong>
          </p>
          <p>{desc}</p>
        </div>
      </Card>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 80vh;
  gap: 20px;
  background: #184ca0;
  @media screen and (max-width: 760px) {
    padding: 5rem 3rem;
  }
`;
const Card = styled.div`
  background: #fff;
  width: 210px;
  height: 280px;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.444);
  p {
    /* line-height: 13px; */
    text-align: center;
  }
`;
