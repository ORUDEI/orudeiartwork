export type ArtworkStatus =
  | 'available'
  | 'reserved'
  | 'sold'
  | 'not-for-sale';

export type ArtworkTechnique = 'technicalPenOnPaper';

export interface Artwork {
  slug: string;
  title: string;
  year: number;
  image: string;
  technique: ArtworkTechnique;
  dimensions: string;
  description?: string;
  price?: number;
  status: ArtworkStatus;
  isOriginal: boolean;
}
