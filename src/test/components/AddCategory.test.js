import React from 'react';
import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en el componenete <AddCategory />', () => {
    
    const setCategorias = jest.fn();
    let wrapper;

    beforeEach(() => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias={setCategorias}/>);

    });


    test('Debe mostrarse correctamente', () => {    

        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';


        input.simulate('change', {
            target: {
                value: value
            }
        });
    })

    test('No debe postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect( setCategorias ).toHaveBeenCalled();

    })

    test('Debe llamar el setCategorias y limpiar la caja de texto', () => {

        const value = 'Hola';

        wrapper.find('input').simulate('change', { target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect( setCategorias ).toHaveBeenCalled();
        expect ( wrapper.find('input').prop('value')).toBe('');

    })

})