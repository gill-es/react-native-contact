export type DefaultCallback = {
  onSuccess?: () => void;
  onError?: () => void;
};

export type Pagination = {
  page?: number;
  limit?: number;
};
