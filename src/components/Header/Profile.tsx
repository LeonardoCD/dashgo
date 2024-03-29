import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
            <Text>Leonardo Carvalho</Text>
            <Text color="gray.300" fontSize="small">
              leonardo.carvalho@pigz.com.br
            </Text>
        </Box>
      )}

      <Avatar size="md" name="Leo Carvalho" src="https://github.com/LeonardoCD.png" />
    </Flex>
  );
}