import type { ExerciseCopy } from '../types'

export const exercisesTr: Record<string, ExerciseCopy> = {
  blinking: {
    name: 'Tam Kırpma',
    alsoKnownAs: 'Göz kırpma pratiği',
    tagline: 'Ekran başında yarım bırakmayı öğrendiğin tam kırpmayı geri kazan.',
    what: 'Kapakların gerçekten birleştiği yavaş kırpmalar, ardından hafif bir sıkma ve dinlenme.',
    why: 'Her kırpma gözün üzerine taze bir gözyaşı tabakası yayar. Ekrana bakarken dikkat kapaklardan uzaklaşır ve kırpmalar yarım kalır: kapaklar yarı yoldan geri döner, gözün alt üçte biri açıkta kalıp kurur. Tam kapanmayı çalışmak o şeridi yeniden ıslatır.',
    evidenceNote:
      '2013 tarihli bir çalışmada şikayetler kırpma sıklığıyla değil, yarım kalan kırpmaların oranıyla ilişkili çıktı. İnsanlara daha sık kırpmalarını söylemek hiçbir şeyi değiştirmedi. Bu yüzden burada hız değil, tam kapanma çalışılıyor.',
    setup:
      'Her yerde yapılır. Oturabilir ya da ayakta durabilirsin; yüzün gevşek olsun, gözlük fark etmez.',
    howTo: [
      'Kırpma gözü kısmaktan değil, üst kapağın kendiliğinden düşmesinden gelsin.',
      'Kapaklar açılmadan önce bir an birbirine dokunsun.',
      'Alın ve çene işin dışında kalsın; sadece kapaklar hareket etsin.',
      'Sonrasında gözlerin kum dolu gibiyse, daha çok kırpma değil suni gözyaşı gerekiyor olabilir.',
    ],
    bestFor: [
      'Öğleden sonra kuruyup kum gibi hissettiren gözler',
      'Uzun okuma, kod yazma ya da araba kullanma',
      'Lens kullananlar',
    ],
    skipIf: [
      'Göz enfeksiyonu, arpacık ya da yeni bir göz yaralanması varsa. Kapaklara dokunma, hekime git.',
      'Sıkmak acıtıyorsa. Yumuşak kırpmalarla kal, sıkma adımını atla.',
    ],
    steps: [
      {
        label: 'Yumuşak kırpmalar',
        instruction: 'Her işarette tam kırp. Kapaklar tamamen birleşsin, sonra açılsın. Zorlamadan.',
      },
      {
        label: 'Sık',
        instruction: 'Kapat ve hafifçe sık. Üç sayarken kapakların birbirine bastığını hisset.',
      },
      {
        label: 'Bırak',
        instruction: 'Bırak. Gözlerin kapalı kalsın; yüzün yumuşak, omuzların aşağıda.',
      },
    ],
  },

  twenty: {
    name: '20-20-20 Molası',
    alsoKnownAs: 'Uzak molası',
    tagline: 'Yirmi dakikada bir, odak kasına yirmi saniye izin ver.',
    what: 'En az 6 metre uzaktaki bir şeye 20 saniye bak, sonra birkaç kez tam kırp.',
    why: 'Yakına odaklanmak bir kas işi: gözün içindeki halka biçimli kas merceği yuvarlaklaştırıp o şekilde tutuyor. Saatlerce ara vermeden bunu yapmak, çoğu insanın "gözlerim yoruldu" dediği şeyin kaynağı. Uzağa bakmak o kası gevşetir; elindeki ağır çantayı yere bırakmak gibi.',
    evidenceNote:
      'Kanıtlar gerçekten ikiye bölünmüş. 2023 tarihli bir çalışma, bu molalar için hatırlatma almanın zorlanmayı ve kuruluk şikayetlerini azalttığını, odak esnekliğini artırdığını buldu. Aynı yıl yayınlanan başka bir çalışma ise tek başına 20 saniyelik molaların hiçbir şeyi değiştirmediğini gösterdi; yazarlar molanın bir iki dakika olması gerektiğini düşünüyor. Göz sağlığı kuruluşları yine de öneriyor, çünkü maliyeti neredeyse sıfır.',
    setup:
      'Pencere kenarı ya da uzun bir manzara ideal. Uzak bir duvar da olur. Mümkünse ayağa kalk.',
    howTo: [
      'Boş bir duvar değil, detaylı ve gerçek bir nesne seç; netleşmesini bekle.',
      'Altı metre demek kabaca odanın öbür ucu, bir koridor ya da pencereden dışarısı.',
      'Bakarken ayağa kalk, biraz hareket et. Faydanın bir kısmı molanın kendisinde.',
      'Ekrana dönmeden önce birkaç kez tam kırp.',
    ],
    bestFor: [
      'Her uzun ekran oturumu',
      'Gün sonunda ağrıyan ya da bulanıklaşan gözler',
      'Gözlerin arkasında biriken baş ağrısı',
    ],
    skipIf: ['Atlanacak bir yanı yok. Uygulamadaki en güvenli hareket bu.'],
    steps: [
      {
        label: 'Uzağa bak',
        instruction:
          'En az 6 metre uzakta bir şey bul ve gözlerini oraya bırak. Yüzün ve omuzların yumuşasın.',
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
    what: 'Avuçlarını ısınana kadar ovuştur, kapalı gözlerinin üzerine bastırmadan yerleştir ve tam karanlıkta dinlen.',
    why: 'İki şey birden oluyor. Gözlerin, hiçbir loş odanın veremeyeceği gerçek bir karanlığa kavuşuyor ve sıcaklık, konsantre olurken kasılan göz çevresi kaslarını gevşetiyor. Ayrıca günün ortasında tam bir mola; etkinin büyük kısmı da bu olabilir.',
    evidenceNote:
      'Avuçlama, 2016 tarihli kontrollü bir çalışmada göz yorgunluğu puanlarını düşüren sekiz adımlı yoga dizisinin ilk adımı. Ancak o çalışma diziyi bütün olarak test etti, avuçlamayı tek başına değil. Görüşü düzelttiğine dair geleneksel iddialar desteklenmiyor. Bunu bir dinlenme olarak gör; o işi gerçekten iyi yapıyor.',
    setup: 'Dirseklerini masaya ya da göğüs kafesine yasla; kolların yorulmasın.',
    howTo: [
      'Avuçlarını hızlıca birbirine ovuştur, ısındığını hissedene kadar.',
      'Avucunun çukuru kapalı gözünün üzerine gelecek şekilde yerleştir. Göz küresine ağırlık binmesin.',
      'Parmakların alnına, avuçlarının alt kısmı elmacık kemiklerine otursun.',
      'Işığı tamamen kes. Hâlâ bir parlaklık görüyorsan yerleşimi düzelt.',
    ],
    bestFor: [
      'Yoğun bir ekran gününün sonu',
      'Kaşlarda ve şakaklarda biriken gerginlik',
      'İki iş arasında bir sıfırlama',
    ],
    skipIf: [
      'Yakın zamanda göz ameliyatı ya da göz yaralanması geçirdiysen. Elini gözüne yaklaştırma.',
      'Göz enfeksiyonun varsa. Atla, ya da ellerini yıka ve kapaklara hiç dokunma.',
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
          'Sıcak avuçlarını kapalı gözlerinin üzerine yerleştir. Göz küresine baskı yok. Karanlık tam olsun ve sadece nefes al.',
      },
      {
        label: 'Geri dön',
        instruction: 'Ellerini yavaşça kaydır. Gözlerin bir an kapalı kalsın, sonra usulca aç.',
      },
    ],
  },

  'near-far': {
    name: 'Yakın ve Uzak',
    alsoKnownAs: 'Odak esnekliği',
    tagline: 'Yakınla uzak arasında geçiş yap; mercek tek bir yerde takılı kalmasın.',
    what: 'Yaklaşık 25 cm mesafedeki başparmağına odaklan, sonra görebildiğin en uzak şeye. Değiştirmeye devam et.',
    why: 'Merceğin şeklini değiştiren kasın hem kasılması hem gevşemesi gerekiyor. Saatlerce tek mesafede kalmak tepkisini yavaşlatır; başını kaldırdığında odanın bir an bulanık görünmesinin nedeni bu. Mesafe değiştirmek o kas için bir hareket açıklığı çalışması.',
    evidenceNote:
      '2023 tarihli mola hatırlatması çalışması odak esnekliğinde, yani odağın ne kadar hızlı değişebildiğinde, ölçülebilir bir iyileşme buldu; burada çalışılan tam olarak bu. Bu bir esneklik ölçüsü, keskinlik değil: numaranı değiştirmez.',
    setup: 'Bir yöne uzun bakış açın olan bir yere otur. Pencere ideal.',
    howTo: [
      'Başparmağını yüzünden yaklaşık 25 cm uzakta tut ya da o mesafedeki küçük bir detayı kullan.',
      'Geçmeden önce her hedefin gerçekten netleşmesini bekle. Acele etme.',
      'Başın sabit kalsın; sadece odak değişsin.',
      'Birkaç turdan sonra hafif bir yorgunluk normal. Baş ağrısı ise dur işareti.',
    ],
    bestFor: [
      'Yakın işten başını kaldırdığında görülen bulanıklık',
      'Uzun okuma ya da ekran günleri',
      'Detaylı işten önce ısınma',
    ],
    skipIf: [
      'Baş ağrısı ya da mide bulantısı yapıyorsa. Dur ve dinlen.',
      'Yeni başlayan ya da artan çift görme varsa. Önce göz hekimine git.',
    ],
    steps: [
      {
        label: 'Yakın',
        instruction: 'Yüzünden 25 cm uzaktaki başparmağına odaklan. Detayın netleşmesini bekle.',
      },
      {
        label: 'Uzak',
        instruction: 'Şimdi görebildiğin en uzak şeye geç. Geçmeden önce tamamen netleşsin.',
      },
      { label: 'Kırp', instruction: 'Gözyaşı tabakasını yenilemek için bir tam kırpma.' },
    ],
  },

  'nose-tip': {
    name: 'Başparmaktan Buruna',
    alsoKnownAs: 'Burun ucu bakışı, kalem itmesi',
    tagline: 'Gözlerini birlikte içe dönmeye, görüntüyü tek tutmaya alıştır.',
    what: 'Başparmağını kol boyu mesafede tut, tek ve net görüntüyü koruyarak yavaşça burnuna yaklaştır, sonra geri götür.',
    why: 'Yakındaki bir şeye bakmak iki gözün de aynı anda aynı kadar içe dönmesini gerektirir. Bu uyum zayıfsa görüntü ikiye ayrılır ya da bir iki sayfa sonra harfler yüzmeye başlar. Bir hedefi içe doğru takip etmek, gözlerin görüntüyü hâlâ tek tutabildiği aralığı çalıştırır.',
    evidenceNote:
      'Bu, Konverjans Yetersizliği Tedavi Çalışması\u2019nın ev egzersizi. Tanı almış çocukların %43\u2019üne yardım etti; gözetimli klinik terapi ise %73\u2019üne. Yani belirli bir durum için gerçek bir tedavi ve ikinci en iyi seçenek. Yakın çalışırken düzenli olarak çift görüyorsan ya da gözün ağrıyorsa, kendi kendine tedavi etmek yerine muayene ol.',
    setup: 'Dik otur; bir kolunu öne uzatabileceğin kadar yer olsun. Başparmağına iyi ışık gelsin.',
    howTo: [
      'Bir kolunu uzat, başparmağın yukarı ve göz seviyesinde. Tırnağa bak.',
      'Başparmağını burnuna doğru yavaşça getir; tüm yol beş saniye sürsün.',
      'Görüntü ikiye ayrıldığı anda dur, birleşene kadar bekle, sonra devam et.',
      'Birleşmiyorsa tek göründüğü yere geri götür ve baştan başla.',
    ],
    bestFor: [
      'Bir iki sayfa sonra kayan ya da ikilenen harfler',
      'Özellikle yakın mesafede toplanan göz yorgunluğu',
      'Tanı almış konverjans yetersizliği; hekiminin planıyla birlikte',
    ],
    skipIf: [
      'Şaşılık ya da göz kayması tedavisi gördüysen. Önce hekimine sor.',
      'Çift görme aniden başladıysa. Bu bir egzersiz konusu değil; bugün hekime gitmen gerekir.',
      'Her seferinde baş ağrısı ya da bulantı yapıyorsa.',
    ],
    steps: [
      {
        label: 'Kol uzak',
        instruction:
          'Başparmağın yukarı, kol boyu mesafede, göz seviyesinde tam karşıda. Tırnağa bak.',
      },
      {
        label: 'İçe getir',
        instruction: 'Başparmağını yavaşça burun ucuna doğru getir. Görüntü tek ve net kalsın.',
      },
      {
        label: 'Burunda',
        instruction: 'Burada dur. Yolda ikiye ayrıldıysa, tek göründüğü yerde bekle.',
      },
      {
        label: 'Geri götür',
        instruction: 'Başparmağını yavaşça kol boyuna geri götür. Yol boyunca gözünü ayırma.',
      },
      { label: 'Kırp', instruction: 'Bir tam kırpma; gözlerin yerine yerleşsin.' },
    ],
  },

  sideways: {
    name: 'Yana Bakış',
    tagline: 'Soldan sağa tam bir süpürme, iki uçta da beklemeli.',
    what: 'Hedefi bir uca kadar takip et, bekle, karşı uca süpür, bekle ve merkeze dön.',
    why: 'Her gözü altı küçük kas yönlendiriyor ve ekran işi bu kasların menzilinin yalnızca ortasındaki dar bir alanı kullanıyor. Uçlara gidip orada beklemek yatay kas çiftini elindeki her şeyi kullanmaya zorlar; germe hissi buradan geliyor.',
    evidenceNote:
      'Yana bakış, 2016 tarihli kontrollü çalışmada göz yorgunluğunu ölçülebilir şekilde azaltan sekiz adımlı yoga dizisinin adımlarından biri. Dizi bütün olarak test edildi, dolayısıyla bu hareketin tek başına etkisi bilinmiyor.',
    setup: 'Başın tam karşıda ve sabit. Telefon ya da ekran kol mesafesinde, tam ortada.',
    howTo: [
      'Başın tamamen sabit kalsın; sadece gözlerin gitsin.',
      'Gidebildiğin kadar değil, rahat ettiğin kadar uzağa git.',
      'Her uçta bekle; gerilmeyi zorlamadan fark et.',
      'Noktanın önüne geçmek yerine onunla birlikte hareket et.',
    ],
    bestFor: [
      'Sabit ekran işinden sonra katılaşan, ağırlaşan gözler',
      'Diğer hareketlerden önce ısınma',
    ],
    skipIf: [
      'Başın döner ya da mideni bulandırırsa. Dur, sabit bir şeye bak, dinlen.',
      'Yakın zamanda göz ameliyatı geçirdiysen ya da retina sorunun varsa. Önce cerrahına sor.',
    ],
    steps: [
      { label: 'Sola', instruction: 'Noktayı sola takip et. Baş sabit.' },
      { label: 'Solda bekle', instruction: 'Uçta kal. Hafif gerilmeyi fark et.' },
      { label: 'Karşıya', instruction: 'Sağa kadar eşit hızda git.' },
      { label: 'Sağda bekle', instruction: 'Burada kal. Nefesini ver.' },
      { label: 'Merkeze', instruction: 'Gözlerini ortaya getir.' },
      { label: 'Kırp', instruction: 'Sonraki turdan önce bir tam kırpma.' },
    ],
  },

  'front-sideways': {
    name: 'Ön ve Yan',
    tagline: 'Uca sıçra, ortaya dön, diğer uca sıçra.',
    what: 'Bakışını merkez ile uçlar arasında sıçrat; arada kaydırma yok.',
    why: 'Süpürmek ve sıçramak farklı işler. Sıçrama, hedefe inip anında durması gereken tek bir komut; kasları motor kadar fren olarak da kullanıyor. Araya merkezi eklemek ise iki gözün aynı anda varmasını çalıştırıyor.',
    evidenceNote:
      'Ön ve yan bakış, 2016\u2019da test edilen sekiz adımlı dizinin dördüncü adımı; dizi bütün olarak göz yorgunluğu puanlarını düşürdü. Hiçbir çalışma bu hareketi tek başına ölçmedi.',
    setup: 'Başın sabit ve düz. Uçlar arasında gerçek bir mesafe kalsın diye biraz geride otur.',
    howTo: [
      'Gözlerin sıçrasın; kaydırma yok.',
      'Noktaya in ve dur. Kayma ya da arama olmasın.',
      'Her seferinde merkeze dön ve bir an yerleş.',
      'Sarsıntılı geliyorsa ya da hedefi kaçırıyorsan yavaşla.',
    ],
    bestFor: ['Gün boyu ekranla kâğıt arasında geçiş yapmak', 'Sabah gözleri uyandırmak'],
    skipIf: [
      'Baş dönmesi, bulantı ya da baş ağrısı başlıyorsa.',
      'Vertigo ya da vestibüler bir rahatsızlığın varsa; hekimin onaylamadıysa yapma.',
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
    what: 'Hedefi yukarı takip et, bekle, aşağıya kadar in, bekle ve ortaya dön.',
    why: 'Ekranlar göz seviyesinin altında duruyor; gözler günü hafifçe aşağı bakarak geçiriyor, neredeyse hiç yukarı bakmıyor. Gözü yukarı çeken kas çifti altısının en az kullanılanı ve menzilini ona geri veren hareket bu.',
    evidenceNote:
      'Yukarı aşağı bakış, göz yorgunluğunu azaltan 2016 dizisinin adımlarından biri. Bütünün parçası olarak test edildi, tek başına değil.',
    setup: 'Dik otur. Çenen düz ve sabit kalsın; kafayı da kaldırmak isteyeceksin.',
    howTo: [
      'Çenen olduğu yerde kalsın; sadece gözlerin yükselip insin.',
      'Rahat ettiğin uca kadar git, sonra dur.',
      'Yukarıda beklemek genelde daha zor gelir. Zaten bütün olay da bu.',
      'Her turun sonunda kırp.',
    ],
    bestFor: [
      'Bakışın sürekli hafif aşağıda kaldığı dizüstü ve telefon duruşu',
      'Gözlerin üstünde gergin, ağır bir his',
    ],
    skipIf: [
      'Yukarı bakmak başını döndürüyor ya da boynunu ağrıtıyorsa.',
      'Yakın zamanda göz ya da retina ameliyatı geçirdiysen; onay almadıysan yapma.',
    ],
    steps: [
      { label: 'Yukarı', instruction: 'Noktayı yukarı takip et. Çene sabit.' },
      { label: 'Yukarıda bekle', instruction: 'Üst uçta kal. Yüzün yumuşak.' },
      { label: 'Aşağıya kadar', instruction: 'Ortadan geçerek eşit hızda aşağı in.' },
      { label: 'Aşağıda bekle', instruction: 'Altta dinlen.' },
      { label: 'Merkeze', instruction: 'Ortaya dön.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  diagonal: {
    name: 'Çapraz Bakış',
    tagline: 'Köşeden köşeye iki hat. Kasların birlikte çalışması gerekiyor.',
    what: 'Bir çapraz boyunca karşı köşeler arasında git, sonra diğer çaprazda.',
    why: 'Tek bir kas gözü çapraza götüremez. Oraya varmak için iki kas çiftinin ölçülü biçimde birlikte çekmesi gerekiyor; bu bir germeden çok koordinasyon işi. Köşeler ayrıca görme alanının ekranın hiç kullanmadığı bölgesi.',
    evidenceNote:
      'Çapraz çalışma göz yogası rutinlerinde standart ama tek başına test edilmemiş. Bu hareketlerin hepsi için dürüst sınır aynı: gevşetip tazeleyebilirler; görüşü keskinleştirmez, numaranı değiştirmezler.',
    setup: 'Başın düz ve sabit. Ekranın tamamını kullan; telefonu dikey tut.',
    howTo: [
      'Eşit hızda hareket et; gözlerin merkezin etrafından değil içinden geçsin.',
      'Her köşede kısa bir mola ver.',
      'Bir çaprazı tamamlamadan diğerine geçme.',
      'Hareket değil zorlama gibi gelmeye başlarsa dur.',
    ],
    bestFor: ['Düz hatların ulaşamadığı katılık', 'Rutin sıkmaya başladığında çeşitlilik'],
    skipIf: [
      'Baş dönmesi, bulantı ya da biriken baş ağrısı.',
      'Yakın zamanda göz ameliyatı ya da retina rahatsızlığı.',
    ],
    steps: [
      { label: 'Sağ üste', instruction: 'Noktayı sağ üst köşeye kadar takip et.' },
      { label: 'Bekle', instruction: 'Köşede dur.' },
      { label: 'Sol alta', instruction: 'Merkezden geçerek çaprazın tamamını kat et.' },
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
    tagline: 'İki yöne birer yavaş daire; her yöne sırayla uğrayarak.',
    what: 'Gözlerinle saat yönünde tam bir daire çiz, sonra tersine.',
    why: 'Daire, işi bir kastan diğerine pürüzsüzce devrediyor; altı kas da sarsılmadan sıraya giriyor. Gözün bir eklem çevirmesine en çok benzeyen hareketi bu ve insanların en çok "hissettim" dediği hareket de bu.',
    evidenceNote:
      'Dairesel bakış, göz yorgunluğu puanlarını düşüren 2016 tarihli kontrollü çalışmadaki sekiz adımdan biri. Diğerleri gibi dizi bütün olarak test edildi.',
    setup: 'Başın sabit ve düz. Ekran ortada, rahat bir kol mesafesinde.',
    howTo: [
      'Noktayı kendi hızında takip et; önüne geçme.',
      'Daireyi yuvarlak tut, uçlarda köşelenmesin.',
      'Bir yön, sonra diğeri; aralarda bir kırpma.',
      'Başın dönüyorsa tam tur yerine yarım daireler yap.',
    ],
    bestFor: ['Göz çevresinde katı, sıkışmış bir his', 'Uzun bir iş gününün ortası'],
    skipIf: [
      'Başın dönüyor ya da mideni bulandırıyorsa.',
      'Vertigo ya da yeni bir göz veya retina ameliyatı.',
    ],
    steps: [
      { label: 'Saat yönü', instruction: 'Noktayı yavaş ve eşit takip et. Baş sabit.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma; gözlerin yerine yerleşsin.' },
      { label: 'Saat yönü tersi', instruction: 'Şimdi aynı daireyi ters yönde.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  'figure-eight': {
    name: 'Sekiz Çizimi',
    alsoKnownAs: 'Yatık sekiz',
    tagline: 'Ortadan tekrar tekrar geçen uzun, döngülü bir eğri.',
    what: 'Gözlerinle yatık bir sekiz çiz; bir yöne, sonra diğerine.',
    why: 'Sekiz orta hattı tekrar tekrar geçiyor ve her geçişte gözlerden biri öncülüğü diğerine bırakıyor. Düz bir dairenin çalıştırmadığı kısım tam olarak bu geçiş; hareketin germeden çok takip gibi hissedilmesinin nedeni de bu.',
    evidenceNote:
      'Yatık sekiz, görme terapisinde ve okul programlarında yaygın ama sağlıklı gözlerde rahatlığı ya da görüşü iyileştirdiğine dair iyi bir çalışma yok. Keyifli bir takip alıştırması; burada bundan fazlası iddia edilmiyor.',
    setup: 'Başın sabit, ekran ortada. Yatay tutmak döngülere daha çok yer bırakır.',
    howTo: [
      'Gözlerin kaysın. Eğri kesintili değil sürekli olsun.',
      'Ortadaki kesişme noktasını fark et ve pürüzsüzce geçmeye devam et.',
      'Her tam turdan sonra yönü değiştir.',
      'Büyük olmasından çok yavaş olması önemli.',
    ],
    bestFor: ['Pürüzsüz takip pratiği', 'Sıçrama egzersizlerine daha sakin bir alternatif'],
    skipIf: [
      'Başın dönüyor ya da mideni bulandırıyorsa.',
      'Yeni bir göz ameliyatı; onay almadıysan yapma.',
    ],
    steps: [
      { label: 'Çiz', instruction: 'Noktayı sekizin etrafında takip et. Pürüzsüz ve acelesiz.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
      { label: 'Ters yön', instruction: 'Şimdi aynı sekizi ters yöne çiz.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma.' },
    ],
  },

  square: {
    name: 'Kare Çizimi',
    tagline: 'Dört düz kenar ve dört köşe, menzilinin dış sınırında.',
    what: 'Hedefi bir karenin kenarları boyunca takip et; bir yöne, sonra diğerine.',
    why: 'Kare her yönü bir kenar boyunca sürdürüyor, sonra keskin bir dönüş istiyor; yani sürekli bir gerilmeyi yön değişimiyle birleştiriyor. Köşeler rahat hareketin dış sınırında duruyor ve katılık genelde tam orada oluyor.',
    evidenceNote:
      'Kendine ait bir çalışması olmayan, geleneksel bir şekil alıştırması. Diğer hareketlerle aynı dürüst sınır: tazeler, düzeltmez.',
    setup: 'Başın sabit. Elinin altındaki en büyük ekranı kullan.',
    howTo: [
      'Köşeleri kesmek yerine kenarları takip et.',
      'Her köşedeki dönüş net olsun.',
      'Her turdan sonra yönü değiştir.',
      'Köşeler zorlanma yaratıyorsa kareyi küçült.',
    ],
    bestFor: ['Dairelere daha düzenli bir alternatif', 'Görme alanının uçlarına ulaşmak'],
    skipIf: ['Başın dönüyorsa.', 'Yeni bir göz ameliyatı ya da retina rahatsızlığı.'],
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
    tagline: 'İki nokta arasında hızlı ve isabetli sıçramalar. Açık konuşalım: bu bir oyun.',
    what: 'Bakışını iki hedef arasında hızla değiştir; her birine tam olarak in.',
    why: 'Okumak dakikada yüzlerce küçük sıçrama demek; her biri sen farkına varmadan nişanlanıyor ve durduruluyor. Aynı şeyi bilerek ve daha geniş yapmak bu mekanizmayı bir an fark etmeni sağlıyor; yorgun gözleri uyandırmanın da gerçekten keyifli bir yolu.',
    evidenceNote:
      'Sıçrama alıştırmaları sporcu görme antrenmanı ve görme terapisi programlarından geliyor. Sağlıklı gözlerde rahatlığı ya da görüşü iyileştirdiğine dair iyi bir kanıt yok ve American Academy of Ophthalmology görme antrenmanının görüşü keskinleştirdiğinin kanıtlanmadığını açıkça söylüyor. Burada bir tedavi olarak değil, ekrana dalıp kalmayı bozmanın canlı bir yolu olarak var.',
    setup: 'Başın sabit ve düz. İki nokta birbirinden iyice ayrı dursun diye biraz geride otur.',
    howTo: [
      'Sıçra; gözlerini kaydırma.',
      'Noktaya in ve o hareket edene kadar sabit kal.',
      'Hız değil isabet.',
      'Birkaç turdan sonra bırak. Bu hareket çabuk yorar.',
    ],
    bestFor: ['İki iş arasında hızlı bir uyanma', 'Ekrana dalıp kalmayı bozmak'],
    skipIf: [
      'Başını döndürüyor, mideni bulandırıyor ya da baş ağrısı yapıyorsa.',
      'Vestibüler bir rahatsızlığın ya da görselle tetiklenen migren geçmişin varsa.',
      'Işığa duyarlı epilepsin varsa. Hızlı geçişler riske değmez.',
    ],
    steps: [
      { label: 'Sol', instruction: 'Sol noktaya sıçra. İn ve dur.' },
      { label: 'Sağ', instruction: 'Sağ noktaya sıçra.' },
      { label: 'Sol', instruction: 'Ve sola geri.' },
      { label: 'Sağ', instruction: 'Ve yeniden sağa.' },
      { label: 'Kırp', instruction: 'Bir tam kırpma, sonra dinlen.' },
    ],
  },

  trataka: {
    name: 'Sabit Bakış',
    alsoKnownAs: 'Trataka',
    tagline: 'Odanın kalanı sessizleşene kadar tek bir noktada kal.',
    what: 'Gözlerini zorlamadan tek bir noktaya bırak, sonra kapat ve iz görüntünün solmasını izle.',
    why: 'Bu, gözler üzerinden yapılan bir dikkat pratiği. Tek noktada kalmak günün büyük kısmını dolduran sürekli taramayı durduruyor; kapalı göz aşaması ise karanlıkta izleyecek bir şey veriyor, bu da "gevşe" demekten daha kolay dinlendiriyor.',
    evidenceNote:
      'Küçük çalışmalar, trataka seansının hemen ardından dikkatte ve tepki kontrolünde gerçek ama kısa süreli kazanımlar ölçtü. Örneklemler küçük, katılımcılar da çoğunlukla genç erkek gönüllüler. Geleneksel biçimi mum alevi kullanır ve kırpmamayı söyler; burada yumuşak bir nokta var ve ihtiyaç duydukça kırpmanı istiyoruz, çünkü bilerek kırpmamak gözü kurutur.',
    setup: 'Sırtın dik, rahat otur; ekran göz seviyesinde, mümkünse oda ışığı kısık.',
    howTo: [
      'Bakışın yumuşak olsun. Amaç noktada dinlenmek, onu delmek değil.',
      'İstediğin zaman kırp. Rahatlık önce gelir.',
      'Zihnin dağıldığında kendini yargılamadan noktaya dön.',
      'Kapalı aşamada iz görüntüyü kovalamadan izle.',
    ],
    bestFor: ['Akşam yavaşlamak', 'Dağınık, aşırı uyarılmış bir zihin', 'Uykudan önce'],
    skipIf: [
      'Işığa duyarlı epilepsin ya da parlak noktalara bakınca tetiklenen migrenin varsa.',
      'Gözlerin kuru ve ağrılıysa. Onun yerine kırpma pratiğini yap.',
      'Sabit bakmak seni kaygılandırıyorsa.',
    ],
    steps: [
      {
        label: 'Sabit bakış',
        instruction: 'Gözlerini noktaya bırak. Yumuşak, zorlamasız. İhtiyaç duydukça kırp.',
      },
      {
        label: 'Gözler kapalı',
        instruction: 'Gözlerini kapat ve iz görüntünün karanlıkta solmasını izle.',
      },
    ],
  },
}
