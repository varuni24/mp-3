import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 0 auto;
  max-width: 1200px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  flex: 1;
  width: 70%;
  padding: 32px 48px 200px;
  background-color: rgb(245, 245, 245);

  @media (max-width: 750px) {
    width: 100%;
    padding: 32px 24px 200px;
  }
`;

function Root() {
  return (
    <SiteWrapper>
      <Header />
      <ContentContainer>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </MainContent>
      </ContentContainer>
      <Footer />
    </SiteWrapper>
  );
}

const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
