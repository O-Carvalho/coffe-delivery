import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <h2>Header</h2>
        <Outlet />
      </LayoutContainer>
    </div>
  );
}
