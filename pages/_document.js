import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		let props = { ...initialProps };

		return props;
	}

	render() {
		const { locale } = this.props.__NEXT_DATA__;
		return (
			<Html lang={this.props.locale}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
