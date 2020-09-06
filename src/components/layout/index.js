import React from "react";
import Link from "next/link";

const PATH_TO_REPLACE = "/wordpress_woo";
const DEFAULT_PATH_LENGTH = 4;

const Layout = ({ menus, children }) => {
	const menuItems1 = [];
	const menuItems2 = [];
	menus.forEach((menu) => {
		const pathLength = (menu?.node?.path ?? "").split("/").length;
		if (pathLength === DEFAULT_PATH_LENGTH) {
			menuItems1.push(menu);
			return;
		}
		menuItems2.push(menu);
	});
	return (
		<div>
			<header>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "50px",
					}}
				>
					{(menuItems1 || []).map((menu) => {
						const path = menu.node.path.replace(PATH_TO_REPLACE, "");
						const href = "[...slug]";
						return (
							<Link key={menu?.node?.id ?? ""} href={href} as={path}>
								<a
									style={{
										fontSize: "18px",
										color: "blue",
										textDecoration: "none",
										marginRight: "10px",
									}}
								>
									{menu.node.label}
								</a>
							</Link>
						);
					})}
					{(menuItems2 || []).map((menu) => {
						const path = menu.node.path.replace(PATH_TO_REPLACE, "");
						const href = "/category/[...slug]";
						return (
							<Link key={menu?.node?.id ?? ""} href={href} as={path}>
								<a
									style={{
										fontSize: "18px",
										color: "blue",
										textDecoration: "none",
										marginRight: "10px",
									}}
								>
									{menu.node.label}
								</a>
							</Link>
						);
					})}
				</div>
			</header>
			{children}
		</div>
	);
};

export default Layout;
