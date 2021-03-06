import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs() );
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    })

    test('Debe retonar un arreglo de imagenes y el loading en false', async() => {

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs() );
        await waitForNextUpdate();
            
        const {data, loading} = result.current;
        
        expect(data.length).toBe(20);
        expect(loading).not.toBeTruthy();

    })

})