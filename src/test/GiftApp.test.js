import React from 'react';
import { shallow } from 'enzyme';
import { GiftApp } from '../GiftApp';

describe('Pruebas en <GiftApp />', () => {

    test('Debe mostrar el componente correctamente', () => {

        const wrapper = shallow(<GiftApp />);

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe mostrar una lista de categorias', () => {

        const categorias = ['Saitama', 'Goku'];

        const wrapper = shallow(<GiftApp defaultCategorias={categorias} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);

    })

        
})