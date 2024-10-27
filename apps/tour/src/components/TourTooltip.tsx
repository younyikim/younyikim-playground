import { TooltipRenderProps } from 'react-joyride';

export default function TourTooltip(props: TooltipRenderProps) {
  const {
    continuous,
    index,
    primaryProps,
    skipProps,
    step,
    tooltipProps,
    size,
    isLastStep,
  } = props;

  return (
    <div className="relative">
      <div
        className="bg-grey flex w-[320px] flex-col gap-[32px] rounded-[16px] border p-[24px] text-white"
        {...tooltipProps}
      >
        {step.title && <h4 className="tooltip__title">{step.title}</h4>}
        <div className="tooltip__content whitespace-pre-line">
          {step.content}
        </div>
        <div className="tooltip__footer flex justify-between">
          <span>{`${index + 1} of ${size}`}</span>
          <div className="flex gap-4">
            {index + 1 < size && (
              <button className="tooltip__button underline" {...skipProps}>
                {skipProps.title}
              </button>
            )}
            <div className="tooltip__spacer">
              {continuous && isLastStep ? (
                <button
                  className="tooltip__button tooltip__button--primary"
                  {...primaryProps}
                >
                  Done
                </button>
              ) : (
                <button
                  className="tooltip__button tooltip__button--primary"
                  {...primaryProps}
                >
                  {primaryProps.title}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0">Line</div>
    </div>
  );
}
