import CardGrid from "../components/CardGrid";

const StatisticsContent = () => {
  const statistics_cards = [
    {
      id: 1,
      title: "Cancer Incidence",
      description: `2015-2019: In the U.S, close to 9 million new cancer cases reported, with about 3 million deaths.\nGlobally, ... `,
      image: "/src/assets/images/statistics/incidence.jpg",
      link: "https://gis.cdc.gov/Cancer/USCS/#/AtAGlance/",
    },
    {
      id: 2,
      title: "Cancer Mortality",
      description: `2015-2019, U.S: close to 3 million deaths.\nGlobally, close to 10 million deaths... `,
      image: "/src/assets/images/statistics/mortality.jpg",
      link: "https://www.uicc.org/news/global-cancer-data-globocan-2018",
    },
    {
      id: 3,
      title: "Breast Cancer",
      description:
        "The most commonly diagnosed cancer in women worldwide, with more that 2.26 million new cases reported in 2020...",
      image: "/src/assets/images/statistics/breast_cancer.jpeg",
      link: "https://www.wcrf.org/cancer-trends/breast-cancer-statistics/",
    },
    {
      id: 4,
      title: "Lung Cancer",
      description:
        "The leading cause of cancer death in both men and women, with more than 2.2 million new cases of lung cancer in 2020...",
      image: "/src/assets/images/statistics/lung_cancer.jpg",
      link: "https://www.wcrf.org/cancer-trends/lung-cancer-statistics/",
    },
    {
      id: 5,
      title: "Prostate Cancer",
      description:
        "The second most commonly diagnosed cancer in men, with more than 1.4 million new cases in 2020...",
      image: "/src/assets/images/statistics/prostate_cancer.jpeg",
      link: "https://www.wcrf.org/cancer-trends/prostate-cancer-statistics",
    },
    {
      id: 6,
      title: "Colorectal Cancer",
      description:
        "The third most commonly diagnosed cancer in both men and women...",
      image: "/src/assets/images/statistics/colorectal_cancer.jpg",
      link: "https://www.wcrf.org/cancer-trends/colorectal-cancer-statistics",
    },
    {
      id: 7,
      title: "Skin Cancer",
      description:
        "The most commonly diagnosed cancer in the U.S, with more than 5.4 million new cases in 2020...",
      image: "/src//assets/images/statistics/skin_cancer.jpeg",
      link: "https://www.wcrf.org/cancer-trends/skin-cancer-statistics",
    },
    {
      id: 8,
      title: "Cancer Survival Rates",
      description: `2009-2015: The 5-year relative survival rate for all cancers combined  was 67% overall, 68% in whites, and 62% in Blacks...`,
      image: "/src/assets/images/statistics/survival_rates.jpg",
      link: "https://www.cancer.org/latest-news/facts-and-figures-2020.html",
    },
    {
      id: 9,
      title: "Childhood Cancer",
      description: `2020: More than 16 million children and adolescents (aged 0-19) were diagnosed with cancer in the U.S...`,
      image: "/src/assets/images/statistics/childhood_cancer.jpg",
      link: "https://www.cancer.gov/about-cancer/understanding/statistics",
    },
    {
      id: 10,
      title: "Cancer Risk Factors",
      description: `The top risk factors for cancer are age, weight, exposure to carcinogens, and genetics.`,
      image: "/src/assets/images/statistics/risk_factors.jpg",
      link: "https://www.cancer.gov/about-cancer/understanding/statistics",
    },
  ];
  return <CardGrid cards={statistics_cards} />;
};

export default StatisticsContent;
