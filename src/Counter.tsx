import { Button, Center, Container, Group, Text } from "@mantine/core";
import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<Container>
			<Text data-testid="result">{count}</Text>
			<Group>
				<Button onClick={() => setCount(count + 1)}>+</Button>
				<Button onClick={() => setCount(count - 1)}>-</Button>
			</Group>
		</Container>
	);
};
