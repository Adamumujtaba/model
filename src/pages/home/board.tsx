// import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
// import Waziri from '../../images/waziri.jpg';
import Atiku from '../../images/atiku.jpg';

// const images = [
//   {
//     original: Waziri,
//     thumbnail: Waziri,
//     title: 'Late Waziri',
//   },
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     title: 'Alh Sani Jada',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     title: 'Alh. Dan Azumi',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     title: 'Muhammad Modibbo Babbawa Ganye',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     title: 'Alh. Abdulkarim Imam Jada',
//   },

//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     title: 'Late. Alh Iya Haske',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     title: 'Abubakar Garba Toungo',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     title: "Modibbo Saa'du",
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     title: 'Sec. Traditional Council Ganye',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     title: 'Abubakar Garba Toungo',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     title: 'Alh. Idris Sulaiman',
//   },
// ];

// const CustomImage = ({ image, ...rest }: any) => {
//   return (
//     <ImageCard>
//       <img {...rest} src={image.original} alt={image.originalAlt} />
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 10,
//           left: 0,
//           right: 0,
//           textAlign: 'center',
//           fontSize: '17px',
//           fontWeight: 'bold',
//           color: '#fff',
//           // backgroundColor: 'rgba(0, 0, 0, 0.229)',
//           padding: '20px',
//           width: '30%',
//           margin: 'auto',
//         }}>
//         {image.title}
//       </div>
//     </ImageCard>
//   );
// };

function Board() {
  return (
    <>
      <div style={{ margin: '40px auto' }}>
        <Header>Governing Board Members</Header>
        {/* <ImageGallery
        items={images}
        disableThumbnailScroll={true}
        autoPlay={true}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={!true}
        startIndex={0}
        // onPlay={}
        renderItem={(item) => <CustomImage image={item} {...item} />}
        // showFullscreenButton={false}
      /> */}
      </div>
      <Container>
        <UserCard>
          <div>
            <img src={Atiku} />
          </div>
          <div>
            <p>Alhaji Sadiq Mohammed Walin Ganye</p>
            <span>Chairman</span>
          </div>
        </UserCard>
        <UserCard>
          <div>
            <img src={Atiku} />
          </div>
          <div>
            <p>Muhammad Sani Jada </p>
            <span>Secretary</span>
          </div>
        </UserCard>
        <UserCard>
          <div>
            <img src={Atiku} />
          </div>
          <div>
            <p>Eng Hassan Usman Othman (Tafida Ganye)</p>
            <span>Member</span>
          </div>
        </UserCard>
        <UserCard>
          <div>
            <img src={Atiku} />
          </div>
          <div>
            <p>Prof. Inuwa Goni Dauda </p>
            <span>Member</span>
          </div>
        </UserCard>
        <UserCard>
          <div>
            <img src={Atiku} />
          </div>
          <div>
            <p>New Memer Coming Soon</p>
            <span>Member</span>
          </div>
        </UserCard>
      </Container>
    </>
  );
}

export default Board;

const Container = styled.section`
  /* background: #e8e8e8; */
  display: flex;
  justify-content: space-between;
  text-align: center;
  gap: 30px;
  height: 250px;
  margin-bottom: var(--100px);
  padding: 10px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
`;
const UserCard = styled.div`
  min-width: var(--200px);
  height: 100%;
  padding: 3px 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;
  border-radius: 3px;
  position: relative;
  width: var(--200px);
  box-shadow: 4px 3px 11px -6px rgba(0, 0, 0, 0.75);
  div:nth-child(1) {
    height: 100%;
  }
  div:nth-child(2) {
    height: 30%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  p,
  span {
    font-size: small;
  }
  p {
    height: 50px;
  }
  span {
    position: absolute;
    background: var(--primary);
    right: 0;
    padding: 1px;
    bottom: 0;
    width: 50%;
    color: #fff;
    border-radius: 3px 0px 3px 0px;
  }
`;

const Header = styled.h2`
  /* background-color: red; */
  padding: 10px;
  text-align: center;
  text-decoration: underline;
`;

// const ImageCard = styled.div`
//   /* background: coral; */
//   position: relative;
//   /* max-height: 300px; */
//   /* min-height: 300px; */
//   height: 500px;
//   img {
//     width: 400px;
//     height: 100%;
//   }
// `;
