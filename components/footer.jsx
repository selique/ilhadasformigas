import React from "react";
import { useRouter } from "next/router";

export default function AppHeader() {
	const { locale } = useRouter();

	return (
		<footer>
			<p>
				{locale === "es"
					? `Todo el contenido de este ensayo está escrito por Ariel Gricio. Puede
                    difundirlo, pero cite la fuente, por favor. ;)`
					: `Todo o conteúdo desse ensaio é de autoria de Ariel Gricio.
					Pode espalhar, mas cite a fonte, por favor! ;)`}
			</p>
		</footer>
	);
}
