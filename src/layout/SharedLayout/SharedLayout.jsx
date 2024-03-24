import { Suspense } from "react";
import Header from "../../components/Header/Header";
import { Wrapper } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Wrapper>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </main>
    </>
  );
};

export default SharedLayout;
