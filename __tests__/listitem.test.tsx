/**
 * @format
 */

 import 'react-native';
 import React from 'react';

 import App from '../App';
 import { Post } from '../src/types/Post';
 import ListItem from '../src/components/listitem';
 import { render, screen, userEvent } from '@testing-library/react-native';
 import '@testing-library/jest-native';
 // Note: import explicitly to use the types shiped with jest.
 import {it} from '@jest/globals'; 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';

  const dummyItem: Post =  {
    "userId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "body": "That's a body my friend" 
  };
 

 describe('render <ListItemComponent />', () => {
  
  it('renders list item correctly', () => {
    renderer.create(<ListItem item={dummyItem}  />);
  });

  it('should return the id and exist', () => {
    const ItemComponent = render(<ListItem item={dummyItem}  />);
    const {getByTestId} = ItemComponent;
    expect(getByTestId('id_'+dummyItem.id)).toBeTruthy();
    
  });

 
  it('should return the title', () => {
    const ItemComponent = render(<ListItem item={dummyItem}  />);
    const {getByTestId} = ItemComponent;
    expect(getByTestId('title_'+dummyItem.id)).toBeTruthy();
  });

  it('should return the body', () => {
    const ItemComponent = render(<ListItem item={dummyItem}  />);
    const {getByTestId} = ItemComponent;
    expect(getByTestId('body_'+dummyItem.id)).toBeTruthy();
  });


});


