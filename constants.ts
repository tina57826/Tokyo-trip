

import { ActivityType, DayItinerary, FlightInfo, Accommodation, TransportMapItem } from './types';

// Precise location data and curated images matching the user's PDF references
export const ITINERARY_DATA: DayItinerary[] = [
  {
    id: 'day1',
    date: '3/28 (五)',
    title: '抵達東京 & 淺草下町夜色',
    weatherForecast: { temp: '12°C - 18°C', condition: 'Cloudy' },
    items: [
      {
        id: '1-1',
        time: '17:30',
        title: '抵達成田機場 (NRT)',
        type: ActivityType.TRANSPORT,
        description: '抵達東京！請跟隨「鐵道/Train」指標前往 B1 搭車。',
        guideStory: '成田機場是東京的大門。若有購買西瓜卡(Suica)或 Pasmo 的需求，建議在改札口前的自助機台處理。',
        location: 'Narita Airport Terminal 1',
        address: 'Narita International Airport (NRT), Chiba, Japan',
        // Exterior of Terminal 1
        imageUrl: './assets/pictures/narita_airport.jpg', 
        highlights: [
          { category: 'TIP', text: '入境約需 40-60 分鐘' }
        ]
      },
      {
        id: '1-2',
        time: '18:10',
        title: '搭乘京成 Access 特急',
        type: ActivityType.TRANSPORT,
        description: '往羽田空港方向，直達淺草站（不用換車）。',
        guideStory: '京成 Access 特急橘色線條車身，不需對號入座。沿途會經過晴空塔，這將是你看到的第一個東京地標！',
        location: 'Narita Airport Station',
        address: 'Narita Airport Station, Chiba',
        // Orange Keisei 3100 series train
        imageUrl: './assets/pictures/keisei_access_express.jpg',
        highlights: [
          { category: 'TIP', text: '可使用 Suica/Pasmo 刷卡進站' },
          { category: 'TIP', text: '車程約 60 分鐘' }
        ]
      },
      {
        id: '1-3',
        time: '18:50',
        title: '辦理入住：Asakusa Ryokan Toukaisou',
        type: ActivityType.STAY,
        location: 'Asakusa Ryokan Toukaisou',
        address: '2-16-12 Nishi-Asakusa, Taito-ku, Tokyo',
        description: 'Check-in 放行李。',
        guideStory: '東海莊是一家位於淺草寧靜巷弄中的傳統旅館，能體驗到濃厚的昭和風情。周邊有許多錢湯（公共澡堂）。',
        // Traditional Ryokan collage style
        imageUrl: './assets/pictures/asakusa_toukaisou.jpg', 
        highlights: [
          { category: 'TIP', text: '櫃台時間至 22:00' }
        ]
      },
      {
        id: '1-4',
        time: '19:00',
        title: '晚餐：染太郎 或 與ろゐ屋',
        type: ActivityType.FOOD,
        location: 'Sometaro Okonomiyaki',
        address: '2-2-2 Nishi-Asakusa, Taito City, Tokyo',
        description: '【染太郎】體驗自己煎御好燒，或【與ろゐ屋】品嚐清爽柚子拉麵。',
        guideStory: '染太郎是淺草著名的老店，木造建築非常有氣氛，許多文人雅士都曾造訪。榻榻米座位需要脫鞋。若不想油煙味太重，與ろゐ屋的雙黃蛋拉麵是清爽首選，就在傳法院通上。',
        // Okonomiyaki cooking on hot plate
        imageUrl: './assets/pictures/sometaro_okonomiyaki.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '染太郎：什錦御好燒 (Osome-yaki)' },
          { category: 'MUST_EAT', text: '與ろゐ屋：柚子醬油拉麵' },
          { category: 'TIP', text: '染太郎只收現金' }
        ]
      },
      {
        id: '1-5',
        time: '21:00',
        title: '淺草寺 & 雷門夜拍',
        type: ActivityType.SIGHTSEEING,
        location: 'Senso-ji',
        address: '2-3-1 Asakusa, Taito City, Tokyo',
        description: '夜間參拜散步，避開白天人潮。',
        guideStory: '晚上的淺草寺本堂會關門，但雷門、五重塔與寶藏門都會打燈直到 23:00。此時仲見世通的店家拉下鐵門，鐵捲門上有描繪淺草歷史的「淺草繪卷」，是白天看不到的隱藏版景點！',
        // Night view of Kaminarimon/Sensoji lit up
        imageUrl: './assets/pictures/sensoji_night.jpg', 
        highlights: [
          { category: 'TIP', text: '必拍：發光的雷門大燈籠' },
          { category: 'TIP', text: '必拍：仲見世通鐵捲門彩繪' }
        ]
      }
    ]
  },
  {
    id: 'day2',
    date: '3/29 (六)',
    title: '移動日：新宿轉乘 & 富士山下',
    weatherForecast: { temp: '8°C - 15°C', condition: 'Sunny' },
    items: [
      {
        id: '2-1',
        time: '07:00',
        title: '淺草晨間散策',
        type: ActivityType.SIGHTSEEING,
        location: 'Kaminarimon',
        address: '2-3-1 Asakusa, Taito City, Tokyo',
        description: '享受無人的雷門。',
        guideStory: '早晨 7 點前的淺草寺空氣特別清新，常能看到當地人在此晨運或遛狗，是感受「下町」生活感的最佳時刻。',
        // Morning Sensoji
        imageUrl: './assets/pictures/sensoji_morning.jpg',
        highlights: [
          { category: 'TIP', text: '最佳拍照點：雷門正對面馬路' }
        ]
      },
      {
        id: '2-2',
        time: '08:00',
        title: '早餐：Misojyu',
        type: ActivityType.FOOD,
        location: 'Misojyu Asakusa',
        address: '1-7-5 Asakusa, Taito City, Tokyo',
        description: '專賣味噌湯與飯糰的文青早餐店。',
        guideStory: '這是一家將傳統味噌湯做得很時尚的店。湯料非常豐富，有整塊蔬菜或肉類。二樓有用餐區，裝潢以書法和攝影作品為主，非常適合拍照。',
        // Miso soup set
        imageUrl: './assets/pictures/misojyu_breakfast.jpg',
        highlights: [
          { category: 'MUST_ORDER', text: 'Morning Set (飯糰+味噌湯)' },
          { category: 'MUST_EAT', text: '角煮味噌湯' }
        ]
      },
      {
        id: '2-3',
        time: '09:00',
        title: '前往新宿車站',
        type: ActivityType.TRANSPORT,
        description: '銀座線(淺草) > 半藏門線(表參道) > 步行至新宿 JR 月台。',
        guideStory: '新宿站是迷宮，建議預留充足時間。我們要搭乘的是 JR 中央線特急月台（通常在 9 或 10 號月台）。',
        location: 'Shinjuku Station',
        address: 'Shinjuku Station, Tokyo',
        // JR Shinjuku Station Sign
        imageUrl: './assets/pictures/shinjuku_station.jpg', 
        highlights: [
          { category: 'TIP', text: '建議走「東口」或「南口」進站' },
          { category: 'TIP', text: '目標：JR 特急月台' }
        ]
      },
      {
        id: '2-4',
        time: '10:30',
        title: '搭乘：富士回遊號 (Fuji Excursion)',
        type: ActivityType.TRANSPORT,
        location: 'JR Shinjuku Station',
        address: 'Shinjuku Station, Tokyo',
        description: '直達河口湖的特急列車。',
        guideStory: '富士回遊號是前往河口湖最舒適的方式。列車進入山梨縣後，請留意車窗「左側」，天氣好時能看到巨大的富士山逼近眼前！',
        // E353 Series Train
        imageUrl: './assets/pictures/fuji_excursion_train.jpg',
        highlights: [
          { category: 'TIP', text: '座位推薦：左側窗邊 (D席)' },
          { category: 'RESERVATION', text: '全車指定席，需事先劃位' }
        ]
      },
      {
        id: '2-5',
        time: '13:00',
        title: '富士急樂園 (Fuji-Q Highland)',
        type: ActivityType.SIGHTSEEING,
        location: 'Fuji-Q Highland',
        address: '5-6-1 Shinnishihara, Fujiyoshida, Yamanashi',
        description: '絕叫系的聖地！',
        guideStory: '這裡有金氏世界紀錄等級的雲霄飛車。如果不玩設施，這裡也有「麗莎與卡斯柏小鎮」，充滿法式風情，還有免費的富士山景觀台。',
        // Roller coaster (Fujiyama)
        imageUrl: './assets/pictures/fuji_q_highland.jpg',
        highlights: [
          { category: 'TIP', text: '必玩：FUJIYAMA 過山車' },
          { category: 'TIP', text: '必玩：Eejanaika (翻轉次數最多)' }
        ]
      },
      {
        id: '2-6',
        time: '16:00',
        title: '河口湖畔散步',
        type: ActivityType.SIGHTSEEING,
        location: 'Lake Kawaguchi',
        address: 'Funatsu, Fujikawaguchiko, Minamitsuru District, Yamanashi',
        description: '從樂園搭公車 10–15 分，享受湖畔寧靜。',
        guideStory: '河口湖是富士五湖中開發最完善的。沿著湖畔步道走，可以看到富士山倒映在湖面的「逆富士」美景（通常清晨或傍晚無風時最明顯）。',
        // Lake Kawaguchi with Cherry Blossoms
        imageUrl: './assets/pictures/lake_kawaguchi.jpg',
        highlights: [
          { category: 'TIP', text: '預計停留至 17:30' },
          { category: 'TIP', text: '最佳拍攝點：產屋崎' }
        ]
      },
      {
        id: '2-7',
        time: '18:00',
        title: '入住：美富士飯店 (Check-in)',
        type: ActivityType.STAY,
        location: 'Hotel Mifujien',
        address: '207 Azagawa, Fujikawaguchiko, Minamitsuru District, Yamanashi 401-0303',
        description: '傳統日式溫泉旅館。',
        guideStory: '這間飯店的所有房間都面湖，可以躺在房間看富士山。辦理入住後，稍作休息準備享用晚餐。',
        // Tatami room with Fuji view
        imageUrl: './assets/pictures/mifujien_room.jpg',
        highlights: [
          { category: 'TIP', text: '大廳有免費茶水' }
        ]
      },
      {
        id: '2-8',
        time: '19:00',
        title: '晚餐：懷石料理 + 溫泉',
        type: ActivityType.FOOD,
        location: 'Hotel Mifujien',
        address: '207 Azagawa, Fujikawaguchiko, Minamitsuru District, Yamanashi 401-0303',
        description: '飯店內享用豐盛晚餐與溫泉。',
        guideStory: '晚餐是精緻的會席料理，包含山梨縣特產。餐後請務必體驗露天風呂，運氣好能看到富士山下的點點燈火。',
        // Kaiseki dinner set
        imageUrl: './assets/pictures/mifujien_dinner.jpg',
        highlights: [
          { category: 'MUST_EAT', text: '飯店懷石料理' },
          { category: 'TIP', text: '溫泉開放至午夜' }
        ]
      }
    ]
  },
  {
    id: 'day3',
    date: '3/30 (日)',
    title: '自駕環湖：忍野八海 & 西湖',
    weatherForecast: { temp: '7°C - 16°C', condition: 'Sunny' },
    items: [
      {
        id: '3-1',
        time: '09:00',
        title: '早餐：Haostay Coffee',
        type: ActivityType.FOOD,
        location: 'Haostay Coffee',
        address: '251-4 Funatsu, Fujikawaguchiko, Yamanashi',
        description: '坐公車約 9 分鐘，享受湖畔咖啡。',
        guideStory: '這是一間擁有絕佳景觀的咖啡廳，頂樓露台可以直接眺望富士山。他們的拿鐵拉花非常精緻。',
        // Coffee with view
        imageUrl: './assets/pictures/haostay_coffee.jpg', 
        highlights: [
          { category: 'MUST_ORDER', text: '富士山造型拿鐵' }
        ]
      },
      {
        id: '3-2',
        time: '10:00',
        title: '取車：Nippon Rent-A-Car',
        type: ActivityType.TRANSPORT,
        location: 'Nippon Rent-A-Car Kawaguchiko',
        address: '3647-1 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '開始自駕之旅！',
        guideStory: '日本為右駕，雨刷和方向燈與台灣相反，請務必慢行適應。出發前請設定好導航（輸入 MapCode 或電話號碼最準確）。',
        // Car rental / Driving
        imageUrl: './assets/pictures/nippon_rentacar.jpg', 
        highlights: [
          { category: 'TIP', text: '需攜帶：台灣駕照 + 日文譯本' },
          { category: 'TIP', text: '或：國際駕照 (IDP)' }
        ]
      },
      {
        id: '3-3',
        time: '10:30',
        title: '忍野八海 (Oshino Hakkai)',
        type: ActivityType.SIGHTSEEING,
        location: 'Oshino Hakkai',
        address: 'Shibokusa, Oshino, Minamitsuru District, Yamanashi',
        description: '世界文化遺產，清澈的湧泉群。',
        guideStory: '這裡的水是富士山融雪經過80年過濾而成的，清澈見底。「湧池」是最深也最美的一個，藍得不可思議。觀光客多，建議往裡面走到「鏡池」拍逆富士。',
        // Oshino Hakkai Ponds
        imageUrl: './assets/pictures/oshino_hakkai.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '現烤草餅 (Kusa Mochi)' },
          { category: 'MUST_EAT', text: '名水豆腐' },
          { category: 'MUST_BUY', text: '辣椒味噌 (伴手禮)' }
        ]
      },
      {
        id: '3-4',
        time: '12:20',
        title: '山中湖午餐',
        type: ActivityType.FOOD,
        location: 'Lake Yamanaka',
        address: 'Yamanakako, Minamitsuru District, Yamanashi',
        description: 'Meshi Dokoro Yoshizawa (定食) 或 Reel Cafe (拉麵)。',
        guideStory: '山中湖是五湖中面積最大的，也是著名的「天鵝湖」。Reel Cafe 是一家由舊義大利餐廳改建的拉麵店，湯頭非常細緻，是拉麵迷的隱藏名單。',
        // Japanese Set Meal
        imageUrl: './assets/pictures/yamanakako_lunch.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: 'Reel Cafe：醬油拉麵' },
          { category: 'TIP', text: '若選 Yoshizawa：推薦炸豬排定食' }
        ]
      },
      {
        id: '3-5',
        time: '14:00',
        title: '西湖 療癒之里 根場',
        type: ActivityType.SIGHTSEEING,
        location: 'Saiko Iyashi-no-Sato Nenba',
        address: '2710 Saiko, Fujikawaguchiko, Yamanashi 401-0332',
        description: '富士山下的合掌村。',
        guideStory: '這裡重現了過去被土石流掩埋的茅草屋聚落。你可以租借戰國盔甲或和服拍照，這裡的富士山景觀比白川鄉更壯闊，且遊客較少。',
        // Thatched roofs
        imageUrl: './assets/pictures/iyashi_no_sato.jpg', 
        highlights: [
          { category: 'TIP', text: '推薦體驗：和服/武士服租借' },
          { category: 'MUST_BUY', text: '手工陶藝品' }
        ]
      },
      {
        id: '3-6',
        time: '17:00',
        title: '本栖湖夕陽',
        type: ActivityType.SIGHTSEEING,
        location: 'Lake Motosu',
        address: 'Nakanokura, Minobu, Minamikoma District, Yamanashi 409-3104',
        description: '千元鈔票上的富士山。',
        guideStory: '前往「中之倉峠展望地」可以拍到跟日幣 1000 元紙鈔背面一模一樣的景色（逆富士）。這裡也是搖曳露營的聖地。',
        // Sunset at Lake Motosu
        imageUrl: './assets/pictures/motosu_sunset.jpg',
        highlights: [
          { category: 'TIP', text: '日落時間：17:50' },
          { category: 'TIP', text: '地點：公廁旁的觀景台' }
        ]
      },
      {
        id: '3-7',
        time: '18:30',
        title: '晚餐：燒肉 HIMAWARITEI',
        type: ActivityType.FOOD,
        location: 'Yakiniku Himawaritei',
        address: '5511-1 Funatsu, Fujikawaguchiko, Yamanashi',
        description: '在地人推薦的人氣燒肉。',
        guideStory: '這家店使用高品質的國產牛，但價格比東京親民許多。特別推薦他們的「甲州牛」，肉質鮮甜。建議先訂位。',
        // Yakiniku Grill
        imageUrl: './assets/pictures/himawaritei_yakiniku.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '特上牛五花 (Karubi)' },
          { category: 'MUST_EAT', text: '石鍋拌飯' },
          { category: 'RESERVATION', text: '建議事先電話預約' }
        ]
      }
    ]
  },
  {
    id: 'day4',
    date: '3/31 (一)',
    title: '櫻花與五重塔 & 餺飥麵',
    weatherForecast: { temp: '9°C - 17°C', condition: 'Sunny' },
    items: [
      {
        id: '4-1',
        time: '09:30',
        title: '早餐：Lake Bake Café',
        type: ActivityType.FOOD,
        location: 'Lake Bake Cafe',
        address: '2585-85 Oishi, Fujikawaguchiko, Yamanashi 401-0305',
        description: '絕美湖景麵包店。',
        guideStory: '這家店就在大石公園旁，以天然酵母麵包聞名。露台座位正對富士山，是奢侈的早餐享受。',
        // Bakery with view
        imageUrl: './assets/pictures/lake_bake_cafe.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '自家製酵母麵包' },
          { category: 'MUST_EAT', text: '司康 (Scone)' }
        ]
      },
      {
        id: '4-2',
        time: '11:00',
        title: '大石公園 (Oishi Park)',
        type: ActivityType.SIGHTSEEING,
        location: 'Oishi Park',
        address: '2585 Oishi, Fujikawaguchiko, Yamanashi 401-0305',
        description: '四季花海與富士山。',
        guideStory: '這裡有一條長長的花街道。3月底4月初可能有早開的鬱金香或水仙花。這裡也是買富士山週邊商品最齊全的地方之一。',
        // Flowers and Fuji
        imageUrl: './assets/pictures/oishi_park.jpg', 
        highlights: [
          { category: 'MUST_BUY', text: '富士山造型餅乾' },
          { category: 'MUST_EAT', text: '藍莓霜淇淋' }
        ]
      },
      {
        id: '4-3',
        time: '11:30',
        title: '新倉山淺間公園 (忠靈塔)',
        type: ActivityType.SIGHTSEEING,
        location: 'Chureito Pagoda',
        address: '2-4-1 Asama, Fujiyoshida, Yamanashi 403-0011',
        description: '日本旅遊書封面的經典場景。',
        guideStory: '想要看到「五重塔+櫻花+富士山」的三合一絕景，必須爬上 398 階的「咲古耶姬」階梯。雖然累，但上面的景色絕對值得！早上去比較順光。',
        // The classic shot
        imageUrl: './assets/pictures/chureito_pagoda.jpg', 
        highlights: [
          { category: 'TIP', text: '請穿好走的鞋子' },
          { category: 'TIP', text: '人潮眾多，請依序排隊拍照' }
        ]
      },
      {
        id: '4-4',
        time: '13:30',
        title: '午餐：Tomifuji (とみふじ)',
        type: ActivityType.FOOD,
        location: 'Tomifuji',
        address: '527 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '在地家庭料理。',
        guideStory: '這是一間由老夫婦經營的小店，充滿昭和家庭感。定食份量大又便宜，是當地人的愛店。',
        // Tempura set
        imageUrl: './assets/pictures/tomifuji_tempura.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '炸竹莢魚定食' },
          { category: 'MUST_EAT', text: '薑燒豬肉定食' }
        ]
      },
      {
        id: '4-5',
        time: '15:30',
        title: '天上山公園纜車 (Kachi Kachi)',
        type: ActivityType.SIGHTSEEING,
        location: 'Mt. Fuji Panoramic Ropeway',
        address: '1163-1 Azagawa, Fujikawaguchiko, Yamanashi 401-0303',
        description: '360度俯瞰河口湖。',
        guideStory: '纜車是以日本童話「咔嚓咔嚓山」為主題，到處都是狸貓和兔子的裝飾。山頂有「絕景鞦韆」和「天上的鐘」，求姻緣很靈驗喔！',
        // Ropeway view
        imageUrl: './assets/pictures/kachi_kachi_ropeway.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '狸貓糯米糰子' },
          { category: 'MUST_BUY', text: '兔子御守' }
        ]
      },
      {
        id: '4-6',
        time: '18:00',
        title: '晚餐：Hoto Fudo (ほうとう不動)',
        type: ActivityType.FOOD,
        location: 'Hoto Fudo East',
        address: '2458 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '河口湖必吃鄉土料理：餺飥麵。',
        guideStory: '餺飥麵是用南瓜味噌湯底煮粗麵條，蔬菜精華完全融入湯中，非常暖胃。使用滾燙的鐵鍋上桌。',
        // Iron pot noodles
        imageUrl: './assets/pictures/hoto_fudo_noodle.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '不動餺飥麵 (Hoto)' },
          { category: 'MUST_EAT', text: '馬肉刺身 (敢吃的話)' }
        ]
      },
      {
        id: '4-7',
        time: '19:30',
        title: '歸還租車',
        type: ActivityType.TRANSPORT,
        location: 'Nippon Rent-A-Car',
        address: '3647-1 Funatsu, Fujikawaguchiko, Yamanashi 401-0301',
        description: '檢查車況，加滿油後歸還。',
        guideStory: '還車前記得去附近的加油站將油箱加滿 (Full Tank)，並保留收據給店員檢查。',
        // Car or Gas station
        imageUrl: './assets/pictures/return_car.jpg', 
        highlights: [
          { category: 'TIP', text: '請保留加油收據' }
        ]
      }
    ]
  },
  {
    id: 'day5',
    date: '4/1 (二)',
    title: '返回東京：和牛燒肉 & 晴空塔',
    weatherForecast: { temp: '14°C - 20°C', condition: 'Sunny' },
    items: [
      {
        id: '5-1',
        time: '10:10',
        title: '前往東京（日暮里）',
        type: ActivityType.TRANSPORT,
        location: 'Kawaguchiko Station',
        address: 'Kawaguchiko Station, Yamanashi',
        description: '高速巴士或電車返回東京。',
        guideStory: '巴士雖然便宜但容易塞車，如果行李多，建議還是搭乘富士回遊號火車比較準時舒適。',
        imageUrl: './assets/pictures/bus_train_return.jpg', 
        highlights: [
          { category: 'TIP', text: '車程約 2 小時' }
        ]
      },
      {
        id: '5-2',
        time: '12:20',
        title: '午餐：肉屋之台所 (Nikuya no Daidokoro)',
        type: ActivityType.FOOD,
        location: 'Nikuya no Daidokoro Shinjuku',
        address: '1-17-5 Kabukicho, Shinjuku City, Tokyo',
        description: 'A4/A5 和牛燒肉吃到飽！',
        guideStory: '這家CP值超高，提供整頭買入的黑毛和牛。特別是「和牛豪華拼盤」，視覺效果滿分。位於新宿歌舞伎町。',
        // Wagyu Beef Platter
        imageUrl: './assets/pictures/nikuya_wagyu.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '和牛豪華拼盤' },
          { category: 'MUST_ORDER', text: '厚切牛舌' },
          { category: 'RESERVATION', text: '建議事先網路訂位' }
        ]
      },
      {
        id: '5-3',
        time: '14:20',
        title: '入住：日暮里 Airbnb',
        type: ActivityType.STAY,
        location: 'Nippori Station',
        address: 'Nippori Station, Arakawa City, Tokyo',
        description: '前往日暮里 check-in。',
        guideStory: '日暮里是前往成田機場最方便的車站（Skyliner 直達）。車站附近的「谷中銀座」商店街有許多貓咪雜貨和街頭小吃，很有老街味道。',
        // Nippori street
        imageUrl: './assets/pictures/nippori_yanaka.jpg', 
        highlights: [
          { category: 'TIP', text: '南口有電梯，搬行李方便' }
        ]
      },
      {
        id: '5-4',
        time: '16:30',
        title: '東京晴空塔 & Solamachi',
        type: ActivityType.SIGHTSEEING,
        location: 'Tokyo Skytree',
        address: '1-1-2 Oshiage, Sumida City, Tokyo 131-0045',
        description: '世界最高電波塔與購物中心。',
        guideStory: '傍晚去最好，可以一次看到日景、夕陽和夜景。晴空塔下的 Solamachi 商場非常好逛，有很多限定商品。',
        // Tokyo Skytree
        imageUrl: './assets/pictures/tokyo_skytree.jpg', 
        highlights: [
          { category: 'MUST_BUY', text: '東京香蕉 (晴空塔豹紋限定版)' },
          { category: 'MUST_BUY', text: 'Press Butter Sand' }
        ]
      },
      {
        id: '5-5',
        time: '18:00',
        title: 'Solamachi 晚餐',
        type: ActivityType.FOOD,
        location: 'Tokyo Solamachi',
        address: '1-1-2 Oshiage, Sumida City, Tokyo',
        description: '鰻魚飯或沾麵。',
        guideStory: '六厘舍的沾麵湯頭極其濃郁，麵條Q彈，是沾麵界的霸主，排隊人潮眾多。若想吃好一點，備長鰻魚飯是名古屋式吃法，皮脆肉嫩。',
        // Hitsumabushi (Eel)
        imageUrl: './assets/pictures/solamachi_eel.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '六厘舍：特製沾麵' },
          { category: 'MUST_EAT', text: '備長：鰻魚飯三吃 (Hitsumabushi)' }
        ]
      }
    ]
  },
  {
    id: 'day6',
    date: '4/2 (三)',
    title: '夢幻迪士尼 & 東京雙塔',
    weatherForecast: { temp: '15°C - 21°C', condition: 'Cloudy' },
    items: [
      {
        id: '6-1',
        time: '08:00',
        title: '東京迪士尼 (Land/Sea)',
        type: ActivityType.SIGHTSEEING,
        location: 'Tokyo Disney Resort',
        address: '1-1 Maihama, Urayasu, Chiba 279-0031',
        description: '半日快閃夢幻國度！',
        guideStory: '即便是半天，也能感受魔法。Land 適合經典童話愛好者（城堡、維尼）；Sea 適合喜歡異國風情與達菲熊的人。入園後記得先用 App 抽 DPA (快速通關)。',
        // Disney Castle
        imageUrl: './assets/pictures/disney_castle.jpg', 
        highlights: [
          { category: 'TIP', text: '必載 App: Tokyo Disney Resort' },
          { category: 'MUST_EAT', text: '三眼怪麻糬' },
          { category: 'MUST_EAT', text: '煙燻火雞腿' }
        ]
      },
      {
        id: '6-2',
        time: '14:00',
        title: 'IKSPIARI 購物',
        type: ActivityType.SHOPPING,
        location: 'Ikspiari',
        address: '1-4 Maihama, Urayasu, Chiba 279-8529',
        description: '迪士尼旁的歐風商場。',
        guideStory: '如果迪士尼玩累了，這裡有很好的餐廳和商店。裝潢像歐洲小鎮，很好拍照。',
        // Ikspiari architecture
        imageUrl: './assets/pictures/ikspiari.jpg', 
        highlights: [
          { category: 'MUST_BUY', text: 'Disney Store (免門票)' }
        ]
      },
      {
        id: '6-3',
        time: '15:45',
        title: '東京鐵塔 & 增上寺',
        type: ActivityType.SIGHTSEEING,
        location: 'Zojoji Temple',
        address: '4-7-35 Shibakoen, Minato City, Tokyo 105-0011',
        description: '經典紅白鐵塔。',
        guideStory: '從增上寺的階梯往上看，是拍攝東京鐵塔最經典的角度，傳統與現代的強烈對比。若有時間，可以走到「芝公園」的草地上野餐看鐵塔。',
        // Zojoji and Tokyo Tower
        imageUrl: './assets/pictures/tokyo_tower_zojoji.jpg', 
        highlights: [
          { category: 'TIP', text: '最佳拍照點：增上寺大殿前' },
          { category: 'TIP', text: '最佳拍照點：芝公園 4 號地' }
        ]
      },
      {
        id: '6-4',
        time: '18:30',
        title: 'Shibuya Sky & 澀谷',
        type: ActivityType.SIGHTSEEING,
        location: 'Shibuya Sky',
        address: '2-24-12 Shibuya, Shibuya City, Tokyo 150-6145',
        description: '最潮的澀谷夜景。',
        guideStory: 'Shibuya Sky 的戶外手扶梯是絕對必拍的！站在透明玻璃角落地板上，整個澀谷十字路口都在腳下。風很大，請注意保暖。',
        // Shibuya Scramble Crossing high angle
        imageUrl: './assets/pictures/shibuya_sky.jpg', 
        highlights: [
          { category: 'RESERVATION', text: '務必提前 2 週購票' },
          { category: 'TIP', text: '禁止攜帶腳架/自拍棒/帽子' }
        ]
      },
      {
        id: '6-5',
        time: '21:30',
        title: '晚餐：AFURI 或 美登利壽司',
        type: ActivityType.FOOD,
        location: 'Sushi no Midori Shibuya',
        address: '1-12-3 Dogenzaka, Shibuya City, Tokyo',
        description: '澀谷排隊名店晚餐。',
        guideStory: '美登利壽司以CP值極高著稱，特別是「超級特選握壽司拼盤」，那條超長的穴子魚(星鰻)是招牌！如果不想排隊，AFURI 的柚子鹽拉麵也是清爽的好選擇。',
        // Sushi platter
        imageUrl: './assets/pictures/midori_sushi.jpg', 
        highlights: [
          { category: 'MUST_ORDER', text: '美登利：超特選握壽司' },
          { category: 'MUST_ORDER', text: '穴子魚一本握' }
        ]
      }
    ]
  },
  {
    id: 'day7',
    date: '4/3 (四)',
    title: '築地美食 & 滿載而歸',
    weatherForecast: { temp: '13°C - 19°C', condition: 'Sunny' },
    items: [
      {
        id: '7-1',
        time: '08:00',
        title: '皇居外苑散步',
        type: ActivityType.SIGHTSEEING,
        location: 'Imperial Palace Nijubashi Bridge',
        address: '1-1 Chiyoda, Chiyoda City, Tokyo',
        description: '東京的綠色心臟。',
        guideStory: '二重橋是皇居最知名的景點，氣氛莊嚴寧靜。碎石子路走起來沙沙作響（為了防刺客的設計），早晨來這裡散步非常舒服。',
        // Nijubashi Bridge
        imageUrl: './assets/pictures/imperial_palace.jpg', 
        highlights: [
          { category: 'TIP', text: '必拍：二重橋與丸之內大樓群' }
        ]
      },
      {
        id: '7-2',
        time: '10:15',
        title: '築地場外市場',
        type: ActivityType.FOOD,
        location: 'Tsukiji Outer Market',
        address: '4-16-2 Tsukiji, Chuo City, Tokyo 104-0045',
        description: '東京的廚房，海鮮天堂。',
        guideStory: '雖然批發市場搬走了，但場外市場依然是美食一級戰區！「丸武」是藝人泰利伊藤家開的玉子燒店，甜甜熱熱的超好吃。想吃海鮮丼推薦「築地虎杖」或「壽司大(如果排得到)」。',
        // Tsukiji market street
        imageUrl: './assets/pictures/tsukiji_market.jpg', 
        highlights: [
          { category: 'MUST_EAT', text: '丸武玉子燒' },
          { category: 'MUST_EAT', text: '黑鮪魚壽司/海鮮丼' },
          { category: 'MUST_EAT', text: '草莓大福' }
        ]
      },
      {
        id: '7-3',
        time: '12:00',
        title: '上野阿美橫丁',
        type: ActivityType.SHOPPING,
        location: 'Ameyoko Shopping District',
        address: '4-9-14 Ueno, Taito City, Tokyo',
        description: '最後補貨！藥妝零食大採購。',
        guideStory: '這裡有最便宜的藥妝店（OS Drug 不退稅但直接便宜）和「二木的菓子」（零食批發價）。充滿叫賣聲，很有台灣夜市的親切感。',
        // Ameyoko Sign
        imageUrl: './assets/pictures/ameyoko.jpg', 
        highlights: [
          { category: 'MUST_BUY', text: '二木的菓子 (買伴手禮)' },
          { category: 'MUST_BUY', text: 'OS Drug (便宜藥妝)' }
        ]
      },
      {
        id: '7-4',
        time: '14:30',
        title: '搭乘 Skyliner 前往成田',
        type: ActivityType.TRANSPORT,
        location: 'Keisei Nippori Station',
        address: 'Nippori Station, Tokyo',
        description: '最速機場交通，36分鐘抵達。',
        guideStory: 'Skyliner 全車對號座，舒適寬敞。上車前記得在日暮里站買個鐵路便當或飲料。',
        // Skyliner Train
        imageUrl: './assets/pictures/skyliner_train.jpg', 
        highlights: [
          { category: 'TIP', text: '預留時間逛機場免稅店' }
        ]
      },
      {
        id: '7-5',
        time: '17:40',
        title: '班機起飛返台',
        type: ActivityType.TRANSPORT,
        location: 'Narita Airport Terminal 1',
        address: 'Narita International Airport (NRT)',
        description: '泰獅航空 SL395 (17:40-20:20)。',
        guideStory: '如果有剩下的零錢，可以在機場扭蛋機花掉。祝您旅途愉快，期待下次再來日本！',
        imageUrl: './assets/pictures/airport_return.jpg', 
        highlights: [
          { category: 'TIP', text: 'TPE 抵達時間：20:20' }
        ]
      }
    ]
  }
];

export const FLIGHTS: FlightInfo[] = [
  {
    type: 'DEPARTURE',
    airline: '台灣虎航 (Tigerair)',
    flightNumber: 'IT202',
    route: '台北桃園 (TPE) > 東京成田 (NRT)',
    time: '3/28 13:20 - 17:30'
  },
  {
    type: 'RETURN',
    airline: '泰獅航空 (Thai Lion Air)',
    flightNumber: 'SL395',
    route: '東京成田 (NRT) > 台北桃園 (TPE)',
    time: '4/3 17:40 - 20:20'
  }
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    name: 'Asakusa Ryokan Toukaisou',
    dates: '3/28 - 3/29',
    notes: '淺草區，傳統日式旅館，近雷門',
    address: '2-16-12 Nishi-Asakusa, Taito-ku, Tokyo'
  },
  {
    name: 'Hotel Mifujien (美富士飯店)',
    dates: '3/29 - 3/31',
    notes: '河口湖畔，客房內可看富士山，附溫泉',
    address: '207 Azagawa, Fujikawaguchiko, Yamanashi'
  },
  {
    name: '日暮里 Airbnb',
    dates: '4/1 - 4/3',
    notes: '交通樞紐，Skyliner 直達機場方便',
    address: 'Near Nippori Station, Arakawa City'
  }
];

export const TRANSPORT_MAPS_DATA: TransportMapItem[] = [
  {
    id: 'keisei-access',
    name: '京成 Access 特急',
    company: 'Keisei',
    color: '#ea5404',
    textColor: '#ffffff',
    description: '連接成田機場與淺草/羽田的快速列車。不需對號入座，可刷西瓜卡。',
    imageUrl: './assets/pictures/transport_keisei_cover.jpg',
    mapUrl: './assets/pictures/transport_keisei_map.jpg',
    officialLink: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/tc/traffic/index.php'
  },
  {
    id: 'jr-yamanote',
    name: 'JR 山手線',
    company: 'JR',
    color: '#9acd32',
    textColor: '#ffffff',
    description: '東京最重要的環狀線，連接新宿、澀谷、東京、上野等大站。綠色車廂。',
    imageUrl: './assets/pictures/transport_jr_yamanote_cover.jpg',
    mapUrl: './assets/pictures/transport_jr_yamanote_map.jpg',
    officialLink: 'https://www.jreast.co.jp/tc/downloads/index.html'
  },
  {
    id: 'jr-keiyo',
    name: 'JR 京葉線',
    company: 'JR',
    color: '#c9242f',
    textColor: '#ffffff',
    description: '前往東京迪士尼 (舞濱站) 必搭的路線。東京車站轉乘需走很遠。',
    imageUrl: './assets/pictures/transport_jr_keiyo_cover.jpg',
    mapUrl: './assets/pictures/transport_jr_keiyo_map.jpg',
    officialLink: 'https://www.jreast.co.jp/tc/downloads/index.html'
  },
  {
    id: 'fuji-excursion',
    name: '富士回遊號',
    company: 'JR',
    color: '#E60012',
    textColor: '#ffffff',
    description: '新宿直達河口湖的特急列車 (E353系)。全車指定席，一定要預約。',
    imageUrl: './assets/pictures/transport_fuji_excursion_cover.jpg',
    mapUrl: './assets/pictures/transport_fuji_excursion_map.jpg',
    officialLink: 'https://www.jreast.co.jp/hachioji/fuji_excursion/tw/'
  },
  {
    id: 'metro-ginza',
    name: '東京 Metro 銀座線',
    company: 'Tokyo Metro',
    color: '#f39700',
    textColor: '#ffffff',
    description: '亞洲第一條地鐵。連接澀谷、表參道、銀座、淺草等觀光熱點。',
    imageUrl: './assets/pictures/transport_metro_ginza_cover.jpg',
    mapUrl: './assets/pictures/transport_metro_ginza_map.jpg',
    officialLink: 'https://www.tokyometro.jp/tcn/subwaymap/index.html'
  },
  {
    id: 'metro-hanzomon',
    name: '東京 Metro 半藏門線',
    company: 'Tokyo Metro',
    color: '#8b76cc',
    textColor: '#ffffff',
    description: '紫色路線。可前往澀谷、表參道、清澄白河、押上(晴空塔)。',
    imageUrl: './assets/pictures/transport_metro_hanzomon_cover.jpg',
    mapUrl: './assets/pictures/transport_metro_hanzomon_map.jpg',
    officialLink: 'https://www.tokyometro.jp/tcn/subwaymap/index.html'
  },
  {
    id: 'metro-hibiya',
    name: '東京 Metro 日比谷線',
    company: 'Tokyo Metro',
    color: '#b5b5ac',
    textColor: '#000000',
    description: '銀色路線。連接中目黑、六本木、銀座、秋葉原、上野。',
    imageUrl: './assets/pictures/transport_metro_hibiya_cover.jpg',
    mapUrl: './assets/pictures/transport_metro_hibiya_map.jpg',
    officialLink: 'https://www.tokyometro.jp/tcn/subwaymap/index.html'
  },
  {
    id: 'toei-oedo',
    name: '都營大江戶線',
    company: 'Toei',
    color: '#b6007a',
    textColor: '#ffffff',
    description: '深粉紅/洋紅色。環狀地下鐵，經過新宿、六本木、築地市場。',
    imageUrl: './assets/pictures/transport_toei_oedo_cover.jpg',
    mapUrl: './assets/pictures/transport_toei_oedo_map.jpg',
    officialLink: 'https://www.kotsu.metro.tokyo.jp/ch_h/services/subway.html'
  }
];
