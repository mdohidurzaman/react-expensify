import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from '../../components/Header';


test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call start logout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});