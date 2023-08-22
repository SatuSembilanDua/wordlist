import requests
import json

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"}    

def gdata_01():
	URL = "https://raw.githubusercontent.com/kuel27/wordlist/main/wordlist.txt"
	r = requests.get(URL, headers=HEADERS)
	data = r.text.strip().split("\n")
	return data

def gdata_02():
	URL = "https://api.npoint.io/91ac00bc3d335f00e13f"
	r = requests.get(URL, headers=HEADERS)
	data = json.loads(r.text)
	return data

def gdata_03():
	with open("data_02.json") as f:
		data = json.loads(f.read())
	return data

def main():
	data_01 = gdata_01()
	data_02 = gdata_02()
	data_03 = gdata_03()
	# print(data_01)
	# print(data_02)
	# print(data_03)
	data_final = [x.lower() for x in data_01]
	print([len(data_01), len(data_02), len(data_03)])
	# print(data_final)
	for d in data_02+data_03:
		if d.lower() not in data_final:
			data_final.append(d.lower())
	print(len(data_01))
	print(len(data_final))
	with open("data_final.json", "w") as f:
		f.write(json.dumps(data_final, indent=1))

def clean_rawindo():
	with open("raw_indo.json") as f:
		data = json.load(f)
	# print(data)
	ban = ["cacing bergetah","burung-burung pemarah","memancing es","botol kue","jaket panjang","robby busuk","kartu grafik","selamat makan","Mata london","topi keras","cahaya utara","gadis gamer","phine dan ferb","penunjuk arah angin","radang sendi","pembalut kaki","kantong kacang","saluran Inggris","mencuci mobil","Teluk Meksiko","Berbuat curang","pembekuan otak","seluncuran air","raksasa besi","kol bunga","masa pubertas","monster kue","penuntut balas","semakin bertambah","peternakan angin","benturan tinju","pensil mekanik","derbi pembongkaran","radang dingin","taman trailer","orang tongkat","perjalanan waktu","jurang yang dalam","biji pohon ek","ikan pemancing","ben besar","mandi burung","pembalik botol","si rambut coklat","bug kelinci","tempat tidur susun","kepala pelayan","pipi pantat","wanita kucing","kipas langit-langit","tempat lilin","pelat dada","jagung anjing","bel sapi","ruang merangkak","bebek daffy","kolam kematian","diss lagu","ikan anjing","tahi telinga","lebih tua","pemberi pekerjaan","pewarna mata","sangat menyenangkan","pria keluarga","maju cepat","pemintal gelisah","keran kebakaran","mangkuk ikan","pemukul lalat","tongkat cahaya","lem stik","beruang bergetah","pembuat harry potter","lingkaran cahaya","lentera hijau","tanda pagar","kepala tempat tidur","tulisan rahasia","lucu sekali","di rumah sendirian","main jingkat","kapal berbantalan udara","di dalam","manusia Besi","palu jackhammer","lebih ringan","tukang susu","orang bebas morgan","saklar nintendo","cincin hidung","Tidak ada apa-apa","alat pemecah buah keras","buah pohon cemara","jagung meletus","Yin dan yang","dalam satu lubang","tanah penggembalaan","gelang persahabatan","dengan disabilitas","bola penghancur","air mancur untuk minum","penangkap lalat venus","klakson udara","di sana","tepat sasaran","sangat marah","petir mcqueen","mantel mandi","gulungan kayu manis","keponakan perempuan","pemain permainan","di antara kita","telur orak-arik","anak permainan","terima kasih","kucing dalam sepatu","hubungkan empat","Liga roket","dr. seuss","on line","gua besar","Bola goreng terbuat dari buncis","tak terkalahkan","kura-kura darat","menara jembatan","pintu jebakan","pekerjaan yg membosankan","tembakan trik","benda terbang aneh","satu alis","anak gudang","realitas maya","ada apa","kereta sorong","kacang sayap","Bank Daya","pengguna YouTube","bale jerami","panggilan zoom","pancaran sinar matahari","cahaya malam","paket jet","mesin penuai","jempol ke bawah","Traktor panen","bantuan kool"]
	new = []
	for d in data:
		if d not in ban:
			# print(d)
			new.append(d)
		# if len(d.split(" ")) > 1:
		# 	if d not in ban:
		# 		print(d)
	print(new)
	# 3111
	with open("raw_indo.json", "w") as f:
		# json.dump(new, f, indent=1)
		f.write(json.dumps(new, indent=1))

def print_indo():
	with open("raw_indo.json") as f:
		data = json.load(f)
	txt = ", ".join(data)
	print(txt)
	with open("indo.txt", "w") as f:
		f.write(txt)

if __name__ == '__main__':
	# main()
	
	# clean_rawindo()
	print_indo()

