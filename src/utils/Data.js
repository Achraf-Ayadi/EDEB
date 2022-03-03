import noir1 from '../images/noir-1.jpg'
import noir2 from '../images/noir-2.png'
import noir3 from '../images/noir-3.png'
import dor1 from '../images/Blanc-dor-1.png'
import dor2 from '../images/blanc-dor-2.png'
import dor3 from '../images/blanc-dor-3.png'
import dor4 from '../images/blanc-dor-4.jpg'
import silver1 from '../images/silver-1.jpg'
import silver2 from '../images/silver-2.png'
import silver3 from '../images/silver-3.png'
import silver4 from '../images/silver-4.png'

export const DataProducts = [
  {
    id: '1',
    name: 'Qamono broderies ottomanes or',
    price: 6000,
    image: dor1,

    colors: ['#e9c818'],
    // company: 'marcos',
    description:
      " Le concept innovant du Qamono allie le style du qamis à la coupe du kimono pour former une pièce singulière. Il s'adresse aux personnes cherchant un vêtement traditionnel pour habiller leurs fêtes, décent mais différent des autres.",
    category: 'qamono',
    shipping: true,
  },
  {
    id: '2',
    name: 'Qamono broderies ottomanes argent',
    price: 6000,
    image: silver3,

    colors: ['#c0c0c0'],
    // company: 'marcos',
    description:
      " Le concept innovant du Qamono allie le style du qamis à la coupe du kimono pour former une pièce singulière. Il s'adresse aux personnes cherchant un vêtement traditionnel pour habiller leurs fêtes, décent mais différent des autres.",
    category: 'qamono',
    shipping: true,
  },
  {
    id: '3',
    name: 'Qamono  noir broderies ottomanes',
    price: 6000,
    image: noir2,

    colors: ['#000000'],
    // company: 'marcos',
    description:
      " Le concept innovant du Qamono allie le style du qamis à la coupe du kimono pour former une pièce singulière. Il s'adresse aux personnes cherchant un vêtement traditionnel pour habiller leurs fêtes, décent mais différent des autres.",
    category: 'qamono',
    shipping: true,
  },
]

export const DataSingleProducts = [
  {
    id: '1',
    stock: 1,
    price: 6000,
    taille: [
      {
        size: 's',
        stock: 1,
      },
      {
        size: 'm',
        stock: 1,
      },

      {
        size: 'l',
        stock: 1,
      },

      {
        size: 'xl',
        stock: 1,
      },
    ],
    shipping: true,
    colors: ['#e9c818'],
    category: 'qamono',
    images: [dor1, dor2, dor3, dor4],
    // reviews: 25,
    // stars: 4.9,
    name: 'Qamono broderies ottomanes or',
    description:
      "Le concept innovant du Qamono allie le style du qamis à la coupe du kimono pour former une pièce singulière. Il s'adresse aux personnes cherchant un vêtement traditionnel pour habiller leurs fêtes, décent mais différent des autres.",
    // company: 'marcos',
  },
  {
    id: '2',
    stock: 1,
    price: 6000,
    taille: [
      {
        size: 's',
        stock: 1,
      },
      {
        size: 'm',
        stock: 1,
      },

      {
        size: 'l',
        stock: 1,
      },

      {
        size: 'xl',
        stock: 1,
      },
    ],
    shipping: true,
    colors: ['#c0c0c0'],
    category: 'qamono',
    images: [silver3, silver1, silver2, silver4],
    // reviews: 25,
    // stars: 4.9,
    name: 'Qamono broderies ottomanes argent',
    description:
      "Le concept innovant du Qamono allie le style du qamis à la coupe du kimono pour former une pièce singulière. Il s'adresse aux personnes cherchant un vêtement traditionnel pour habiller leurs fêtes, décent mais différent des autres.",
    // company: 'marcos',
  },
  {
    id: '3',
    stock: 1,
    price: 6000,
    taille: [
      {
        size: 's',
        stock: 1,
      },
      {
        size: 'm',
        stock: 1,
      },

      {
        size: 'l',
        stock: 1,
      },

      {
        size: 'xl',
        stock: 1,
      },
    ],
    shipping: true,
    colors: ['#000000'],
    category: 'qamono',
    images: [noir2, noir1, noir3],
    // reviews: 25,
    // stars: 4.9,
    name: 'Qamono  noir broderies ottomanes',
    description:
      "Le concept innovant du Qamono allie le style du qamis à la coupe du kimono pour former une pièce singulière. Il s'adresse aux personnes cherchant un vêtement traditionnel pour habiller leurs fêtes, décent mais différent des autres.",
    // company: 'marcos',
  },
]
