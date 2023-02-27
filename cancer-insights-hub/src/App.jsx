import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import WelcomeContent from "./section_content/welcome";
import StatisticsContent from "./section_content/statistics";
import ResearchContent from "./section_content/research";
import NewsContent from "./section_content/news";
import ResourcesContent from "./section_content/resources";

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
        section_content={<ResearchContent />}
      />
      <Section
        id="news"
        class_name="section-content"
        title="Cancer News and Events"
        section_content={<NewsContent />}
      />
      <Section
        id="resources"
        class_name="section-content"
        title="Cancer Resources"
        section_content={<ResourcesContent />}
      />
    </div>
  );
}
