import type { ArtworkStatus } from '../app/types/artwork';

export const artworkStatusLabels: Record<ArtworkStatus, string> = {
  available: 'Disponible',
  reserved: 'Reservada',
  sold: 'Vendida',
  'not-for-sale': 'No disponible',
};

export function formatArtworkPrice(price?: number): string {
  if (typeof price !== 'number') {
    return '';
  }

  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(price);
}
