import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import Profile from './Profile'

const mockDevelopersData = [
  {
    bio: 'Full Stack Developer. Working with React, React Native and other cool things!',
    organization: 'Facebook',
    stars: 1479,
    followers: 1000,
    yearContributions: 1390,
    id: 'kOEADk0039Q#$87q3==',
    name: 'Lucas'
  },
  {
    bio: 'a2',
    organization: 'Facebook',
    stars: 1100,
    followers: 512,
    yearContributions: 981,
    id: 'kOEADzxe39Q#$87q3==',
    name: 'Alexsander Akers'
  },
  {
    bio: 'I love to cook and I love to write code!',
    organization: 'Zenfy',
    stars: 501,
    followers: 156,
    yearContributions: 1528,
    id: 'kOEADk0066Q#$87q3==',
    name: 'Jáchym Toušek'
  },
  {
    bio: 'Whatever!',
    organization: 'Basecamp',
    stars: 28,
    followers: 9300,
    yearContributions: 418,
    id: 'kOEsDk0039Q#$87q3==',
    name: 'David Heinemeier Hansson'
  },
  {
    bio: 'Full Stack Developer. Working with React, React Native and other cool things!',
    organization: 'Facebook',
    stars: 1479,
    followers: 1000,
    yearContributions: 1390,
    id: 'kOEADk0039Q#$87q3==',
    name: 'Lucas'
  },
  {
    bio: 'a2',
    organization: 'Facebook',
    stars: 1100,
    followers: 512,
    yearContributions: 981,
    id: 'kOEADzxe39Q#$87q3==',
    name: 'Alexsander Akers'
  },
  {
    bio: 'I love to cook and I love to write code!',
    organization: 'Zenfy',
    stars: 501,
    followers: 156,
    yearContributions: 1528,
    id: 'kOEADk0066Q#$87q3==',
    name: 'Jáchym Toušek'
  },
  {
    bio: 'Whatever!',
    organization: 'Basecamp',
    stars: 28,
    followers: 9300,
    yearContributions: 418,
    id: 'kOEsDk0039Q#$87q3==',
    name: 'David Heinemeier Hansson'
  },
  {
    bio: 'Full Stack Developer. Working with React, React Native and other cool things!',
    organization: 'Facebook',
    stars: 1479,
    followers: 1000,
    yearContributions: 1390,
    id: 'kOEADk0039Q#$87q3==',
    name: 'Lucas'
  },
  {
    bio: 'a2',
    organization: 'Facebook',
    stars: 1100,
    followers: 512,
    yearContributions: 981,
    id: 'kOEADzxe39Q#$87q3==',
    name: 'Alexsander Akers'
  },
  {
    bio: 'I love to cook and I love to write code!',
    organization: 'Zenfy',
    stars: 501,
    followers: 156,
    yearContributions: 1528,
    id: 'kOEADk0066Q#$87q3==',
    name: 'Jáchym Toušek'
  },
  {
    bio: 'Whatever!',
    organization: 'Basecamp',
    stars: 28,
    followers: 9300,
    yearContributions: 418,
    id: 'kOEsDk0039Q#$87q3==',
    name: 'David Heinemeier Hansson'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile developers={mockDevelopersData} />
      </div>
    );
  }
}

export default App;
