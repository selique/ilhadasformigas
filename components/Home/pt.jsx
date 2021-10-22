/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HomePT() {
	return (
		<div className="grid">
			<div className="collumn-grid">
				<img
					layout="fill"
					className="bug"
					src="/img/up-bug-min.png"
					alt="isla de hormigas"
				/>
			</div>
			<div className="collumn-grid">
				<div className="container">
					<nav style={{ top: "50px", position: "relative" }}>
						<img
							src="/img/spain-flag.png"
							alt="version en espanhol"
						/>
					</nav>
					<h1>
						ilha
						<br />
						das
						<br />
						formigas
					</h1>
					<ul>
						<li>
							<div>
								<a
									className="download-fasciculo"
									href="https://drive.google.com/file/d/1NTz3Lfd7dQzP3lyV5AjZUGoutHlhu9V1/view?usp=sharing"
									title="O MUDO FOFOQUEIRO"
									target="_blank"
									rel="noreferrer"
								>
									<h2>
										<div className="date">24/MAR/2020</div>
										<div className="sub-title">
											Fascículo - 1
										</div>
										<div className="title">
											O MUDO FOFOQUEIRO
										</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a
									className="download-fasciculo"
									href="https://drive.google.com/file/d/1ftOmeN7cSPD3BJLCJnseWnxwPxbJ0L_A/view?usp=sharing"
									title="ONOPOETOPÉIA"
									target="_blank"
									rel="noreferrer"
								>
									<h2>
										<div className="date">31/MAR/2020</div>
										<div className="sub-title">
											Fascículo - 2
										</div>
										<div className="title">
											ONOPOETOPÉIA
										</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a
									className="download-fasciculo"
									href="https://drive.google.com/file/d/1Q1RwYiE6HZmkcFzLpW_5Fx7GVQP-__gk/view?usp=sharing"
									title="SATURNADO"
									target="_blank"
									rel="noreferrer"
								>
									<h2>
										<div className="date">07/ABR/2020</div>
										<div className="sub-title">
											Fascículo - 3
										</div>
										<div className="title">SATURNADO</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a
									className="download-fasciculo"
									href="https://drive.google.com/file/d/1EkKCQP4tycy2037iEBVD27jJ703PDKPu/view?usp=sharing"
									title="AMARGONAUTA"
									target="_blank"
									rel="noreferrer"
								>
									<h2>
										<div className="date">14/ABR/2020</div>
										<div className="sub-title">
											Fascículo - 4
										</div>
										<div className="title">AMARGONAUTA</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a
									className="download-fasciculo"
									href="https://drive.google.com/file/d/1yggzGzNiAWqVDMEofjzj3cE2zrboU8HP/view?usp=sharing"
									title="COMPENETRADAS"
									target="_blank"
									rel="noreferrer"
								>
									<h2>
										<div className="date">21/ABR/2020</div>
										<div className="sub-title">
											Fascículo - 5
										</div>
										<div className="title">
											COMPENETRADAS
										</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a
									className="download-fasciculo"
									href="https://drive.google.com/file/d/12XvnpPJfcg5gVFzs_Gz_jpVOXvA2GiK5/view?usp=sharing"
									title="ORÁCULO ORAÇÃO ORALOUCO"
									target="_blank"
									rel="noreferrer"
								>
									<h2>
										<div className="date">28/ABR/2020</div>
										<div className="sub-title">
											Fascículo - 6
										</div>
										<div className="title">
											ORÁCULO ORAÇÃO ORALOUCO
										</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a
									className="download-fasciculo"
									href="https://drive.google.com/file/d/1sBY5JR9UVWOI-EWmukBzhoBqKznuVU3u/view?usp=sharing"
									title="VIVO E ENTERRADO"
									target="_blank"
									rel="noreferrer"
								>
									<h2>
										<div className="date">04/MAI/2020</div>
										<div className="sub-title">
											Fascículo - 7
										</div>
										<div className="title">
											VIVO E ENTERRADO
										</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a
									className="download-fasciculo"
									onClick="alert('Esse Fascículo estará disponível em breve, se preferir cadastre-se e receba no seu email!')"
									href="#indisponivel"
									title="ISSO É GRAVE - indisponivel"
									target="_blank"
								>
									<h2>
										<div className="date">12/MAI/2020</div>
										<div className="sub-title">
											Fascículo - 8
										</div>
										<div className="title">
											ISSO É GRAVE
										</div>
										<div className="link-download">
											Clique aqui para baixar
										</div>
									</h2>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="collumn-grid">
				<img
					className="bug"
					src="/img/down-bug-min.png"
					alt="ilha das formigas"
				/>
			</div>
		</div>
	);
}
