import { memo } from 'react';

import { CircleProps } from 'leather-styles/jsx';

import { useCurrentAccountDisplayName } from '@app/common/hooks/account/use-account-names';
import { useCurrentStacksAccount } from '@app/store/accounts/blockchain/stacks/stacks-account.hooks';
import { AccountAvatar } from '@app/ui/components/account/account-avatar/account-avatar';

interface CurrentAccountAvatar extends CircleProps {
  toggleSwitchAccount(): void;
}
export const CurrentAccountAvatar = memo(({ toggleSwitchAccount }: CurrentAccountAvatar) => {
  const stacksAccount = useCurrentStacksAccount();
  const { data: name = 'Account' } = useCurrentAccountDisplayName();
  if (!stacksAccount) return null;

  return (
    <AccountAvatar
      index={stacksAccount.index}
      name={name}
      onClick={() => toggleSwitchAccount()}
      publicKey={stacksAccount.stxPublicKey}
    />
  );
});
