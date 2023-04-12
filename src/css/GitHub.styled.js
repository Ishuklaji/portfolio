import styled from "styled-components";
export const GitHubDiv = styled.div`
  height: 200px;
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-item:center;

  // background-color: #1e293b;
  background-color: yellowgreen;
  color: black;

  .conatainerAbout {
    height: auto;
    width: 80%;
    display: flex;
    & > div {
      width: 50%;
      /* height: 100%; */
      /* border: 1px solid red; */
    }

    //First child
    .iconContainer {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .iconContainer .iconAboutMe {
      height: 80%;
    }
    .aboutDesc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;
      text-align: left;
      gap: 30px;
      // border: 1px solid white; 

      .title {
        font-size: 30px;
        text-align: center;
        font-weight: 700;
        color: #e45149;
      }
      .desc{
        font-size : 20px
      }
    }
  }

  @media (max-width: 1300px) {
    .conatainerAbout {
      width: 100%;
    }
  }
  @media (max-width: 1100px) {
    height: auto;
    .conatainerAbout {
      flex-direction: column;

      & > div {
        width: 100%;
        /* height: 50%; */
      }

      //First child
      .iconContainer {
        height: 400px;
        display: flex;
        box-sizing: border-box;
        padding: 30px;
        align-items: center;
        justify-content: flex-start;
        /* border: 1px solid white; */
        .iconAboutMe {
          height: 300px;
          /* width: 100%; */
        }
      }
      .aboutDesc {
        height: 350px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        box-sizing: border-box;
        padding: 30px;
        text-align: left;
        gap: 30px;
        /* border: 1px solid white; */

        .title {
          font-size: 30px;
          text-align: center;
          font-weight: 700;
          color: #e45149;
        }
      }
    }
  }
  @media (max-width: 850px) {
  }
  @media (max-width: 700px) {
    height: auto;
    .conatainerAbout {
      flex-direction: column;

      & > div {
        width: 100%;
        /* height: 50%; */
      }

      //First child
      .iconContainer {
        height: auto;
        display: flex;
        box-sizing: border-box;
        padding: 30px;
        align-items: center;
        justify-content: center;
        .iconAboutMe {
          /* height: 300px; */
          width: 100%;
        }
      }
      .aboutDesc {
        height: 500px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        box-sizing: border-box;
        padding: 30px;
        text-align: left;
        gap: 30px;
        /* border: 1px solid white; */

        .title {
          font-size: 30px;
          text-align: center;
          font-weight: 700;
          color: #e45149;
        }
      }
    }
  }

  @media (max-width: 580px) {
  }
`;