import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
	Box,
	LinkBox,
	Image,
	Heading,
	Text,
	Flex,
	LinkOverlay,
	HStack,
} from "@chakra-ui/react";
import React from "react";

function MovieTile({ movie }) {
	return (
		<LinkBox
			height="648px"
			width="386px"
			maxW="sm"
			padding="5"
			borderRadius="5"
			marginY="3"
			marginX="1"
			backgroundColor="orange.100"
			_hover={{ backgroundColor: "orange.200" }}
			className="movie-tile">
			<LinkOverlay href={`/movie/${movie.id}`}>
				<Box>
					<Image
						src={movie.image}
						alt={movie.title}
						borderRadius="1"
					/>
					<Heading
						size="md"
						marginTop="3">
						{movie.title}
					</Heading>
					<Flex
						mt="6"
						spacing="3"
						justifyContent="space-between">
						<HStack>
							<CalendarIcon />
							<Text>{movie.release_date}</Text>
						</HStack>
						<HStack>
							<TimeIcon />
							<Text>{movie.running_time} min</Text>
						</HStack>
					</Flex>
				</Box>
			</LinkOverlay>
		</LinkBox>
	);
}

export default MovieTile;
