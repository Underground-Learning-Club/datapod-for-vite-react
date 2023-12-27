import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.scss";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { AppProvider } from "./AppContext.tsx";
import { PageFiles } from "./pages/PageFiles.tsx";
import { PageEntireContent } from "./pages/PageEntireContent.tsx";
import { PageDatapodContent } from "./pages/PageDatapodContent.tsx";
import { PageLineBlocks } from "./pages/PageLineBlocks.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "files",
				element: <PageFiles />,
			},
			{
				path: "entire-content",
				element: <PageEntireContent />,
			},
			{
				path: "line-blocks",
				element: <PageLineBlocks />,
			},
			{
				path: "datapod-content",
				element: <PageDatapodContent />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AppProvider>
		<RouterProvider router={router} />
	</AppProvider>
);
