import React from "react";
import { shallow } from "enzyme";
import { Student } from "./Student";
import renderer from 'react-test-renderer';


let component;

const buildComponent = (props = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: '25',
  saveStudentInfo: jest.fn()
}) => {
  component = shallow(<Student {...props} />);
  return component;
};

describe('test suite for student form', () => {
  beforeEach(() => {
    buildComponent();
  });

  it('should render title properly', () => {
    expect(component).toBeDefined();
    expect(component.text().indexOf('Student Form')).toBeGreaterThan(-1);
  });
});

describe('test change event for student form firstName', () => {
  beforeEach(() => {
    buildComponent();
    component.find('TextField').at(0).simulate('change', {target: {value: 'Mary', name: 'firstName'}})
  });

  it('should update firstName', () => {
    expect(component.state().firstName).toEqual('Mary')
  })
});

describe('test change event for student form lastName', () => {
  beforeEach(() => {
    buildComponent();
    component.find('TextField').at(1).simulate('change', {target: {value: 'Le', name: 'lastName'}})
  });

  it('should update firstName', () => {
    expect(component.state().lastName).toEqual('Le')
  })
});

describe('test change event for student form age', () => {
  beforeEach(() => {
    buildComponent();
    component.find('TextField').at(2).simulate('change', {target: {value: '30', name: 'age'}})
  });

  it('should update firstName', () => {
    expect(component.state().age).toEqual('30')
  })
});

describe('test click event for submit button', () => {
  beforeEach(() => {
    buildComponent();
    component.find('WithStyles(Button)').at(0).simulate('click')
  });

  it('should call saveStudentInfo', () => {
    expect(component.instance().props.saveStudentInfo).toHaveBeenCalled()
  })
});

describe('snapshot testing', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Student/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
