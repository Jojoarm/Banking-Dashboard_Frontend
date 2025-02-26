import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import CustomInput from './CustomInput';
import { signUpSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { signUp } from '@/lib/actions/user.actions';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { Input } from './ui/input';

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();

  const formSchema = signUpSchema();

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
    const formData = new FormData();

    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('address1', data.address1);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('dateOfBirth', data.dateOfBirth);
    formData.append('postalCode', data.postalCode);
    formData.append('ssn', data.ssn);
    formData.append('email', data.email);
    formData.append('password', data.password);
    if (data.imageFile) {
      formData.append(`imageFile`, data.imageFile);
    }

    try {
      const response = await signUp(formData);
      console.log(response);

      if (response.success) {
        toast.success('User registered successfully!');
        await queryClient.invalidateQueries({ queryKey: ['validateToken'] });
        await queryClient.invalidateQueries({ queryKey: ['getUser'] });
        navigate(location.state?.from?.pathname || '/');
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error('Error creating user');
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
            Sign Up
            <p className="text-16 font-normal text-gray-600">
              Please enter your details
            </p>
          </h1>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4">
            <CustomInput
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
            />
            <CustomInput
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
            />
          </div>

          <CustomInput
            name="address1"
            label="Address"
            placeholder="Enter your specific address"
          />
          <CustomInput
            name="city"
            label="City"
            placeholder="Enter your current city"
          />
          <div className="flex gap-4">
            <CustomInput name="state" label="State" placeholder="Example NY" />
            <CustomInput
              name="postalCode"
              label="Postal Code"
              placeholder="Example 11101"
            />
          </div>
          <div className="flex gap-4">
            <CustomInput
              name="dateOfBirth"
              label="Date of Birth"
              placeholder="YYYY-MM-DD"
            />
            <CustomInput name="ssn" label="SSN" placeholder="Example 1234" />
          </div>

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

          {/* For image Upload */}
          <FormField
            control={form.control}
            name="imageFile"
            render={({ field }) => (
              <div className="form-item">
                <FormLabel className="form-label">Display Picture</FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Upload Profile Pic"
                      className="input-class"
                      type="file"
                      accept=".jpg, .jpeg, png"
                      onChange={(e) =>
                        field.onChange(
                          e.target.files ? e.target.files[0] : null
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage className="form-message mt-2" />
                </div>
              </div>
            )}
          />

          <div className="flex flex-col gap-4">
            <Button className="form-btn" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 size={20} className=" animate-spin " /> &nbsp;
                  Loading...
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </div>
        </form>
      </Form>

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          Already have an account?
        </p>
        <Link className="form-link" to="/sign-in">
          Log In
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
