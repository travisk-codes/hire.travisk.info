import React, { useEffect } from 'react'
import './App.css'
import { ReactComponent as WrenchIcon } from './wrench.svg'
import { ReactComponent as OfficeIcon } from './office.svg'
import { ReactComponent as PlanetIcon } from './planet.svg'

const personal_blurb =
	'Other hobbies include learning about space & physics, popular auteur/inde films, writing, and mindfulness meditation.'
const bag_n_fits_blurb =
	'Given a directory, will create a csv containing all metadata of its contents, with optional archiving and error checking.'

// other links
const other_links = [
	{
		text: 'github profile',
		url: 'http://github.com/travisk-codes',
	},
	{
		text: 'css resume',
		url: 'http://travisk.info/resume?noheader',
	},
	{
		text: 'datum code',
		url: 'https://github.com/travisk-codes/datum-app',
	},
	{
		text: 'datum (cli version)',
		url:
			'https://github.com/travisk-codes/datum-cli/blob/master/datum.py',
	},
	{
		text: 'random notes app',
		url:
			'https://github.com/travisk-codes/react-random-notes',
	},
	{
		text: 'all projects',
		url: 'http://travisk.info/projects?noheader',
	},
	{
		text: 'contact info',
		url: 'http://travisk.info/contact?noheader',
	},
	{
		text: 'web bookmarks',
		url: 'http://travisk.info/links?noheader',
	},
	{
		text: 'simple english checker',
		url: 'https://simple-english-checker.netlify.com',
	},
]

function App() {
	useEffect(() => {
		// listen to dark mode toggle
		const dark_mode_toggle = document.querySelector(
			'input[type="checkbox"]'
		)
		function toggle_colors(e) {
			if (e.target.checked) {
				document.documentElement.setAttribute(
					'data-theme',
					'dark'
				)
			} else {
				document.documentElement.setAttribute(
					'data-theme',
					'light'
				)
			}
		}
		dark_mode_toggle.addEventListener(
			'change',
			toggle_colors,
			false
		)

		// listen to footnote links
		const footnote_links = document.querySelectorAll(
			'a.footnote'
		)
		footnote_links.forEach(link => {
			link.addEventListener('click', e => {
				let footnotes = document.querySelectorAll(
					'li.footnote'
				)
				footnotes.forEach(
					fn => (fn.style.fontWeight = 'normal')
				)
				const number = e.target.href.split('').pop()
				let footnote = document.getElementById(number)
				footnote.style.fontWeight = 'bold'
			})
		})
	})
	return (
		<article>
			<header>Hi, I'm Travis.</header>
			<main>
				I am a junior web developer and designer looking for
				an entry-level position with opportunity to learn
				and grow. I work with{' '}
				<a className='footnote' href='#1'>
					standard web technologies,<sup>1</sup>
				</a>{' '}
				<a className='footnote' href='#2'>
					modern front-end tools & libraries,<sup>2</sup>
				</a>{' '}
				and{' '}
				<a className='footnote' href='#3'>
					server backends.<sup>3</sup>
				</a>
			</main>
			<section id='big'>
				<ul>
					<li>
						<WrenchIcon id='wrench-icon' />
						<span>
							I work with code, but my{' '}
							<a className='footnote' href='#4'>
								degree is in engineering,<sup>4</sup>
							</a>{' '}
							so I know how to solve problems and coordinate
							with teams.
						</span>
					</li>
					<li>
						<OfficeIcon id='office-icon' />
						<span>
							I have{' '}
							<a className='footnote' href='#5'>
								experience working<sup>5</sup>
							</a>{' '}
							on enterprise codebases, fixing
							consumer-facing production code, and building
							internal tools for coworkers.
						</span>
					</li>
					<li>
						<PlanetIcon id='planet-icon' />
						<span>{personal_blurb}</span>
					</li>
				</ul>
			</section>
			<section id='medium'>
				<header>Projects of Note</header>
				<ul>
					<li>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='http://dev.getdatum.app'
							className='project-title'
						>
							Datum
						</a>
						<a className='footnote' href='#6'>
							A personal metrics tracking app.<sup>6</sup>
						</a>{' '}
						Features quick key-value-pair entry, text
						auto-completion, csv import/export, realtime
						sync and offline storage.
					</li>
					<li>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://twitter.com/3b1bScreensBot'
							className='project-title'
						>
							3b1b Twitter Bot
						</a>
						Tweets out a{' '}
						<a className='footnote' href='#7'>
							screenshot<sup>7</sup>
						</a>{' '}
						from a{' '}
						<a href='https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw'>
							3blue1brown
						</a>{' '}
						math video, along with a link to the video at
						that point in time.
					</li>
					<li>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/travisk-codes/bag-it-fits-it'
							className='project-title'
						>
							Bag 'n Fits
						</a>
						{bag_n_fits_blurb}
					</li>
				</ul>
			</section>
			<section id='small'>
				<header>See Also</header>
				{other_links.map(pair => (
					<span key={pair.text}>
						<span>{' ◦ '}</span>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={pair.url}
						>
							{pair.text}
						</a>
					</span>
				))}
			</section>
			<footer>
				<header>Footnotes</header>
				<ol>
					<li className='footnote' id='1'>
						HTML(5), CSS, JavaScript (ES2018), Browser DOM
						API
					</li>
					<li className='footnote' id='2'>
						React.js, TypeScript, DevTools, Grid/Flexbox
					</li>
					<li className='footnote' id='3'>
						GNU+Linux, Bash, Nginx, MySQL, Node.js, Python
						scripting
					</li>
					<li className='footnote' id='4'>
						Specifically mechanical engineering, but I still
						learned plenty about code, be it Matlab,
						numerical methods, or programming robots.
					</li>
					<li className='footnote' id='5'>
						See{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='http://travisk.info/resume?noheader'
						>
							my resume
						</a>{' '}
						for further details.
					</li>
					<li className='footnote' id='6'>
						Built with React.js. A{' '}
						<a href='http://github.com/traivks-codes/datum-cli'>
							CLI version
						</a>{' '}
						built with Python & MySQL features a
						time-tracking mode and a SMS/chatbot interface.
					</li>
					<li className='footnote' id='7'>
						Screenshots captured with{' '}
						<a href='http://github.com/travisk-codes/screencapper'>
							screencapper
						</a>{' '}
						and{' '}
						<a href='https://github.com/travisk-codes/local-video-capture'>
							local-video-capture
						</a>
					</li>
				</ol>
			</footer>
			<div id='email'>
				<a href='mailto:me@travisk.info'>
					me<span id='at'>@</span>travisk.info
				</a>
				<label htmlFor='dark-mode-toggle' id='toggle-slot'>
					<input type='checkbox' id='dark-mode-toggle' />
					<div id='toggle-btn' />
				</label>
			</div>
		</article>
	)
}

export default App
