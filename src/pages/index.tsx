import { Flex, Button } from './styles';

export default function Home() {
  return (
    <Flex css={{ gap: `$16`, padding: `$16` }}>
      <Button type="button" color="primary" outlined>
        I'm happy
      </Button>
      <Button type="button" color="shape" radius="full" shadow outlined={false}>
        Go Study
      </Button>

      <Button type="button" color="shape" shadow={false} outlined={false}>
        Marcos Moura
      </Button>
    </Flex>
  );
}
