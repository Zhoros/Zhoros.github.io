import { C as mutable_source, E as remove_textarea_child, S as sibling, T as set, a as bind_select_value, b as child, c as each, d as set_text, f as append, h as get, i as set_attribute, k as reset, l as if_block, m as event, n as bind_value, o as init_select, p as from_html, r as remove_input_defaults, t as bind_this, u as mount, w as mutate, x as only_child, y as template_effect } from "./app-CZ2Mfp5j.js";
// svelte/keluar.svelte
var root = from_html(`<option> </option>`);
var root_1 = from_html(`<div class="p-8 text-center text-sm text-zinc-400">Belum ada barang dipilih.</div>`);
var root_2 = from_html(`<li class="px-4 py-3 flex items-center justify-between gap-3 hover:bg-red-50/50 transition-colors"><div class="flex items-center gap-3 min-w-0"><span class="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-semibold flex items-center justify-center shrink-0"> </span> <span class="text-sm font-medium text-zinc-800 truncate"> </span></div> <div class="flex items-center gap-3 shrink-0"><span class="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded"> </span> <button type="button" class="text-xs text-zinc-400 hover:text-red-600 px-1.5 py-1 rounded transition-colors cursor-pointer" title="Hapus">✕</button></div></li>`);
var root_3 = from_html(`<ul class="divide-y divide-zinc-100"></ul>`);
var root_4 = from_html(`<button type="button" class="w-full py-2.5 px-4 text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 border border-dashed border-red-300 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2"><span>📷</span> <span>Ambil / Pilih Bukti Foto</span></button>`);
var root_5 = from_html(`<div class="relative w-full border border-zinc-200 rounded-md overflow-hidden bg-zinc-50"><img alt="Bukti Foto" class="w-full max-h-48 object-contain"/> <div class="p-2 bg-white border-t border-zinc-200 flex items-center justify-between text-xs"><span class="text-zinc-600 truncate max-w-[70%]"> </span> <button type="button" class="text-red-600 hover:text-red-800 font-medium cursor-pointer">Hapus Foto</button></div></div>`);
var root_6 = from_html(`<div class="w-full h-full flex flex-col items-center bg-white text-zinc-800 p-4 sm:p-6 overflow-y-auto"><div class="w-full max-w-xl flex flex-col gap-5"><div class="bg-white border border-red-200 rounded-lg p-4 shadow-sm flex flex-col gap-4"><div class="flex items-center justify-between border-b border-red-100 pb-2.5"><h1 class="text-lg font-semibold text-red-700">Stok Keluar</h1> <span class="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full"> </span></div> <div class="flex flex-col gap-1.5"><label for="gudang" class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Pilih Gudang</label> <select id="gudang" class="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"><option>Gudang Besar</option><option>Gudang Kecil</option></select></div> <div class="flex flex-col gap-1.5"><label class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Tambah Produk Keluar</label> <div class="flex flex-col sm:flex-row gap-2"><select class="flex-1 px-3 py-2 text-sm bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"><option disabled="">-- Pilih produk --</option><!></select> <div class="flex gap-2"><input type="number" min="1" placeholder="Qty" class="w-24 px-3 py-2 text-sm text-center bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"/> <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md transition-colors cursor-pointer shrink-0">+ Tambah</button></div></div></div></div> <div class="bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden"><div class="px-4 py-3 bg-red-600 text-white flex items-center justify-between"><span class="text-sm font-semibold">Daftar Barang Keluar</span> <span class="text-xs bg-red-700 px-2 py-0.5 rounded-full"> </span></div> <!></div> <div class="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex flex-col gap-4"><div class="flex flex-col gap-1.5"><span class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Bukti Foto</span> <input type="file" accept="image/*" capture="environment" class="hidden"/> <!></div> <div class="flex flex-col gap-1.5"><label for="operator" class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Operator</label> <input id="operator" type="text" placeholder="Nama operator..." class="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"/></div> <div class="flex flex-col gap-1.5"><label for="keterangan" class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Keterangan</label> <textarea id="keterangan" rows="2" placeholder="Catatan tambahan (opsional)..." class="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"></textarea></div></div> <button type="button" class="w-full py-2.5 px-4 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:bg-zinc-300 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors cursor-pointer">Simpan Stok Keluar</button></div></div>`);
function Keluar($$anchor) {
	let gudang = mutable_source("Gudang Besar");
	let operator = mutable_source("");
	let keterangan = mutable_source("");
	let buktiFoto = mutable_source(null);
	let buktiPreview = mutable_source("");
	const daftarProduk = [
		{
			id: 1,
			nama: "Coca Cola"
		},
		{
			id: 2,
			nama: "Sprite"
		},
		{
			id: 3,
			nama: "Marjan"
		},
		{
			id: 4,
			nama: "Sirup ABC"
		}
	];
	let selectedProdukId = mutable_source("");
	let qtyInput = mutable_source(1);
	let items = mutable_source([]);
	let fileInput = mutable_source();
	function tambahItem() {
		if (!get(selectedProdukId) || get(qtyInput) <= 0) return;
		const produk = daftarProduk.find((p) => p.id === Number(get(selectedProdukId)));
		if (!produk) return;
		const existingIndex = get(items).findIndex((i) => i.id === produk.id);
		if (existingIndex !== -1) {
			mutate(items, get(items)[existingIndex].qty += Number(get(qtyInput)));
			set(items, [...get(items)]);
		} else set(items, [...get(items), {
			id: produk.id,
			nama: produk.nama,
			qty: Number(get(qtyInput))
		}]);
		set(selectedProdukId, "");
		set(qtyInput, 1);
	}
	function hapusItem(id) {
		set(items, get(items).filter((item) => item.id !== id));
	}
	function handleKeydown(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			tambahItem();
		}
	}
	function handleFileChange(e) {
		const file = e.target.files?.[0];
		if (!file) return;
		set(buktiFoto, file);
		set(buktiPreview, URL.createObjectURL(file));
	}
	function hapusFoto() {
		set(buktiFoto, null);
		set(buktiPreview, "");
		if (get(fileInput)) mutate(fileInput, get(fileInput).value = "");
	}
	function simpan() {
		if (get(items).length === 0) return;
		const payload = {
			gudang: get(gudang),
			operator: get(operator).trim(),
			items: get(items),
			keterangan: get(keterangan).trim(),
			buktiFoto: get(buktiFoto)
		};
		console.log("Simpan Stok Keluar:", payload);
	}
	var div = root_6();
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var span = sibling(child(div_3), 2);
	var text = only_child(span, true);
	reset(div_3);
	var div_4 = sibling(div_3, 2);
	var select = sibling(child(div_4), 2);
	var option = child(select);
	option.value = option.__value = "Gudang Besar";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "Gudang Kecil";
	reset(select);
	init_select(select);
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	var div_6 = sibling(child(div_5), 2);
	var select_1 = child(div_6);
	var option_2 = child(select_1);
	option_2.value = option_2.__value = "";
	var node = sibling(option_2);
	each(node, 1, () => daftarProduk, (prod) => prod.id, ($$anchor, prod) => {
		var option_3 = root();
		var text_1 = only_child(option_3, true);
		var option_3_value = {};
		template_effect(() => {
			set_text(text_1, get(prod).nama);
			if (option_3_value !== (option_3_value = get(prod).id)) option_3.value = (option_3.__value = option_3_value) ?? "";
		});
		append($$anchor, option_3);
	});
	reset(select_1);
	init_select(select_1);
	var div_7 = sibling(select_1, 2);
	var input = child(div_7);
	remove_input_defaults(input);
	var button = sibling(input, 2);
	reset(div_7);
	reset(div_6);
	reset(div_5);
	reset(div_2);
	var div_8 = sibling(div_2, 2);
	var div_9 = child(div_8);
	var span_1 = sibling(child(div_9), 2);
	var text_2 = only_child(span_1);
	reset(div_9);
	var node_1 = sibling(div_9, 2);
	var consequent = ($$anchor) => {
		var div_10 = root_1();
		append($$anchor, div_10);
	};
	var alternate = ($$anchor) => {
		var ul = root_3();
		each(ul, 7, () => get(items), (item) => item.id, ($$anchor, item, index) => {
			var li = root_2();
			var div_11 = child(li);
			var span_2 = child(div_11);
			var text_3 = only_child(span_2, true);
			var span_3 = sibling(span_2, 2);
			var text_4 = only_child(span_3, true);
			reset(div_11);
			var div_12 = sibling(div_11, 2);
			var span_4 = child(div_12);
			var text_5 = only_child(span_4);
			var button_1 = sibling(span_4, 2);
			reset(div_12);
			reset(li);
			template_effect(() => {
				set_text(text_3, get(index) + 1);
				set_text(text_4, get(item).nama);
				set_text(text_5, `${get(item).qty ?? ""} pcs`);
			});
			event("click", button_1, () => hapusItem(get(item).id));
			append($$anchor, li);
		});
		reset(ul);
		append($$anchor, ul);
	};
	if_block(node_1, ($$render) => {
		if (get(items).length === 0) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div_8);
	var div_13 = sibling(div_8, 2);
	var div_14 = child(div_13);
	var input_1 = sibling(child(div_14), 2);
	bind_this(input_1, ($$value) => set(fileInput, $$value), () => get(fileInput));
	var node_2 = sibling(input_1, 2);
	var consequent_1 = ($$anchor) => {
		var button_2 = root_4();
		event("click", button_2, () => get(fileInput).click());
		append($$anchor, button_2);
	};
	var alternate_1 = ($$anchor) => {
		var div_15 = root_5();
		var img = child(div_15);
		var div_16 = sibling(img, 2);
		var span_5 = child(div_16);
		var text_6 = only_child(span_5, true);
		var button_3 = sibling(span_5, 2);
		reset(div_16);
		reset(div_15);
		template_effect(() => {
			set_attribute(img, "src", get(buktiPreview));
			set_text(text_6, get(buktiFoto)?.name);
		});
		event("click", button_3, hapusFoto);
		append($$anchor, div_15);
	};
	if_block(node_2, ($$render) => {
		if (!get(buktiPreview)) $$render(consequent_1);
		else $$render(alternate_1, -1);
	});
	reset(div_14);
	var div_17 = sibling(div_14, 2);
	var input_2 = sibling(child(div_17), 2);
	remove_input_defaults(input_2);
	reset(div_17);
	var div_18 = sibling(div_17, 2);
	var textarea = sibling(child(div_18), 2);
	remove_textarea_child(textarea);
	reset(div_18);
	reset(div_13);
	var button_4 = sibling(div_13, 2);
	reset(div_1);
	reset(div);
	template_effect(() => {
		set_text(text, get(gudang));
		set_text(text_2, `${get(items).length ?? ""} item`);
		button_4.disabled = get(items).length === 0;
	});
	bind_select_value(select, () => get(gudang), ($$value) => set(gudang, $$value));
	bind_select_value(select_1, () => get(selectedProdukId), ($$value) => set(selectedProdukId, $$value));
	bind_value(input, () => get(qtyInput), ($$value) => set(qtyInput, $$value));
	event("keydown", input, handleKeydown);
	event("click", button, tambahItem);
	event("change", input_1, handleFileChange);
	bind_value(input_2, () => get(operator), ($$value) => set(operator, $$value));
	bind_value(textarea, () => get(keterangan), ($$value) => set(keterangan, $$value));
	event("click", button_4, simpan);
	append($$anchor, div);
}
mount(Keluar, { target: document.getElementById("app") });
