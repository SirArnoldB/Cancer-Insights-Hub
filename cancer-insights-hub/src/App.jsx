import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import WelcomeContent from "./section_content/welcome";
import CardGrid from "./components/CardGrid";
import StatisticsContent from "./section_content/statistics";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Section
        id="home"
        class_name="home-content"
        title="Welcome to Cancer Insights Hub!"
        section_content={<WelcomeContent />}
      />
      <Section
        id="statistics"
        class_name="section-content"
        title="Cancer Statistics"
        section_content={<StatisticsContent />}
      />
      <Section
        id="research"
        class_name="section-content"
        title="Cancer Research"
      />
      <Section
        id="news"
        class_name="section-content"
        title="Cancer News and Events"
      />
      <Section
        id="resources"
        class_name="section-content"
        title="Cancer Resources"
      />
    </div>
  );
}
