export interface Product {
  id: string;
  name: string;
  category: 'EV' | 'Solar' | 'Industrial' | 'Home';
  capacity: string;
  voltage: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    capacity: string;
    voltage: string;
    chemistry: string;
    cycleLife: string;
    chargingTime: string;
    weight: string;
    dimensions: string;
    temperature: string;
    warranty: string;
  };
  applications: string[];
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: 'lp-ev-100',
    name: 'Legacy Power EV-100',
    category: 'EV',
    capacity: '100 kWh',
    voltage: '400V',
    price: 12999,
    originalPrice: 14999,
    discount: 13,
    image: 'electric vehicle battery',
    description: 'Premium lithium-ion battery designed for high-performance electric vehicles. Features rapid charging and exceptional longevity.',
    features: [
      'Ultra-fast charging (0-80% in 25 minutes)',
      '2000+ charge cycles',
      'Advanced thermal management',
      'Intelligent BMS (Battery Management System)',
      'Carbon fiber reinforced casing',
      'Regenerative braking optimization'
    ],
    specs: {
      capacity: '100 kWh',
      voltage: '400V DC',
      chemistry: 'NMC 811 Lithium-Ion',
      cycleLife: '2000+ cycles (80% capacity retention)',
      chargingTime: '25 minutes (10-80% with DC fast charging)',
      weight: '450 kg',
      dimensions: '1200 × 800 × 150 mm',
      temperature: '-20°C to 60°C',
      warranty: '8 years / 160,000 km'
    },
    applications: ['Electric Vehicles', 'High-Performance EVs', 'Electric Trucks', 'Commercial Fleet'],
    inStock: true,
    isNew: true
  },
  {
    id: 'lp-ev-60',
    name: 'Legacy Power EV-60',
    category: 'EV',
    capacity: '60 kWh',
    voltage: '350V',
    price: 7999,
    image: 'electric car battery pack',
    description: 'Compact and efficient battery solution for urban electric vehicles and compact cars.',
    features: [
      'Fast charging capability',
      '1800+ charge cycles',
      'Lightweight design',
      'Smart thermal control',
      'Modular architecture',
      'OTA update compatible'
    ],
    specs: {
      capacity: '60 kWh',
      voltage: '350V DC',
      chemistry: 'LFP Lithium-Ion',
      cycleLife: '1800+ cycles',
      chargingTime: '35 minutes (10-80%)',
      weight: '280 kg',
      dimensions: '900 × 700 × 120 mm',
      temperature: '-15°C to 55°C',
      warranty: '6 years / 120,000 km'
    },
    applications: ['Compact EVs', 'Urban Mobility', 'City Cars', 'Hybrid Vehicles'],
    inStock: true
  },
  {
    id: 'lp-solar-15',
    name: 'Legacy Solar Pro 15',
    category: 'Solar',
    capacity: '15 kWh',
    voltage: '48V',
    price: 3499,
    image: 'solar battery storage',
    description: 'Premium home energy storage system designed for residential solar installations.',
    features: [
      'Deep discharge protection',
      '6000+ charge cycles',
      'Solar inverter compatible',
      'Grid-tie ready',
      'Mobile app monitoring',
      'Weather-resistant enclosure'
    ],
    specs: {
      capacity: '15 kWh',
      voltage: '48V DC',
      chemistry: 'LiFePO4',
      cycleLife: '6000+ cycles (90% DoD)',
      chargingTime: '3-4 hours (solar)',
      weight: '95 kg',
      dimensions: '650 × 450 × 200 mm',
      temperature: '-10°C to 50°C',
      warranty: '10 years'
    },
    applications: ['Residential Solar', 'Off-Grid Systems', 'Backup Power', 'Energy Independence'],
    inStock: true,
    isNew: true
  },
  {
    id: 'lp-solar-30',
    name: 'Legacy Solar Ultra 30',
    category: 'Solar',
    capacity: '30 kWh',
    voltage: '96V',
    price: 6299,
    originalPrice: 6999,
    discount: 10,
    image: 'commercial solar battery',
    description: 'Commercial-grade solar energy storage for larger homes and small businesses.',
    features: [
      'Expandable capacity',
      '7000+ charge cycles',
      'Peak shaving optimization',
      'Time-of-use arbitrage',
      'Cloud monitoring',
      'Emergency backup mode'
    ],
    specs: {
      capacity: '30 kWh',
      voltage: '96V DC',
      chemistry: 'LiFePO4',
      cycleLife: '7000+ cycles',
      chargingTime: '5-6 hours',
      weight: '185 kg',
      dimensions: '800 × 600 × 250 mm',
      temperature: '-10°C to 50°C',
      warranty: '12 years'
    },
    applications: ['Commercial Solar', 'Small Business', 'Large Homes', 'Microgrids'],
    inStock: true
  },
  {
    id: 'lp-ind-200',
    name: 'Legacy Industrial 200',
    category: 'Industrial',
    capacity: '200 kWh',
    voltage: '800V',
    price: 24999,
    image: 'industrial battery system',
    description: 'Heavy-duty industrial battery system for manufacturing, data centers, and critical infrastructure.',
    features: [
      'Enterprise-grade reliability',
      '5000+ charge cycles',
      'Redundant safety systems',
      'Scalable architecture',
      '24/7 remote monitoring',
      'Predictive maintenance AI'
    ],
    specs: {
      capacity: '200 kWh',
      voltage: '800V DC',
      chemistry: 'NMC Lithium-Ion',
      cycleLife: '5000+ cycles',
      chargingTime: '2 hours (high-power charging)',
      weight: '1200 kg',
      dimensions: '2000 × 1200 × 400 mm',
      temperature: '-20°C to 55°C',
      warranty: '15 years'
    },
    applications: ['Manufacturing', 'Data Centers', 'Warehouses', 'Critical Infrastructure'],
    inStock: true
  },
  {
    id: 'lp-ind-500',
    name: 'Legacy Industrial Mega 500',
    category: 'Industrial',
    capacity: '500 kWh',
    voltage: '1000V',
    price: 54999,
    image: 'large industrial battery',
    description: 'Utility-scale energy storage solution for grid stabilization and large industrial facilities.',
    features: [
      'Grid-scale performance',
      '4500+ charge cycles',
      'Advanced fire suppression',
      'Container-based deployment',
      'SCADA integration',
      'Load balancing automation'
    ],
    specs: {
      capacity: '500 kWh',
      voltage: '1000V DC',
      chemistry: 'NMC 622 Lithium-Ion',
      cycleLife: '4500+ cycles',
      chargingTime: '3 hours',
      weight: '2800 kg',
      dimensions: '6000 × 2400 × 2600 mm (20ft container)',
      temperature: '-25°C to 50°C',
      warranty: '20 years'
    },
    applications: ['Utilities', 'Grid Storage', 'Factories', 'Renewable Integration'],
    inStock: true
  },
  {
    id: 'lp-home-10',
    name: 'Legacy Home Power 10',
    category: 'Home',
    capacity: '10 kWh',
    voltage: '48V',
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    image: 'home battery backup',
    description: 'Compact home backup power solution for essential loads during outages.',
    features: [
      'Automatic transfer switch',
      '4000+ charge cycles',
      'Silent operation',
      'Wall-mountable',
      'Smart home integration',
      'Eco-friendly materials'
    ],
    specs: {
      capacity: '10 kWh',
      voltage: '48V DC',
      chemistry: 'LiFePO4',
      cycleLife: '4000+ cycles',
      chargingTime: '2-3 hours',
      weight: '65 kg',
      dimensions: '600 × 400 × 150 mm',
      temperature: '-5°C to 45°C',
      warranty: '8 years'
    },
    applications: ['Home Backup', 'Emergency Power', 'Off-Grid Cabins', 'RVs'],
    inStock: true,
    isNew: true
  },
  {
    id: 'lp-home-5',
    name: 'Legacy Home Essential 5',
    category: 'Home',
    capacity: '5 kWh',
    voltage: '24V',
    price: 1499,
    image: 'small home battery',
    description: 'Entry-level home energy storage for basic backup needs and solar integration.',
    features: [
      'Plug-and-play installation',
      '3500+ charge cycles',
      'Compact footprint',
      'LED status indicators',
      'Multiple charging modes',
      'Affordable solution'
    ],
    specs: {
      capacity: '5 kWh',
      voltage: '24V DC',
      chemistry: 'LiFePO4',
      cycleLife: '3500+ cycles',
      chargingTime: '2 hours',
      weight: '35 kg',
      dimensions: '500 × 300 × 120 mm',
      temperature: '-5°C to 40°C',
      warranty: '5 years'
    },
    applications: ['Essential Backup', 'Small Homes', 'Apartments', 'Emergency Kits'],
    inStock: true
  }
];

export const upcomingProducts = [
  {
    id: 'lp-ev-150-coming',
    name: 'Legacy Power EV-150 Ultra',
    category: 'EV',
    capacity: '150 kWh',
    voltage: '800V',
    description: 'Next-generation solid-state battery technology with 1000km+ range',
    launchDate: '2026-06-15',
    image: 'futuristic battery technology'
  },
  {
    id: 'lp-graphene-coming',
    name: 'Legacy Graphene X1',
    category: 'EV',
    capacity: '120 kWh',
    voltage: '900V',
    description: 'Revolutionary graphene-based battery with 5-minute charging',
    launchDate: '2026-09-01',
    image: 'graphene battery concept'
  },
  {
    id: 'lp-quantum-coming',
    name: 'Legacy Quantum Cell',
    category: 'Industrial',
    capacity: '1000 kWh',
    voltage: '1500V',
    description: 'Quantum dot enhanced energy storage for utility-scale applications',
    launchDate: '2027-01-15',
    image: 'quantum battery technology'
  }
];

export const offers = [
  {
    id: 'offer-1',
    title: 'New Year Flash Sale',
    description: 'Up to 20% off on all EV batteries',
    discount: 20,
    validUntil: '2026-02-01',
    products: ['lp-ev-100', 'lp-ev-60'],
    bannerColor: 'blue'
  },
  {
    id: 'offer-2',
    title: 'Solar Power Bundle',
    description: 'Buy 2 Solar batteries, get 15% off',
    discount: 15,
    validUntil: '2026-03-15',
    products: ['lp-solar-15', 'lp-solar-30'],
    bannerColor: 'green'
  },
  {
    id: 'offer-3',
    title: 'Industrial Mega Deal',
    description: 'Free installation on Industrial 500',
    discount: 0,
    validUntil: '2026-02-28',
    products: ['lp-ind-500'],
    bannerColor: 'orange'
  }
];
