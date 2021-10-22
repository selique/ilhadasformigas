import React from "react";
import Layout from "../components/layout";
import HomeES from "../components/Home/es";
import HomePT from "../components/Home/pt";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name

export default function IndexPage() {
	const { locale } = useRouter();
	return <Layout>{locale === "es" ? <HomeES /> : <HomePT />}</Layout>;
}
