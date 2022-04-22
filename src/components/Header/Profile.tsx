import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leonardo Carvalho</Text>
        <Text color="gray.300" fontSize="small">
          leonardo.carvalho@pigz.com.br
        </Text>
      </Box>

      <Avatar size="md" name="Leo Carvalho" src="https://github.com/LeonardoCD.png" />
    </Flex>
  );
}