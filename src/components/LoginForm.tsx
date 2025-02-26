import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomInput from './CustomInput';
import { logInSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { signIn } from '@/lib/actions/user.actions';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();

  const formSchema = logInSchema();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const response = await signIn(data);

      if (response.success) {
        toast.success('User logged in!');
        await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
        await queryClient.invalidateQueries({ queryKey: ['getUser'] });
        navigate(location.state?.from?.pathname || '/');
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error('Unable to log user in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link to="/" className="flex items-center gap-1">
          <img src="/icons/logo.svg" alt="Logo" width={34} height={34} />
          <h1 className="text-26 ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            Log In
            <p className="text-16 font-normal text-gray-600">
              Please enter your details
            </p>
          </h1>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomInput
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <div className="flex flex-col gap-4">
            <Button className="form-btn" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 size={20} className=" animate-spin " /> &nbsp;
                  Loading...
                </>
              ) : (
                'Log In'
              )}
            </Button>
          </div>
        </form>
      </Form>

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          Don't have an account?
        </p>
        <Link className="form-link" to="/sign-up">
          Sign up
        </Link>
      </footer>
    </section>
  );
};

export default LoginForm;
