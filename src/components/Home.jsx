import React from 'react';
import NavigationPanel from './NavigationPanel';
import RestaurantTables from './RestaurantTables';

const Home = () => (
  <main>
    <div className="navigation-panel">
      <NavigationPanel />
    </div>
    <div className="restaurant-tables">
      <section className="home-section">
        <RestaurantTables />
      </section>
    </div>
  </main>
);

export default Home;
