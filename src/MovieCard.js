import placeholder from "./assets/noPhoto.svg";

const shortLang = [ "aa", "af", "ak", "sq", "am", "ar", "an", "hy", "as", "av", "ae", "ay", "az", "bm", "ba", "eu", "be", "bn", "bi", "bs", "br", "bg", "my", "ca", "ch", "ce", "ny", "zh", "cv", "kw", "co", "cr", "hr", "cs", "da", "dv", "nl", "dz", "en", "eo", "et", "ee", "fo", "fj", "fi", "fr", "ff", "gl", "ka", "de", "el", "gn", "gu", "ht", "ha", "he", "hz", "hi", "ho", "hu", "ia", "id", "ie", "ga", "ig", "ik", "io", "is", "it", "iu", "ja", "jv", "kl", "kn", "kr", "ks", "kk", "km", "ki", "rw", "ky", "kv", "kg", "ko", "ku", "kj", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "gv", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mh", "mn", "na", "nv", "nd", "ne", "ng", "nb", "nn", "no", "ii", "nr", "oc", "oj", "cu", "om", "or", "os", "pa", "pi", "fa", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "sa", "sc", "sd", "se", "sm", "sg", "sr", "gd", "sn", "si", "sk", "sl", "so", "st", "es", "su", "sw", "ss", "sv", "ta", "te", "tg", "th", "ti", "bo", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "cy", "wo", "fy", "xh", "yi", "yo", "za", "zu",    
]

const fullLang = [ "Afar", "Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Aragonese", "Armenian", "Assamese", "Avaric", "Avestan", "Aymara", "Azerbaijani", "Bambara", "Bashkir", "Basque", "Belarusian", "Bengali", "Bislama", "Bosnian", "Breton", "Bulgarian", "Burmese", "Catalan", "Chamorro", "Chechen", "Chichewa", "Chinese", "Chuvash", "Cornish", "Corsican", "Cree", "Croatian", "Czech", "Danish", "Divehi", "Dutch", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Finnish", "French", "Fulah", "Galician", "Georgian", "German", "Greek", "Guarani", "Gujarati", "Haitian", "Hausa", "Hebrew", "Herero", "Hindi", "Hiri Motu", "Hungarian", "Interlingua (International Auxiliary Language Association)ational Auxiliary Language Association)", "Indonesian", "Interlingue", "Irish", "Igbo", "Inupiaq", "Ido", "Icelandic", "Italian", "Inuktitut", "Japanese", "Javanese", "Kalaallisut", "Kannada", "Kanuri", "Kashmiri", "Kazakh", "Central Khmer", "Kikuyu", "Kinyarwanda", "Kirghiz", "Komi", "Kongo", "Korean", "Kurdish", "Kuanyama", "Latin", "Luxembourgish", "Ganda", "Limburgan", "Lingala", "Lao", "Lithuanian", "Luba-Katanga", "Latvian", "Manx", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Marshallese", "Mongolian", "Nauru", "Navajo", "North Ndebele", "Nepali", "Ndonga", "Norwegian Bokmål", "Norwegian Nynorsk", "Norwegian", "Sichuan Yi", "South Ndebele", "Occitan", "Ojibwa", "Church Slavic", "Oromo", "Oriya", "Ossetian", "Punjabi", "Pali", "Persian", "Polish", "Pashto", "Portuguese", "Quechua", "Romansh", "Rundi", "Romanian", "Russian", "Sanskrit", "Sardinian", "Sindhi", "Northern Sami", "Samoan", "Sango", "Serbian", "Gaelic", "Shona", "Sinhala", "Slovak", "Slovenian", "Somali", "Southern Sotho", "Spanish", "Sundanese", "Swahili", "Swati", "Swedish", "Tamil", "Telugu", "Tajik", "Thai", "Tigrinya", "Tibetan", "Turkmen", "Tagalog", "Tswana", "Tonga (Tonga Islands))", "Turkish", "Tsonga", "Tatar", "Twi", "Tahitian", "Uighur", "Ukrainian", "Urdu", "Uzbek", "Venda", "Vietnamese", "Volapük", "Walloon", "Welsh", "Wolof", "Western Frisian", "Xhosa", "Yiddish", "Yoruba", "Zhuang", "Zulu",
]

const MovieCard = (props) => {
  const {
    movieKey,
    cardClass,
    imgClass,
    movieOgLang,
    showOgLang,
    movieTitle,
    moviePoster,
    cardInformation,
    movieDescription,
    showMovieDescription,
    movieReleaseDate,
    showMovieReleaseDate
  } = props;

  const position1 = shortLang.indexOf(movieOgLang);
//   console.log(position1);
  /////////////////////////////////////////////////// to do: change null line 21 to placeholder image

  return (
    <li 
    key={movieKey} 
    className={cardClass}
    >
      <div className={cardInformation}>
        <h4>{movieTitle}</h4>
        {
            showOgLang
            ?
            <p>{fullLang[position1]}</p>
            :
            null
        }

        {
            showMovieReleaseDate
            ?
            <p className="releaseDateClass">{movieReleaseDate}</p>
            :
            null
        }
        {
            showMovieDescription
            ?
            <p><span>Description</span>: {movieDescription}</p>
            :
            null
        }
      </div>
      <div className={imgClass}>
        <img
          src={
            moviePoster
              ? `https://image.tmdb.org/t/p/w500/${moviePoster}`
              : { placeholder }
          }
          alt={`Poster for '${movieTitle}'`}
        />
      </div>
    </li>
  );
};

export default MovieCard;

//      adult: false
//      backdrop_path: "/pajKyahlPPggk0k5LiA2v4kwWqn.jpg"
//      genre_ids: Array [ 12, 14 ]
//      id: 671
//      original_language: "en"
//      original_title: "Harry Potter and the Philosopher's Stone"
//      overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame."
//      popularity: 235.63
//      poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
//      release_date: "2001-11-16"
//      title: "Harry Potter and the Philosopher's Stone"
//      video: false
//      vote_average: 7.9
//      vote_count: 21129