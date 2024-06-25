import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
  }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
            "relative border border-white overflow-hidden row-span-1 rounded-xl group/bento hover:shadow-white transition duration-200 shadow-input p-4 dark:bg-black bg-black justify-between flex flex-col space-y-4",          className
        )}
      >
        <div className="absolute inset-0 mix-blend-multiply z-10" />
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-30">
          {icon}
          <div className="font-sans font-bold text-white dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-white text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    );
  };
