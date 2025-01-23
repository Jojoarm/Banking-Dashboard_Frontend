import { useAppContext } from '@/context/AppContext';
import { logoutUser } from '@/lib/actions/user.actions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAppContext();

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
      toast.success('User logged out!');
      console.log(isLoggedIn);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>
      <div
        className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.firstName} {user?.lastName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <img src="icons/logout.svg" alt="logout icon" />
      </div>
    </footer>
  );
};

export default Footer;
