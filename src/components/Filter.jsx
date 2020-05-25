import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FilerWrapper = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
border-radius: 5px;
height: 252px;
width: 232px;
margin-right: 20px;
`;

const FilterForm = styled.form`
display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
`;

const FilterHeader = styled.h2`
margin-top: 20px;
letter-spacing: .5;
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
text-align: left;
padding-left: 20px;
`;

const FilterLabel = styled.label`
margin-bottom: 0px;
font-size: 13px;
color: #4A4A4A;
width: 100%;
text-align: left;
padding: 10px 20px 10px 50px;
box-sizing: border-box;
position: relative;
line-height: 20px;

&:hover {
  background: #F1FCFF;
}

&:before {
  content: "";
  position: absolute;
  height: 20px;
  width: 20px;
  left: 20px;
  border: 1px solid #2196F3;
  border-radius: 2px;
}

&:after {
  display: ${(props) => (props.clicked ? 'block' : 'none')};
  content: "";
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z' fill='%232196F3'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: absolute;
  left: 21px;
  top: 11px;
}
`;

const FilterInput = styled(Field)`
display: none;
position: relative;
margin: 0;
padding: 0;
`;


const Filter = ({
  all, noStops, oneStop, twoStops, threeStops,
}) => (
  <FilerWrapper>
    <FilterHeader>Количество пересадок</FilterHeader>
    <FilterForm action="">
      <FilterLabel htmlFor="all" clicked={all}>
        <FilterInput component="input" type="checkbox" id="all" name="all" />
        Все
      </FilterLabel>
      <FilterLabel htmlFor="noStops" clicked={noStops}>
        <FilterInput component="input" type="checkbox" name="noStops" id="noStops" />
        Без пересадок
      </FilterLabel>
      <FilterLabel htmlFor="oneStop" clicked={oneStop}>
        <FilterInput component="input" id="oneStop" type="checkbox" name="oneStop" />
        1 пересадка
      </FilterLabel>
      <FilterLabel htmlFor="twoStops" clicked={twoStops}>
        <FilterInput component="input" type="checkbox" name="twoStops" id="twoStops" />
        2 пересадки
      </FilterLabel>
      <FilterLabel htmlFor="threeStops" clicked={threeStops}>
        <FilterInput component="input" type="checkbox" name="threeStops" id="threeStops" />
        3 пересадки
      </FilterLabel>
    </FilterForm>
  </FilerWrapper>
);

const mapStateToProps = ({ form: { transfersFilter = {} } }) => {
  if (Object.keys(transfersFilter).length < 2) {
    return {
      filter: {},
    };
  }
  return transfersFilter.values;
};
Filter.defaultProps = {
  all: false,
  noStops: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
};

Filter.propTypes = {
  all: PropTypes.bool,
  noStops: PropTypes.bool,
  oneStop: PropTypes.bool,
  twoStops: PropTypes.bool,
  threeStops: PropTypes.bool,
};

export default connect(mapStateToProps, null)(reduxForm({
  form: 'transfersFilter',
})(Filter));
