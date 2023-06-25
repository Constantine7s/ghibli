import { Skeleton, Box } from "@chakra-ui/react";
import React from "react";

function TilesSkeleton() {
	return (
		<Box
			display="flex"
			flexWrap="wrap"
			justifyContent={"space-evenly"}>
			<Skeleton
				display="flex"
				height="648px"
				width="386px"
				maxW="sm"
				padding="5"
				borderRadius="5"
				marginY="3"
				marginX="1"
			/>
			<Skeleton
				display="flex"
				height="648px"
				width="386px"
				maxW="sm"
				padding="5"
				borderRadius="5"
				marginY="3"
				marginX="1"
			/>
			<Skeleton
				display="flex"
				height="648px"
				width="386px"
				maxW="sm"
				padding="5"
				borderRadius="5"
				marginY="3"
				marginX="1"
			/>
			<Skeleton
				display="flex"
				height="648px"
				width="386px"
				maxW="sm"
				padding="5"
				borderRadius="5"
				marginY="3"
				marginX="1"
			/>
			<Skeleton
				display="flex"
				height="648px"
				width="386px"
				maxW="sm"
				padding="5"
				borderRadius="5"
				marginY="3"
				marginX="1"
			/>
			<Skeleton
				display="flex"
				height="648px"
				width="386px"
				maxW="sm"
				padding="5"
				borderRadius="5"
				marginY="3"
				marginX="1"
			/>
		</Box>
	);
}

export default TilesSkeleton;
