import { Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import ROUTING_PATHS from 'utils/constants/routingPaths';

const GoHomeWhenErrorInvoked = ({ errorText }: { errorText?: string }) => {
  return (
    <Flex
      position='absolute'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
      flexDirection='column'
      alignItems='center'
      gap='1rem'>
      <Text>{errorText ? errorText : '서버에 에러가 발생했습니다.'}</Text>
      <Link href={ROUTING_PATHS.HOME}>
        <Button>처음으로 돌아가기</Button>
      </Link>
    </Flex>
  );
};

export default GoHomeWhenErrorInvoked;