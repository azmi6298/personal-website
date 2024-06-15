import { ThemeProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof ThemeProvider> & {
  children: React.ReactNode;
};

const ThemeProviderWrapper = (props: ThemeProviderProps) => (
  <ThemeProvider {...props} />
);

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviderWrapper enableSystem={true} attribute="class">
      {children}
    </ThemeProviderWrapper>
  );
}
