import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { BudgetPage } from './pages/BudgetPage';
import { LogementPage } from './pages/LogementPage';
import { SanteMentalePage } from './pages/SanteMentalePage';
import { AlimentationPage } from './pages/AlimentationPage';
import { ReussitePage } from './pages/ReussitePage';
import { AidesPage } from './pages/AidesPage';
import { TemoignagesPage } from './pages/TemoignagesPage';
import { GlossairePage } from './pages/GlossairePage';
import { CarteCrousPage } from './pages/CarteCrousPage';
import { SourcesPage } from './pages/SourcesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'budget', Component: BudgetPage },
      { path: 'logement', Component: LogementPage },
      { path: 'sante-mentale', Component: SanteMentalePage },
      { path: 'alimentation', Component: AlimentationPage },
      { path: 'reussite', Component: ReussitePage },
      { path: 'aides', Component: AidesPage },
      { path: 'temoignages', Component: TemoignagesPage },
      { path: 'glossaire', Component: GlossairePage },
      { path: 'carte-crous', Component: CarteCrousPage },
      { path: 'sources', Component: SourcesPage },
      { path: '*', Component: NotFoundPage }
    ]
  }
]);
