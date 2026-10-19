import type { Lang } from './data'
import type { CaseSlug } from '@/lib/project-routes'
import { SGU_USER_GUIDES, SGU_VIDEO_ID } from '@/lib/sgu'

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
  video?: { youtubeId: string; title: string; description: string }
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
    title: 'FSG Ultimate v2.3',
    lead: 'Smart Grid Ultimate (SGU): un cBot de reversión a la media con gestión de cesta, controles de riesgo y una configuración simplificada en v2.3.',
    scope: 'Producto independiente · C# / .NET 6 · cTrader Automate',
    problem:
      'Convertir señales de mercado en una estrategia automatizada con exposición acotada y salidas definidas.',
    contribution: [
      'Desarrollé el cBot y su lógica de entrada, gestión de cesta y salida.',
      'Integré confirmación estocástica multitemporal opcional, objetivos por ATR y controles de riesgo configurables.',
      'Mejoré la conciliación de órdenes, la recuperación de posiciones y los reintentos por margen insuficiente; añadí alertas opcionales por Telegram.',
      'Simplifiqué v2.3 retirando el filtro ADX y sus cinco controles, con 56 parámetros conservados.',
    ],
    flow: ['Evaluar vela cerrada', 'Confirmar señal', 'Gestionar cesta y riesgo'],
    decisions: [
      {
        title: 'Señal y confirmación',
        text: 'El disparador evalúa la vela cerrada. La confirmación multitemporal opcional puede considerar una vela en formación; la guía explica sus implicaciones.',
      },
      {
        title: 'Exposición acotada',
        text: 'Posiciones de igual tamaño, sin martingala, y una cesta direccional por instancia. El máximo de posiciones limita el volumen previsto.',
      },
      {
        title: 'Salidas independientes',
        text: 'Objetivo ATR opcional y límites por balance, pips y posición en el bróker. Los umbrales inician una respuesta; el resultado depende de la ejecución.',
      },
    ],
    results: [
      {
        title: 'v2.3 publicada',
        text: 'Actualización del 18 de octubre de 2026 en cTrader Store.',
      },
      {
        title: '56 parámetros',
        text: 'Configuración sin ADX, con instrucciones de migración desde los presets anteriores.',
      },
      {
        title: 'Guía de 63 páginas',
        text: 'Mecánica, instalación, parámetros, riesgos y estudio histórico de 13 pares con análisis Monte Carlo.',
      },
    ],
    limitation:
      'El estudio de las guías usa v2.2.2 (ensamblado 2.2.2.0); no se volvió a ejecutar con v2.3. Los resultados son simulaciones históricas, no rentabilidad auditada. Las tendencias persistentes pueden generar pérdidas flotantes importantes.',
    screenshots: [
      {
        image: '/projects/cases/fsg-signal.webp',
        alt: 'Gráfico de cTrader con señales Stochastic y confirmación en dos marcos temporales',
        caption:
          'Gráfico anotado de la galería del producto: alineación Stochastic multitemporal.',
        source: fsg,
      },
    ],
    video: {
      youtubeId: SGU_VIDEO_ID,
      title: 'SGU v2.3: instalación, optimización y backtesting',
      description:
        'Recorrido del producto en cTrader: configuración, optimización y pruebas históricas.',
    },
    sources: [
      { label: 'Producto en cTrader Store', url: fsg },
      { label: 'Guía de usuario v2.3 en español (PDF)', url: SGU_USER_GUIDES.es.url },
    ],
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
    title: 'FSG Ultimate v2.3',
    lead: 'Smart Grid Ultimate (SGU): a mean-reversion cBot with basket management, risk controls and a simplified configuration in v2.3.',
    scope: 'Independent product · C# / .NET 6 · cTrader Automate',
    problem:
      'Translate market signals into an automated strategy with bounded exposure and defined exits.',
    contribution: [
      'Developed the cBot, including entry, basket management and exit logic.',
      'Integrated optional multi-timeframe stochastic confirmation, ATR targets and configurable risk controls.',
      'Improved order reconciliation, position recovery and insufficient-margin retries; added optional Telegram alerts.',
      'Simplified v2.3 by removing the ADX filter and its five controls, retaining 56 parameters.',
    ],
    flow: ['Evaluate closed bar', 'Confirm signal', 'Manage basket and risk'],
    decisions: [
      {
        title: 'Signal and confirmation',
        text: 'The trigger evaluates the closed bar. Optional multi-timeframe confirmation can consider a forming bar; the guide explains the implications.',
      },
      {
        title: 'Bounded exposure',
        text: 'Equal-size positions, no martingale, and one directional basket per instance. The position limit bounds intended volume.',
      },
      {
        title: 'Independent exits',
        text: 'Optional ATR target and balance, pip and broker position stops. Thresholds start a response; the outcome depends on execution.',
      },
    ],
    results: [
      {
        title: 'v2.3 published',
        text: 'Updated on 18 October 2026 on cTrader Store.',
      },
      {
        title: '56 parameters',
        text: 'Configuration without ADX, with migration instructions for earlier presets.',
      },
      {
        title: '63-page guide',
        text: 'Mechanics, installation, settings, risks and a historical study of 13 pairs with Monte Carlo analysis.',
      },
    ],
    limitation:
      'The study in the guides uses v2.2.2 (assembly 2.2.2.0); it was not rerun with v2.3. Results are historical simulations, not audited returns. Persistent trends can create substantial floating losses.',
    screenshots: [
      {
        image: '/projects/cases/fsg-signal.webp',
        alt: 'cTrader chart with Stochastic signals and confirmation across two timeframes',
        caption:
          'Annotated chart from the product gallery: multi-timeframe Stochastic alignment.',
        source: fsg,
      },
    ],
    video: {
      youtubeId: SGU_VIDEO_ID,
      title: 'SGU v2.3: setup, optimization and backtesting',
      description:
        'A product walkthrough in cTrader covering setup, optimization and historical testing.',
    },
    sources: [
      { label: 'Product on cTrader Store', url: fsg },
      { label: 'SGU v2.3 user guide in English (PDF)', url: SGU_USER_GUIDES.en.url },
    ],
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
