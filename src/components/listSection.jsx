import { Button } from "./ui/button";

export const ListSection = ({ title, subtitle, description, buttons }) => {
  return (
    <div className="flex justify-between align-center gap-x-2">
      <div>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-lg font-semibold">{subtitle}</p>
        <p>{description}</p>
      </div>
      {buttons.length > 0 && (
        <div className="max-sm:min-w-[56px] sm:w-full h-full max-w-[180px] ml-4 flex flex-col gap-y-3">
          {buttons.map((button) => (
            <Button
              text={button.text}
              startIcon={button.startIcon}
              fullWidth
              onClick={button.onClick}
              responsive
            />
          ))}
        </div>
      )}
    </div>
  );
};
