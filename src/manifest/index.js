import { Calculator as CalcIcon } from 'lucide-react';
import { lazy } from 'react';

const CalculatorManifest = {
  id: 'calculator',
  name: 'Calculator',
  icon: CalcIcon,
  component: lazy(() => import('../../index.js')),
  description: 'Basic calculator with standard operations.',
  category: 'utilities',
  width: 320,
  height: 480,
  canUninstall: true,
  screenshots: ['https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&q=80']
}

export default CalculatorManifest;