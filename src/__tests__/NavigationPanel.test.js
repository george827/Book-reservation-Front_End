import { render, screen, fireEvent } from "@testing-library/react";
import NavigationPanel from "../components/NavigationPanel";
import { BrowserRouter as Router } from "react-router-dom";

describe("NavigationPanel", () => {
  test("renders correctly", () => {
    render(
      <Router>
        <NavigationPanel />
      </Router>
    );
    const logoElement = screen.getByText("Logo");
    const hamburgerButton = screen.getByRole("button", {
      selector: ".hamburger",
    });
    const sidenavLinks = screen.getAllByRole("link", { hidden: true });

    expect(logoElement).toBeInTheDocument;
    expect(hamburgerButton).toBeInTheDocument;
    expect(sidenavLinks).toHaveLength(4);
  });

  test("toggles links visibility when hamburger button is clicked", () => {
    render(
      <Router>
        <NavigationPanel />
      </Router>
    );

    const hamburgerButton = screen.getByRole("button", {
      selector: ".hamburger",
    });
    const linksContainer = screen
      .getByRole("navigation")
      .querySelector(".nav-links");

    fireEvent.click(hamburgerButton);

    expect(linksContainer).toBeVisible;

    fireEvent.click(hamburgerButton);

    expect(linksContainer).not.toBeVisible;
  });
});
