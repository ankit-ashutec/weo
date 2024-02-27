type FCC<P = {}> = React.FC<P & {children?: React.ReactNode}>;

// Export the type alias for global usage
declare global {
  export type FCC<P = {}> = React.FC<P & {children?: React.ReactNode}>;
}
