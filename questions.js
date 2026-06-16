/**
 * 交流電路功率進階評量系統 - 正式題庫資料庫
 * 範疇：基本電學（Ⅱ）第十章 交流電路功率
 * 採用 String.raw 確保學術級 LaTeX 符號完全相容不遺失
 */
const allQuestions = [
    {
        id: 1,
        title: "核心題型 10-2：單相交流電路之平均功率計算",
        desc: String.raw`設某單相交流電路之電源電壓瞬時值為 $v(t) = 50\sqrt{2}\sin(377t + 30^{\circ})\text{ V}$，電路電流瞬時值為 $i(t) = 5\sqrt{2}\sin(377t - 30^{\circ})\text{ A}$。試求此電路所消耗之平均功率 $P$。`,
        mode1_steps: [
            { q: "步驟一：將電壓與電流之時域瞬時值函數轉換為對應之有效值相量形式。", a: [String.raw`$\bar{V} = 50\angle 30^{\circ}\text{ V} \quad , \quad \bar{I} = 5\angle -30^{\circ}\text{ A}$`, String.raw`$\bar{V} = 50\sqrt{2}\angle 30^{\circ}\text{ V} \quad , \quad \bar{I} = 5\sqrt{2}\angle -30^{\circ}\text{ A}$`], correct: 0 },
            { q: "步驟二：計算電壓與電流之間的相位角差（功率因數角） $\theta$。", a: [String.raw`$\theta = \theta_v - \theta_i = 30^{\circ} - (-30^{\circ}) = 60^{\circ}$`, String.raw`$\theta = \theta_v - \theta_i = 30^{\circ} - 30^{\circ} = 0^{\circ}$`], correct: 0 },
            { q: "步驟三：導入平均功率定義式求出其電功率純量值。", a: [String.raw`$P = VI\cos\theta = 50 \times 5 \times \cos 60^{\circ} = 125\text{ W}$`, String.raw`$P = VI = 50 \times 5 = 250\text{ W}$`], correct: 0 }
        ],
        mode2_match: {
            q: "請選擇符合本題完整數學推導過程與終端量值的選項：",
            a: [
                String.raw`$P = VI\cos\theta = 50 \times 5 \times \cos 60^{\circ} = 125\text{ W}$`,
                String.raw`$P = VI\sin\theta = 50 \times 5 \times \sin 60^{\circ} = 125\sqrt{3}\text{ VAR}$`,
                String.raw`$P = VI = 50 \times 5 = 250\text{ W}$`
            ],
            correct: 0
        }
    },
    {
        id: 2,
        title: "核心題型 10-3：純電阻交流電路之各類功率參數解析",
        desc: String.raw`於純電阻交流電路中，已知負載電阻 $R = 50\ \Omega$，外接電源電壓為 $v(t) = 100\sqrt{2}\sin(377t)\text{ V}$。試求：(1) 功因角 $\theta$ (2) 平均功率 $P$ (3) 最大瞬時功率 $P_{\max}$ (4) 最小瞬時功率 $P_{\min}$ (5) 功率波動頻率 $f_p$。`,
        mode1_steps: [
            { q: "步驟一：確立純電阻電路中，電壓相量與電流相量之同相特徵並求出相位角差 $\theta$。", a: [String.raw`$\theta = \theta_v - \theta_i = 0^{\circ} - 0^{\circ} = 0^{\circ}$`, String.raw`$\theta = 90^{\circ}$`], correct: 0 },
            { q: "步驟二：求出有效值電流 $\bar{I}$，並藉此計算電路之平均功率（實功） $P$。", a: [String.raw`$\bar{I} = 2\angle 0^{\circ}\text{ A} \rightarrow P = VI\cos\theta = 100 \times 2 \times \cos 0^{\circ} = 200\text{ W}$`, String.raw`$\bar{I} = 2\sqrt{2}\angle 0^{\circ}\text{ A} \rightarrow P = 400\text{ W}$`], correct: 0 },
            { q: "步驟三：依據瞬時功率軌跡方程，推導最大與最小瞬時功率 $P_{\max}$ 與 $P_{\min}$。", a: [String.raw`$P_{\max} = VI(\cos\theta + 1) = 400\text{ W} \quad , \quad P_{\min} = VI(\cos\theta - 1) = 0\text{ W}$`, String.raw`$P_{\max} = 200\text{ W} \quad , \quad P_{\min} = -200\text{ W}$`], correct: 0 },
            { q: "步驟四：根據角頻率 $\omega = 377\text{ rad/s}$ 換算基頻 $f$，並求取兩倍基頻之功率頻率 $f_p$。", a: [String.raw`$f = \frac{377}{2\pi} \approx 60\text{ Hz} \rightarrow f_p = 2f = 120\text{ Hz}$`, String.raw`$f_p = f = 60\text{ Hz}$`], correct: 0 }
        ],
        mode2_match: {
            q: "請選擇純電阻電路各項參數之完整矩陣解：",
            a: [
                String.raw`$\theta = 0^{\circ}, \ P = 200\text{ W}, \ P_{\max} = 400\text{ W}, \ P_{\min} = 0\text{ W}, \ f_p = 120\text{ Hz}$`,
                String.raw`$\theta = 0^{\circ}, \ P = 200\text{ W}, \ P_{\max} = 200\text{ W}, \ P_{\min} = -200\text{ W}, \ f_p = 60\text{ Hz}$`,
                String.raw`$\theta = 90^{\circ}, \ P = 0\text{ W}, \ P_{\max} = 400\text{ W}, \ P_{\min} = -400\text{ W}, \ f_p = 120\text{ Hz}$`
            ],
            correct: 0
        }
    },
    {
        id: 3,
        title: "核心題型 10-4：交流電路視在功率之向量定義",
        desc: String.raw`已知某單相交流電路之兩端電源電壓為 $\bar{V} = 10\angle 60^{\circ}\text{ V}$，其產生的總負載電流為 $\bar{I} = 10\angle 15^{\circ}\text{ A}$。試求該電路總體承受之視在功率 $S$。`,
        mode1_steps: [
            { q: "步驟一：辨析視在功率之物理定義，確立其量值是否受電壓與電流之絕對相位角干涉。", a: [String.raw`不受干涉。視在功率大小直接由電壓有效值純量與電流有效值純量之乘積決定，即 $S = VI$。`, String.raw`受干涉。必須先求出複數功率相量，代入角度差進行極座標轉換方可求得。`], correct: 0 }
        ],
        mode2_match: {
            q: "請選擇正確的視在功率運算式與對應單位：",
            a: [
                String.raw`$S = VI = 10 \times 10 = 100\text{ VA}$`,
                String.raw`$S = VI\cos(60^{\circ}-15^{\circ}) = 50\sqrt{2}\text{ VA}$`,
                String.raw`$S = \frac{\bar{V}}{\bar{I}} = 1\angle 45^{\circ}\ \Omega$`
            ],
            correct: 0
        }
    },
    {
        id: 4,
        title: "核心題型 10-5：交流電路綜合功率（S、P、Q）之解析",
        desc: String.raw`某單相交流電路接於時域電壓 $v(t) = 10\sqrt{2}\sin(377t)\text{ V}$ 時，響應電流為 $i(t) = 5\sqrt{2}\sin(377t - 60^{\circ})\text{ A}$。試求該電路之：(1) 視在功率 $S$ (2) 平均功率 $P$ (3) 虛功率 $Q$。`,
        mode1_steps: [
            { q: "步驟一：提取時域函數之均方根值（有效值）振幅，並計算兩者之代數相位角差 $\theta$。", a: [String.raw`$V = 10\text{ V} \quad , \quad I = 5\text{ A} \quad , \quad \theta = 0^{\circ} - (-60^{\circ}) = 60^{\circ}$`, String.raw`$V = 10\sqrt{2}\text{ V} \quad , \quad I = 5\sqrt{2}\text{ A} \quad , \quad \theta = -60^{\circ}$`], correct: 0 },
            { q: "步驟二：求解視在功率 $S$ 基礎量值，並結合功率因數求得平均功率 $P$。", a: [String.raw`$S = VI = 50\text{ VA} \quad , \quad P = VI\cos\theta = 10 \times 5 \times \cos 60^{\circ} = 25\text{ W}$`, String.raw`$S = 50\text{ VA} \quad , \quad P = 50\text{ W}$`], correct: 0 },
            { q: "步驟三：導入正弦函數，求解反應能量交換速率之虛功率 $Q$。", a: [String.raw`$Q = VI\sin\theta = 10 \times 5 \times \sin 60^{\circ} = 25\sqrt{3}\text{ VAR}$`, String.raw`$Q = 25\text{ VAR}$`], correct: 0 }
        ],
        mode2_match: {
            q: "請選擇此交流電路三項功率之正確評量結果解集合：",
            a: [
                String.raw`$S = 50\text{ VA} \quad , \quad P = 25\text{ W} \quad , \quad Q = 25\sqrt{3}\text{ VAR}$`,
                String.raw`$S = 50\text{ VA} \quad , \quad P = 25\sqrt{3}\text{ W} \quad , \quad Q = 25\text{ VAR}$`,
                String.raw`$S = 100\text{ VA} \quad , \quad P = 50\text{ W} \quad , \quad Q = 50\sqrt{3}\text{ VAR}$`
            ],
            correct: 0
        }
    },
    {
        id: 5,
        title: "核心題型 10-6：純電容交流電路之無功功率本質評量",
        desc: String.raw`如電路圖所示，已知純電容負載之電容量 $C = 20\ \mu\text{F}$，施加電壓源為 $v(t) = 200\sqrt{2}\sin(1000t)\text{ V}$。試求該純電容電路之所有功率參數與頻率特徵。`,
        mode1_steps: [
            { q: "步驟一：利用角頻率 $\omega = 1000\text{ rad/s}$ 計算容抗 $-jX_C$，並導出電流相量 $\bar{I}$。", a: [String.raw`$-jX_C = \frac{1}{j\omega C} = -j50\ \Omega \rightarrow \bar{I} = \frac{\bar{V}}{-jX_C} = 4\angle 90^{\circ}\text{ A}$`, String.raw`$-jX_C = -j10\ \Omega \rightarrow \bar{I} = 20\angle 90^{\circ}\text{ A}$`], correct: 0 },
            { q: "步驟二：依據純電容之正交相位特性，判定其實際功因表現與虛功量值表現。", a: [String.raw`因 $\theta = -90^{\circ}$，故 $P = 0\text{ W} \ , \ Q_C = VI\sin(-90^{\circ}) = -800\text{ VAR} \ , \ S = 800\text{ VA}$`, String.raw`因 $\theta = 0^{\circ}$，故 $P = 800\text{ W} \ , \ Q_C = 0\text{ VAR} \ , \ S = 800\text{ VA}$`], correct: 0 },
            { q: "步驟三：由 $\omega = 1000$ 換算電網頻率 $f$，進而確定功率波動頻率 $f_p$。", a: [String.raw`$f = \frac{1000}{2\pi} \approx 159.2\text{ Hz} \rightarrow f_p = 2f \approx 318.4\text{ Hz}$`, String.raw`$f_p = f = 1000\text{ Hz}$`], correct: 0 }
        ],
        mode2_match: {
            q: "請選擇純電容交流電路之完整評量數據鏈：",
            a: [
                String.raw`$S = 800\text{ VA}, \ P = 0\text{ W}, \ Q_C = -800\text{ VAR}, \ P_{\max} = 800\text{ W}, \ P_{\min} = -800\text{ W}, \ f_p = 318.4\text{ Hz}$`,
                String.raw`$S = 800\text{ VA}, \ P = 800\text{ W}, \ Q_C = 0\text{ VAR}, \ P_{\max} = 800\text{ W}, \ P_{\min} = 0\text{ W}, \ f_p = 159.2\text{ Hz}$`
            ],
            correct: 0
        }
    },
    {
        id: 6,
        title: "核心題型 10-8：直角功率三角形之幾何反推與功因判定",
        desc: String.raw`某單相交流電路中，系統由電源側吸收之視在功率 $S = 15\text{ kVA}$，且量測其虛功率 $Q = 9\text{ kVAR}$（判定屬電容性負載）。試求該電路之功率因數 $PF$。`,
        mode1_steps: [
            { q: "步驟一：應用功率三角形之畢氏幾何定理，求解代表耗能元件之實功率 $P$。", a: [String.raw`$P = \sqrt{S^2 - Q^2} = \sqrt{15^2 - 9^2} = 12\text{ kW}$`, String.raw`$P = S - Q = 15 - 9 = 6\text{ kW}$`], correct: 0 },
            { q: "步驟二：計算功率因數比值，並依據負載阻抗本質判定其超前或滯後狀態。", a: [String.raw`$PF = \frac{P}{S} = \frac{12}{15} = 0.8$（因屬電容性負載，其電流相位超前電壓，故為超前功率因數）`, String.raw`$PF = \frac{P}{S} = \frac{12}{15} = 0.8$（因屬電容性負載，其電壓相位超前電流，故為滯後功率因數）`], correct: 0 }
        ],
        mode2_match: {
            q: "請選擇正確的推導邏輯及最終學術判定結論：",
            a: [
                String.raw`$P = \sqrt{15^2 - 9^2} = 12\text{ kW} \rightarrow PF = \frac{12}{15} = 0.8$ （超前功率因數）`,
                String.raw`$P = 12\text{ kW} \rightarrow PF = \frac{12}{15} = 0.8$ （滯後功率因數）`,
                String.raw`$PF = \frac{Q}{S} = \frac{9}{15} = 0.6$ （超前功率因數）`
            ],
            correct: 0
        }
    },
    {
        id: 7,
        title: "核心題型 10-9：阻抗串並聯變換之功率因數邊界定理",
        desc: String.raw`已知一電路負載由電阻 $R = 6\ \Omega$ 與感抗 $X_L = 8\ \Omega$ 組成。試求：(1) 兩元件串聯時之功因 $PF_s$ (2) 兩元件並聯時之功因 $PF_p$ (3) 推導出兩者間符合公式 10-12 之恆等關係式。`,
        mode1_steps: [
            { q: "步驟一：計算兩元件於串聯架構下之總複數阻抗 $Z_s$，並求取其串聯功率因數 $PF_s$。", a: [String.raw`$PF_s = \frac{R}{Z_s} = \frac{6}{\sqrt{6^2 + 8^2}} = 0.6$`, String.raw`$PF_s = \frac{R}{X_L} = 0.75$`], correct: 0 },
            { q: "步驟二：計算兩元件於並聯架構下之總導納 $Y$，並求取其並聯功率因數 $PF_p$。", a: [String.raw`$PF_p = \frac{G}{Y} = \frac{1/6}{\sqrt{(1/6)^2 + (1/8)^2}} = \frac{8}{\sqrt{6^2 + 8^2}} = 0.8$`, String.raw`$PF_p = 0.6$`], correct: 0 },
            { q: "步驟三：由上述兩數值推演阻抗互補之交流功率因數終極數學關係式。", a: [String.raw`$PF_s^2 + PF_p^2 = 0.6^2 + 0.8^2 = 1$`, String.raw`$PF_s + PF_p = 1.4$`], correct: 0 }
        ],
        mode2_match: {
            q: "請選擇本題最嚴謹之串並聯功因數值與恆等式對應選項：",
            a: [
                String.raw`$PF_s = 0.6, \quad PF_p = 0.8, \quad \text{關係式：} PF_s^2 + PF_p^2 = 1$`,
                String.raw`$PF_s = 0.8, \quad PF_p = 0.6, \quad \text{關係式：} PF_s^2 + PF_p^2 = 1$`,
                String.raw`$PF_s = 0.6, \quad PF_p = 0.8, \quad \text{關係式：} PF_s + PF_p = 1.4$`
            ],
            correct: 0
        }
    }
];
