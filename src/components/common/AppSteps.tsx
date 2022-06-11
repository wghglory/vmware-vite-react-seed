import {circleIcon, circleIconName, ClarityIcons, dotCircleIcon, dotCircleIconName} from '@cds/core/icon';
import {CdsIcon} from '@cds/react/icon';
import cx from 'classnames';
import React, {useState} from 'react';

import {customCheckCircle} from '@/assets/customIcon';

ClarityIcons.addIcons(['customCheckCircle', customCheckCircle], circleIcon, dotCircleIcon);

export default function AppSteps({
  steps,
  current,
  children,
  className = '',
  alive = false,
}: {
  steps: AppStep[];
  current: number;
  children?: React.ReactNode;
  className?: string;
  alive?: boolean;
}) {
  return (
    <div className={`${className} space-y-8`}>
      {/* steps title */}
      <AppStepTitle steps={steps} current={current} />

      {/* content */}
      {alive ? (
        <div>
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={cx({
                hidden: i !== current,
              })}
            >
              {s.content}
            </div>
          ))}
        </div>
      ) : (
        <div>{steps[current].content}</div>
      )}

      {/* footer action buttons */}
      <div>{children}</div>
    </div>
  );
}

export function AppStepTitle({steps, current}: {steps: AppStep[]; current: number}) {
  return (
    <ul className="flex">
      {steps.map((step, i) => {
        return (
          <li key={i} className={`flex min-w-[8.75rem] flex-1 flex-col ${current === i ? 'active' : ''}`}>
            <div className="mb-2 whitespace-nowrap text-xs leading-4">{step?.header}</div>
            {current > i ? (
              <CdsIcon size="36" status="success" shape={'customCheckCircle'} />
            ) : current === i ? (
              <CdsIcon size="36" status="info" shape={dotCircleIconName} />
            ) : (
              <CdsIcon size="36" shape={circleIconName} />
            )}
            <div className="step-desc flex flex-col pr-9 before:h-[1px] before:translate-x-[36px] before:translate-y-[-1.15rem] before:bg-gray-500/50">
              <span className="py-2 font-medium">{step.title}</span>
              <span>{step?.description}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export type AppStep = {
  content: React.ReactNode;
  title: string;
  key?: string;
  header?: string;
  description?: string;
};

export interface StepProps {
  handleNext: () => void;
  handleBack: () => void;
  current: number;
}

export function useStepAction(): StepProps {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    // if (originalSteps.length - 1 === current) {
    //   return;
    // }

    setCurrent(current + 1);
  };

  const handleBack = () => {
    if (current === 0) return;

    setCurrent(current - 1);
  };

  return {handleNext, handleBack, current};
}
