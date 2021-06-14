import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';



type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatorio').email('Formato de e-mail invalido'),
  password: yup.string().required('Senha obrigatoria'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  }); 
  
  const handleSignIn: SubmitHandler<SignInFormData> = async(values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }


  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
          name="email" 
          type="email" 
          label="E-mail" 
          error={formState.errors.email}
          {...register('email')}
          />

          <Input name="password" type="password" label="Senha" error={formState.errors.password} {...register('password')}/>

        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" isLoading={formState.isSubmitting}> Entrar </Button>
      </Flex>
    </Flex>
  )
}
