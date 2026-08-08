export type ArtworkStatus =
  | 'available'
  | 'reserved'
  | 'sold'
  | 'not-for-sale';

export interface Artwork {
  slug: string;
  title: string;
  year: number;
  image: string;
  technique: string;
  dimensions: string;
  description?: string;
  price?: number;
  status: ArtworkStatus;
  isOriginal: boolean;
}
