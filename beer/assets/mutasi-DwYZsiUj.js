import { C as mutable_source, D as pop, O as push, S as sibling, T as set, _ as legacy_pre_effect, a as bind_select_value, b as child, c as each, d as set_text, f as append, g as untrack, h as get, i as set_attribute, k as reset, l as if_block, m as event, n as bind_value, o as init_select, p as from_html, r as remove_input_defaults, s as set_class, u as mount, v as legacy_pre_effect_reset, x as only_child, y as template_effect } from "./app-CZ2Mfp5j.js";
// svelte/mutasi.svelte
var root = from_html(`<button type="button" class="px-2.5 py-2 text-xs font-medium text-zinc-600 hover:text-red-700 bg-zinc-100 hover:bg-red-50 border border-zinc-300 rounded-md transition-colors cursor-pointer" title="Tampilkan semua tanggal">Semua</button>`);
var root_1 = from_html(`<div class="p-8 text-center text-sm text-zinc-400">Tidak ada data mutasi stok untuk filter ini.</div>`);
var root_2 = from_html(`<li class="px-3 py-2 text-xs flex items-center justify-between"><span class="text-zinc-800 font-medium"> </span> <span class="font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded"> </span></li>`);
var root_3 = from_html(`<div class="mt-1 pt-2.5 border-t border-zinc-100"><div class="bg-zinc-50 border border-zinc-200 rounded-md overflow-hidden"><div class="px-3 py-1.5 bg-zinc-100 border-b border-zinc-200 text-[11px] font-semibold text-zinc-600 uppercase tracking-wide flex justify-between"><span>Daftar Produk</span> <span>Jumlah</span></div> <ul class="divide-y divide-zinc-200/70"></ul></div></div>`);
var root_4 = from_html(`<div class="mt-1 pt-2.5 border-t border-zinc-100"><img class="w-full max-h-56 object-contain rounded-md border border-zinc-200 bg-zinc-50"/></div>`);
var root_5 = from_html(`<li class="p-4 flex flex-col gap-2.5 hover:bg-red-50/40 transition-colors"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2 min-w-0"><span> </span> <span class="text-xs font-medium text-zinc-500"> </span></div> <div class="flex items-center gap-1.5 shrink-0"><button type="button"> </button> <button type="button"><span>📷</span> <span> </span></button></div></div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-zinc-600"><div><span class="text-zinc-400">Gudang:</span> <span class="font-medium text-zinc-800"> </span></div> <div><span class="text-zinc-400">Tanggal:</span> <span class="font-medium text-zinc-800"> </span></div> <div><span class="text-zinc-400">Waktu:</span> <span class="font-medium text-zinc-800"> </span></div> <div><span class="text-zinc-400">Operator:</span> <span class="font-medium text-zinc-800"> </span></div> <div class="col-span-2"><span class="text-zinc-400">Keterangan:</span> <span class="font-medium text-zinc-800"> </span></div></div> <!> <!></li>`);
var root_6 = from_html(`<ul class="divide-y divide-zinc-200"></ul>`);
var root_7 = from_html(`<div class="w-full h-full flex flex-col items-center bg-white text-zinc-800 p-4 sm:p-6 overflow-y-auto"><div class="w-full max-w-2xl flex flex-col gap-5"><div class="bg-white border border-red-200 rounded-lg p-4 shadow-sm flex flex-col gap-4"><div class="flex items-center justify-between border-b border-red-100 pb-2.5"><h1 class="text-lg font-semibold text-red-700">Mutasi Stok</h1> <span class="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full"> </span></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div class="flex flex-col gap-1.5"><label for="gudang" class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Gudang</label> <select id="gudang" class="w-full px-3 py-2 text-sm bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"><option>Semua Gudang</option><option>Gudang Besar</option><option>Gudang Kecil</option></select></div> <div class="flex flex-col gap-1.5"><label for="tanggal" class="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Tanggal Mutasi</label> <div class="flex gap-1.5"><input id="tanggal" type="date" class="flex-1 px-3 py-2 text-sm bg-white border border-zinc-300 rounded-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"/> <!></div></div></div></div> <div class="bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden"><div class="px-4 py-3 bg-red-600 text-white flex items-center justify-between"><span class="text-sm font-semibold">Daftar Mutasi</span> <span class="text-xs bg-red-700 px-2 py-0.5 rounded-full"> </span></div> <!></div></div></div>`);
function Mutasi($$anchor, $$props) {
	push($$props, false);
	const filteredMutasi = mutable_source();
	let gudang = mutable_source("Semua");
	let tanggalFilter = mutable_source("2026-11-25");
	let openFotoId = mutable_source(null);
	let openDetailId = mutable_source(null);
	const mutasiList = [
		{
			id: 1,
			gudang: "Gudang Besar",
			tipe: "Masuk",
			tanggal: "2026-11-25",
			waktu: "09:15",
			operator: "Budi",
			keterangan: "Restok pagi dari distributor",
			foto: "https://picsum.photos/seed/mutasi1/500/320",
			items: [
				{
					id: 1,
					nama: "Coca Cola",
					qty: 24
				},
				{
					id: 2,
					nama: "Sprite",
					qty: 18
				},
				{
					id: 3,
					nama: "Marjan",
					qty: 12
				}
			]
		},
		{
			id: 2,
			gudang: "Gudang Besar",
			tipe: "Keluar",
			tanggal: "2026-11-25",
			waktu: "11:40",
			operator: "Andi",
			keterangan: "Pengiriman cabang selatan",
			foto: "https://picsum.photos/seed/mutasi2/500/320",
			items: [{
				id: 2,
				nama: "Sprite",
				qty: 10
			}, {
				id: 4,
				nama: "Sirup ABC",
				qty: 5
			}]
		},
		{
			id: 3,
			gudang: "Gudang Kecil",
			tipe: "Masuk",
			tanggal: "2026-11-25",
			waktu: "14:05",
			operator: "Sari",
			keterangan: "Transfer dari gudang besar",
			foto: "https://picsum.photos/seed/mutasi3/500/320",
			items: [{
				id: 3,
				nama: "Marjan",
				qty: 12
			}, {
				id: 1,
				nama: "Coca Cola",
				qty: 6
			}]
		},
		{
			id: 4,
			gudang: "Gudang Kecil",
			tipe: "Keluar",
			tanggal: "2026-11-24",
			waktu: "16:30",
			operator: "Rina",
			keterangan: "Penjualan langsung toko",
			foto: "https://picsum.photos/seed/mutasi4/500/320",
			items: [{
				id: 4,
				nama: "Sirup ABC",
				qty: 6
			}]
		}
	];
	function toggleFoto(id) {
		set(openFotoId, get(openFotoId) === id ? null : id);
	}
	function toggleDetail(id) {
		set(openDetailId, get(openDetailId) === id ? null : id);
	}
	legacy_pre_effect(() => (get(gudang), get(tanggalFilter)), () => {
		set(filteredMutasi, mutasiList.filter((m) => {
			const matchGudang = get(gudang) === "Semua" || m.gudang === get(gudang);
			const matchTanggal = !get(tanggalFilter) || m.tanggal === get(tanggalFilter);
			return matchGudang && matchTanggal;
		}));
	});
	legacy_pre_effect_reset();
	var div = root_7();
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var span = sibling(child(div_3), 2);
	var text = only_child(span);
	reset(div_3);
	var div_4 = sibling(div_3, 2);
	var div_5 = child(div_4);
	var select = sibling(child(div_5), 2);
	var option = child(select);
	option.value = option.__value = "Semua";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "Gudang Besar";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "Gudang Kecil";
	reset(select);
	init_select(select);
	reset(div_5);
	var div_6 = sibling(div_5, 2);
	var div_7 = sibling(child(div_6), 2);
	var input = child(div_7);
	remove_input_defaults(input);
	var node = sibling(input, 2);
	var consequent = ($$anchor) => {
		var button = root();
		event("click", button, () => set(tanggalFilter, ""));
		append($$anchor, button);
	};
	if_block(node, ($$render) => {
		if (get(tanggalFilter)) $$render(consequent);
	});
	reset(div_7);
	reset(div_6);
	reset(div_4);
	reset(div_2);
	var div_8 = sibling(div_2, 2);
	var div_9 = child(div_8);
	var span_1 = sibling(child(div_9), 2);
	var text_1 = only_child(span_1, true);
	reset(div_9);
	var node_1 = sibling(div_9, 2);
	var consequent_1 = ($$anchor) => {
		var div_10 = root_1();
		append($$anchor, div_10);
	};
	var alternate = ($$anchor) => {
		var ul = root_6();
		each(ul, 5, () => get(filteredMutasi), (item) => item.id, ($$anchor, item) => {
			var li = root_5();
			var div_11 = child(li);
			var div_12 = child(div_11);
			var span_2 = child(div_12);
			var text_2 = only_child(span_2);
			var span_3 = sibling(span_2, 2);
			var text_3 = only_child(span_3);
			reset(div_12);
			var div_13 = sibling(div_12, 2);
			var button_1 = child(div_13);
			var text_4 = only_child(button_1, true);
			var button_2 = sibling(button_1, 2);
			var span_4 = sibling(child(button_2), 2);
			var text_5 = only_child(span_4, true);
			reset(button_2);
			reset(div_13);
			reset(div_11);
			var div_14 = sibling(div_11, 2);
			var div_15 = child(div_14);
			var span_5 = sibling(child(div_15), 2);
			var text_6 = only_child(span_5, true);
			reset(div_15);
			var div_16 = sibling(div_15, 2);
			var span_6 = sibling(child(div_16), 2);
			var text_7 = only_child(span_6, true);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			var span_7 = sibling(child(div_17), 2);
			var text_8 = only_child(span_7, true);
			reset(div_17);
			var div_18 = sibling(div_17, 2);
			var span_8 = sibling(child(div_18), 2);
			var text_9 = only_child(span_8, true);
			reset(div_18);
			var div_19 = sibling(div_18, 2);
			var span_9 = sibling(child(div_19), 2);
			var text_10 = only_child(span_9, true);
			reset(div_19);
			reset(div_14);
			var node_2 = sibling(div_14, 2);
			var consequent_2 = ($$anchor) => {
				var div_20 = root_3();
				var div_21 = child(div_20);
				var ul_1 = sibling(child(div_21), 2);
				each(ul_1, 7, () => (get(item), untrack(() => get(item).items)), (prod) => prod.id, ($$anchor, prod, idx) => {
					var li_1 = root_2();
					var span_10 = child(li_1);
					var text_11 = only_child(span_10);
					var span_11 = sibling(span_10, 2);
					var text_12 = only_child(span_11);
					reset(li_1);
					template_effect(() => {
						set_text(text_11, `${get(idx) + 1}. ${(get(prod), untrack(() => get(prod).nama)) ?? ""}`);
						set_text(text_12, `${(get(item), untrack(() => get(item).tipe === "Masuk" ? "+" : "-")) ?? ""}${(get(prod), untrack(() => get(prod).qty)) ?? ""} pcs`);
					});
					append($$anchor, li_1);
				});
				reset(ul_1);
				reset(div_21);
				reset(div_20);
				append($$anchor, div_20);
			};
			if_block(node_2, ($$render) => {
				if (get(openDetailId), get(item), untrack(() => get(openDetailId) === get(item).id)) $$render(consequent_2);
			});
			var node_3 = sibling(node_2, 2);
			var consequent_3 = ($$anchor) => {
				var div_22 = root_4();
				var img = only_child(div_22);
				template_effect(() => {
					set_attribute(img, "src", (get(item), untrack(() => get(item).foto)));
					set_attribute(img, "alt", `Bukti Mutasi #${(get(item), untrack(() => get(item).id)) ?? ""}`);
				});
				append($$anchor, div_22);
			};
			if_block(node_3, ($$render) => {
				if (get(openFotoId), get(item), untrack(() => get(openFotoId) === get(item).id)) $$render(consequent_3);
			});
			reset(li);
			template_effect(() => {
				set_class(span_2, 1, `text-xs font-semibold px-2 py-0.5 rounded border shrink-0 ${(get(item), untrack(() => get(item).tipe === "Masuk" ? "bg-red-50 text-red-700 border-red-200" : "bg-zinc-100 text-zinc-700 border-zinc-200")) ?? ""}`);
				set_text(text_2, `Stok ${(get(item), untrack(() => get(item).tipe)) ?? ""}`);
				set_text(text_3, `${(get(item), untrack(() => get(item).items.length)) ?? ""} produk`);
				set_class(button_1, 1, `px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer ${(get(openDetailId), get(item), untrack(() => get(openDetailId) === get(item).id ? "bg-red-600 text-white border-red-600" : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50")) ?? ""}`);
				set_text(text_4, (get(openDetailId), get(item), untrack(() => get(openDetailId) === get(item).id ? "Tutup Detail" : "Detail")));
				set_class(button_2, 1, `px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer flex items-center gap-1 ${(get(openFotoId), get(item), untrack(() => get(openFotoId) === get(item).id ? "bg-red-600 text-white border-red-600" : "bg-white text-red-700 border-red-300 hover:bg-red-50")) ?? ""}`);
				set_text(text_5, (get(openFotoId), get(item), untrack(() => get(openFotoId) === get(item).id ? "Tutup" : "Foto")));
				set_text(text_6, (get(item), untrack(() => get(item).gudang)));
				set_text(text_7, (get(item), untrack(() => get(item).tanggal)));
				set_text(text_8, (get(item), untrack(() => get(item).waktu)));
				set_text(text_9, (get(item), untrack(() => get(item).operator)));
				set_text(text_10, (get(item), untrack(() => get(item).keterangan || "-")));
			});
			event("click", button_1, () => toggleDetail(get(item).id));
			event("click", button_2, () => toggleFoto(get(item).id));
			append($$anchor, li);
		});
		reset(ul);
		append($$anchor, ul);
	};
	if_block(node_1, ($$render) => {
		if (get(filteredMutasi), untrack(() => get(filteredMutasi).length === 0)) $$render(consequent_1);
		else $$render(alternate, -1);
	});
	reset(div_8);
	reset(div_1);
	reset(div);
	template_effect(() => {
		set_text(text, `${(get(filteredMutasi), untrack(() => get(filteredMutasi).length)) ?? ""} transaksi`);
		set_text(text_1, get(tanggalFilter) || "Semua Tanggal");
	});
	bind_select_value(select, () => get(gudang), ($$value) => set(gudang, $$value));
	bind_value(input, () => get(tanggalFilter), ($$value) => set(tanggalFilter, $$value));
	append($$anchor, div);
	pop();
}
mount(Mutasi, { target: document.getElementById("app") });
