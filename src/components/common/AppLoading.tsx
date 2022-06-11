import {CdsProgressCircle} from '@cds/react/progress-circle';

export default function AppLoading({text, size = 'xxl'}: {text?: string; size?: string}) {
  return (
    <div className="flex h-full items-center justify-center gap-4 p-4" cds-text="body">
      <CdsProgressCircle size={size} status="info"></CdsProgressCircle>
      Loading {text} ...
    </div>
  );
}
