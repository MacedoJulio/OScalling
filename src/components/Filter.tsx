import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  const { colors } = useTheme();

  const colorType = type === 'open' ? colors.primary[700] : colors.red[700];

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text color={isActive ? colorType : "blue.500"} fontSize="xs" textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
}