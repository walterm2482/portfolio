import type { Lang } from './data'

export function getProfileData(lang: Lang) {
  const en = lang === 'en'
  return {
    capabilities: [
      {
        id: 'data',
        number: '01',
        title: en ? 'Data that supports decisions' : 'Datos para tomar decisiones',
        description: en
          ? 'From raw data to useful information: ETL pipelines, quality checks, exploratory analysis and dashboards with a business perspective.'
          : 'De los datos de origen a información útil: pipelines ETL, controles de calidad, análisis exploratorio y dashboards con una mirada de negocio.',
        stack: ['Python', 'SQL', 'BigQuery', 'Google Cloud', 'Power BI'],
      },
      {
        id: 'ml',
        number: '02',
        title: en ? 'Models you can evaluate' : 'Modelos que se pueden evaluar',
        description: en
          ? 'Predictive modeling, computer vision and explainability. Reproducible workflows, temporal validation and a clear account of model limitations.'
          : 'Modelos predictivos, visión por computador y explicabilidad. Flujos reproducibles, validación temporal y una lectura clara de sus limitaciones.',
        stack: ['Scikit-learn', 'TensorFlow', 'YOLOv8', 'SHAP / LIME', 'Docker'],
      },
      {
        id: 'quant',
        number: '03',
        title: en
          ? 'Quantitative research and development'
          : 'Investigación y desarrollo cuantitativo',
        description: en
          ? 'Financial ML with nested temporal validation, cost-aware backtesting and pre-registered prospective monitoring. Market indicators and portfolio tools with explicit risk controls.'
          : 'ML financiero con validación temporal anidada, backtesting con costos y seguimiento prospectivo pre-registrado. Indicadores y herramientas de portafolios con controles de riesgo explícitos.',
        stack: ['Python', 'AFML', 'CPCV', 'Backtesting', 'C# / .NET', 'cTrader'],
      },
    ],
    education: [
      {
        degree: en
          ? 'MSc in Engineering Sciences'
          : 'Magíster en Ciencias de la Ingeniería',
        detail: en
          ? 'Industrial specialization · Highest distinction'
          : 'Mención Industrias · Máxima distinción',
        institution: 'Universidad Diego Portales',
        year: '2021 — 2023',
      },
      {
        degree: en ? 'Industrial Engineering' : 'Ingeniería Civil Industrial',
        detail: en
          ? 'Graduated with distinction · Grade: 5.7/7.0'
          : 'Titulado con distinción · Nota: 5,7/7,0',
        institution: 'Universidad Diego Portales',
        year: '2016 — 2023',
      },
    ],
    thesis: en
      ? 'Master’s thesis: video-based construction machinery monitoring with YOLOv8 and BoT-SORT, combining object detection, tracking and activity quantification.'
      : 'Tesis de magíster: monitoreo de maquinaria de construcción por video con YOLOv8 y BoT-SORT, integrando detección, seguimiento y cuantificación de actividad.',
    learning: [
      { name: 'MLOps', institution: 'Duke University', year: '2026' },
      { name: 'Deep Learning', institution: 'DeepLearning.AI', year: '2025' },
      { name: 'Data Science', institution: 'IBM', year: '2025' },
      { name: 'CS50 AI', institution: 'Harvard University', year: '2025' },
    ],
  }
}
