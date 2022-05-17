import { useForm } from 'react-hook-form';

export default function Watch() {
  const { register, watch } = useForm();

  const watchNickname = watch('nickname', 'Nick');

  return (
    <form>
      <input type='text' placeholder='Nick Name' {...register('nickname')} />
      <p>{watchNickname}</p>
    </form>
  );
}
