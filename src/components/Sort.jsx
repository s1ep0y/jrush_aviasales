import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SortWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const SortForm = styled.form`
  display: flex;
`;

const SortButton = styled.label`
width: 50%;
display: block;
padding: 15px 56px;
text-align: center;
background: ${(props) => (props.selected ? '#2196F3' : '#FFFFFF')};
color: ${(props) => (props.selected ? '#FFFFFF' : '#4A4A4A')};
border: ${(props) => (props.selected ? 'none' : '1px solid #DFE5EC')};
box-sizing: border-box;

&:first-child {
  border-radius: 5px 0px 0px 5px;
};
&:last-child {
  border-radius: 0px 5px 5px 0px;
}
`;

const SortField = styled(Field)`
  display: none;
`;

const Sort = ({ sortBy }) => (
  <SortWrapper>
    <SortForm>
      <SortButton selected={sortBy === 'cheap'}>
        Самый дешевый
        <SortField component="input" type="radio" id="cheap" name="sortBy" value="cheap" />
      </SortButton>
      <SortButton selected={sortBy !== 'cheap'}>
        <SortField component="input" type="radio" name="sortBy" id="faster" value="faster" />
        Самый быстрый
      </SortButton>
    </SortForm>
  </SortWrapper>
);

Sort.defaultProps = {
  sortBy: 'cheap',
};

Sort.propTypes = {
  sortBy: PropTypes.string,
};

const mapStateToProps = ({ form: { sort } }) => ({
  initialValues: {
    sortBy: 'cheap',
  },
  sortBy: sort ? sort.values.sortBy : 'cheap',
});

export default connect(mapStateToProps, null)(reduxForm({
  form: 'sort',
})(Sort));
