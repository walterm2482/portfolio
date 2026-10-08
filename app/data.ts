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
  category?: 'quant' | 'data' | 'ml'
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
  link?: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
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
    link: 'https://www.linkedin.com/in/walter-moya-araya-a211b9307/',
  },
  { label: 'Kaggle', link: 'https://www.kaggle.com/waltertmoyaaraya' },
]
export const EMAIL = 'cg.walter.ma@gmail.com'
export const PHONE = '+56933669343'
export const PHONE_DISPLAY = '+56 9 3366 9343'

// ====================== ES ======================
const PROJECTS_ES: Project[] = [
  {
    id: 'fsg-ultimate',
    name: 'FSG Ultimate v2.1',
    description:
      'cBot de reversión a la media con confirmación multitemporal, salidas por ATR y tres controles de riesgo. Publicado para cTrader.',
    image: '/projects/fsg-ultimate.webp',
    role: 'Quantitative Developer',
    category: 'quant',
    stack: ['C#', '.NET 6', 'cTrader Automate', 'Mean Reversion', 'Risk Management'],
    metrics: [
      { label: 'Versión', value: '2.1' },
      { label: 'Publicado', value: 'Agosto 2026' },
    ],
    link: 'https://ctrader.com/products/438',
  },
  {
    id: 'portfolio-optimizer',
    name: 'Portfolio Optimizer',
    description:
      'Dashboard y CLI para comparar cuatro métodos de asignación de activos, con señales ML opcionales y backtesting visual.',
    image: '/projects/portfolio-optimizer.png',
    role: 'Quantitative Developer',
    category: 'quant',
    stack: [
      'Python',
      'Dash',
      'Pandas',
      'Scikit-learn',
      'Portfolio Optimization',
      'pytest',
    ],
    caseStudy: {
      problem:
        'Comparar asignaciones de activos con distintos objetivos de riesgo y retorno.',
      approach:
        'Ingesta de precios, optimización, señales ML opcionales y backtesting con rebalanceo.',
      result:
        'Dashboard en Dash y CLI publicados, con vistas de equity, drawdown y exposición.',
    },
    code: 'https://github.com/walterm2482/portfolio-optimizer',
  },
  {
    id: 'mlops-api',
    name: 'Machine Learning API',
    description:
      'Random Forest servido mediante una API Flask, con validación de entradas, probabilidades, pruebas y Docker. Proyecto académico de MLOps.',
    image: '/projects/ml-api-workflow.svg',
    role: 'ML Developer',
    category: 'ml',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Docker', 'REST API', 'pytest'],
    caseStudy: {
      problem: 'Pasar de un modelo entrenado a un servicio de predicción reproducible.',
      approach:
        'Serialización de Random Forest, API Flask, pruebas automatizadas y contenedorización.',
      result:
        'Repositorio académico con endpoints de predicción, probabilidades y ejecución en Docker.',
    },
    code: 'https://github.com/walterm2482/kibernum_ml_modulo_10_actividad_modular',
  },
  {
    id: 'wm-project-1',
    category: 'ml',
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
    ],
    link: 'https://clickalgo.com/k-means',
    demo: 'https://clickalgo.com/k-means',
  },
  {
    id: 'wm-project-2',
    category: 'ml',
    name: 'Gaussian Mixture Model Indicator',
    description:
      'Clasificador probabilístico para cTrader que utiliza mezclas gaussianas para explorar patrones de mercado y visualizar señales.',
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
  },
  {
    id: 'wm-project-3',
    name: 'Smart Portfolio Architect',
    description:
      'Estrategia de portafolio de mínima correlación que automatiza el análisis de activos y optimiza el balance riesgo-retorno mediante análisis de correlación e integración con cAlgo.',
    image: '/projects/smart_portfolio.webp',
    role: 'Quantitative Developer',
    stack: ['cAlgo', 'Portfolio Optimization', 'Risk Management', 'REST API (Telegram)'],
    metrics: [
      { label: 'Versión', value: '1.0.0' },
      { label: 'Actualizado', value: '2025-09-18' },
    ],
    link: 'https://clickalgo.com/smart-portfolio-architect',
    demo: 'https://clickalgo.com/smart-portfolio-architect',
  },
  {
    id: 'wm-project-4',
    name: 'Moya Bands Threshold Indicator',
    description:
      'Indicador de series temporales con filtro de Kalman, MEWMA y bandas ATR. Incluye alertas vía Telegram.',
    image: '/projects/moya_bands.webp',
    role: 'Quantitative Developer',
    stack: ['Kalman Filter', 'Time Series Analysis', 'cTrader', 'Telegram API'],
    metrics: [
      { label: 'Versión', value: '1.0.0' },
      { label: 'Actualizado', value: '2025-09-09' },
    ],
    link: 'https://clickalgo.com/moya-bands',
    demo: 'https://clickalgo.com/moya-bands',
  },
  {
    id: 'wm-project-5',
    name: 'Divvy Chicago Strategic Insights (Jan–Jun 2025)',
    category: 'data',
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
      result:
        'Patrones de uso y recomendaciones de marketing y operación documentados en un notebook público.',
    },
    metrics: [
      { label: 'Versión', value: '1.0.0' },
      { label: 'Actualizado', value: '2025-07-01' },
    ],
    demo: 'https://www.kaggle.com/code/waltertmoyaaraya/divvy-chicago-strategic-insights-jan-jun-2025',
  },
]

const WORK_EXPERIENCE_ES: WorkExperience[] = [
  {
    id: 'wm-work-2',
    title: 'Desarrollador cuantitativo y de IA',
    company: 'Proyecto independiente',
    start: 'oct 2024',
    end: 'Presente',
    location: 'Remoto · Chile',
    summary:
      'Investigación aplicada, desarrollo de herramientas y evaluación de estrategias con datos de mercado.',
    highlights: [
      'Construí una plataforma en Python con ingeniería de características, etiquetado de eventos y backtesting.',
      'Integré validación temporal con purga y embargo, controles de calidad y trazabilidad para reducir la fuga de información.',
      'Publiqué FSG Ultimate y herramientas de análisis y optimización de portafolios.',
    ],
    stack: ['Python', 'C#/.NET', 'Time Series', 'Backtesting'],
  },
  {
    id: 'wm-work-3',
    title: 'Junior Programmer',
    company: 'ClickAlgo',
    start: 'nov 2023',
    end: 'oct 2024',
    location: 'Reino Unido · Remoto',
    link: 'https://clickalgo.com',
    summary:
      'Desarrollo de indicadores cuantitativos para cTrader y soporte a usuarios internacionales.',
    highlights: [
      'Implementé K-means y Gaussian Mixture Models en C#/.NET para analizar patrones de mercado.',
      'Desarrollé Moya Bands con filtro de Kalman, MEWMA y bandas ATR, y herramientas de diversificación por correlación.',
      'Entregué módulos documentados y publiqué un artículo técnico sobre portafolios de mínima correlación en Forex.',
    ],
    stack: ['C#/.NET', 'cTrader', 'Clustering', 'Signal Processing'],
  },
  {
    id: 'wm-work-4',
    title: 'Analyst Trainee',
    company: 'PwC Chile',
    start: 'ago 2022',
    end: 'nov 2022',
    location: 'Santiago · Chile',
    link: 'https://www.pwc.com/cl/',
    summary:
      'Integración y calidad de datos en Google Cloud para apoyar análisis y reportes operacionales.',
    highlights: [
      'Apoyé pipelines ETL con Data Fusion, BigQuery, Cloud Storage, Python y APIs REST.',
      'Optimicé cargas históricas de inventario con cientos de miles de registros a menos de 30 segundos por archivo.',
      'Participé en validación de esquemas, controles de calidad y monitoreo de inconsistencias.',
    ],
    stack: ['Google Cloud', 'BigQuery', 'Python', 'ETL'],
  },
  {
    id: 'wm-work-1',
    title: 'Fundador',
    company: 'Crafium',
    start: 'feb 2025',
    end: 'nov 2025',
    location: 'Santiago · Chile',
    summary:
      'Emprendimiento de diseño y fabricación de productos personalizados con corte láser.',
    highlights: [
      'Gestioné diseño, materiales, producción, control de calidad, ventas y distribución.',
      'Analicé costos, tiempos y márgenes para evaluar precios y rentabilidad.',
    ],
    stack: ['Gestión de operaciones', 'Análisis de costos', 'Diseño de producto'],
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
    id: 'fsg-ultimate',
    name: 'FSG Ultimate v2.1',
    description:
      'Mean-reversion cBot with multi-timeframe confirmation, ATR exits and three risk controls. Published for cTrader.',
    image: '/projects/fsg-ultimate.webp',
    role: 'Quantitative Developer',
    category: 'quant',
    stack: ['C#', '.NET 6', 'cTrader Automate', 'Mean Reversion', 'Risk Management'],
    metrics: [
      { label: 'Version', value: '2.1' },
      { label: 'Published', value: 'August 2026' },
    ],
    link: 'https://ctrader.com/products/438',
  },
  {
    id: 'portfolio-optimizer',
    name: 'Portfolio Optimizer',
    description:
      'Dashboard and CLI for comparing four asset allocation methods, with optional ML signals and visual backtesting.',
    image: '/projects/portfolio-optimizer.png',
    role: 'Quantitative Developer',
    category: 'quant',
    stack: [
      'Python',
      'Dash',
      'Pandas',
      'Scikit-learn',
      'Portfolio Optimization',
      'pytest',
    ],
    caseStudy: {
      problem: 'Compare asset allocations with different risk and return objectives.',
      approach:
        'Price ingestion, optimization, optional ML signals and rebalancing backtests.',
      result:
        'Published Dash dashboard and CLI with equity, drawdown and exposure views.',
    },
    code: 'https://github.com/walterm2482/portfolio-optimizer',
  },
  {
    id: 'mlops-api',
    name: 'Machine Learning API',
    description:
      'Random Forest served through a Flask API, with input validation, probabilities, tests and Docker. An academic MLOps project.',
    image: '/projects/ml-api-workflow.svg',
    role: 'ML Developer',
    category: 'ml',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Docker', 'REST API', 'pytest'],
    caseStudy: {
      problem: 'Turn a trained model into a reproducible prediction service.',
      approach: 'Random Forest serialization, Flask API, automated tests and containers.',
      result:
        'Academic repository with prediction endpoints, probabilities and Docker execution.',
    },
    code: 'https://github.com/walterm2482/kibernum_ml_modulo_10_actividad_modular',
  },
  {
    id: 'wm-project-1',
    category: 'ml',
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
    ],
    link: 'https://clickalgo.com/k-means',
    demo: 'https://clickalgo.com/k-means',
  },
  {
    id: 'wm-project-2',
    category: 'ml',
    name: 'Gaussian Mixture Model Indicator',
    description:
      'Probabilistic classifier for cTrader using Gaussian mixtures to explore market patterns and visualize signals.',
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
  },
  {
    id: 'wm-project-3',
    name: 'Smart Portfolio Architect',
    description:
      'Minimum-correlation portfolio strategy that automates asset analysis and optimizes the risk–return balance using correlation analysis and cAlgo integration.',
    image: '/projects/smart_portfolio.webp',
    role: 'Quantitative Developer',
    stack: ['cAlgo', 'Portfolio Optimization', 'Risk Management', 'REST API (Telegram)'],
    metrics: [
      { label: 'Version', value: '1.0.0' },
      { label: 'Updated', value: '2025-09-18' },
    ],
    link: 'https://clickalgo.com/smart-portfolio-architect',
    demo: 'https://clickalgo.com/smart-portfolio-architect',
  },
  {
    id: 'wm-project-4',
    name: 'Moya Bands Threshold Indicator',
    description:
      'Time-series indicator with a Kalman filter, MEWMA and ATR bands. Includes Telegram alerts.',
    image: '/projects/moya_bands.webp',
    role: 'Quantitative Developer',
    stack: ['Kalman Filter', 'Time Series Analysis', 'cTrader', 'Telegram API'],
    metrics: [
      { label: 'Version', value: '1.0.0' },
      { label: 'Updated', value: '2025-09-09' },
    ],
    link: 'https://clickalgo.com/moya-bands',
    demo: 'https://clickalgo.com/moya-bands',
  },
  {
    id: 'wm-project-5',
    name: 'Divvy Chicago Strategic Insights (Jan–Jun 2025)',
    category: 'data',
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
      result:
        'Usage patterns and marketing and operations recommendations documented in a public notebook.',
    },
    metrics: [
      { label: 'Version', value: '1.0.0' },
      { label: 'Updated', value: '2025-07-01' },
    ],
    demo: 'https://www.kaggle.com/code/waltertmoyaaraya/divvy-chicago-strategic-insights-jan-jun-2025',
  },
]

const WORK_EXPERIENCE_EN: WorkExperience[] = [
  {
    id: 'wm-work-2',
    title: 'Quantitative & AI Developer',
    company: 'Independent project',
    start: 'Oct 2024',
    end: 'Present',
    location: 'Remote · Chile',
    summary:
      'Applied research, tool development and strategy evaluation using market data.',
    highlights: [
      'Built a Python research platform with feature engineering, event labeling and backtesting.',
      'Integrated purged temporal validation with embargo, data quality checks and artifact tracking to reduce information leakage.',
      'Published FSG Ultimate and portfolio analysis and optimization tools.',
    ],
    stack: ['Python', 'C#/.NET', 'Time Series', 'Backtesting'],
  },
  {
    id: 'wm-work-3',
    title: 'Junior Programmer',
    company: 'ClickAlgo',
    start: 'Nov 2023',
    end: 'Oct 2024',
    location: 'United Kingdom · Remote',
    link: 'https://clickalgo.com',
    summary:
      'Quantitative indicator development for cTrader and support for international users.',
    highlights: [
      'Implemented K-means and Gaussian Mixture Models in C#/.NET to analyze market patterns.',
      'Developed Moya Bands using a Kalman filter, MEWMA and ATR bands, and correlation-based diversification tools.',
      'Delivered documented modules and published a technical article on minimum-correlation Forex portfolios.',
    ],
    stack: ['C#/.NET', 'cTrader', 'Clustering', 'Signal Processing'],
  },
  {
    id: 'wm-work-4',
    title: 'Analyst Trainee',
    company: 'PwC Chile',
    start: 'Aug 2022',
    end: 'Nov 2022',
    location: 'Santiago · Chile',
    link: 'https://www.pwc.com/cl/',
    summary:
      'Data integration and quality checks in Google Cloud for operational analysis and reporting.',
    highlights: [
      'Supported ETL pipelines with Data Fusion, BigQuery, Cloud Storage, Python and REST APIs.',
      'Optimized historical inventory loads with hundreds of thousands of records to under 30 seconds per file.',
      'Contributed to schema validation, data quality checks and inconsistency monitoring.',
    ],
    stack: ['Google Cloud', 'BigQuery', 'Python', 'ETL'],
  },
  {
    id: 'wm-work-1',
    title: 'Founder',
    company: 'Crafium',
    start: 'Feb 2025',
    end: 'Nov 2025',
    location: 'Santiago · Chile',
    summary:
      'Product design and manufacturing venture using laser cutting and engraving.',
    highlights: [
      'Managed design, materials, production, quality control, sales and distribution.',
      'Analyzed costs, production times and margins to assess pricing and profitability.',
    ],
    stack: ['Operations', 'Cost Analysis', 'Product Design'],
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
