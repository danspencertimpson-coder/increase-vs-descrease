/* All chapter content, quotes, key figures, and quiz questions.
   Scripture references draw from the Book of Mormon, Doctrine & Covenants,
   and the Bible (KJV). Historical sources cite the most authoritative
   biographies and scholarly works available. */

const HISTORY_DATA = {

  chapters: [

    /* ── Chapter 1 ──────────────────────────────────────────── */
    {
      id: "ch1",
      num: 1,
      era: "1492 – 1620",
      title: "A Promised Land: Discovery & Providence",
      summary: "Long before European sails crossed the Atlantic, the Book of Mormon revealed that this continent was a covenant land, choice above all others — and that its discovery would be guided by God.",
      body: `
        <p>The Book of Mormon opens with a breathtaking promise about the Western Hemisphere. Writing around 600 BC, the prophet Lehi declared to his children: <em>"We have obtained a land of promise, a land which is choice above all other lands; a land which the Lord God hath covenanted with me should be a land for the inheritance of my seed."</em> (2 Nephi 1:5). This was not merely poetic language — it was a covenant declaration that the land of the Americas was set apart by God for a righteous people.</p>

        <p>Centuries later, the Book of Mormon prophet Ether recorded the most explicit statement about the land's divine appointment: <em>"For behold, this is a land which is choice above all other lands; wherefore he that doth possess it shall serve God or shall be swept off."</em> (Ether 2:10). The condition was unmistakable — the blessing of living on this promised land was inseparable from righteousness before God.</p>

        <p>Against this scriptural backdrop, the arrival of Christopher Columbus in 1492 reads not as accident but as Providence. The Book of Mormon itself foretells it. In his famous vision, Nephi saw a man among the Gentiles who "went forth upon the many waters, even unto the seed of my brethren, who were in the promised land. And it came to pass that I beheld the Spirit of God, that it came down and wrought upon the man; and he went forth upon the many waters, even unto the seed of my brethren." (1 Nephi 13:12). Most Latter-day Saint commentators have identified this figure as Columbus — a man driven by what he himself recorded in his journal as divine compulsion.</p>

        <p>Columbus wrote in 1493: <em>"Our Lord unlocked my mind, sent me upon the sea, and gave me fire for the deed. Who heard of my enterprise, called it foolish, mocked me and laughed. But who can doubt but that the Holy Ghost inspired me?"</em> (cited in Samuel Eliot Morison, <strong>Admiral of the Ocean Sea</strong>, 1942 — still the definitive biography of Columbus). Morison, a Harvard historian and Pulitzer Prize winner, documents Columbus's deep Franciscan faith and his conviction that God's hand guided every voyage.</p>

        <p>The colonization that followed was similarly foreseen. Nephi saw multitudes of Gentiles who, after Columbus, would be "stirred up unto repentance" and "scattered" across the promised land. He saw them wresting the land from what appeared to be indigenous people through conflict (1 Nephi 13:13–15) — a troubling passage that calls honest readers to acknowledge both the providential nature of settlement and the suffering it caused. Latter-day Saint historian Richard Bushman (<strong>Joseph Smith: Rough Stone Rolling</strong>, 2005) notes that the Book of Mormon consistently presents America's history as morally complex — neither triumphal nor despairing, but covenantal.</p>

        <h3>The Pilgrims and the Covenant Pattern</h3>
        <p>The Mayflower Pilgrims of 1620 arrived with exactly the framework the Book of Mormon describes. William Bradford, their governor and chronicler (<strong>Of Plymouth Plantation</strong>, written 1630–1651), recorded that the Separatists left England specifically to worship God freely and to build a godly society. Bradford compared their journey to the Exodus and saw Plymouth as a new Israel. The Mayflower Compact — signed aboard ship before landing — echoes the Book of Mormon covenant pattern: a solemn agreement before God to establish just and equal laws for the general good.</p>

        <p>The compact reads: <em>"In the name of God, Amen... Having undertaken, for the glory of God and advancement of the Christian faith... a voyage to plant the first colony in the northern parts of Virginia, do by these presents, solemnly and mutually, in the presence of God and one another, covenant and combine ourselves together into a civil body politic."</em></p>

        <div class="scripture">
          <p>"Wherefore, this land is consecrated unto him whom he shall bring. And if it so be that they shall serve him according to the commandments which he hath given, it shall be a land of liberty unto them."</p>
          <cite>— 2 Nephi 1:7, The Book of Mormon</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>Christopher Columbus</strong> — Navigator; saw divine guidance in his voyages (Morison, <em>Admiral of the Ocean Sea</em>)</li>
            <li><strong>William Bradford</strong> — Pilgrim governor; recorded Plymouth's covenant history (<em>Of Plymouth Plantation</em>)</li>
            <li><strong>Lehi &amp; Nephi</strong> — Book of Mormon prophets who foretold the discovery and colonization of the Americas</li>
          </ul>
        </div>
      `,
      quote: {
        text: "We have obtained a land of promise, a land which is choice above all other lands; a land which the Lord God hath covenanted with me should be a land for the inheritance of my seed.",
        attribution: "Lehi — 2 Nephi 1:5, Book of Mormon"
      },
      quiz: [
        {
          q: "Which Book of Mormon scripture explicitly states that those who possess the Americas 'shall serve God or shall be swept off'?",
          options: ["1 Nephi 13:12", "Ether 2:10", "2 Nephi 1:5", "Mosiah 29:32"],
          answer: 1,
          explanation: "Ether 2:10 contains the covenant condition: 'he that doth possess it shall serve God or shall be swept off.'"
        },
        {
          q: "In 1 Nephi 13, Nephi's vision identifies which historical figure as being 'wrought upon' by the Spirit to cross the ocean to the promised land?",
          options: ["William Bradford", "John Winthrop", "Christopher Columbus", "Sir Francis Drake"],
          answer: 2,
          explanation: "Latter-day Saint interpretation identifies the man in 1 Nephi 13:12 as Christopher Columbus, driven by what he himself called divine inspiration."
        },
        {
          q: "William Bradford's account of the Pilgrims, written 1630–1651, is titled:",
          options: ["The Mayflower Journal", "Of Plymouth Plantation", "A Pilgrim's Progress", "New England Chronicles"],
          answer: 1,
          explanation: "Bradford's 'Of Plymouth Plantation' is the primary source for Plymouth Colony's founding and remains a landmark of American historical writing."
        },
        {
          q: "What document, signed aboard the Mayflower in 1620, established a covenant-based civil government?",
          options: ["The Fundamental Orders", "The Mayflower Compact", "The Virginia Charter", "The Articles of Confederation"],
          answer: 1,
          explanation: "The Mayflower Compact (1620) was a self-governing covenant signed 'in the name of God' — a pattern echoing the covenant structure of the Book of Mormon."
        }
      ]
    },

    /* ── Chapter 2 ──────────────────────────────────────────── */
    {
      id: "ch2",
      num: 2,
      era: "1620 – 1700",
      title: "City on a Hill: Puritan Foundations",
      summary: "The Puritan colonies of New England self-consciously modeled their society on biblical covenant principles, laying a spiritual and civic foundation that would shape the American mind for centuries.",
      body: `
        <p>When John Winthrop delivered his famous sermon aboard the Arbella in 1630, he borrowed a phrase from the Sermon on the Mount: <em>"We shall be as a city upon a hill, the eyes of all people are upon us."</em> Winthrop was not speaking metaphorically. He was laying out the terms of a national covenant — the Massachusetts Bay Colony would prosper if it kept faith with God, and it would be judged if it did not. This is precisely the covenant language of the Book of Mormon.</p>

        <p>Historians Perry Miller (<strong>The New England Mind: The Seventeenth Century</strong>, 1939) and David Hackett Fischer (<strong>Albion's Seed: Four British Folkways in America</strong>, 1989) have documented how thoroughly Puritan theology shaped colonial institutions. The town meeting, the system of elected magistrates, the insistence on literacy so every person could read the Bible — all of these flowed directly from the Puritan conviction that God governed through covenant communities of saints.</p>

        <p>The Doctrine &amp; Covenants adds a remarkable dimension to this story. In Section 101, the Lord tells Joseph Smith that the Founders were "wise men whom I raised up unto this very purpose, and redeemed the land by the shedding of blood." (D&amp;C 101:80). The Puritans who came before the Founders were, in this view, part of that same providential preparation — laying the moral and intellectual groundwork for a nation that would eventually allow the Restoration of the Gospel.</p>

        <h3>The Bible as Constitutional Framework</h3>
        <p>The Puritans treated the Bible as a constitutional document. Harvard College, founded in 1636, had as its original motto: <em>"Truth for Christ and the Church."</em> The first American printing press produced primarily religious texts. Donald Lutz's landmark study (<strong>The Origins of American Constitutionalism</strong>, 1988) analyzed over 900 political documents from the founding era and found that the Bible — particularly Deuteronomy — was cited more often than any Enlightenment philosopher.</p>

        <p>The Book of Mormon itself affirms that the Bible played a crucial role in preparing the Gentile nations. Nephi's vision describes "a book" carried by the Gentiles across the ocean — the Bible — which contained "the covenants of the Lord" and was of "great worth unto the Gentiles." (1 Nephi 13:23–25). The Puritans, who carried their Geneva Bibles onto every ship and into every home, were living out this prophecy.</p>

        <div class="scripture">
          <p>"And I said unto him: I know that he loveth his children; nevertheless, I do not know the meaning of all things... And he said unto me: Behold there are save two churches only; the one is the church of the Lamb of God, and the other is the church of the devil."</p>
          <cite>— 1 Nephi 14:10, Book of Mormon</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>John Winthrop</strong> — Massachusetts Bay governor; "city on a hill" covenant theology (Edmund Morgan, <em>The Puritan Dilemma</em>, 1958)</li>
            <li><strong>Roger Williams</strong> — Advocate for religious liberty and separation of church and state in Providence, Rhode Island</li>
            <li><strong>Anne Hutchinson</strong> — Challenged Puritan orthodoxy; her trial illuminates the tension between grace and law in early America</li>
            <li><strong>Cotton Mather</strong> — Prolific Puritan minister whose writings document the theological worldview of colonial New England</li>
          </ul>
        </div>
      `,
      quote: {
        text: "We shall be as a city upon a hill. The eyes of all people are upon us; so that if we shall deal falsely with our God in this work we have undertaken, and so cause Him to withdraw His present help from us, we shall be made a story and a byword through the world.",
        attribution: "John Winthrop, 'A Model of Christian Charity,' 1630"
      },
      quiz: [
        {
          q: "In which Doctrine & Covenants section does the Lord call the Founders 'wise men whom I raised up unto this very purpose'?",
          options: ["D&C 87", "D&C 101", "D&C 134", "D&C 98"],
          answer: 1,
          explanation: "D&C 101:80 explicitly states that God raised up wise men to establish the Constitution and redeem the land."
        },
        {
          q: "Donald Lutz's study of founding-era documents found that which source was cited more than any Enlightenment philosopher?",
          options: ["John Locke's Two Treatises", "Montesquieu's The Spirit of the Laws", "The Bible", "Blackstone's Commentaries"],
          answer: 2,
          explanation: "Lutz's 'Origins of American Constitutionalism' (1988) found the Bible — particularly Deuteronomy — was the most-cited source in over 900 founding-era political documents."
        },
        {
          q: "Harvard College, founded in 1636, had which original motto?",
          options: ["E Pluribus Unum", "Truth for Christ and the Church", "Light and Truth", "Wisdom and Knowledge"],
          answer: 1,
          explanation: "Harvard's original motto was 'Truth for Christ and the Church,' reflecting its founding purpose of training Puritan ministers."
        }
      ]
    },

    /* ── Chapter 3 ──────────────────────────────────────────── */
    {
      id: "ch3",
      num: 3,
      era: "1730 – 1760",
      title: "The First Great Awakening: Revival Before Revolution",
      summary: "The spiritual earthquake of the 1730s–40s swept through every colony, forging a common evangelical identity that made the Revolution possible — and leaving patterns of religious liberty the Restoration would later need.",
      body: `
        <p>Before Americans could unite politically, they first had to unite spiritually. Historian Harry Stout (<strong>The Divine Dramatist: George Whitefield and the Rise of Modern Evangelicalism</strong>, 1991) argues persuasively that George Whitefield's transcolonial preaching tours of 1739–1741 created, for the first time, a genuinely American audience. Whitefield preached to tens of thousands in open fields from Georgia to Boston — and for the first time, colonists in Virginia and Massachusetts were experiencing the same sermons, the same emotional conversions, the same revivalist language. This shared experience created a common American identity before any political event did.</p>

        <p>Jonathan Edwards, whose 1741 sermon "Sinners in the Hands of an Angry God" became the most famous sermon in American history, was doing something far more sophisticated than mere fire-and-brimstone preaching. His <strong>Religious Affections</strong> (1746) was a systematic treatise on how to discern genuine spiritual experience from counterfeit emotion — a question that resonates directly with the Book of Mormon's warning to "try the spirits." (Moroni 7:12–13). Edwards insisted that true conversion had to result in changed behavior and humble love of neighbor — not just emotional experience.</p>

        <p>The Awakening also democratized religion. It broke the grip of established churches and created space for the idea that God speaks directly to individuals — an idea that the Latter-day Saint Restoration would later rely on entirely. The First Great Awakening planted the seeds of Joseph Smith's question: <em>Which church is right?</em></p>

        <h3>Religious Liberty as Providential Preparation</h3>
        <p>The Doctrine &amp; Covenants is explicit that the Constitution's religious liberty provisions were divinely designed to allow the Restoration: "Therefore, it is not right that any man should be in bondage one to another. And for this purpose have I established the Constitution of this land, by the hands of wise men whom I raised up unto this very purpose." (D&amp;C 101:79–80). The Awakening's legacy of voluntary church membership and religious diversity was the soil in which this constitutional guarantee would grow.</p>

        <div class="scripture">
          <p>"For behold, the Spirit of Christ is given to every man, that he may know good from evil; wherefore, I show unto you the way to judge; for every thing which inviteth to do good, and to persuade to believe in Christ, is sent forth by the power and gift of Christ."</p>
          <cite>— Moroni 7:16, Book of Mormon</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>George Whitefield</strong> — Itinerant preacher who unified the colonies spiritually; 13 tours across America (Stout, <em>The Divine Dramatist</em>)</li>
            <li><strong>Jonathan Edwards</strong> — Theologian of revival; his works on spiritual discernment remain foundational (George Marsden, <em>Jonathan Edwards: A Life</em>, 2003)</li>
            <li><strong>Gilbert Tennent</strong> — New Side Presbyterian who pushed revival into the middle colonies</li>
          </ul>
        </div>
      `,
      quote: {
        text: "Unconverted ministers are the bane of the Christian church... They are blind who lead the blind. The reason why congregations have been so dead is because they have had dead men preaching to them.",
        attribution: "Gilbert Tennent, 'The Danger of an Unconverted Ministry,' 1740"
      },
      quiz: [
        {
          q: "Historian Harry Stout argues that which figure's transcolonial preaching tours first created a genuinely unified American audience?",
          options: ["Jonathan Edwards", "John Wesley", "George Whitefield", "Charles Finney"],
          answer: 2,
          explanation: "Stout's 'The Divine Dramatist' (1991) argues that Whitefield's tours from Georgia to Boston created the first genuinely American audience, preceding political unity."
        },
        {
          q: "Jonathan Edwards's systematic work on discerning genuine spiritual conversion, published in 1746, is titled:",
          options: ["Freedom of the Will", "Religious Affections", "The Nature of True Virtue", "Sinners in the Hands of an Angry God"],
          answer: 1,
          explanation: "'Religious Affections' (1746) was Edwards's systematic attempt to identify the marks of genuine spiritual conversion, distinguishing true faith from mere emotion."
        },
        {
          q: "Which Book of Mormon verse teaches that the Spirit of Christ is given to every person to help them discern good from evil?",
          options: ["Moroni 7:16", "2 Nephi 2:11", "Alma 32:28", "Ether 12:4"],
          answer: 0,
          explanation: "Moroni 7:16 states that 'the Spirit of Christ is given to every man, that he may know good from evil' — a universal moral compass doctrine."
        }
      ]
    },

    /* ── Chapter 4 ──────────────────────────────────────────── */
    {
      id: "ch4",
      num: 4,
      era: "1760 – 1776",
      title: "The Founders & Christian Natural Law",
      summary: "The men who declared independence drew from both the Enlightenment and a deep Christian natural law tradition — and the Book of Mormon affirms their work was divinely guided.",
      body: `
        <p>Few questions have generated more historical controversy than the religious beliefs of the American Founders. The honest answer, carefully documented by John Fea (<strong>Was America Founded as a Christian Nation?</strong>, 2011) and Frank Lambert (<strong>The Founding Fathers and the Place of Religion in America</strong>, 2003), is that the Founders were a diverse group — ranging from orthodox Trinitarian Christians like Samuel Adams and Patrick Henry to Deists like Thomas Jefferson and Unitarians like John Adams.</p>

        <p>But diversity of theology does not mean absence of religious conviction. Even Jefferson, who constructed his own edited version of the Gospels, wrote into the Declaration a foundational theological claim: that rights are "endowed by their Creator" — not granted by governments, not evolved through history, but given by God. This is natural law theory in its most American form, and it rests on a theological claim about the nature of God and human dignity.</p>

        <p>The Book of Mormon's view of the Founders is given directly in the Doctrine &amp; Covenants. The Lord calls them "wise men whom I raised up unto this very purpose" and says He "redeemed the land by the shedding of blood." (D&amp;C 101:80). This is not a claim that every Founder was an orthodox Christian — it is a claim that God works through imperfect people to accomplish His purposes. The Book of Mormon itself is full of such examples.</p>

        <h3>George Washington: Providence and Faith</h3>
        <p>No figure better illustrates the Founders' religious complexity than George Washington. Ron Chernow's Pulitzer Prize-winning biography (<strong>Washington: A Life</strong>, 2010) documents Washington's consistent references to "Providence" throughout his career — in letters, orders, and addresses. Washington avoided the word "Christ" in his public writings and rarely took communion, but he prayed consistently, knelt in prayer at Valley Forge according to multiple witnesses, and regularly attributed American victory to divine intervention.</p>

        <p>Washington wrote to Brigadier General Nelson in 1778: <em>"The hand of Providence has been so conspicuous in all this, that he must be worse than an infidel that lacks faith."</em> This is the language of someone who believed deeply in God's active governance of history — which is precisely what the Book of Mormon teaches about this land.</p>

        <h3>The Declaration's Theological Architecture</h3>
        <p>David McCullough's <strong>1776</strong> (2005) and his <strong>John Adams</strong> (2001) illuminate how seriously Adams took Providence. Adams wrote to his wife Abigail on the day independence was declared: <em>"It is the will of Heaven that the two countries should be sundered forever."</em> He saw the Revolution not as a political maneuver but as a divine verdict. His later writings show he believed God would hold America to account for how it used its freedoms — the same covenant logic the Book of Mormon applies to the promised land.</p>

        <div class="scripture">
          <p>"I, the Lord God, make you free, therefore ye are free indeed; and the law also maketh you free. Nevertheless, when the wicked rule the people mourn."</p>
          <cite>— D&C 98:8, Doctrine & Covenants</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>George Washington</strong> — Commander and first President; consistent believer in Providence (Chernow, <em>Washington: A Life</em>, 2010)</li>
            <li><strong>John Adams</strong> — Deeply religious Unitarian; saw Revolution as divine will (McCullough, <em>John Adams</em>, 2001)</li>
            <li><strong>Patrick Henry</strong> — Orthodox Calvinist; "Give me liberty or give me death"</li>
            <li><strong>Thomas Jefferson</strong> — Deist architect of the Declaration; wrote rights as God-given</li>
            <li><strong>Samuel Adams</strong> — Puritan Calvinist; the conscience of the Revolution</li>
          </ul>
        </div>
      `,
      quote: {
        text: "The hand of Providence has been so conspicuous in all this, that he must be worse than an infidel that lacks faith, and more than wicked, that has not gratitude enough to acknowledge his obligations.",
        attribution: "George Washington, letter to Brigadier General Thomas Nelson, 1778"
      },
      quiz: [
        {
          q: "Which Doctrine & Covenants verse directly calls the American Founders 'wise men whom I raised up unto this very purpose'?",
          options: ["D&C 98:8", "D&C 134:1", "D&C 101:80", "D&C 87:3"],
          answer: 2,
          explanation: "D&C 101:80 is the key verse: 'I established the Constitution of this land, by the hands of wise men whom I raised up unto this very purpose.'"
        },
        {
          q: "Ron Chernow's Pulitzer Prize-winning biography of Washington was published in:",
          options: ["2001", "2005", "2008", "2010"],
          answer: 3,
          explanation: "'Washington: A Life' by Ron Chernow was published in 2010 and won the Pulitzer Prize for Biography."
        },
        {
          q: "The Declaration of Independence grounds human rights in which theological claim?",
          options: ["Rights are granted by democratic governments", "Rights are evolved through history", "Rights are endowed by the Creator", "Rights derive from natural selection"],
          answer: 2,
          explanation: "Jefferson's Declaration states that all men 'are endowed by their Creator with certain unalienable Rights' — a theological claim about God as the source of human dignity."
        },
        {
          q: "Which historian wrote 'Was America Founded as a Christian Nation?' (2011), providing a balanced scholarly assessment?",
          options: ["David McCullough", "Ron Chernow", "John Fea", "Gordon Wood"],
          answer: 2,
          explanation: "John Fea's 'Was America Founded as a Christian Nation?' (2011) gives an honest, nuanced scholarly assessment of the Founders' diverse religious views."
        }
      ]
    },

    /* ── Chapter 5 ──────────────────────────────────────────── */
    {
      id: "ch5",
      num: 5,
      era: "1776 – 1800",
      title: "The Constitution: Order, Liberty & Covenant",
      summary: "The Constitution's structure of divided powers reflects a biblical understanding of human nature — and God Himself declared it inspired for the protection of all flesh.",
      body: `
        <p>When James Madison designed the Constitution's system of separated powers, he drew directly from a theological premise: human beings are fallen and cannot be trusted with unchecked power. In Federalist No. 51, Madison wrote: <em>"If men were angels, no government would be necessary... In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself."</em></p>

        <p>This is Calvinist anthropology applied to political science. The Calvinist tradition — which shaped the Puritans, the Scots-Irish Presbyterians, and many of the Founders — taught that human depravity meant no individual or institution should ever hold absolute power. This is why America got three branches, two chambers, and a Bill of Rights: not because the Founders were cynics, but because they were realists who understood human sin.</p>

        <p>The Lord's own endorsement of this document is recorded in Doctrine &amp; Covenants Section 98: <em>"And now, verily I say unto you concerning the laws of the land, it is my will that my people should observe to do all things whatsoever I command them. And that law of the land which is constitutional, supporting that principle of freedom in maintaining rights and privileges, belongs to all mankind, and is justifiable before me."</em> (D&amp;C 98:4–5). Section 101 adds that the Constitution was established "that every man may act in doctrine and principle pertaining to futurity, according to the moral agency which I have given unto him." (D&amp;C 101:78).</p>

        <h3>The Bill of Rights and Religious Freedom</h3>
        <p>Gordon Wood's <strong>The Creation of the American Republic</strong> (1969) and his <strong>Empire of Liberty</strong> (2009) document how radical the First Amendment truly was. No nation had ever before enshrined religious liberty as a constitutional right. The First Amendment's guarantee — "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof" — was not the result of atheism or indifference to religion. It was the result of competing Protestant groups, each fearing that a different denomination would gain state power, agreeing to a neutrality that protected everyone.</p>

        <p>From a Latter-day Saint perspective, this arrangement was essential. Without the First Amendment, Joseph Smith could have been imprisoned for his theology rather than for the manufactured charges that eventually killed him. The Book of Mormon itself addresses religious freedom in Alma's famous sermon: "Now I know that some will say, Has God not commanded us to fast? Yea, but he saith, not grudgingly. And if one person should give another person five days' rations... we say it unto you in wisdom." The point is that genuine righteousness cannot be coerced — it must be freely chosen. This is the theology behind the First Amendment.</p>

        <div class="scripture">
          <p>"And that law of the land which is constitutional, supporting that principle of freedom in maintaining rights and privileges, belongs to all mankind, and is justifiable before me."</p>
          <cite>— D&C 98:5, Doctrine & Covenants</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>James Madison</strong> — "Father of the Constitution"; Calvinist anthropology in political form (Ralph Ketcham, <em>James Madison: A Biography</em>, 1971)</li>
            <li><strong>George Mason</strong> — Author of the Virginia Declaration of Rights; pushed for a Bill of Rights</li>
            <li><strong>Roger Sherman</strong> — Connecticut delegate; orthodox Calvinist and key constitutional architect</li>
            <li><strong>Benjamin Franklin</strong> — Called for prayer at the Constitutional Convention when debate stalled</li>
          </ul>
        </div>
      `,
      quote: {
        text: "I have lived, Sir, a long time, and the longer I live, the more convincing proofs I see of this truth — that God governs in the affairs of men. And if a sparrow cannot fall to the ground without His notice, is it probable that an empire can rise without His aid?",
        attribution: "Benjamin Franklin, speech to the Constitutional Convention, June 28, 1787"
      },
      quiz: [
        {
          q: "In which Federalist Paper does Madison make his famous argument about men not being angels, justifying separated powers?",
          options: ["Federalist No. 10", "Federalist No. 51", "Federalist No. 78", "Federalist No. 84"],
          answer: 1,
          explanation: "Federalist No. 51 contains Madison's famous 'If men were angels' argument for separated powers — rooted in a realistic understanding of human nature."
        },
        {
          q: "Which Doctrine & Covenants section states that 'the law of the land which is constitutional... belongs to all mankind, and is justifiable before me'?",
          options: ["D&C 101", "D&C 134", "D&C 98", "D&C 87"],
          answer: 2,
          explanation: "D&C 98:5 is God's direct endorsement of constitutional law as justifiable before Him."
        },
        {
          q: "Gordon Wood's comprehensive study of the founding period, published in 2009, is titled:",
          options: ["The Creation of the American Republic", "Empire of Liberty", "The Radicalism of the American Revolution", "Revolutionary Characters"],
          answer: 1,
          explanation: "'Empire of Liberty' (2009) is Wood's sweeping study of the early Republic, documenting how radical the constitutional experiment truly was."
        }
      ]
    },

    /* ── Chapter 6 ──────────────────────────────────────────── */
    {
      id: "ch6",
      num: 6,
      era: "1800 – 1840",
      title: "The Second Great Awakening & The Restoration",
      summary: "The spiritual hunger of the Second Great Awakening prepared the American landscape for the greatest event of the nineteenth century: the Restoration of the Gospel through Joseph Smith.",
      body: `
        <p>The Second Great Awakening (roughly 1800–1840) was simultaneously a religious revival and a social transformation. Historian Nathan Hatch (<strong>The Democratization of American Christianity</strong>, 1989) argues that it was the most consequential religious event in American history — more disruptive than the First Awakening, more socially transformative than anything before the Civil War. Camp meetings drew tens of thousands in Kentucky and Tennessee. Charles Finney packed New York's Broadway Tabernacle. Methodist circuit riders reached every frontier settlement. Baptist churches multiplied faster than anyone could count.</p>

        <p>But beneath the revivalism was a profound theological confusion. Hatch documents how the period spawned literally dozens of new denominations — each claiming to restore primitive Christianity, each contradicting the others. This is precisely the context in which a fourteen-year-old farm boy in upstate New York knelt in a grove of trees and asked God which church was right. Joseph Smith's account of his First Vision begins: <em>"There was in the place where we lived an unusual excitement on the subject of religion... Indeed, the whole district of country seemed affected by it, and great multitudes united themselves to the different religious parties."</em> (Joseph Smith — History 1:5).</p>

        <p>The Book of Mormon itself addresses this moment of confusion. Nephi's vision foresaw that "many plain and precious things" would be removed from the Bible (1 Nephi 13:28–29), leaving the Gentiles in a state of partial truth. The Second Awakening's chaos was, from a Latter-day Saint perspective, evidence that full restoration — not mere reformation — was needed. Richard Bushman's <strong>Joseph Smith: Rough Stone Rolling</strong> (2005), the most authoritative biography of Joseph Smith by a Latter-day Saint scholar, documents how the Smith family was itself deeply embedded in this revivalist environment.</p>

        <h3>Circuit Riders and Westward Expansion</h3>
        <p>The Methodist circuit rider system was one of the most remarkable organizations in American religious history. Using horses and saddlebags, Methodist preachers followed settlers across the Appalachians, through Ohio, Indiana, and Illinois — the same territory where early Latter-day Saints would soon settle. John Wesley's organizational genius had created a mobile church that could serve a mobile population, and by 1850 Methodism was the largest denomination in America.</p>

        <p>This westward movement was also understood in providential terms. Alexis de Tocqueville, visiting America in 1831 and publishing <strong>Democracy in America</strong> (1835), observed that "there is no country in the whole world where the Christian religion retains a greater influence over the souls of men than in America." Tocqueville was a French Catholic nobleman, not an evangelical — his observation was sociological, not theological. And he concluded that American democracy was inseparable from American Christianity.</p>

        <div class="scripture">
          <p>"And after the house of Israel should be scattered they should be gathered together again; or, in fine, after the Gentiles had received the fulness of the Gospel, the natural branches of the olive tree, or the remnants of the house of Israel, should be grafted in, or come to the knowledge of the true Messiah."</p>
          <cite>— 1 Nephi 10:14, Book of Mormon</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>Joseph Smith</strong> — Prophet; his First Vision emerged directly from the religious confusion of the Second Awakening (Bushman, <em>Rough Stone Rolling</em>, 2005)</li>
            <li><strong>Charles Finney</strong> — Revival preacher who developed "new measures"; his <em>Lectures on Revivals</em> (1835) shaped American Protestant culture</li>
            <li><strong>Francis Asbury</strong> — Methodist bishop who oversaw circuit riders; traveled 300,000 miles on horseback</li>
            <li><strong>Lyman Beecher</strong> — Calvinist preacher, abolitionist, and father of Harriet Beecher Stowe</li>
          </ul>
        </div>
      `,
      quote: {
        text: "It was seen that the seemingly good feelings of both the priests and the converts were more pretended than real... When the converts began to file off, some to one party and some to another, it was seen that the seemingly good feelings of both the priests and the converts were more pretended than real.",
        attribution: "Joseph Smith — History 1:22, Pearl of Great Price"
      },
      quiz: [
        {
          q: "Nathan Hatch's influential study of the Second Great Awakening's social impact is titled:",
          options: ["The Sacred Cause of Liberty", "The Democratization of American Christianity", "Revivalism and Social Reform", "The Burned-Over District"],
          answer: 1,
          explanation: "Hatch's 'The Democratization of American Christianity' (1989) argues the Second Awakening was the most socially transformative religious event in American history."
        },
        {
          q: "In Joseph Smith — History 1:5, Joseph describes the setting of his First Vision as a time of unusual:",
          options: ["Political upheaval", "Economic hardship", "Excitement on the subject of religion", "Frontier violence"],
          answer: 2,
          explanation: "Joseph Smith describes 'an unusual excitement on the subject of religion' in the region — directly connecting his question to the Second Great Awakening."
        },
        {
          q: "Richard Bushman's authoritative biography of Joseph Smith, published in 2005, is titled:",
          options: ["Joseph Smith and the Origins of the Book of Mormon", "No Man Knows My History", "Joseph Smith: Rough Stone Rolling", "The Mormon Prophet"],
          answer: 2,
          explanation: "'Joseph Smith: Rough Stone Rolling' (2005) by Richard Bushman is the most comprehensive scholarly biography of Joseph Smith by a Latter-day Saint historian."
        },
        {
          q: "Alexis de Tocqueville, in 'Democracy in America' (1835), observed that American democracy was:",
          options: ["In conflict with Christianity", "Inseparable from American Christianity", "Primarily Deist in character", "Hostile to organized religion"],
          answer: 1,
          explanation: "Tocqueville, a French Catholic nobleman making sociological observations, concluded that no country had greater Christian influence and that American democracy and Christianity were deeply intertwined."
        }
      ]
    },

    /* ── Chapter 7 ──────────────────────────────────────────── */
    {
      id: "ch7",
      num: 7,
      era: "1830 – 1865",
      title: "Abolition: Faith Against the Evil of Slavery",
      summary: "The abolition movement was one of the most explicitly Christian political movements in American history — and its success required Americans to take the Bible's teaching about human dignity more seriously than their economic interests.",
      body: `
        <p>Slavery was the great moral failure of the founding generation — and the Book of Mormon speaks to it with uncomfortable directness. In 2 Nephi 26:33, the Lord declares: <em>"He inviteth them all to come unto him and partake of his goodness; and he denieth none that come unto him, black and white, bond and free, male and female... all are alike unto God."</em> This verse, written around 550 BC according to the Book of Mormon's internal chronology, proclaimed a radical equality that American slave law flatly denied.</p>

        <p>The abolition movement was driven almost entirely by people of deep religious conviction. The Quakers, who had protested slavery since 1688, were the first organized abolitionist movement. Evangelical abolitionists like William Lloyd Garrison, Charles Finney, and Theodore Weld built their entire case on the Bible. Garrison's <em>The Liberator</em>, founded in 1831, opened with scripture. Weld's <strong>American Slavery As It Is</strong> (1839) — the most widely distributed antislavery document before <em>Uncle Tom's Cabin</em> — was structured as a theological indictment.</p>

        <p>Frederick Douglass is perhaps the most important figure in this story. His three autobiographies — <strong>Narrative of the Life of Frederick Douglass</strong> (1845), <strong>My Bondage and My Freedom</strong> (1855), and <strong>Life and Times of Frederick Douglass</strong> (1881) — document his transformation from enslaved man to the most eloquent moral voice of his century. David Blight's Pulitzer Prize-winning <strong>Frederick Douglass: Prophet of Freedom</strong> (2018) is the definitive modern account. Douglass made a crucial distinction: the Christianity of slaveholders was a perversion of Christ's teaching. True Christianity, he argued, demanded abolition.</p>

        <h3>Harriet Beecher Stowe and the Power of Story</h3>
        <p>When Abraham Lincoln met Harriet Beecher Stowe in 1862, he reportedly said, "So this is the little lady who made this big war." <strong>Uncle Tom's Cabin</strong> (1852) was written, Stowe said, not by her but by God — she was merely the instrument. Whatever one thinks of that claim theologically, the novel's power came directly from its consistent appeal to Christian conscience: could a Christian nation justify the separation of families, the torture of human beings made in God's image?</p>

        <p>The answer that came back from millions of Northern readers was: No. The Civil War was, among other things, a belated attempt to bring American practice into alignment with American theology.</p>

        <div class="scripture">
          <p>"He inviteth them all to come unto him and partake of his goodness; and he denieth none that come unto him, black and white, bond and free, male and female; and he remembereth the heathen; and all are alike unto God."</p>
          <cite>— 2 Nephi 26:33, Book of Mormon</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>Frederick Douglass</strong> — Escaped slave, abolitionist, orator; made the theological case against slavery (Blight, <em>Frederick Douglass: Prophet of Freedom</em>, 2018)</li>
            <li><strong>William Lloyd Garrison</strong> — Radical abolitionist; founded <em>The Liberator</em> (1831)</li>
            <li><strong>Harriet Beecher Stowe</strong> — Author of <em>Uncle Tom's Cabin</em> (1852); changed Northern opinion</li>
            <li><strong>Sojourner Truth</strong> — Formerly enslaved preacher; "Ain't I a Woman?" (1851) fused abolition and women's rights</li>
            <li><strong>Charles Finney</strong> — Revival preacher who barred slaveholders from his communion table</li>
          </ul>
        </div>
      `,
      quote: {
        text: "Between the Christianity of this land and the Christianity of Christ, I recognize the widest possible difference — so wide that to receive the one as good, pure, and holy, is of necessity to reject the other as bad, corrupt, and wicked.",
        attribution: "Frederick Douglass, 'Narrative of the Life of Frederick Douglass,' 1845"
      },
      quiz: [
        {
          q: "Which Book of Mormon verse declares that 'black and white, bond and free, male and female... all are alike unto God'?",
          options: ["Alma 26:37", "3 Nephi 26:6", "2 Nephi 26:33", "Mosiah 23:7"],
          answer: 2,
          explanation: "2 Nephi 26:33 contains the Book of Mormon's clearest declaration of human equality before God, directly contradicting the logic of slavery."
        },
        {
          q: "David Blight's Pulitzer Prize-winning biography of Frederick Douglass, published in 2018, is subtitled:",
          options: ["Voice of a Nation", "Prophet of Freedom", "The Great Abolitionist", "American Moses"],
          answer: 1,
          explanation: "'Frederick Douglass: Prophet of Freedom' (2018) by David Blight won the Pulitzer Prize for Biography and is the definitive modern account of Douglass's life."
        },
        {
          q: "Theodore Weld's 1839 document, one of the most widely distributed antislavery texts before 'Uncle Tom's Cabin,' was titled:",
          options: ["Slavery as a Moral Evil", "American Slavery As It Is", "The Bible Against Slavery", "Appeal to the Christian Public"],
          answer: 1,
          explanation: "'American Slavery As It Is' (1839) by Theodore Weld structured its antislavery case as a theological indictment using slaveholders' own testimony."
        }
      ]
    },

    /* ── Chapter 8 ──────────────────────────────────────────── */
    {
      id: "ch8",
      num: 8,
      era: "1861 – 1865",
      title: "Civil War: National Atonement",
      summary: "Abraham Lincoln came to see the Civil War not as a political conflict but as God's judgment on a nation that had tolerated slavery — and his Second Inaugural Address stands as the most theologically profound speech in American history.",
      body: `
        <p>No American leader has thought more deeply about God, suffering, and national sin than Abraham Lincoln. Ronald C. White's <strong>Lincoln's Greatest Speech: The Second Inaugural</strong> (2002) and his comprehensive biography <strong>A. Lincoln</strong> (2009) document how Lincoln's theology deepened through the war years. He did not belong to a church, but he read the Bible constantly, and his speeches — especially the Second Inaugural — reveal a man wrestling with the hardest question in theodicy: how could a just God allow such terrible suffering?</p>

        <p>Lincoln's answer in the Second Inaugural (March 4, 1865) was startling in its theological boldness: both sides prayed to the same God, and yet "the Almighty has His own purposes." He quoted Matthew 18:7 directly: <em>"Woe unto the world because of offences! for it must needs be that offences come; but woe to that man by whom the offence cometh!"</em> Then he applied it to slavery: <em>"If we shall suppose that American slavery is one of those offences which, in the providence of God, must needs come, but which, having continued through His appointed time, He now wills to remove, and that He gives to both North and South this terrible war, as the woe due to those by whom the offence came, shall we discern therein any departure from those divine attributes which the believers in a Living God always ascribe to Him?"</em></p>

        <p>This is covenant theology applied to national sin — the same logic the Book of Mormon uses repeatedly. In Helaman 12, Mormon observes: <em>"And thus we see that except the Lord doth chasten his people with many afflictions, yea, except he doth visit them with death and with terror, and with famine and with all manner of pestilence, they will not remember him."</em> (Helaman 12:3). Lincoln arrived at this same conclusion through Bible study and four years of battlefield carnage.</p>

        <h3>The Theological Dimensions of Emancipation</h3>
        <p>Lincoln's Emancipation Proclamation (January 1, 1863) was a military and political document, but it was received in Black churches across the North as a divine act. Allen Guelzo's <strong>Lincoln's Emancipation Proclamation: The End of Slavery in America</strong> (2004) is the scholarly standard. Black congregations gathered at midnight on New Year's Eve 1862, waiting for the clock to strike, singing hymns and weeping. Frederick Douglass wrote that for him, January 1, 1863 was "the most memorable day in American annals."</p>

        <p>The Book of Mormon's covenant framework helps explain why. A nation that had enslaved millions was, in the Latter-day Saint view, violating the terms under which it held the promised land. The Civil War was the price. The question the Second Inaugural asks — whether God's judgment was just — is exactly the question Nephi's covenant framework would generate.</p>

        <div class="scripture">
          <p>"And thus we see that except the Lord doth chasten his people with many afflictions, yea, except he doth visit them with death and with terror... they will not remember him."</p>
          <cite>— Helaman 12:3, Book of Mormon</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>Abraham Lincoln</strong> — 16th President; theologian of national sin and atonement (Ronald C. White, <em>A. Lincoln</em>, 2009)</li>
            <li><strong>Frederick Douglass</strong> — Called Emancipation "the most memorable day in American annals"</li>
            <li><strong>Harriet Tubman</strong> — "Moses of her people"; deeply convinced she was guided by God through the Underground Railroad</li>
            <li><strong>Joshua Lawrence Chamberlain</strong> — Bowdoin professor, devout Christian, hero of Gettysburg</li>
          </ul>
        </div>
      `,
      quote: {
        text: "Fondly do we hope — fervently do we pray — that this mighty scourge of war may speedily pass away. Yet, if God wills that it continue, until all the wealth piled by the bond-man's two hundred and fifty years of unrequited toil shall be sunk, and until every drop of blood drawn with the lash, shall be paid by another drawn with the sword, as was said three thousand years ago, so still it must be said 'the judgments of the Lord, are true and righteous altogether.'",
        attribution: "Abraham Lincoln, Second Inaugural Address, March 4, 1865"
      },
      quiz: [
        {
          q: "Which Book of Mormon verse describes God chastening His people with afflictions when they fail to remember Him — matching Lincoln's Second Inaugural theology?",
          options: ["3 Nephi 6:14", "Helaman 12:3", "Mosiah 7:29", "Alma 60:13"],
          answer: 1,
          explanation: "Helaman 12:3 — 'except the Lord doth chasten his people with many afflictions... they will not remember him' — expresses the same covenant-judgment theology Lincoln articulated."
        },
        {
          q: "Ronald C. White's comprehensive biography of Lincoln is titled:",
          options: ["Team of Rivals", "A. Lincoln", "Lincoln at Cooper Union", "The Eloquent President"],
          answer: 1,
          explanation: "'A. Lincoln' (2009) by Ronald C. White is a comprehensive biography documenting Lincoln's deepening theological convictions through the war years."
        },
        {
          q: "Allen Guelzo's scholarly study of the Emancipation Proclamation was published in:",
          options: ["1998", "2001", "2004", "2009"],
          answer: 2,
          explanation: "Allen Guelzo's 'Lincoln's Emancipation Proclamation: The End of Slavery in America' (2004) is the standard scholarly account of the proclamation's origins and significance."
        },
        {
          q: "In his Second Inaugural, Lincoln directly quotes which New Testament book when applying God's judgment to the offence of slavery?",
          options: ["Romans", "John", "Matthew", "Revelation"],
          answer: 2,
          explanation: "Lincoln quotes Matthew 18:7 ('Woe unto the world because of offences!') and then applies it directly to American slavery as the national offence."
        }
      ]
    },

    /* ── Chapter 9 ──────────────────────────────────────────── */
    {
      id: "ch9",
      num: 9,
      era: "1900 – Present",
      title: "Faith in the Twentieth Century: Trials & Covenant Renewal",
      summary: "From the Civil Rights Movement to the Cold War to modern religious liberty battles, America's twentieth century story is one of a nation constantly being called back to its covenant identity.",
      body: `
        <p>The twentieth century tested the covenant promise of the promised land in new ways. Two world wars, the Great Depression, the Cold War's nuclear terror, and the Civil Rights crisis each forced Americans to ask whether the principles of the founding were real or merely rhetorical. In each case, the answer came — at least in part — through men and women of deep religious faith.</p>

        <p>The Civil Rights Movement was, at its core, a theological movement. Taylor Branch's three-volume history — <strong>Parting the Waters</strong> (1988), <strong>Pillar of Fire</strong> (1998), and <strong>At Canaan's Edge</strong> (2006) — documents how the movement was organized through Black churches, sustained by gospel music, and led by preachers. Martin Luther King Jr. did not speak the language of political theory; he spoke the language of the Exodus, of Isaiah, of the Sermon on the Mount. His "Letter from Birmingham Jail" (1963) is perhaps the most sophisticated piece of Christian political theology written in twentieth-century America.</p>

        <p>King argued that there were two kinds of law — just laws and unjust laws — and that a Christian had not only the right but the duty to disobey unjust laws. He drew this directly from Augustine and Thomas Aquinas. And he drew his confidence from Amos 5:24: <em>"Let justice roll down like waters, and righteousness like an ever-flowing stream."</em> This is covenant language — the same language the Book of Mormon uses about the promised land.</p>

        <h3>The Cold War and National Identity</h3>
        <p>The phrase "One Nation Under God" was added to the Pledge of Allegiance in 1954, and "In God We Trust" became the national motto in 1956 — both at the height of the Cold War. Kevin Kruse (<strong>One Nation Under God: How Corporate America Invented Christian America</strong>, 2015) argues these additions were politically motivated. Andrew Preston (<strong>Sword of the Spirit, Shield of Faith: Religion and War in the American Experience</strong>, 2012) gives a more nuanced account, showing that American foreign policy has always been shaped by a sense of providential mission.</p>

        <p>Billy Graham's ministry (documented in Grant Wacker's <strong>America's Pastor: Billy Graham and the Shaping of a Nation</strong>, 2014) reached more people personally than any preacher in history — over 200 million in person across 185 countries. Graham preached to every American president from Truman to Obama and consistently called the nation back to covenant faithfulness. Whether or not one agrees with all his theology, his influence on American religious culture in the twentieth century is unparalleled.</p>

        <h3>Religious Liberty Today</h3>
        <p>The Doctrine &amp; Covenants Section 134 — a statement on governments and laws adopted in 1835 — remains the clearest Latter-day Saint position on religious freedom: <em>"We believe that governments were instituted of God for the benefit of man; and that he holds men accountable for their acts in relation to them, both in making laws and administering them, for the good and safety of society."</em> (D&amp;C 134:1). The ongoing battles over religious liberty in courts, legislatures, and culture are, from this perspective, battles over whether America will remain true to the covenant that gave it its freedom.</p>

        <div class="scripture">
          <p>"We believe that governments were instituted of God for the benefit of man; and that he holds men accountable for their acts in relation to them, both in making laws and administering them, for the good and safety of society."</p>
          <cite>— D&C 134:1, Doctrine & Covenants</cite>
        </div>

        <div class="key-figures">
          <h4>Key Figures</h4>
          <ul>
            <li><strong>Martin Luther King Jr.</strong> — Theologian of justice and nonviolence; "Letter from Birmingham Jail" (1963) (Taylor Branch, <em>Parting the Waters</em>, 1988)</li>
            <li><strong>Billy Graham</strong> — Evangelist to 200 million; shaped twentieth-century American Christianity (Grant Wacker, <em>America's Pastor</em>, 2014)</li>
            <li><strong>Dwight D. Eisenhower</strong> — Deeply religious president; presided over "In God We Trust" and "One Nation Under God" additions</li>
            <li><strong>Ezra Taft Benson</strong> — LDS Apostle and U.S. Secretary of Agriculture; spoke extensively on the Constitution's divine origin</li>
          </ul>
        </div>
      `,
      quote: {
        text: "One day the South will recognize its real heroes. They will be the James Merediths, with the noble sense of purpose that enables them to face jeering and hostile mobs, and with the agonizing loneliness that characterizes the life of the pioneer... One day the South will know that when these disinherited children of God sat down at lunch counters, they were in reality standing up for what is best in the American dream.",
        attribution: "Martin Luther King Jr., 'Letter from Birmingham Jail,' April 16, 1963"
      },
      quiz: [
        {
          q: "Taylor Branch's three-volume history of the Civil Rights Movement begins with which title?",
          options: ["Pillar of Fire", "At Canaan's Edge", "Parting the Waters", "Let Freedom Ring"],
          answer: 2,
          explanation: "'Parting the Waters' (1988) is the first volume of Branch's trilogy on the Civil Rights Movement, covering 1954–1963 and winning the Pulitzer Prize."
        },
        {
          q: "Which Doctrine & Covenants section, adopted in 1835, states that 'governments were instituted of God for the benefit of man'?",
          options: ["D&C 98", "D&C 101", "D&C 134", "D&C 121"],
          answer: 2,
          explanation: "D&C 134:1 is the Latter-day Saint Church's formal statement on governments and laws, affirming the divine origin of good government."
        },
        {
          q: "Grant Wacker's biography of Billy Graham, published in 2014, is subtitled:",
          options: ["The Evangelist to the World", "Billy Graham and the Shaping of a Nation", "A Life of Purpose", "Crusader for Christ"],
          answer: 1,
          explanation: "'America's Pastor: Billy Graham and the Shaping of a Nation' (2014) by Grant Wacker is the authoritative scholarly biography of Graham."
        },
        {
          q: "Martin Luther King Jr.'s 'Letter from Birmingham Jail' (1963) grounds the duty to disobey unjust laws in which philosophical tradition?",
          options: ["Enlightenment social contract theory", "Marxist dialectical materialism", "Augustine and Thomas Aquinas's natural law tradition", "Thoreau's civil disobedience essay only"],
          answer: 2,
          explanation: "King explicitly cited Augustine and Aquinas, arguing that an unjust law is 'no law at all' — drawing on the Christian natural law tradition to justify nonviolent civil disobedience."
        }
      ]
    }

  ] // end chapters

}; // end HISTORY_DATA
