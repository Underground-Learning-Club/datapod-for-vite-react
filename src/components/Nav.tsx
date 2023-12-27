import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-gray-500 px-4 py-2 content">
			<li><NavLink to="/welcome">Welcome</NavLink></li>
			<li><NavLink to="/files">Files</NavLink></li>
			<li><NavLink to="/entire-content">Entire Content</NavLink></li>
			<li><NavLink to="/line-blocks">Line Blocks</NavLink></li>
			<li><NavLink to="/datapod-content">Datapod Content</NavLink></li>
			<li><NavLink to="/notation">Notation</NavLink></li>
			<li><NavLink to="/import">Import</NavLink></li>
		</ul>
	</nav>;
};
