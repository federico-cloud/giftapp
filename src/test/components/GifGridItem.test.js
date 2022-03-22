import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'htpps://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente de manera correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    
    })

    test('Debe tener un parrafo con el title', () => {
    
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);

    })

    test('Debe obtener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    
    })

    test('Debe tener la clase animate__zoomIn', () => {

        const div = wrapper.find('div');

        console.log(div.prop('className'));

        expect(div.prop('className')).toMatch('animate__zoomIn');

    })

})