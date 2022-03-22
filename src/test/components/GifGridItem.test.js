import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'htpps://localhost/algo.jpg'

    test('Debe mostrar el componente de manera correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url} />);

        expect(wrapper).toMatchSnapshot();
    })

})