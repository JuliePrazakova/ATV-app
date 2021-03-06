import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Open Sans,serif ;
  
  .background-cover {
    background: url("/images/background2.jpg");
    background-size: cover;
    padding: 350px 0 15% 0;
    margin: 0;
    color: white;
  }
  .title > p {
    font-size: 63px;
    font-weight: 800;
  }
  .title {
    width: fit-content;
    margin-left: 15%;
  }
  .lower-section {
    margin: auto;
    padding-top: 50px;
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  
  //styles for leaflet map
  .leaflet-container {
    height: 40vh;
    width: 40vw;
    border-radius: 30px;
  }
  #map {
    position: -webkit-sticky;
    position: sticky;
    top:20px;
  }
`;
export const Grid = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;