import { useEffect } from 'react';

import {
  useGetBnsNamesOwnedByAddressQuery,
  useStacksNonFungibleTokensMetadata,
} from '@leather-wallet/query';

import { useAnalytics } from '@app/common/hooks/analytics/use-analytics';
import { parseIfValidPunycode } from '@app/common/utils';

import { StacksBnsName } from './stacks-bns-name';
import { StacksNonFungibleTokens } from './stacks-non-fungible-tokens';

interface StacksCryptoAssetsProps {
  address: string;
}
export function StacksCryptoAssets({ address }: StacksCryptoAssetsProps) {
  const names = useGetBnsNamesOwnedByAddressQuery(address).data?.names;

  const stacksNftsMetadataResp = useStacksNonFungibleTokensMetadata(address);
  const analytics = useAnalytics();

  useEffect(() => {
    if (stacksNftsMetadataResp.length > 0) {
      void analytics.track('view_collectibles', {
        stacks_nfts_count: stacksNftsMetadataResp.length,
      });
      void analytics.identify({ stacks_nfts_count: stacksNftsMetadataResp.length });
    }
  }, [stacksNftsMetadataResp.length, analytics]);

  return (
    <>
      {(names ?? []).map(name => (
        <StacksBnsName bnsName={parseIfValidPunycode(name)} key={name} />
      ))}
      {stacksNftsMetadataResp.map((nft, i) => {
        if (!nft || !nft.metadata) return null;
        return <StacksNonFungibleTokens key={i} metadata={nft.metadata} />;
      })}
    </>
  );
}
