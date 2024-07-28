import styled from 'styled-components';
import Head from '../../images/atiku.jpg';
// import Head from '../../images/abdulkadir.jpg';

function SchoolManagement() {
  return (
    <div>
      <BoardContainer>
        <BoardCard src={Head} className="one">
          <div className="imageDiv" />
          <div className="borad-info">
            <h2>Kabiru Sa'ad</h2>
            <strong>Center Coordinator</strong>
          </div>
        </BoardCard>
        <BoardCard src={Head} className="two">
          <div className="imageDiv" />
          <div className="borad-info">
            <h2>Modibbo Dadiri</h2>
            <strong>Principal Senior School</strong>
          </div>
        </BoardCard>
        <BoardCard src={Head} className="three">
          <div className="imageDiv" />
          <div className="borad-info">
            <h2>Aliyu Jauro</h2>
            <strong>Principal Junior School</strong>
          </div>
        </BoardCard>
        <BoardCard src={Head} className="four">
          <div className="imageDiv" />
          <div className="borad-info">
            <h2>Malam Bello Hammangabdo</h2>
            <strong>Headmaster Primary School</strong>
          </div>
        </BoardCard>
      </BoardContainer>
    </div>
  );
}

export default SchoolManagement;

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  .one {
    grid-column: 2/3;
  }
  .two {
    grid-column: 1/2;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    justify-items: center;
    align-items: center;

    .one,
    .two {
      grid-column: 1 / -1;
    }
  }
`;

type BoardCardProps = {
  src: string;
};
const BoardCard = styled.div<BoardCardProps>`
  border: 1px solid transparent;

  height: 440px;
  margin: 15px;
  border-radius: 5px;
  padding: 10px 10px;
  position: relative;
  box-shadow: 4px 3px 11px -6px rgba(0, 0, 0, 0.75);
  width: min(330px, 90%);
  @media screen and (max-width: 768px) {
  }
  .imageDiv {
    height: 80%;
    min-width: 90%;
    width: 100%;
    background-image: url(${(props) => props.src || ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 4;
  }

  .borad-info {
    font-size: small;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    strong {
      position: absolute;
      right: 0;
      bottom: 0px;
      color: #fff;
      border-radius: 12px 0px 5px 0px;
      background: #124596;
      padding: 5px;
      /* width: 100px; */
      text-align: center;
    }
  }
`;
