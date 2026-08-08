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
