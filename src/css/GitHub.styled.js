import styled from "styled-components";

export const GitHubDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // Corrected typo: align-item should be align-items

  background-color: yellowgreen;
  color: black;

  .gitCalender {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center; // Center align the GitHub calendar
    height: 100%; // Make sure the calendar takes the full height of the container
    width: 100%; // Make sure the calendar takes the full width of the container
  }

  .conatainerAbout {
    height: auto;
    width: 80%;
    display: flex;

    & > div {
      width: 50%;
    }

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

      .title {
        font-size: 30px;
        text-align: center;
        font-weight: 700;
        color: #e45149;
      }

      .desc {
        font-size: 20px;
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
      }

      .iconContainer {
        height: 400px;
        display: flex;
        box-sizing: border-box;
        padding: 30px;
        align-items: center;
        justify-content: flex-start;

        .iconAboutMe {
          height: 300px;
        }
      }

      .aboutDesc {
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        padding: 30px;
        text-align: left;
        gap: 30px;

        .title {
          font-size: 30px;
          text-align: center;
          font-weight: 700;
          color: #e45149;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: auto;
    .conatainerAbout {
      flex-direction: column;

      & > div {
        width: 100%;
      }

      .iconContainer {
        height: auto;
        display: flex;
        box-sizing: border-box;
        padding: 30px;
        align-items: center;
        justify-content: center;

        .iconAboutMe {
          width: 100%;
        }
      }

      .aboutDesc {
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        padding: 30px;
        text-align: left;
        gap: 30px;

        .title {
          font-size: 30px;
          text-align: center;
          font-weight: 700;
          color: #e45149;
        }
      }
    }
  }
`;
