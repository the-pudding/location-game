<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

	version();

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
</script>

<Meta {title} {description} {url} {keywords} />
<Index />
