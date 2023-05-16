import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import RestaurantTables from "../components/RestaurantTables";

describe("RestaurantTables", () => {
  test("renders loading...", () => {
    render(
      <Provider store={store}>
        <Router>
          <RestaurantTables />
        </Router>
      </Provider>
    );

    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument;
  });

  test("renders tables data", async () => {
    render(
      <Provider store={store}>
        <Router>
          <RestaurantTables />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      const loadingElement = screen.queryByText("Loading...");
      expect(loadingElement).not.toBeInTheDocument;
    });
  });
});
