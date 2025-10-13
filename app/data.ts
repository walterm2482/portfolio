// data.ts
// ==== Tipos ====
export type Lang = 'es' | 'en'

export type ProjectMetric = { label: string; value: string }

export type ProjectCaseStudy = {
  problem: string
  approach: string
  result: string
}

export type Project = {
  id: string
  name: string
  description: string
  image?: string
  video?: string
  poster?: string
  link?: string
  demo?: string
  code?: string
  role: string
  stack: string[]
  metrics?: ProjectMetric[]
  caseStudy?: ProjectCaseStudy
}

export type WorkExperience = {
  id: string
  company: string
  title: string
  start: string
  end: string
  link: string
}

export type BlogPost = {
  uid: string
  title: string
  description: string
  link: string
  date: string
  tags: string[]
  readingTime: string
}

export type SocialLink = { label: string; link: string }

// ==== Redes y contacto (comparten idioma) ====
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', link: 'https://github.com/walterm2482' },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/walter-thomas-moya-araya-a211b9307/',
  },
  { label: 'Kaggle', link: 'https://www.kaggle.com/waltertmoyaaraya' },
]
export const EMAIL = 'cg.walter.ma@gmail.com'

// ====================== ES ======================
const PROJECTS_ES: Project[] = [
  {
    id: 'wm-project-1',
    name: 'K-Means Clustering Indicator (ML-Based)',
    description:
      'Indicador de clustering K-Means para cTrader que utiliza machine learning para detectar patrones de mercado y visualizar señales de trading.',
    image: '/projects/k_means.webp',
    role: 'ML Engineer',
    stack: [
      'C#',
      'cTrader',
      'Machine Learning',
      'Clustering',
      'Online Learning',
      'REST API (Telegram)',
    ],
    metrics: [
      { label: 'Versión', value: '2.0.0' },
      { label: 'Actualizado', value: '2025-10-08' },
      { label: 'Rating', value: '5.0' },
    ],
    link: 'https://clickalgo.com/k-means',
    demo: 'https://clickalgo.com/k-means',
    code: 'https://github.com/walterm2482/kmeans-indicator',
  },
  {
    id: 'wm-project-2',
    name: 'Gaussian Mixture Model Indicator',
    description:
      'Indicador GMM para cTrader que actúa como clasificador probabilístico, empleando modelos de mezcla de gaussianas para identificar patrones de mercado y generar señales de trading basadas en probabilidad de modelo.',
    image: '/projects/gaussian_mixture_model.webp',
    role: 'ML Engineer',
    stack: [
      'C#',
      'cTrader',
      'GMM',
      'Probabilistic Classifier',
      'Model Probability',
      'REST API (Telegram)',
    ],
    metrics: [
      { label: 'Versión', value: '1.0.0' },
      { label: 'Actualizado', value: '2025-09-18' },
    ],
    link: 'https://clickalgo.com/gaussian-mixture',
    demo: 'https://clickalgo.com/gaussian-mixture',
    code: 'https://github.com/walterm2482/gmm-indicator',
  },
  {
    id: 'wm-project-3',
    name: 'Smart Portfolio Architect',
    description:
      'Estrategia de portafolio de mínima correlación que automatiza el análisis de activos y optimiza el balance riesgo-retorno mediante recocido simulado e integración con cAlgo.',
    image: '/projects/smart_portfolio.webp',
    role: 'ML Engineer',
    stack: [
      'cAlgo',
      'Portfolio Optimization',
      'Simulated Annealing',
      'Risk Management',
      'REST API (Telegram)',
    ],
    metrics: [
      { label: 'Versión', value: '1.0.0' },
      { label: 'Actualizado', value: '2025-09-18' },
      { label: 'Rating', value: '5.0' },
    ],
    link: 'https://clickalgo.com/smart-portfolio-architect',
    demo: 'https://clickalgo.com/smart-portfolio-architect',
    code: 'https://github.com/walterm2482/smart-portfolio',
  },
  {
    id: 'wm-project-4',
    name: 'Moya Bands Threshold Indicator',
    description:
      'Indicador de umbral para cTrader que aplica el filtro de Kalman lineal, MEWMA y bandas de ATR para el análisis de series temporales y generación de señales de trading con alertas vía Telegram.',
    image: '/projects/moya_bands.webp',
    role: 'ML Engineer',
    stack: ['Kalman Filter', 'Time Series Analysis', 'cTrader', 'Telegram API'],
    metrics: [
      { label: 'Versión', value: '1.0.0' },
      { label: 'Actualizado', value: '2025-09-09' },
      { label: 'Rating', value: '5.0' },
    ],
    link: 'https://clickalgo.com/moya-bands',
    demo: 'https://clickalgo.com/moya-bands',
    code: 'https://github.com/walterm2482/moya-bands',
  },
  {
    id: 'wm-project-5',
    name: 'Divvy Chicago Strategic Insights (Jan–Jun 2025)',
    description:
      'Análisis de segmentación y optimización operativa del sistema de bicicletas de Chicago para impulsar la conversión a membresías anuales.',
    image: '/projects/divvy_chicago.webp',
    role: 'Data Scientist',
    stack: [
      'Segmentation Analysis',
      'Clustering',
      'Time Series',
      'GeoAnalytics',
      'Digital Strategy',
    ],
    caseStudy: {
      problem:
        'Detectar patrones de uso y factores de conversión en el programa Cyclistic Bike-Share.',
      approach:
        'Modelado espacio-temporal y clustering de usuarios para orientar acciones de marketing y operación.',
      result: 'Disponibilidad +12 %, traslados –18 % y ROI proyectado +20 %.',
    },
    metrics: [
      { label: 'Versión', value: '1.0.0' },
      { label: 'Actualizado', value: '2025-07-01' },
    ],
    demo: 'https://www.kaggle.com/code/waltertmoyaaraya/divvy-chicago-strategic-insights-jan-jun-2025',
    code: 'https://github.com/tuusuario/divvy-chicago',
  },
]

const WORK_EXPERIENCE_ES: WorkExperience[] = [
  {
    id: 'wm-work-1',
    title: 'Fundador',
    company: 'CRAFIUM (corte y grabado láser)',
    start: 'feb 2025',
    end: 'Presente',
    link: '#',
  },
  {
    id: 'wm-work-2',
    title: 'Desarrollador de soluciones de trading e inteligencia artificial',
    company: 'Independiente',
    start: 'oct 2024',
    end: 'Presente',
    link: '#',
  },
  {
    id: 'wm-work-3',
    title: 'Junior Programmer',
    company: 'ClickAlgo',
    start: 'nov 2023',
    end: 'oct 2024',
    link: 'https://clickalgo.com',
  },
  {
    id: 'wm-work-4',
    title: 'Analyst Trainee',
    company: 'PwC Chile',
    start: 'Aug 2022',
    end: 'Nov 2022',
    link: 'https://www.pwc.com/cl/',
  },
]

const BLOG_POSTS_ES: BlogPost[] = [
  {
    uid: 'naive-bayes',
    title: 'Classification with Naive Bayes',
    description:
      'Implementación y evaluación de modelos de clasificación basados en Naive Bayes aplicados a conjuntos de datos textuales.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/classification-with-naive-bayes',
    date: '2025-07-01',
    tags: ['Python', 'Naive Bayes', 'Classification'],
    readingTime: '5 min',
  },
  {
    uid: 'ridge-regression-active-learning',
    title: 'Ridge Regression + Active Learning',
    description:
      'Uso de aprendizaje activo para optimizar la selección de datos en regresión Ridge.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/ridge-regression-active-learning',
    date: '2025-06-10',
    tags: ['Machine Learning', 'Active Learning', 'Regression'],
    readingTime: '4 min',
  },
  {
    uid: 'imdb-logistic-baseline',
    title: 'Simple IMDB Reviews: Logistic Regression Baseline',
    description:
      'Modelo base de clasificación de sentimiento con regresión logística y bag-of-words.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/simple-imdb-reviews-logistic-regression-baseline',
    date: '2025-05-12',
    tags: ['NLP', 'Logistic Regression', 'Baseline'],
    readingTime: '3 min',
  },
  {
    uid: 'lime-shap-bias',
    title: 'LIME & SHAP: Interpretabilidad y Sesgo en Modelos',
    description:
      'Comparación crítica entre LIME y SHAP aplicada a modelos predictivos en salud.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/lime-shap-interpretability-model-bias',
    date: '2025-04-01',
    tags: ['Explainability', 'LIME', 'SHAP', 'Bias'],
    readingTime: '5 min',
  },
]

// ====================== EN ======================
const PROJECTS_EN: Project[] = [
  {
    id: 'wm-project-1',
    name: 'K-Means Clustering Indicator (ML-Based)',
    description:
      'K-Means clustering indicator for cTrader that uses machine learning to detect market patterns and visualize trading signals.',
    image: '/projects/k_means.webp',
    role: 'ML Engineer',
    stack: [
      'C#',
      'cTrader',
      'Machine Learning',
      'Clustering',
      'Online Learning',
      'REST API (Telegram)',
    ],
    metrics: [
      { label: 'Version', value: '2.0.0' },
      { label: 'Updated', value: '2025-10-08' },
      { label: 'Rating', value: '5.0' },
    ],
    link: 'https://clickalgo.com/k-means',
    demo: 'https://clickalgo.com/k-means',
    code: 'https://github.com/walterm2482/kmeans-indicator',
  },
  {
    id: 'wm-project-2',
    name: 'Gaussian Mixture Model Indicator',
    description:
      'GMM indicator for cTrader that acts as a probabilistic classifier, using Gaussian mixture models to identify market patterns and generate trading signals based on model probability.',
    image: '/projects/gaussian_mixture_model.webp',
    role: 'ML Engineer',
    stack: [
      'C#',
      'cTrader',
      'GMM',
      'Probabilistic Classifier',
      'Model Probability',
      'REST API (Telegram)',
    ],
    metrics: [
      { label: 'Version', value: '1.0.0' },
      { label: 'Updated', value: '2025-09-18' },
    ],
    link: 'https://clickalgo.com/gaussian-mixture',
    demo: 'https://clickalgo.com/gaussian-mixture',
    code: 'https://github.com/walterm2482/gmm-indicator',
  },
  {
    id: 'wm-project-3',
    name: 'Smart Portfolio Architect',
    description:
      'Minimum-correlation portfolio strategy that automates asset analysis and optimizes the risk–return balance using simulated annealing and cAlgo integration.',
    image: '/projects/smart_portfolio.webp',
    role: 'ML Engineer',
    stack: [
      'cAlgo',
      'Portfolio Optimization',
      'Simulated Annealing',
      'Risk Management',
      'REST API (Telegram)',
    ],
    metrics: [
      { label: 'Version', value: '1.0.0' },
      { label: 'Updated', value: '2025-09-18' },
      { label: 'Rating', value: '5.0' },
    ],
    link: 'https://clickalgo.com/smart-portfolio-architect',
    demo: 'https://clickalgo.com/smart-portfolio-architect',
    code: 'https://github.com/walterm2482/smart-portfolio',
  },
  {
    id: 'wm-project-4',
    name: 'Moya Bands Threshold Indicator',
    description:
      'Threshold indicator for cTrader that applies the linear Kalman filter, MEWMA, and ATR bands for time-series analysis and signal generation, with Telegram alerts.',
    image: '/projects/moya_bands.webp',
    role: 'ML Engineer',
    stack: ['Kalman Filter', 'Time Series Analysis', 'cTrader', 'Telegram API'],
    metrics: [
      { label: 'Version', value: '1.0.0' },
      { label: 'Updated', value: '2025-09-09' },
      { label: 'Rating', value: '5.0' },
    ],
    link: 'https://clickalgo.com/moya-bands',
    demo: 'https://clickalgo.com/moya-bands',
    code: 'https://github.com/walterm2482/moya-bands',
  },
  {
    id: 'wm-project-5',
    name: 'Divvy Chicago Strategic Insights (Jan–Jun 2025)',
    description:
      "Segmentation analysis and operational optimization of Chicago's bike system to drive conversion to annual memberships.",
    image: '/projects/divvy_chicago.webp',
    role: 'Data Scientist',
    stack: [
      'Segmentation Analysis',
      'Clustering',
      'Time Series',
      'GeoAnalytics',
      'Digital Strategy',
    ],
    caseStudy: {
      problem:
        'Detect usage patterns and conversion drivers in the Cyclistic bike-share program.',
      approach:
        'Spatiotemporal modeling and user clustering to guide marketing and operations.',
      result: 'Availability +12%, rebalancing rides −18%, projected ROI +20%.',
    },
    metrics: [
      { label: 'Version', value: '1.0.0' },
      { label: 'Updated', value: '2025-07-01' },
    ],
    demo: 'https://www.kaggle.com/code/waltertmoyaaraya/divvy-chicago-strategic-insights-jan-jun-2025',
    code: 'https://github.com/tuusuario/divvy-chicago',
  },
]

const WORK_EXPERIENCE_EN: WorkExperience[] = [
  {
    id: 'wm-work-1',
    title: 'Founder',
    company: 'CRAFIUM (laser cutting and engraving)',
    start: 'Feb 2025',
    end: 'Present',
    link: '#',
  },
  {
    id: 'wm-work-2',
    title: 'Trading and AI Solutions Developer',
    company: 'Freelance',
    start: 'Oct 2024',
    end: 'Present',
    link: '#',
  },
  {
    id: 'wm-work-3',
    title: 'Junior Programmer',
    company: 'ClickAlgo',
    start: 'Nov 2023',
    end: 'Oct 2024',
    link: 'https://clickalgo.com',
  },
  {
    id: 'wm-work-4',
    title: 'Analyst Trainee',
    company: 'PwC Chile',
    start: 'ago 2022',
    end: 'nov 2022',
    link: 'https://www.pwc.com/cl/',
  },
]

const BLOG_POSTS_EN: BlogPost[] = [
  {
    uid: 'naive-bayes',
    title: 'Classification with Naive Bayes',
    description:
      'Implementation and evaluation of Naive Bayes classifiers applied to textual datasets.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/classification-with-naive-bayes',
    date: '2025-07-01',
    tags: ['Python', 'Naive Bayes', 'Classification'],
    readingTime: '5 min',
  },
  {
    uid: 'ridge-regression-active-learning',
    title: 'Ridge Regression + Active Learning',
    description: 'Active learning to optimize data selection in Ridge regression.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/ridge-regression-active-learning',
    date: '2025-06-10',
    tags: ['Machine Learning', 'Active Learning', 'Regression'],
    readingTime: '4 min',
  },
  {
    uid: 'imdb-logistic-baseline',
    title: 'Simple IMDB Reviews: Logistic Regression Baseline',
    description:
      'Baseline sentiment classifier with logistic regression and bag-of-words.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/simple-imdb-reviews-logistic-regression-baseline',
    date: '2025-05-12',
    tags: ['NLP', 'Logistic Regression', 'Baseline'],
    readingTime: '3 min',
  },
  {
    uid: 'lime-shap-bias',
    title: 'LIME & SHAP: Interpretability and Bias in Models',
    description:
      'Critical comparison between LIME and SHAP applied to health predictive models.',
    link: 'https://www.kaggle.com/code/waltertmoyaaraya/lime-shap-interpretability-model-bias',
    date: '2025-04-01',
    tags: ['Explainability', 'LIME', 'SHAP', 'Bias'],
    readingTime: '5 min',
  },
]

// ==== Selector por idioma ====
export function getData(lang: Lang) {
  const isEn = lang === 'en'
  return {
    PROJECTS: isEn ? PROJECTS_EN : PROJECTS_ES,
    WORK_EXPERIENCE: isEn ? WORK_EXPERIENCE_EN : WORK_EXPERIENCE_ES,
    BLOG_POSTS: isEn ? BLOG_POSTS_EN : BLOG_POSTS_ES,
    SOCIAL_LINKS,
    EMAIL,
  }
}
