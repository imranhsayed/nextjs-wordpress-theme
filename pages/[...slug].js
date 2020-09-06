
import React from "react";
import { useRouter } from "next/router";
import Layout from "../src/components/layout";
import {GET_MENUS} from "../src/queries/get-menus";
import client from "../src/apollo/client";

const Menu = ({ menus }) => {
	const router = useRouter();
	const slug = router.query.slug;
	return (
		<Layout menus={menus}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "80vh",
					fontSize: "32px",
					fontWeight: "bold",
				}}
			>
				{slug}
			</div>
		</Layout>
	);
};

export default Menu;

export async function getServerSideProps() {
	const { data } = await client.query({
		query: GET_MENUS,
	});
	return {
		props: {
			menus: data?.headerMenus?.edges ?? [],
		},
	};
}
