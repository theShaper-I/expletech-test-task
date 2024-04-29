import { twMerge } from 'tailwind-merge';

type MainContainerProps = {
  children?: React.ReactNode;
  className?: string;
};
export const MainContainer = ({ children, className }: MainContainerProps) => {
  return (
    <div
      className={twMerge(
        `mx-auto max-w-[1270px] px-15 md:px-30 xl:max-w-[1300px] 2xl:max-w-[1440px]`,
        className
      )}
    >
      {children}
    </div>
  );
};
