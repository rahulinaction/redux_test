/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { AppWrapper } from '../App';
import { render, screen, userEvent, waitFor } from '@testing-library/react-native';
import { server } from '../mocks/server';
import { renderWithProviders } from '../mocks/server/test-utils';
import { apiPost } from '../src/store/slices/apiPost';
import '@testing-library/jest-native';
import { setupStore } from '../src/store';
import Constants from '../src/constants/constants';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

const store = setupStore({});

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
      // This is the solution to clear RTK Query cache after each test
  store.dispatch(apiPost.util.resetApiState());
})
afterAll(() => server.close())

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import { rest } from 'msw';


describe('App',()=>{
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('handles error response', async () => {

    server.use(
      rest.get(
        Constants.apiUrl+"posts",
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )

   const { getByTestId} =  renderWithProviders(<AppWrapper />);
 
  
    //const listNode = await waitForElement(() => getByTestId('list'));
    const errorText = getByTestId("errorID");
    const flatList = getByTestId("flatlist");
    await waitFor(() => {
      
      expect(errorText).toBeOnTheScreen(); 
      expect(flatList).toBeOnTheScreen();
    });


    //await screen    ("Loading ....")
    //const list = getByTestId('flatlist');
    
    // expect the data length to be 3
  });

  it('renders the item correctly', async () => {
    
    const { getByTestId } = renderWithProviders(<App />);
    
    //await screen    ("Loading ....")
    //const list = getByTestId('flatlist');
    
    // expect the data length to be 3
  });
});

