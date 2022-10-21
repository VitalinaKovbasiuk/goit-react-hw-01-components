import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: inline-block;
  margin: 20px;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
`;

export const List = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.04);
`;


export const Label = styled.span`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
`;

export const Percentage = styled.span`
font-size: 25px;
font-weight: 700;`;

const setBgColor = props => {
    switch (props.id) {
        case 'id-1':
            return 'DodgerBlue';
          case 'id-2':
            return 'Violet';
          case 'id-3':
            return 'MediumSeaGreen';
          case 'id-4':
            return 'orange';
          case 'id-5':
            return 'SlateBlue';
          default:
            return 'white';
    }
  };

export const Item = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 75px;
  height: 75px;
  border: 1px solid rgb(0 0 0 / 20%);
  background-color: ${setBgColor};

  &:hover {
    background-color: LightGray;
    border: 1px solid rgb(60, 60, 60);
  }
  `;


