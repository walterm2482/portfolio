import type { Lang } from './data'
import type { CaseSlug } from '@/lib/project-routes'

type Decision = { title: string; text: string }
type Evidence = { image: string; alt: string; caption: string; source: string }
export type CaseStudy = {
  slug: CaseSlug
  category: string
  title: string
  lead: string
  scope: string
  problem: string
  contribution: string[]
  flow: string[]
  decisions: Decision[]
  results: Decision[]
  limitation: string
  screenshots: Evidence[]
  sources: { label: string; url: string }[]
}

const optimizer = 'https://github.com/walterm2482/portfolio-optimizer'
const optimizerRevision = `${optimizer}/blob/ef5477d63f24991a31699c797e0dce3a7a7f40a0`
const ml = 'https://github.com/walterm2482/kibernum_ml_modulo_10_actividad_modular'
const mlRevision = `${ml}/blob/28dacd17ec68dafbbab97d7eff5b26701d1096aa`
const fsg = 'https://ctrader.com/products/438'

const ES: Record<CaseSlug, CaseStudy> = {
  'fsg-ultimate': {
    slug: 'fsg-ultimate',
    category: 'Desarrollo cuantitativo',
    title: 'FSG Ultimate v2.1',
    lead: 'De una señal de reversión a la media a un cBot con reglas explícitas de ejecución y riesgo.',
    scope: 'Producto independiente · C# / .NET 6 · cTrader Automate',
    problem:
      'Convertir señales de mercado en una estrategia automatizada con exposición acotada y salidas definidas.',
    contribution: [
      'Desarrollé el cBot y su lógica de entrada, gestión de cesta y salida.',
      'Integré confirmación multitemporal, filtros direccionales y controles de riesgo configurables.',
    ],
    flow: ['Evaluar vela cerrada', 'Confirmar señal', 'Gestionar cesta y riesgo'],
    decisions: [
      {
        title: 'Velas cerradas',
        text: 'La evaluación al cierre hace determinista la señal.',
      },
      {
        title: 'Exposición acotada',
        text: 'Tamaño fijo por posición y una sola cesta activa.',
      },
      {
        title: 'Salidas independientes',
        text: 'ATR para la salida; stops por balance, pips y posición en el servidor.',
      },
    ],
    results: [
      { title: 'v2.1 publicada', text: 'Ficha y versión disponibles en cTrader Store.' },
      {
        title: '3 controles de riesgo',
        text: 'Documentados en la descripción de la versión.',
      },
    ],
    limitation:
      'La evidencia pública documenta el producto y sus reglas. No se presenta rentabilidad auditada.',
    screenshots: [
      {
        image: '/projects/cases/fsg-signal.webp',
        alt: 'Gráfico de cTrader con señales Stochastic y confirmación en dos marcos temporales',
        caption:
          'Gráfico anotado de la galería del producto: alineación Stochastic multitemporal.',
        source: fsg,
      },
    ],
    sources: [{ label: 'Producto y documentación en cTrader', url: fsg }],
  },
  'portfolio-optimizer': {
    slug: 'portfolio-optimizer',
    category: 'Datos y optimización',
    title: 'Portfolio Optimizer',
    lead: 'Una aplicación para comparar asignaciones de activos y explorar su comportamiento histórico.',
    scope: 'Proyecto independiente · Python · Dash + CLI',
    problem:
      'Comparar métodos de construcción de portafolios requiere conectar precios, restricciones, rebalanceo y visualizaciones en un flujo coherente.',
    contribution: [
      'Construí el flujo de datos, los módulos de optimización y el motor de backtesting.',
      'Desarrollé el dashboard Dash y la CLI para configurar universos, métodos y perfiles de riesgo.',
      'Integré señales de retorno esperado y pruebas para predicción y frecuencias de rebalanceo.',
    ],
    flow: ['Preparar retornos', 'Construir pesos', 'Simular y visualizar'],
    decisions: [
      {
        title: 'Módulos separados',
        text: 'Optimización, señales, backtest e interfaz viven en módulos distintos; la CLI permite trabajar sin el dashboard.',
      },
      {
        title: 'Comparación explícita',
        text: 'Sharpe, mínima varianza, HRP y pesos iguales permiten contrastar objetivos y asignaciones.',
      },
      {
        title: 'Robustez numérica',
        text: 'El código limpia matrices de covarianza y correlación, normaliza pesos y contempla fallos del optimizador.',
      },
    ],
    results: [
      {
        title: '4 métodos implementados',
        text: 'Disponibles en el módulo de optimización.',
      },
      {
        title: 'Dashboard + CLI',
        text: 'Dos interfaces publicadas en el mismo repositorio.',
      },
      {
        title: 'Equity y drawdown',
        text: 'Vistas documentadas con capturas reales de la aplicación.',
      },
    ],
    limitation:
      'Las curvas son simulaciones históricas de la aplicación. El repositorio acredita funcionalidades, no rendimiento futuro ni una evaluación independiente de la estrategia.',
    screenshots: [
      {
        image: '/projects/cases/portfolio-dashboard.png',
        alt: 'Dashboard de Portfolio Optimizer con configuración de activos y asignación de pesos',
        caption: 'Configuración del universo de activos y construcción del portafolio.',
        source: `${optimizerRevision}/images/app_screenshot.png`,
      },
      {
        image: '/projects/cases/portfolio-equity.png',
        alt: 'Gráficos de equity y drawdown del backtest en Portfolio Optimizer',
        caption: 'Vista de equity en USD y drawdown de una ejecución histórica.',
        source: `${optimizerRevision}/images/app_equity.png`,
      },
    ],
    sources: [
      { label: 'Repositorio y guía de uso', url: optimizer },
      {
        label: 'Implementación de los optimizadores',
        url: `${optimizerRevision}/src/portfolio/optimizers.py`,
      },
      {
        label: 'Motor de backtesting',
        url: `${optimizerRevision}/src/backtest/engine.py`,
      },
    ],
  },
  'mlops-api': {
    slug: 'mlops-api',
    category: 'Machine Learning · MLOps',
    title: 'Machine Learning API',
    lead: 'Del entrenamiento de un Random Forest a un servicio REST con validación de entradas, pruebas y Docker.',
    scope: 'Proyecto académico · Kibernum Academy · Python / Flask',
    problem:
      'Un modelo entrenado necesita una interfaz reproducible para recibir datos, validar su estructura y devolver predicciones útiles.',
    contribution: [
      'Implementé el entrenamiento, evaluación y serialización del modelo con scikit-learn y joblib.',
      'Construí la API Flask con predicción individual y por lote, probabilidades y respuestas de error.',
      'Añadí pruebas de endpoints y entradas inválidas, documentación de uso y configuración Docker.',
    ],
    flow: ['Entrenar y guardar', 'Validar solicitud', 'Responder predicción'],
    decisions: [
      {
        title: 'Entrenamiento separado',
        text: 'El modelo se serializa una vez y la API lo carga al iniciar, evitando entrenar en cada solicitud.',
      },
      {
        title: 'Contrato de entrada',
        text: 'La API acepta features o instances y verifica la cantidad de variables antes de predecir.',
      },
      {
        title: 'Pruebas y portabilidad',
        text: 'La fábrica create_app permite probar con el cliente de Flask; Docker documenta el entorno de ejecución.',
      },
    ],
    results: [
      {
        title: '2 endpoints',
        text: 'Estado del servicio y predicción con clases y probabilidades.',
      },
      {
        title: '4 pruebas definidas',
        text: 'Estado, predicción válida, clave incorrecta y dimensión inválida.',
      },
      {
        title: '455 / 114 muestras',
        text: 'Entrenamiento y prueba documentados en la captura del dataset Breast Cancer Wisconsin.',
      },
    ],
    limitation:
      'Prototipo académico con un dataset público. Las capturas conservan una ejecución documentada en el repositorio; las métricas no corresponden a una validación clínica.',
    screenshots: [
      {
        image: '/projects/cases/ml-api-predict.png',
        alt: 'Solicitud curl a la API Flask y respuesta JSON con clase, predicción y probabilidades',
        caption: 'Solicitud de predicción y respuesta JSON del servicio.',
        source: `${mlRevision}/imgs/04_api_predict.png`,
      },
      {
        image: '/projects/cases/ml-training.png',
        alt: 'Registro del entrenamiento de Random Forest con 455 muestras de entrenamiento y 114 de prueba',
        caption: 'Registro original de entrenamiento, evaluación y guardado del modelo.',
        source: `${mlRevision}/imgs/01_entrenamiento_modelo.png`,
      },
    ],
    sources: [
      { label: 'Repositorio y guía de uso', url: ml },
      { label: 'API y validación de entradas', url: `${mlRevision}/app.py` },
      { label: 'Pruebas de errores', url: `${mlRevision}/test_api_errors.py` },
    ],
  },
}

const EN: Record<CaseSlug, CaseStudy> = {
  'fsg-ultimate': {
    slug: 'fsg-ultimate',
    category: 'Quantitative development',
    title: 'FSG Ultimate v2.1',
    lead: 'Turning a mean-reversion signal into a cBot with explicit execution and risk rules.',
    scope: 'Independent product · C# / .NET 6 · cTrader Automate',
    problem:
      'Translate market signals into an automated strategy with bounded exposure and defined exits.',
    contribution: [
      'Developed the cBot, including entry, basket management and exit logic.',
      'Integrated multi-timeframe confirmation, directional filters and configurable risk controls.',
    ],
    flow: ['Evaluate closed bar', 'Confirm signal', 'Manage basket and risk'],
    decisions: [
      {
        title: 'Closed bars',
        text: 'Evaluating at bar close makes the signal deterministic.',
      },
      {
        title: 'Bounded exposure',
        text: 'Fixed size per position and one active basket.',
      },
      {
        title: 'Independent exits',
        text: 'ATR-based exit; balance, pip and server-side position stops.',
      },
    ],
    results: [
      {
        title: 'v2.1 published',
        text: 'Product listing and release available on cTrader Store.',
      },
      { title: '3 risk controls', text: 'Documented in the release description.' },
    ],
    limitation:
      'Public evidence documents the product and its rules. No audited returns are presented.',
    screenshots: [
      {
        image: '/projects/cases/fsg-signal.webp',
        alt: 'cTrader chart with Stochastic signals and confirmation across two timeframes',
        caption:
          'Annotated chart from the product gallery: multi-timeframe Stochastic alignment.',
        source: fsg,
      },
    ],
    sources: [{ label: 'Product and documentation on cTrader', url: fsg }],
  },
  'portfolio-optimizer': {
    slug: 'portfolio-optimizer',
    category: 'Data & optimization',
    title: 'Portfolio Optimizer',
    lead: 'An application for comparing asset allocations and exploring their historical behavior.',
    scope: 'Independent project · Python · Dash + CLI',
    problem:
      'Comparing portfolio construction methods requires connecting prices, constraints, rebalancing and visualizations in a coherent workflow.',
    contribution: [
      'Built the data workflow, optimization modules and backtesting engine.',
      'Developed a Dash dashboard and CLI to configure asset universes, methods and risk profiles.',
      'Integrated expected-return signals and tests for prediction and rebalancing frequencies.',
    ],
    flow: ['Prepare returns', 'Build weights', 'Simulate and visualize'],
    decisions: [
      {
        title: 'Separate modules',
        text: 'Optimization, signals, backtesting and UI live in distinct modules; the CLI supports working without the dashboard.',
      },
      {
        title: 'Explicit comparisons',
        text: 'Sharpe, minimum variance, HRP and equal weights provide different objectives and allocations to compare.',
      },
      {
        title: 'Numerical robustness',
        text: 'The code sanitizes covariance and correlation matrices, normalizes weights and handles optimizer failures.',
      },
    ],
    results: [
      { title: '4 methods implemented', text: 'Available in the optimization module.' },
      {
        title: 'Dashboard + CLI',
        text: 'Two interfaces published in the same repository.',
      },
      {
        title: 'Equity and drawdown',
        text: 'Views documented with actual application screenshots.',
      },
    ],
    limitation:
      'The curves are historical simulations from the application. The repository demonstrates functionality, rather than future performance or an independent strategy evaluation.',
    screenshots: [
      {
        image: '/projects/cases/portfolio-dashboard.png',
        alt: 'Portfolio Optimizer dashboard with asset configuration and portfolio weights',
        caption: 'Configuring the asset universe and constructing a portfolio.',
        source: `${optimizerRevision}/images/app_screenshot.png`,
      },
      {
        image: '/projects/cases/portfolio-equity.png',
        alt: 'Equity and drawdown charts from the Portfolio Optimizer backtest',
        caption: 'USD equity and drawdown from a historical run.',
        source: `${optimizerRevision}/images/app_equity.png`,
      },
    ],
    sources: [
      { label: 'Repository and user guide', url: optimizer },
      {
        label: 'Optimizer implementation',
        url: `${optimizerRevision}/src/portfolio/optimizers.py`,
      },
      { label: 'Backtesting engine', url: `${optimizerRevision}/src/backtest/engine.py` },
    ],
  },
  'mlops-api': {
    slug: 'mlops-api',
    category: 'Machine Learning · MLOps',
    title: 'Machine Learning API',
    lead: 'From training a Random Forest to a REST service with input validation, tests and Docker.',
    scope: 'Academic project · Kibernum Academy · Python / Flask',
    problem:
      'A trained model needs a reproducible interface to receive data, validate its shape and return useful predictions.',
    contribution: [
      'Implemented model training, evaluation and serialization with scikit-learn and joblib.',
      'Built a Flask API with single and batch predictions, probabilities and error responses.',
      'Added endpoint and invalid-input tests, usage documentation and Docker configuration.',
    ],
    flow: ['Train and save', 'Validate request', 'Return prediction'],
    decisions: [
      {
        title: 'Separate training',
        text: 'The model is serialized once and loaded when the API starts, avoiding training on each request.',
      },
      {
        title: 'Input contract',
        text: 'The API accepts features or instances and checks the number of variables before predicting.',
      },
      {
        title: 'Testing and portability',
        text: 'The create_app factory supports the Flask test client; Docker documents the execution environment.',
      },
    ],
    results: [
      {
        title: '2 endpoints',
        text: 'Service health and prediction with classes and probabilities.',
      },
      {
        title: '4 tests defined',
        text: 'Health, valid prediction, incorrect key and invalid dimensions.',
      },
      {
        title: '455 / 114 samples',
        text: 'Training and test split documented in the Breast Cancer Wisconsin dataset screenshot.',
      },
    ],
    limitation:
      'Academic prototype using a public dataset. Screenshots preserve a run documented in the repository; the metrics do not represent clinical validation.',
    screenshots: [
      {
        image: '/projects/cases/ml-api-predict.png',
        alt: 'curl request to the Flask API and JSON response with class, prediction and probabilities',
        caption: 'Prediction request and JSON response from the service.',
        source: `${mlRevision}/imgs/04_api_predict.png`,
      },
      {
        image: '/projects/cases/ml-training.png',
        alt: 'Random Forest training log showing 455 training samples and 114 test samples',
        caption: 'Original log of training, evaluation and model serialization.',
        source: `${mlRevision}/imgs/01_entrenamiento_modelo.png`,
      },
    ],
    sources: [
      { label: 'Repository and user guide', url: ml },
      { label: 'API and input validation', url: `${mlRevision}/app.py` },
      { label: 'Error tests', url: `${mlRevision}/test_api_errors.py` },
    ],
  },
}

export function getCaseStudy(lang: Lang, slug: CaseSlug) {
  return (lang === 'en' ? EN : ES)[slug]
}
