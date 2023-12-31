import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Check } from 'lucide-react';

function SwitchUi() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-[#FF385C]' : 'bg-gray-200'
      } relative inline-flex h-8 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-4' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white transition`}
      >
        {enabled && (
          <Check className="text-[#FF385C] h-4 w-4 absolute inset-0 m-auto" />
        )}
      </span>
    </Switch>
  );
}

export default SwitchUi;
