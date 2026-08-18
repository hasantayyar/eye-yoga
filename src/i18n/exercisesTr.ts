import type { ExerciseCopy } from '../types'

export const exercisesTr: Record<string, ExerciseCopy> = {
  blinking: {
    name: 'Tam Kırpma',
    alsoKnownAs: 'Göz kırpma pratiği',
    tagline: 'Ekranın sana atlamayı öğrettiği tam kırpmayı yeniden öğren.',
    what: 'Kapakların gerçekten birleştiği yavaş kırpmalar, ardından hafif bir sıkma ve dinlenme.',
    why: 'Her kırpma gözün üzerine taze bir yağ tabakası yayar. Ekran okurken dikkat kapaklardan uzaklaşır ve kırpmalar yarım kalır: kapaklar yarı yolda döner, gözün alt üçte biri örtüsüz kalıp kurur. Tam kapanmayı çalışmak o şeride tabakasını geri verir.',
    evidenceNote:
      '2013 tarihli bir çalışmada şikayetler kırpma sıklığıyla değil, yarım kalan kırpmaların oranıyla ilişkili çıktı. İnsanlara daha sık kırpmalarını söylemek hiçbir şeyi değiştirmedi. Bu yüzden burada hız değil, tam kapanma çalışılıyor.',
    setup: 'Her yerde olur. Otur veya ayakta dur, yüzün gevşek, gözlük takılı ya da çıkmış.',
    howTo: [
      'Kırpma gözü kısmaktan değil, üst kapağın düşmesinden gelsin.',
      'Kapaklar açılmadan önce bir an birbirine dokunsun.',
      'Alın ve çene işin dışında kalsın. Sadece kapaklar hareket etsin.',
      'Sonrasında gözler kum gibi hissediyorsa, daha fazla kırpma değil suni gözyaşı gerekiyor olabilir.',
    ],
    bestFor: [
      'Öğleden sonra kuru, kumlu hissettiren gözler',
      'Uzun okuma, kod yazma veya araba kullanma süreleri',
      'Lens kullananlar',
    ],
    skipIf: [
      'Göz enfeksiyonu, arpacık veya yeni bir göz yaralanması varsa. Kapaklara dokunma, hekime git.',
      'Sıkmak acıtıyorsa. Sadece yumuşak kırpmaları yap, sıkma adımını atla.',
    ],
    steps: [
      {
        label: 'Yumuşak kırpmalar',
        instruction: 'Her işarette tam kırp. Kapaklar tamamen birleşsin, sonra açılsın. Zorlamadan.',
      },
      {
        label: 'Sık',
        instruction: 'Kapat ve hafifçe sık. Üç sayı boyunca kapakların birbirine bastığını hisset.',
      },
      {
        label: 'Bırak',
        instruction: 'Bırak. Gözler kapalı kalsın, yüz yumuşak, omuzlar aşağıda.',
      },
    ],
  },

  twenty: {
    name: '20-20-20 Molası',
    alsoKnownAs: 'Uzak molası',
    tagline: 'Her yirmi dakikada, odak kasına yirmi saniye izin ver.',
    what: 'En az 6 metre uzaktaki bir şeye 20 saniye bak, sonra birkaç kez tam kırp.',
    why: 'Yakına odaklanmak kas işidir: gözün içindeki halka biçimli bir kas merceği yuvarlaklaştırır ve o şekilde tutar. Saatlerce ara vermeden bunu yapmak, çoğu insanın yorgun göz diye tanımladığı şeydir. Uzağa bakmak o kası gevşetir; elindeki ağır çantayı yere bırakmak gibi.',
    evidenceNote:
      'Kanıtlar gerçekten ikiye bölünmüş. 2023 tarihli bir çalışma, bu molalar için hatırlatma almanın zorlanmayı ve kuruluk şikayetlerini azalttığını, odak esnekliğini artırdığını buldu. Aynı yıl başka bir çalışma ise tek başına 20 saniyelik molaların hiçbir şeyi değiştirmediğini gösterdi; yazarlar molanın bir iki dakika olması gerektiğinden şüpheleniyor. Göz sağlığı kuruluşları yine de öneriyor, çünkü maliyeti neredeyse sıfır.',
    setup: 'Pencere kenarı veya uzun bir manzara ideal. Uzak bir duvar da olur. Mümkünse ayağa kalk.',
    howTo: [
      'Boş bir duvar değil, detaylı gerçek bir nesne seç ve netleşmesini bekle.',
      'Altı metre kabaca odanın öbür ucu, bir koridor veya pencere dışı demek.',
      'Bakarken ayağa kalk ve biraz hareket et. Faydanın bir kısmı molanın kendisi.',
      'Ekrana dönmeden önce birkaç kez tam kırp.',
    ],
    bestFor: [
      'Her uzun ekran oturumu',
      'Gün sonunda ağrıyan veya bulanıklaşan gözler',
      'Gözlerin arkasında biriken baş ağrıları',
    ],
    skipIf: ['Atlanacak bir şey yok. Uygulamadaki en güvenli hareket bu.'],
    steps: [
      {
        label: 'Uzağa bak',
        instruction:
          'En az 6 metre uzakta bir şey bul ve gözlerini oraya yerleştir. Yüzün ve omuzların yumuşasın.',
      },
      {
        label: 'Kırparak dön',
        instruction: 'Dönmeden önce iki üç tam kırpma. Kapaklar tamamen kapansın.',
      },
    ],
  },

  palming: {
    name: 'Avuçlama',
    alsoKnownAs: 'Sıcak el dinlenmesi',
    tagline: 'Sıcak karanlık. Göz yogasının en eski ve en dinlendirici hareketi.',
    what: 'Avuçları ısıtana kadar ovuştur, kapalı gözlerin üzerine bastırmadan kapat ve tam karanlıkta dinlen.',
    why: 'İki şey olur. Gözler hiçbir loş odanın veremediği gerçek karanlığı alır ve sıcaklık, konsantre olurken kasılan göz çevresi kaslarını gevşetir. Ayrıca günün ortasında tam bir duraktır; etkinin büyük kısmı da bu olabilir.',
    evidenceNote:
      'Avuçlama, 2016 tarihli kontrollü bir çalışmada göz yorgunluğu puanlarını düşüren sekiz adımlı yoga dizisinin ilk adımı. Ancak o çalışma diziyi bütün olarak test etti, avuçlamayı tek başına değil. Görüşü düzelttiğine dair geleneksel iddialar desteklenmiyor. Dinlenme olarak gör; onu iyi yapıyor.',
    setup: 'Dirsekleri masaya ya da kaburgalara yasla; kollar çalışmasın.',
    howTo: [
      'Avuçlarını hızlıca birbirine ovuştur, ısındığını hissedene kadar.',
      'Avucun çukuru kapalı gözün üzerine gelecek şekilde kapat. Göz küresine ağırlık binmesin.',
      'Parmaklar alına, el ayaları elmacık kemiklerine yerleşsin.',
      'Işığı tamamen kes. Hâlâ bir parlaklık görüyorsan yerleşimi düzelt.',
    ],
    bestFor: [
      'Yoğun bir ekran gününün sonu',
      'Kaş ve şakaklardaki gerginlik',
      'İki iş arasında bir sıfırlama',
    ],
    skipIf: [
      'Yakın zamanda göz ameliyatı veya yaralanma geçirdiysen. Elini göze yaklaştırma.',
      'Göz enfeksiyonun varsa. Atla, ya da ellerini yıka ve kapaklara dokunma.',
      'Lens kullanıyorsan ve gözlerin zaten tahriş olmuşsa.',
    ],
    steps: [
      {
        label: 'Elleri ısıt',
        instruction: 'Avuçlarını hızlıca ovuştur, gerçekten sıcak hissedene kadar.',
      },
      {
        label: 'Kapat ve dinlen',
        instruction:
          'Sıcak avuçları kapalı gözlerin üzerine yerleştir. Göz küresine baskı yok. Karanlık tam olsun ve sadece nefes al.',
      },
      {
        label: 'Geri dön',
        instruction: 'Elleri yavaşça kaydır. Gözler bir an kapalı kalsın, sonra usulca aç.',
      },
    ],
  },

  'near-far': {
    name: 'Yakın ve Uzak',
    alsoKnownAs: 'Odak esnekliği',
    tagline: 'Yakın ile uzak arasında geçiş yap; mercek takılı kalmasın.',
    what: 'Yaklaşık 25 cm mesafedeki başparmağına odaklan, sonra görebildiğin en uzak şeye. Değiştirmeye devam et.',
    why: 'Merceğin şeklini değiştiren kasın hem kasılması hem gevşemesi gerekir. Saatlerce tek mesafede kalmak onu geç tepki verir hale getirir; başını kaldırdığında odanın bir an yumuşak görünmesinin nedeni bu. Mesafeleri değiştirmek o kas için bir hareket açıklığı çalışmasıdır.',
    evidenceNote:
      '2023 tarihli mola hatırlatması çalışmasında odak esnekliğinde, yani odağın ne kadar hızlı değişebildiğinde, ölçülebilir bir iyileşme bulundu; burada çalışılan tam olarak bu. Bu esneklik ölçüsüdür, keskinlik değil: numaranı değiştirmez.',
    setup: 'Bir yöne uzun bakış açın olan bir yere otur. Pencere ideal.',
    howTo: [
      'Başparmağını yüzünden yaklaşık 25 cm uzakta tut, ya da o mesafedeki küçük bir detayı kullan.',
      'Geçiş yapmadan önce her hedefin gerçekten netleşmesini bekle. Acele etme.',
      'Baş sabit kalsın. Sadece odak değişsin.',
      'Birkaç turdan sonra hafif bir sızı normal. Baş ağrısı ise dur demektir.',
    ],
    bestFor: [
      'Yakın işten başını kaldırdığında bulanık görme',
      'Uzun okuma veya ekran günleri',
      'Detaylı işten önce ısınma',
    ],
    skipIf: [
      'Baş ağrısı veya mide bulantısı yapıyorsa. Dur ve dinlen.',
      'Yeni başlayan veya artan çift görme varsa. Önce göz hekimine git.',
    ],
    steps: [
      {
        label: 'Yakın',
        instruction: 'Yüzünden 25 cm uzaktaki başparmağına odaklan. Detayın netleşmesini bekle.',
      },
      {
        label: 'Uzak',
        instruction: 'Şimdi görebildiğin en uzak şey. Geçmeden önce tamamen netleşsin.',
      },
      { label: 'Kırp', instruction: 'Tabakayı yenilemek için bir tam kırpma.' },
    ],
  },

  'nose-tip': {
    name: 'Başparmaktan Buruna',
    alsoKnownAs: 'Burun ucu bakışı, kalem itmesi',
    tagline: 'Gözleri birlikte içe dönmeye ve tek görüntü kalmaya alıştır.',
    what: 'Başparmağını kolun uzunluğunda tut, tek net görüntüyü koruyarak yavaşça burnuna yaklaştır, sonra geri götür.',
    why: 'Yakındaki bir şeye bakmak iki gözün de aynı anda aynı miktarda içe dönmesini gerektirir. Bu takım çalışması zayıfsa görüntü ikiye ayrılır ya da bir iki sayfa sonra harfler yüzmeye başlar. Bir hedefi içe doğru takip etmek, gözlerin hâlâ tek görüntü birleştirebildiği aralığı çalıştırır.',
    evidenceNote:
      'Bu, Konverjans Yetersizliği Tedavi Çalışması\u2019nın ev egzersizi. Tanı almış çocukların %43\u2019üne yardım etti; gözetimli klinik terapi ise %73\u2019üne. Yani belirli bir durum için gerçek bir tedavi ve ikinci en iyi seçenek. Yakın iş düzenli olarak çiftleşiyor veya ağrıyorsa, kendi kendine tedavi yerine değerlendirme al.',
    setup: 'Dik otur, bir kolu öne uzatabileceğin yer olsun. Başparmağına iyi ışık gelsin.',
    howTo: [
      'Bir kolunu uzat, başparmak yukarı, göz seviyesinde. Tırnağa bak.',
      'Başparmağı burnuna doğru yavaşça getir; tüm yol beş saniye sürsün.',
      'İkiye ayrıldığı anda dur, birleşene kadar bekle, sonra devam et.',
      'Birleşmiyorsa tek göründüğü yere geri götür ve baştan başla.',
    ],
    bestFor: [
      'Bir iki sayfa sonra yüzen veya çiftleşen harfler',
      'Özellikle yakın mesafede toplanan göz yorgunluğu',
      'Tanı almış konverjans yetersizliği; hekimin planıyla birlikte',
    ],
    skipIf: [
      'Tedavi görmüş şaşılık veya göz kayması varsa. Önce uzmanına sor.',
      'Çift görme aniden başladıysa. Bu egzersiz değil, bugün tıbbi ilgi gerektirir.',
      'Her seferinde baş ağrısı veya bulantı yapıyorsa.',
    ],
    steps: [
      {
        label: 'Kol uzak',
        instruction: 'Başparmak yukarı, kol uzunluğunda, göz seviyesinde tam karşıda. Tırnağa bak.',
      },
      {
        label: 'İçe getir',
        instruction: 'Başparmağı yavaşça burun ucuna doğru getir. Tek ve net kalsın.',
      },
      {
        label: 'Burunda',
        instruction: 'Burada dur. Yolda ikiye ayrıldıysa, tek olduğu yerde bekle.',
      },
      {
        label: 'Geri götür',
        instruction: 'Başparmağı yavaşça kol uzunluğuna geri götür. Yol boyunca gözünü ayırma.',
      },
      { label: 'Kırp', instruction: 'Bir tam kırpma, gözler yerleşsin.' },
    ],
  },

  sideways: {
    name: 'Yana Bakış',
    tagline: 'Soldan sağa tam süpürme, iki uçta da beklemeli.',
    what: 'Hedefi bir uca kadar takip et, bekle, karşı uca süpür, bekle ve merkeze dön.',
    why: 'Her gözü altı küçük kas yönlendirir ve ekran işi bu kasların menzilinin ortasındaki dar bir alanı kullanır. Uçlara gidip orada beklemek yatay çifti sahip olduğu her şeyden geçirir; germe hissi buradan gelir.',
    evidenceNote:
      'Yana bakış, 2016 tarihli kontrollü çalışmada göz yorgunluğunu ölçülebilir şekilde azaltan sekiz adımlı yoga dizisinin adımlarından biri. Dizi bütün olarak test edildi, dolayısıyla bu hareketin tek başına etkisi bilinmiyor.',
    setup: 'Baş tam karşıda ve sabit. Telefon veya ekran kol mesafesinde, ortada.',
    howTo: [
      'Baş tamamen sabit kalsın. Sadece gözler gitsin.',
      'Mümkün olduğu kadar değil, rahat olduğu kadar uzağa git.',
      'Her uçta bekle ve çekilmeyi zorlamadan fark et.',
      'Noktanın önüne geçmek yerine onunla birlikte hareket et.',
    ],
    bestFor: ['Sabit ekran işinden sonra katılaşmış, ağır gözler', 'Diğer hareketler öncesi ısınma'],
    skipIf: [
      'Baş dönmesi veya mide bulantısı olursa. Dur, sabit bir şeye bak, dinlen.',
      'Yakın zamanda göz ameliyatı veya retina sorunu geçirdiysen. Önce cerrahına sor.',
    ],
    steps: [
      { label: 'Sola', instruction: 'Noktayı sola takip et. Baş sabit.' },
      { label: 'Solda bekle', instruction: 'Uçta kal. Hafif çekilmeyi fark et.' },
      { label: 'Karşıya', instruction: 'Sağa kadar eşit hızda git.' },
      { label: 'Sağda bekle', instruction: 'Burada kal. Nefesini ver.' },
      { label: 'Merkeze', instruction: 'Gözleri ortaya getir.' },
      { label: 'Kırp', instruction: 'Sonraki turdan önce bir tam kırpma.' },
    ],
  },

  'front-sideways': {
    name: 'Ön ve Yan',
    tagline: 'Uca sıçra, ortaya dön, diğer uca sıçra.',
    what: 'Bakışını merkez ile uçlar arasında sıçrat; arada kaydırma yok.',
    why: 'Süpürmek ve sıçramak farklı işlerdir. Sıçrama, hedefe inip anında durması gereken tek bir komuttur ve kasları motor kadar fren olarak da kullanır. Araya merkezi koymak iki gözün birlikte varmasını çalıştırır.',
    evidenceNote:
      'Ön ve yan bakış, 2016\u2019da test edilen sekiz adımlı dizinin dördüncü adımı; dizi bütün olarak göz yorgunluğu puanlarını düşürdü. Hiçbir çalışma bu hareketi tek başına ölçmedi.',
    setup: 'Baş sabit ve düz. Uçlar arasında gerçek bir mesafe olacak kadar geride otur.',
    howTo: [
      'Gözler sıçrasın. Kaydırma yok.',
      'Noktaya in ve dur. Sürüklenme veya arama olmasın.',
      'Her seferinde merkeze dön ve bir an yerleş.',
      'Sarsıntılı geliyorsa veya hedefi kaybediyorsan yavaşla.',
    ],
    bestFor: ['Gün boyu ekran ile kâğıt arasında geçiş', 'Sabah gözleri uyandırmak'],
    skipIf: [
      'Baş dönmesi, bulantı veya baş ağrısı başlıyorsa.',
      'Vertigo veya vestibüler bir rahatsızlığın varsa; hekimin onaylamadıysa yapma.',
    ],
    steps: [
      { label: 'Sol', instruction: 'Doğrudan sol noktaya sıçra. İn ve dur.' },
      { label: 'Merkez', instruction: 'Ortaya dön. Yerleş.' },
      { label: 'Sağ', instruction: 'Sağ noktaya sıçra.' },
      { label: 'Merkez', instruction: 'Ortaya dön.' },
    ],
  },

  updown: {
    name: 'Yukarı ve Aşağı Bakış',
    tagline: 'Ekran işinin neredeyse hiç istemediği dikey süpürme.',
    what: 'Hedefi yukarı takip et, bekle, aşağıya kadar git, bekle ve ortaya dön.',
    why: 'Ekranlar göz seviyesinin altında durur; gözler günü hafifçe aşağı bakarak geçirir ve neredeyse hiç yukarı bakmaz. Yukarı çeken kas çifti altısının en az kullanılanıdır ve menzilini geri veren hareket budur.',
    evidenceNote:
      'Yukarı aşağı bakış, göz yorgunluğunu azaltan 2016 dizisinin adımlarından biri. Bütünün parçası olarak test edildi, tek başına değil.',
    setup: 'Dik otur. Çene düz ve sabit; kafayı sallama isteği gelir.',
    howTo: [
      'Çene olduğu yerde kalsın. Sadece gözler yükselip insin.',
      'Rahat bir uca kadar git, sonra dur.',
      'Yukarıdaki bekleme genelde daha zor gelir. Genelde bütün olay da bu.',
      'Her turun sonunda kırp.',
    ],
    bestFor: [
      'Bakışın sürekli hafif aşağıda olduğu dizüstü ve telefon duruşu',
      'Gözlerin üstünde gergin, ağır bir his',
    ],
    skipIf: [
      'Yukarı bakmak baş dönmesi veya boyun ağrısı yapıyorsa.',
      'Yakın zamanda göz veya retina ameliyatı geçirdiysen; onay almadıysan yapma.',
    ],
    steps: [
      { label: 'Yukarı', instruction: 'Noktayı yukarı takip et. Çene sabit.' },
      { label: 'Yukarıda bekle', instruction: 'Üst uçta kal. Yüz yumuşak.' },
      { label: 'Aşağıya kadar', instruction: 'Ortadan geçerek eşit hızda aşağı in.' },
      { label: 'Aşağıda bekle', instruction: 'Altta dinlen.' },
      { label: 'Merkeze', instruction: 'Ortaya dön.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  diagonal: {
    name: 'Çapraz Bakış',
    tagline: 'Köşeden köşeye iki hat; kasların işbirliği gerekir.',
    what: 'Bir çapraz boyunca karşı köşeler arasında git, sonra diğer çaprazda.',
    why: 'Hiçbir tek kas çaprazı gösteremez. Oraya varmak iki çiftin harmanlanmış oranda çekmesi demek; bu bir germeden çok koordinasyon işidir. Köşeler ayrıca görme alanının ekranın hiç kullanmadığı bölgesi.',
    evidenceNote:
      'Çapraz çalışma yoga göz rutinlerinde standart ama ayrıca test edilmedi. Tüm bu hareketler için dürüst tavan aynı: gevşetip tazeleyebilirler, görüşü keskinleştirmez ve numarayı değiştirmezler.',
    setup: 'Baş düz ve sabit. Tüm alanı kullan; telefonu dikey tut.',
    howTo: [
      'Eşit hızda hareket et; gözler merkezin etrafından değil içinden geçsin.',
      'Her köşede kısa bir mola ver.',
      'Bir çaprazı tamamlamadan diğerine geçme.',
      'Hareket değil çaba gibi gelmeye başlarsa dur.',
    ],
    bestFor: ['Düz hatların ulaşamadığı katılık', 'Rutin sıkıcılaştığında çeşitlilik'],
    skipIf: [
      'Baş dönmesi, bulantı veya biriken baş ağrısı.',
      'Yakın zamanda göz ameliyatı veya retina rahatsızlığı.',
    ],
    steps: [
      { label: 'Sağ üste', instruction: 'Noktayı sağ üst köşeye kadar takip et.' },
      { label: 'Bekle', instruction: 'Köşede dur.' },
      { label: 'Sol alta', instruction: 'Merkezden geçerek tüm çaprazı kat et.' },
      { label: 'Bekle', instruction: 'Köşede dur.' },
      { label: 'Merkeze', instruction: 'Ortaya dön.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
      { label: 'Sol üste', instruction: 'Şimdi diğer çapraz. Sol üst köşeye çık.' },
      { label: 'Bekle', instruction: 'Burada dur.' },
      { label: 'Sağ alta', instruction: 'Çaprazın tamamını kat et.' },
      { label: 'Bekle', instruction: 'Köşede dur.' },
      { label: 'Merkeze', instruction: 'Ortaya dön.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  rotation: {
    name: 'Dairesel Bakış',
    alsoKnownAs: 'Göz daireleri',
    tagline: 'Her yöne birer yavaş daire, sırayla her yönü dokunarak.',
    what: 'Gözlerinle saat yönünde tam bir daire çiz, sonra tersine.',
    why: 'Daire işi bir kastan diğerine pürüzsüzce devreder; altısı da sarsılmadan sıraya girer. Gözlerin bir eklem rotasyonuna en yakın hareketi budur ve insanların en çok "hissediyorum" dediği hareket.',
    evidenceNote:
      'Dairesel bakış, göz yorgunluğu puanlarını düşüren 2016 kontrollü çalışmasındaki sekiz adımdan biri. Diğerleri gibi dizi bütün olarak test edildi.',
    setup: 'Baş sabit ve düz. Ekran ortada, rahat bir kol mesafesinde.',
    howTo: [
      'Noktayı kendi hızında takip et. Önüne geçme.',
      'Daireyi yuvarlak tut, uçlarda köşelenmesin.',
      'Bir yön, sonra diğeri; aralarda bir kırpma.',
      'Baş döndürüyorsa yarım daireler yap.',
    ],
    bestFor: ['Göz çevresinde katı, sıkışmış bir his', 'Uzun iş gününün ortası'],
    skipIf: ['Baş dönmesi veya hareket tutması.', 'Vertigo ya da yeni göz veya retina ameliyatı.'],
    steps: [
      { label: 'Saat yönü', instruction: 'Noktayı yavaş ve eşit takip et. Baş sabit.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma, gözler yerleşsin.' },
      { label: 'Saat yönü tersi', instruction: 'Şimdi aynı daireyi ters yönde.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  'figure-eight': {
    name: 'Sekiz Çizimi',
    alsoKnownAs: 'Yatık sekiz',
    tagline: 'Ortadan tekrar tekrar geçen uzun, döngülü bir eğri.',
    what: 'Gözlerinle yatık bir sekiz çiz, bir yöne ve sonra diğerine.',
    why: 'Sekiz orta hattı tekrar tekrar geçer; her göz sırayla önderliği diğerine bırakır. Bu geçiş, düz bir dairenin çalıştırmadığı kısımdır ve hareketin germeden çok takip gibi hissedilmesinin nedeni.',
    evidenceNote:
      'Yatık sekiz görme terapisi ve sınıf programlarında yaygın ama sağlıklı gözlerde rahatlığı ya da görüşü iyileştirdiğine dair iyi bir çalışma yok. Keyifli bir takip alıştırması. Burada daha fazlası iddia edilmiyor.',
    setup: 'Baş sabit, ekran ortada. Yatay tutmak döngülere daha çok yer verir.',
    howTo: [
      'Gözler kaysın. Eğri basamaklı değil sürekli hissedilsin.',
      'Ortadaki kesişme noktasını fark et ve pürüzsüzce geçmeye devam et.',
      'Her tam turdan sonra yönü değiştir.',
      'Yavaş olması büyük olmasından iyidir.',
    ],
    bestFor: ['Pürüzsüz takip pratiği', 'Sıçrama egzersizlerine daha sakin bir alternatif'],
    skipIf: ['Baş dönmesi veya hareket tutması.', 'Yeni göz ameliyatı; onay almadıysan yapma.'],
    steps: [
      { label: 'Çiz', instruction: 'Noktayı sekizin etrafında takip et. Pürüzsüz ve acelesiz.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
      { label: 'Ters yön', instruction: 'Şimdi aynı sekizi geriye doğru çiz.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  square: {
    name: 'Kare Çizimi',
    tagline: 'Dört düz kenar ve dört köşe, menzilinin dış sınırında.',
    what: 'Hedefi bir karenin kenarları boyunca takip et, bir yöne ve sonra diğerine.',
    why: 'Kare her yönü bir kenar boyunca korur ve sonra keskin bir dönüş ister; sürekli bir çekilme ile yön değişimini birleştirir. Köşeler rahat hareketin dış sınırında durur, katılık da genelde orada yaşar.',
    evidenceNote:
      'Kendine ait bir çalışması olmayan geleneksel bir şekil alıştırması. Diğer hareketlerle aynı dürüst tavan: tazeleyici, düzeltici değil.',
    setup: 'Baş sabit. Elinin altındaki en büyük ekranı kullan.',
    howTo: [
      'Köşeleri kesmek yerine kenarları takip et.',
      'Her köşedeki dönüş net olsun.',
      'Her turdan sonra yönü değiştir.',
      'Köşeler zorlanma yaratıyorsa kareyi küçült.',
    ],
    bestFor: ['Dairelere yapılandırılmış bir alternatif', 'Görme alanının uçlarına ulaşmak'],
    skipIf: ['Baş dönmesi.', 'Yeni göz ameliyatı veya retina rahatsızlığı.'],
    steps: [
      { label: 'Tur', instruction: 'Noktayı karenin etrafında takip et. Kenar kenar.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
      { label: 'Ters yön', instruction: 'Şimdi diğer yöne.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  saccades: {
    name: 'Hızlı Sıçramalar',
    alsoKnownAs: 'Sakkadik geçişler',
    tagline: 'İki nokta arasında hızlı, isabetli sıçramalar. Dürüstçe: oyun.',
    what: 'Bakışını iki hedef arasında hızla değiştir, her birine tam olarak inerek.',
    why: 'Okumak dakikada binlerce küçük sıçramadır; her biri bilinçli çaba olmadan nişanlanır ve durdurulur. Bunu bilerek ve daha büyük yapmak mekanizmayı bir an fark edilir kılar ve yorgun gözleri uyandırmanın gerçekten keyifli bir yolu.',
    evidenceNote:
      'Sıçrama alıştırmaları spor görme ve görme terapisi programlarından geliyor. Sağlıklı gözlerde rahatlığı veya görüşü iyileştirdiğine dair iyi bir kanıt yok ve American Academy of Ophthalmology görme antrenmanının görüşü keskinleştirdiğinin kanıtlanmadığını açıkça söylüyor. Tedavi olarak değil, ekran transını kırmanın canlı bir yolu olarak burada.',
    setup: 'Baş sabit ve düz. İki nokta düzgün ayrılsın diye geride otur.',
    howTo: [
      'Sıçra. Gözleri kaydırma.',
      'Noktaya in ve o hareket edene kadar sabit dur.',
      'Hız değil isabet.',
      'Birkaç turdan sonra bırak. Bu hareket çabuk yorar.',
    ],
    bestFor: ['İşler arasında hızlı bir uyanma', 'Ekrana dalıp kalmayı kırmak'],
    skipIf: [
      'Baş dönmesi, bulantı veya baş ağrısı yapıyorsa.',
      'Vestibüler bir rahatsızlığın veya görsel tetiklenen migren geçmişin varsa.',
      'Işığa duyarlı epilepsin varsa. Hızlı değişimler riske değmez.',
    ],
    steps: [
      { label: 'Sol', instruction: 'Sol noktaya sıçra. İn ve dur.' },
      { label: 'Sağ', instruction: 'Sağ noktaya sıçra.' },
      { label: 'Sol', instruction: 'Ve sola geri.' },
      { label: 'Sağ', instruction: 'Ve yeniden sağa.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma ve dinlen.' },
    ],
  },

  trataka: {
    name: 'Sabit Bakış',
    alsoKnownAs: 'Trataka',
    tagline: 'Odanın kalanı sessizleşene kadar tek bir noktada kal.',
    what: 'Gözlerini zorlamadan tek bir noktaya yerleştir, sonra kapat ve iz görüntünün solmasını izle.',
    why: 'Bu, gözlerden geçen bir dikkat pratiği. Tek noktada kalmak günün büyük kısmını dolduran sürekli taramayı durdurur; kapalı göz aşaması ise karanlıkta izleyecek bir şey verir, bu da "gevşe" denmesinden daha kolay dinlendirir.',
    evidenceNote:
      'Küçük çalışmalar trataka seansının hemen ardından dikkat ve tepki kontrolünde gerçek kısa vadeli kazanımlar ölçtü. Küçük örneklemler, çoğu genç erkek gönüllü, kısa vadeli. Geleneksel biçimi mum alevi kullanır ve kırpmayı önermez; buradaki yumuşak bir nokta kullanıyor ve ihtiyaç duydukça kırpmanı istiyor, çünkü bilerek kırpmamak gözü kurutur.',
    setup: 'Sırtın dik, rahat otur, ekran göz seviyesinde, mümkünse oda ışığı kısık.',
    howTo: [
      'Bakış yumuşak olsun. Bu noktada dinlenmek, ona delmek değil.',
      'İstediğin zaman kırp. Rahatlık önce gelir.',
      'Zihin dağıldığında yorum yapmadan noktaya dön.',
      'Kapalı aşamada iz görüntüyü kovalamadan izle.',
    ],
    bestFor: ['Akşam yavaşlamak', 'Dağınık, aşırı uyarılmış bir zihin', 'Uyku öncesi'],
    skipIf: [
      'Işığa duyarlı epilepsin veya parlak noktalara bakmakla tetiklenen migrenin varsa.',
      'Gözlerin kuru ve ağrılıysa. Onun yerine kırpma pratiğini yap.',
      'Sabit bakmak seni kaygılandırıyorsa.',
    ],
    steps: [
      {
        label: 'Sabit bakış',
        instruction: 'Gözlerini noktaya yerleştir. Yumuşak, zorlamasız. İhtiyaç duydukça kırp.',
      },
      {
        label: 'Gözler kapalı',
        instruction: 'Gözlerini kapat ve iz görüntünün karanlıkta solmasını izle.',
      },
    ],
  },
}
