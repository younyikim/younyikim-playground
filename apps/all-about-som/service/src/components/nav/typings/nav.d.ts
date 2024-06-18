export interface LocationRef {
  [key: string]: React.MutableRefObject<HTMLDivElement | null>;
}

export interface NavProps {
  locationRef: LocationRef;
}
