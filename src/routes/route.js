import React from "react";
import { NavigationBar } from "../components/navigationbar";
import { AboutPage } from "../page/aboutpage";
import { ProjectPage } from "../page/projectPage/projectpage";
import { PublicationPage } from "../page/publicationpage";
import { ContactPage } from "../page/contactpage";
import { HomePage } from "../page/homepage";

const Route = () => {
  return (
    <>
      {/* <NavigationBar></NavigationBar> */}
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <ProjectPage></ProjectPage>
      {/* <PublicationPage></PublicationPage> */}
      <ContactPage></ContactPage>
    </>
  );
};

export default Route;
