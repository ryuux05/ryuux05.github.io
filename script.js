// Language Management
const translations = {
    en: {
        // Navigation
        'nav.home': 'home',
        'nav.projects': 'projects',
        'nav.career': 'career',
        
        // Index page
        'index.tagline': '// Looking for a problem for a solution.',
        'index.about.title': 'about.txt',
        'index.about.p1': 'Back-end engineer with 3 years of experience and deep blockchain/EVM expertise. I was part of a fast-paced startup journey that scaled from seed to Series A in 2 years, where I built high-throughput services in NestJS/TypeScript and Go, designed and operated PoS validator infrastructure, and built custom ENS resolver integrations.',
        'index.about.p2': 'I specialize in Golang, PostgreSQL, and modular system design—think clean architecture, DDD, and event-driven patterns. I adapt quickly to new stacks and domains, always focusing on building secure, stable, and observable distributed systems.',
        'index.about.p3': 'Beyond pure development, I have a big interest in collaborating on diverse projects outside the traditional tech space. I love applying my unique sense and developer approach to solve problems in unconventional domains—let\'s build something interesting together!',
        'index.skills.title': 'skills.json',
        'index.skills.note': 'I prefer strongly typed languages',
        'index.interests.title': 'interests.md',
        'index.interests.1': 'Building web applications and experimenting with new technologies',
        'index.interests.2': 'Contributing to open-source projects',
        'index.interests.3': 'Learning about system design and architecture',
        'index.interests.4': 'Automating workflows and improving efficiency',
        'index.contact.title': 'contact.sh',
        'index.contact.email': 'email',
        'index.contact.github': 'github',
        'index.contact.linkedin': 'linkedin',
        'index.contact.twitter': 'twitter',
        'index.contact.medium': 'medium',
        'index.footer': 'git commit -S -m "Let\'s collaborate"',
        
        // Projects page
        'projects.tagline': '// Things I\'ve built and shipped',
        'projects.godex.description': 'godex is a Go SDK for indexing and processing blockchain data across multiple chains.',
        'projects.godex.live': 'live',
        
        // Career page
        'career.tagline': '// Where I\'ve been, what I\'ve built',
        'career.description': 'Part of a fast-paced startup that scaled from seed to Series A in 2 years. Built high-throughput services in NestJS/TypeScript, Built custom indexer for company use. Architect and scale analytic systems. Manage some of the company infrastructure',
        'career.responsibility': 'Key responsibility:',
        'career.responsibility.1': 'Designed and architected backend systems to solve scaling, performance, and reliability challenges across Web3 products.',
        'career.responsibility.2': 'Implemented efficient data pipelines and caching layers to handle high-volume transactions and reduce system bottlenecks.',
        'career.responsibility.3': 'Built secure, high-availability APIs and services powering blockchain-based user flows, on-chain/off-chain interactions, and internal tooling.',
        'career.responsibility.4': 'Collaborated closely with product, and frontend teams to define system requirements and ensure smooth cross-component integration.',
        'career.responsibility.5': 'Conducted deep-dive debugging, performance tuning, and refactoring to maintain high system integrity as usage scaled.',
        'career.responsibility.6': 'Ensured robust security practices across backend processes, including key management, API protection.',
        'career.responsibility.7': 'Took ownership of key areas of the system roadmap, leading architectural planning and defining scalable patterns for the backend stack.',
        
        // Godex page
        'godex.tagline': '// A high-performance blockchain indexing SDK written in Go',
        'godex.status': 'under development',
        'godex.overview.title': 'overview',
        'godex.overview.p1': 'godex is a production-ready SDK designed for building robust blockchain indexers that process EVM-compatible blockchain events. It provides a comprehensive solution for indexing multiple chains simultaneously with automatic reorg handling, flexible event decoding, and high-performance concurrent processing.',
        'godex.overview.p2': 'Built with Go, godex offers developers a powerful toolkit to create reliable indexers that can handle the complexities of blockchain data processing, including chain reorganizations, multi-chain support, and efficient event filtering.',
        'godex.installation.title': 'installation',
        'godex.installation.p1': 'Install godex using Go modules:',
        'godex.installation.p2': 'For detailed documentation, examples, and usage instructions, visit the',
        'godex.features.title': 'features',
        'godex.features.1': 'Multi-Chain Support: Index events across multiple EVM-compatible chains simultaneously with independent configuration per chain',
        'godex.features.2': 'Automatic Reorg Handling: Built-in detection and rollback for blockchain reorganizations, ensuring data consistency',
        'godex.features.3': 'Flexible Event Decoding: Register multiple ABIs with named identifiers for explicit event decoding and type-safe data access',
        'godex.features.4': 'High Performance: Concurrent fetching and processing with configurable worker pools for optimal throughput',
        'godex.features.5': 'Production Ready: Comprehensive error handling, retry mechanisms, rate limiting, and state management',
        'godex.features.6': 'Flexible Fetching: Support for both log-based and receipt-based fetching strategies',
        'godex.features.7': 'Topic Filtering: Efficient event filtering using function signatures or topic hashes',
        'godex.architecture.title': 'architecture',
        'godex.architecture.intro': 'The SDK consists of three main components working together:',
        'godex.architecture.processor': 'Processor',
        'godex.architecture.processor.desc': 'The Processor manages block fetching, log retrieval, and reorg detection. It coordinates multiple workers to fetch logs concurrently while maintaining ordered processing through an arbiter pattern. Handles state management and ensures data consistency across chain reorganizations.',
        'godex.architecture.decoder': 'Decoder',
        'godex.architecture.decoder.desc': 'The Decoder transforms raw blockchain logs into structured events. It supports registering multiple ABIs with named identifiers, allowing explicit selection of which ABI to use for decoding. Designed to be resilient—returns nil for logs that cannot be decoded, allowing indexers to continue processing.',
        'godex.architecture.rpc': 'RPC Client',
        'godex.architecture.rpc.desc': 'The RPC client handles communication with blockchain nodes, including automatic retry logic, rate limiting, and error handling. Supports configurable rate limits to respect provider constraints while maximizing throughput.',
        'godex.reorg.title': 'reorg handling',
        'godex.reorg.intro': 'The SDK automatically detects blockchain reorganizations by comparing parent block hashes. When a reorg is detected:',
        'godex.reorg.1': 'The processor identifies the common ancestor block',
        'godex.reorg.2': 'Rolls back any processed state beyond the ancestor',
        'godex.reorg.3': 'Restarts indexing from the ancestor block',
        'godex.reorg.conclusion': 'This ensures data consistency even during chain reorganizations, a critical feature for production indexers.',
        'godex.tech.title': 'technologies',
        'godex.links.title': 'links',
        'godex.links.github': 'github',
        
        // Common
        'common.footer': 'cd ..'
    },
    ja: {
        // Navigation
        'nav.home': 'ホーム',
        'nav.projects': 'プロジェクト',
        'nav.career': '経歴',
        
        // Index page
        'index.tagline': '// 解決策のための問題を探しています。',
        'index.about.title': 'about.txt',
        'index.about.p1': '3年の経験と深いブロックチェーン/EVM専門知識を持つバックエンドエンジニア。シードからシリーズAまで2年でスケールした急成長スタートアップの一員として、NestJS/TypeScriptとGoで高スループットサービスを構築し、PoSバリデーターインフラを設計・運用し、カスタムENSリゾルバー統合を構築しました。',
        'index.about.p2': 'Golang、PostgreSQL、モジュラーシステム設計を専門としています—クリーンアーキテクチャ、DDD、イベント駆動パターンを考えています。新しいスタックやドメインに素早く適応し、常に安全で安定した観測可能な分散システムの構築に焦点を当てています。',
        'index.about.p3': '純粋な開発を超えて、従来の技術分野以外の多様なプロジェクトへの協力に大きな関心があります。独自の感覚と開発者のアプローチを適用して、従来とは異なる分野の問題を解決することが大好きです—一緒に面白いものを作りましょう！',
        'index.skills.title': 'skills.json',
        'index.skills.note': '強く型付けされた言語を好みます',
        'index.interests.title': 'interests.md',
        'index.interests.1': 'Webアプリケーションの構築と新技術の実験',
        'index.interests.2': 'オープンソースプロジェクトへの貢献',
        'index.interests.3': 'システム設計とアーキテクチャの学習',
        'index.interests.4': 'ワークフローの自動化と効率の向上',
        'index.contact.title': 'contact.sh',
        'index.contact.email': 'email',
        'index.contact.github': 'github',
        'index.contact.linkedin': 'linkedin',
        'index.contact.twitter': 'twitter',
        'index.contact.medium': 'medium',
        'index.footer': 'git commit -S -m "協力しましょう"',
        
        // Projects page
        'projects.tagline': '// 構築・出荷したもの',
        'projects.godex.description': 'godexは、複数のチェーンにわたってブロックチェーンデータをインデックス化および処理するためのGo SDKです。',
        'projects.godex.live': 'ライブ',
        
        // Career page
        'career.tagline': '// これまでの経歴と構築したもの',
        'career.description': 'シードからシリーズAまで2年でスケールした急成長スタートアップの一員。NestJS/TypeScriptで高スループットサービスを構築し、会社用のカスタムインデクサーを構築。分析システムのアーキテクトとスケール。会社のインフラの一部を管理',
        'career.responsibility': '主な責任:',
        'career.responsibility.1': 'Web3製品全体のスケーリング、パフォーマンス、信頼性の課題を解決するバックエンドシステムの設計とアーキテクチャ構築。',
        'career.responsibility.2': '高ボリュームトランザクションを処理し、システムのボトルネックを削減する効率的なデータパイプラインとキャッシングレイヤーの実装。',
        'career.responsibility.3': 'ブロックチェーンベースのユーザーフロー、オンチェーン/オフチェーン相互作用、および内部ツールを動かす安全で高可用性のAPIとサービスの構築。',
        'career.responsibility.4': 'システム要件を定義し、スムーズなクロスコンポーネント統合を確保するため、製品およびフロントエンドチームと緊密に協力。',
        'career.responsibility.5': '使用量がスケールするにつれて高いシステム整合性を維持するための深いデバッグ、パフォーマンスチューニング、リファクタリングの実施。',
        'career.responsibility.6': 'キー管理、API保護を含むバックエンドプロセス全体で堅牢なセキュリティ慣行の確保。',
        'career.responsibility.7': 'システムロードマップの主要領域の所有権を取り、アーキテクチャ計画を主導し、バックエンドスタックのスケーラブルなパターンを定義。',
        
        // Godex page
        'godex.tagline': '// Goで書かれた高性能ブロックチェーンインデックスSDK',
        'godex.status': '開発中',
        'godex.overview.title': '概要',
        'godex.overview.p1': 'godexは、EVM互換ブロックチェーンイベントを処理する堅牢なブロックチェーンインデクサーを構築するために設計された本番対応のSDKです。自動リオーガナイゼーション処理、柔軟なイベントデコード、高性能並行処理を備えた複数のチェーンを同時にインデックス化する包括的なソリューションを提供します。',
        'godex.overview.p2': 'Goで構築されたgodexは、チェーン再編成、マルチチェーンサポート、効率的なイベントフィルタリングを含むブロックチェーンデータ処理の複雑さを処理できる信頼性の高いインデクサーを作成するための強力なツールキットを開発者に提供します。',
        'godex.installation.title': 'インストール',
        'godex.installation.p1': 'Goモジュールを使用してgodexをインストール:',
        'godex.installation.p2': '詳細なドキュメント、例、使用手順については、',
        'godex.features.title': '機能',
        'godex.features.1': 'マルチチェーンサポート: チェーンごとに独立した設定で、複数のEVM互換チェーンにわたってイベントを同時にインデックス化',
        'godex.features.2': '自動リオーガナイゼーション処理: ブロックチェーン再編成の組み込み検出とロールバックにより、データの一貫性を確保',
        'godex.features.3': '柔軟なイベントデコード: 明示的なイベントデコードと型安全なデータアクセスのために、名前付き識別子で複数のABIを登録',
        'godex.features.4': '高性能: 最適なスループットのための設定可能なワーカープールによる並行フェッチと処理',
        'godex.features.5': '本番対応: 包括的なエラーハンドリング、再試行メカニズム、レート制限、状態管理',
        'godex.features.6': '柔軟なフェッチ: ログベースとレシートベースの両方のフェッチ戦略をサポート',
        'godex.features.7': 'トピックフィルタリング: 関数シグネチャまたはトピックハッシュを使用した効率的なイベントフィルタリング',
        'godex.architecture.title': 'アーキテクチャ',
        'godex.architecture.intro': 'SDKは、連携して動作する3つの主要コンポーネントで構成されています:',
        'godex.architecture.processor': 'プロセッサ',
        'godex.architecture.processor.desc': 'プロセッサはブロックフェッチ、ログ取得、リオーガナイゼーション検出を管理します。アービターパターンを通じて順序付き処理を維持しながら、複数のワーカーを調整してログを並行してフェッチします。状態管理を処理し、チェーン再編成全体でデータの一貫性を確保します。',
        'godex.architecture.decoder': 'デコーダ',
        'godex.architecture.decoder.desc': 'デコーダは生のブロックチェーンログを構造化されたイベントに変換します。名前付き識別子で複数のABIを登録することをサポートし、デコードに使用するABIを明示的に選択できるようにします。回復力があるように設計されており、デコードできないログに対してnilを返し、インデクサーが処理を続行できるようにします。',
        'godex.architecture.rpc': 'RPCクライアント',
        'godex.architecture.rpc.desc': 'RPCクライアントは、自動再試行ロジック、レート制限、エラーハンドリングを含むブロックチェーンノードとの通信を処理します。スループットを最大化しながらプロバイダーの制約を尊重する設定可能なレート制限をサポートします。',
        'godex.reorg.title': 'リオーガナイゼーション処理',
        'godex.reorg.intro': 'SDKは親ブロックハッシュを比較することでブロックチェーン再編成を自動的に検出します。再編成が検出された場合:',
        'godex.reorg.1': 'プロセッサが共通の祖先ブロックを識別',
        'godex.reorg.2': '祖先を超えた処理済み状態をロールバック',
        'godex.reorg.3': '祖先ブロックからインデックス化を再開',
        'godex.reorg.conclusion': 'これにより、チェーン再編成中でもデータの一貫性が確保され、本番インデクサーにとって重要な機能です。',
        'godex.tech.title': '技術',
        'godex.links.title': 'リンク',
        'godex.links.github': 'github',
        
        // Common
        'common.footer': 'cd ..'
    }
};

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    translatePage();
}

// Translate page
function translatePage() {
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update language toggle button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? '日本語' : 'EN';
    }
}

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to system preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Set theme
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(getPreferredTheme());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Smooth scroll behavior for any internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Language Toggle
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentLang = getCurrentLanguage();
        const newLang = currentLang === 'en' ? 'ja' : 'en';
        setLanguage(newLang);
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const lang = getCurrentLanguage();
    document.documentElement.setAttribute('lang', lang);
    translatePage();
    
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });

    // Console easter egg
    console.log('%c$ whoami', 'font-family: monospace; font-size: 14px; font-weight: bold;');
    console.log('%cryuux05', 'font-family: monospace; font-size: 16px;');
    console.log('%c// Thanks for checking the console! 👨‍💻', 'font-family: monospace; font-size: 12px; color: #666;');
});

// Add keyboard navigation hint
document.addEventListener('keydown', (e) => {
    // Konami code easter egg: up, up, down, down, left, right, left, right, b, a
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    if (!window.konamiIndex) window.konamiIndex = 0;

    if (e.key === konamiCode[window.konamiIndex]) {
        window.konamiIndex++;
        if (window.konamiIndex === konamiCode.length) {
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                window.konamiIndex = 0;
            }, 3000);
        }
    } else {
        window.konamiIndex = 0;
    }
});

// Add hover effect sound (optional - commented out by default)
// Uncomment if you want to add subtle interaction feedback
/*
const hoverSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBWu/8OKMNgkXabrx35pPDAxPqu/3QBgSZprvzYckHmg==');
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        // hoverSound.play();
    });
});
*/

