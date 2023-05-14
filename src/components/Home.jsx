import React from 'react';
import NavigationPanel from './NavigationPanel';
import RestaurantTables from './RestaurantTables';

const Home = () => (
  <main>
    <NavigationPanel />
    <section className="home-section">
      <RestaurantTables />
    </section>
  </main>
);

export default Home;
