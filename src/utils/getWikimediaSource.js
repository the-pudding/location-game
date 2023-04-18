export default function getSrc({ url, width = 600 }) {
	const parts = url.split("/");
	const filename = parts[parts.length - 1];
	const tif = filename.includes(".tif");
	const suffix = tif ? ".jpg" : "";
	const prefix = tif ? "lossy-page1-" : "";
	const ending = `${prefix}${width}px-${filename}${suffix}`;
	const src = `${url.replace("/commons/", "/commons/thumb/")}/${ending}`;
	return src;
}
