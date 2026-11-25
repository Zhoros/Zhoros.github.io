import { C as mutable_source, S as sibling, T as set, b as child, c as each, d as set_text, f as append, h as get, k as reset, l as if_block, m as event, n as bind_value, p as from_html, r as remove_input_defaults, u as mount, x as only_child, y as template_effect } from "./app-CZ2Mfp5j.js";
// svelte/index.svelte
var root = from_html(`<div class="p-8 text-center text-sm text-zinc-400">Belum ada produk. Tambahkan produk baru di atas.</div>`);
var root_1 = from_html(`<li class="px-4 py-3 flex items-center justify-between hover:bg-red-50/50 transition-colors"><div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-semibold flex items-center justify-center shrink-0"> </span> <span class="text-sm font-medium text-zinc-800"> </span></div></li>`);
var root_2 = from_html(`<ul class="divide-y divide-zinc-100"></ul>`);
var root_3 = from_html(`<div class="w-full h-full flex flex-col items-center bg-white text-zinc-800 p-4 sm:p-6"><div class="w-full max-w-xl flex flex-col gap-5"><div class="bg-white border border-red-200 rounded-lg p-4 shadow-sm"><h1 class="text-lg font-semibold text-red-700 mb-3">Manajemen Produk</h1> <div class="flex flex-col sm:flex-row gap-2"><input type="text" placeholder="Nama produk..." class="flex-1 px-3 py-2 text-sm bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"/> <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md transition-colors cursor-pointer shrink-0">+ Tambah Produk</button></div></div> <div class="bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden"><div class="px-4 py-3 bg-red-600 text-white flex items-center justify-between"><span class="text-sm font-semibold">Daftar Produk</span> <span class="text-xs bg-red-700 px-2 py-0.5 rounded-full"> </span></div> <!></div></div></div>`);
function Svelte($$anchor) {
	let namaProduk = mutable_source("");
	let produkList = mutable_source([
		{
			id: 1,
			nama: "Marjan"
		},
		{
			id: 2,
			nama: "Coca cola"
		},
		{
			id: 3,
			nama: "Sprite"
		},
		{
			id: 4,
			nama: "Sirup ABC"
		}
	]);
	function tambahProduk() {
		const trimmed = get(namaProduk).trim();
		if (!trimmed) return;
		set(produkList, [{
			id: Date.now(),
			nama: trimmed
		}, ...get(produkList)]);
		set(namaProduk, "");
	}
	function handleKeydown(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			tambahProduk();
		}
	}
	var div = root_3();
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = sibling(child(div_2), 2);
	var input = child(div_3);
	remove_input_defaults(input);
	var button = sibling(input, 2);
	reset(div_3);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	var div_5 = child(div_4);
	var span = sibling(child(div_5), 2);
	var text = only_child(span);
	reset(div_5);
	var node = sibling(div_5, 2);
	var consequent = ($$anchor) => {
		var div_6 = root();
		append($$anchor, div_6);
	};
	var alternate = ($$anchor) => {
		var ul = root_2();
		each(ul, 7, () => get(produkList), (item) => item.id, ($$anchor, item, index) => {
			var li = root_1();
			var div_7 = child(li);
			var span_1 = child(div_7);
			var text_1 = only_child(span_1, true);
			var span_2 = sibling(span_1, 2);
			var text_2 = only_child(span_2, true);
			reset(div_7);
			reset(li);
			template_effect(() => {
				set_text(text_1, get(index) + 1);
				set_text(text_2, get(item).nama);
			});
			append($$anchor, li);
		});
		reset(ul);
		append($$anchor, ul);
	};
	if_block(node, ($$render) => {
		if (get(produkList).length === 0) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div_4);
	reset(div_1);
	reset(div);
	template_effect(() => set_text(text, `${get(produkList).length ?? ""} item`));
	bind_value(input, () => get(namaProduk), ($$value) => set(namaProduk, $$value));
	event("keydown", input, handleKeydown);
	event("click", button, tambahProduk);
	append($$anchor, div);
}
mount(Svelte, { target: document.getElementById("app") });
