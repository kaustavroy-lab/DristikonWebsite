// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("https://dristikononline.in/index.html", "Welcome To Dristikon Online", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, article   dristikononline.in , in, india, made in india ,,join , amazon, netflix , youtube, binod, drishtikone full movie download, dristikon online app, drishtikone full movie download utorrent, drishtikone online watch, drishtikone full movie online watch free,  drist, drishtikone full movie watch online dailymotion, Watch Drishtikone full movie online in HD,dristikon online kaustav roy, dristikon online website, vip, prime, streaming, platform, articles, students,  ", "Join Dristikon Online to watch the latest Cultural Video, Short Films, Dance Video, Magazines and Dristikon Original Shows.");
   this[database_length++] = new SearchPage("https://dristikononline.in/Terms_and_Conditions.html", "Terms and Conditions Dristikon", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, articles, terms and conditions for website, terms and conditions for website india,non profit organisation terms and conditions,Terms and Conditions of dristikon online, t&c,drist ", "Thanks to all the users as well as the members of our Dristikon family. Everyone is hereby requested to agree with the fair use of our services that we provide to all.");
   this[database_length++] = new SearchPage("https://dristikononline.in/Download.html", "Dristikon Online App Download", "Download App, App, Android, Dristikon App, Download Page, Free App, App , Free App, Download Free ", "Download Dristikon Online App for free and enjoy family friendly contetnt without paying anything");
   this[database_length++] = new SearchPage("https://dristikononline.in/privacypolicy.html", "Privacy Policy", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/quotes.html", "quotes", "quotes ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/kaustavroy.html", "Kaustav Roy Dristikon", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, articles,kaustav roy dristikon online, kaustav roy rp group, kaustav roy linkedin, kaustav roy wikipedia, kaustav roy cense, kaustav roy facebook,DRIST, DEVELOPER, EDITOR,vfx, designer, main, phone ", "A Bachelor of Arts student. Chief Editor at Dristikon Online. Expertised in -Non linear editing, Pre & Post wedding photo and video editing,VFX & SFX, Folly making, Application designing & Development, Web Development,Event Managementl");
   this[database_length++] = new SearchPage("https://dristikononline.in/pujo2020.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", "hooghly puja, tarakeswar puja, durga puja, pujo, online puja, dristikon puja, tarakeswar central commettee,tarakeswar,pujo2020,dristikon online ", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ");
   this[database_length++] = new SearchPage("https://dristikononline.in/pujolist.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/radhanagar.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/bajitpur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/udaysangha.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/bajar.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/tetultola.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/nutongram.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/mandirpara.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/ichcha.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/parmohol.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/gesthouse.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/tarkeswar.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/netajisubhash.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/uttoron.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/mohadevi.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/durontosangha.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/baghajatin.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/abason.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/polliutsob.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/padmapukur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/bpr.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/chaulpatty.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/prantik.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/sahapur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/mohanbati.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/pfc.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/tullyan.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/salepur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/nachipur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/teghari.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/doshghara.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/bissasbari.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/srirampur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/kamarpukur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/page3.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/haripal.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/harpal2.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/mojpur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/santoshpur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/soyaluk.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/nalikul.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/champadanga.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/oursoldiers.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/promotion.html", "Promotion", "Promotion, Promote, App,Website promotion, Dristikon Promotion ", "Now Promote Your Work With Dristikon Online");
   this[database_length++] = new SearchPage("https://dristikononline.in/contactus.html", "Contact Us", "contact us, contact, help, contact dristikon online,  ", "Contact Dristikon Online Management Team");
   this[database_length++] = new SearchPage("https://dristikononline.in/articles.html", "Dristikon Articles", "articles, web articles, blog, dristikon, latest blog, gita, medical blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/soumyadyuti.html", "Soumyadyuti's Article", "articles, new blog, dristikon articles, web blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/stuti.html", "Soumyadyuti's Article", "articles, new blog, dristikon articles, web blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/soubhik.html", "Soumyadyuti's Article", "articles, new blog, dristikon articles, web blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/membership.html", "Dristikon Annual Membership", "membership, dkon member, member 2020, new member, member of dristikon ", "The persons who are interested to get the membership of  Dristikon  family should fill up and submit this form. Annual subscription for this membership is 150/-  In lieu of this subscription the member s  will be provided with I-card, yearly magazine and many other facilities.");
   this[database_length++] = new SearchPage("https://dristikononline.in/shortfilms.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/amiodurga.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/page1.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/kalipuja.html", "kalipuja2020", "kalipuja2020, diwali, happy diwali, diwali 2020, kali pujo ", "Dristikon Online Wishes You Happy Diwali");
   this[database_length++] = new SearchPage("https://dristikononline.in/films.html", "Dristikon Online Short Film", " ", "Website regarding dristikon online work");
   this[database_length++] = new SearchPage("https://dristikononline.in/castlist.html", "Dristikon Online Short Film", " ", "Website regarding dristikon online work");
   this[database_length++] = new SearchPage("https://dristikononline.in/scriptmemo.html", "Dristikon Online Short Film", " ", "Website regarding dristikon online work");
   this[database_length++] = new SearchPage("https://dristikononline.in/script.html", "Dristikon Online Short Film", " ", "Website regarding dristikon online work");
   this[database_length++] = new SearchPage("https://dristikononline.in/donate.html", "DRISTIKON ONLINE COVID RELIEF FUND", "covid, relief fund, contribution , corona , donate,  ", "DRISTIKON ONLINE COVID RELIEF FUND");
   this[database_length++] = new SearchPage("https://dristikononline.in/donate_mobile.html", "DRISTIKON ONLINE COVID RELIEF FUND", "covid, relief fund, contribution , corona ", "DRISTIKON ONLINE COVID RELIEF FUND");
   this[database_length++] = new SearchPage("https://dristikononline.in/ourteam.html", "Our Team", "our team , team ", "Our Team");
   this[database_length++] = new SearchPage("https://dristikononline.in/webmag/webmag.html", "Dristikon WebMag", "webmag, magazines, free, submission, upload, new web, puja, ", "দৃষ্টিকোণ ম্যাগাজিন উৎসব সংখ্যা ২০২০");
   this[database_length++] = new SearchPage("https://dristikononline.in/webmag/write.html", "Dristikon WebMag", "webmag, magazines, free, submission, upload, new web, puja, ", "দৃষ্টিকোণ ম্যাগাজিন উৎসব সংখ্যা ২০২০");
   return this;
}
