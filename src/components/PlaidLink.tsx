import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from 'react-plaid-link';
import { useNavigate } from 'react-router-dom';
import {
  createLinkToken,
  exchangePublicToken,
} from '@/lib/actions/user.actions';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const navigate = useNavigate();

  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      navigate('/');
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);
  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect Bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
