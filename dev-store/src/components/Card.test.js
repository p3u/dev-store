import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const mockDeveloper = {
  bio: 'Whatever!',
  organization: 'Basecamp',
  stars: 28,
  followers: 9300,
  yearContributions: 418,
  id: 'kOEsDk0039Q#$87q3==',
  name: 'David Heinemeier Hansson'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card devInfo={mockDeveloper} />, div);
});
