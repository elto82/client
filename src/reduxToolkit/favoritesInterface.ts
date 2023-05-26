export interface favorite {
  id: number;
  propertyId: number;
  userId: number;
  property: object;
  user: object;
}

export interface createFavoriteRequest {
  propertyId: number | undefined;
  email: string | null;
}
