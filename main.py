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



if __name__ == '__main__':
	main()
	# game-players
	# game-toolbar