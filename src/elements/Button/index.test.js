import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

// Test apakah jika ditambahkan props isDisabled didalam <span> ada attribute disabled
test("Should not allowed to click if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// Test apakah jika ditambahkan isLoading akan ada span dan tulisan loading di dalamnya
test("Should Render Loading/Spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

// Test apakah jika ditambahkan props type bernilai link dan props isExternal akan menghasilkan tag a
test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);
  expect(container.querySelector("a")).toBeInTheDocument();
});

// Test apakah jika bentuknya link yang di render adalah <Link>
test("Should render Link components", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
});
