const ROADMAP_STORAGE_PREFIX = "roadmap_item_";
const STATUS_OPTIONS = ["未習得", "チャレンジ中", "習得済み"];

const roadmapData = [
  {
    id: "foundations",
    name: "バックエンドの基礎",
    description: "HTTPやAPIの基本概念、リクエストとレスポンスの流れを理解する。",
    children: [
      {
        id: "http",
        name: "HTTPプロトコル",
        description: "メソッド、ステータスコード、ヘッダーなどの仕様を理解する。"
      },
      {
        id: "rest",
        name: "REST / API デザイン",
        description: "リソース設計、エンドポイント設計、認証・認可の基本を学ぶ。"
      },
      {
        id: "architecture",
        name: "サーバーサイドアーキテクチャ",
        description: "MVCやClean Architectureなどのレイヤー構造を理解する。"
      }
    ]
  },
  {
    id: "application-layer",
    name: "アプリケーション層",
    description: "ビジネスロジックやサービス層の設計パターンを学ぶ。",
    children: [
      {
        id: "framework",
        name: "Webフレームワーク",
        description: "Express, Spring, Rails などのフレームワークでのルーティング・ミドルウェアの扱い。"
      },
      {
        id: "validation",
        name: "入力バリデーション",
        description: "リクエストデータの検証、エラーハンドリング、レスポンス設計。"
      },
      {
        id: "testing",
        name: "テスト戦略",
        description: "ユニットテスト・統合テスト・エンドツーエンドテストの役割を把握する。"
      }
    ]
  },
  {
    id: "data-layer",
    name: "データ層",
    description: "永続化の責務、データモデルとアクセス方法を理解する。",
    children: [
      {
        id: "database",
        name: "データベース設計",
        description: "リレーショナル/NoSQLの選定、スキーマ設計、正規化と非正規化。"
      },
      {
        id: "orm",
        name: "ORM / クエリビルダー",
        description: "ORMの利用パターン、トランザクション、マイグレーション管理。"
      },
      {
        id: "caching",
        name: "キャッシュ戦略",
        description: "Redisなどを用いたキャッシュ、キャッシュ失効の設計。"
      }
    ]
  },
  {
    id: "infrastructure",
    name: "インフラ・運用",
    description: "アプリケーションを支えるインフラや運用のポイントを押さえる。",
    children: [
      {
        id: "deployment",
        name: "デプロイメント",
        description: "CI/CD、コンテナ、クラウドサービスへのデプロイ方法。"
      },
      {
        id: "observability",
        name: "モニタリングとロギング",
        description: "ログ収集、メトリクス、トレーシングによる可観測性の確保。"
      },
      {
        id: "security",
        name: "セキュリティ",
        description: "脆弱性対策、アクセス制御、秘密情報管理。"
      }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("roadmap");
  container.appendChild(createList(roadmapData));
});

function createList(items) {
  const list = document.createElement("ul");

  items.forEach((item) => {
    const listItem = createRoadmapItem(item);
    list.appendChild(listItem);
  });

  return list;
}

function createRoadmapItem(item) {
  const listItem = document.createElement("li");
  listItem.className = "roadmap-item";

  const storedState = loadItemState(item.id);
  const currentStatus = storedState.status || STATUS_OPTIONS[0];
  listItem.dataset.status = currentStatus;

  const headerButton = document.createElement("button");
  headerButton.type = "button";
  headerButton.className = "item-header";

  const titleWrapper = document.createElement("div");
  const title = document.createElement("div");
  title.textContent = item.name;
  const description = document.createElement("div");
  description.textContent = item.description;
  description.className = "item-description";
  titleWrapper.appendChild(title);
  titleWrapper.appendChild(description);

  const statusPill = document.createElement("span");
  statusPill.className = "status-pill";
  statusPill.dataset.status = currentStatus;
  statusPill.textContent = currentStatus;

  headerButton.appendChild(titleWrapper);
  headerButton.appendChild(statusPill);

  headerButton.addEventListener("click", () => {
    const isActive = body.classList.toggle("active");
    saveItemState(item.id, {
      ...loadItemState(item.id),
      expanded: isActive
    });
  });

  const body = document.createElement("div");
  body.className = "item-body";
  if (storedState.expanded) {
    body.classList.add("active");
  }

  const controls = document.createElement("div");
  controls.className = "controls";

  const statusLabel = document.createElement("label");
  statusLabel.textContent = "状態";
  const statusSelect = document.createElement("select");
  STATUS_OPTIONS.forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    if (status === currentStatus) {
      option.selected = true;
    }
    statusSelect.appendChild(option);
  });

  statusSelect.addEventListener("change", (event) => {
    const newStatus = event.target.value;
    statusPill.textContent = newStatus;
    statusPill.dataset.status = newStatus;
    listItem.dataset.status = newStatus;
    saveItemState(item.id, {
      ...loadItemState(item.id),
      status: newStatus
    });
  });

  statusLabel.appendChild(statusSelect);

  const memoLabel = document.createElement("label");
  memoLabel.textContent = "メモ";
  const memoTextarea = document.createElement("textarea");
  memoTextarea.placeholder = "学んだことや疑問点をメモしましょう";
  memoTextarea.value = storedState.memo || "";
  memoTextarea.addEventListener("input", (event) => {
    saveItemState(item.id, {
      ...loadItemState(item.id),
      memo: event.target.value
    });
  });
  memoLabel.appendChild(memoTextarea);

  controls.appendChild(statusLabel);
  controls.appendChild(memoLabel);

  body.appendChild(controls);

  if (item.children && item.children.length > 0) {
    const childrenWrapper = document.createElement("div");
    childrenWrapper.className = "children";
    childrenWrapper.appendChild(createList(item.children));
    body.appendChild(childrenWrapper);
  }

  listItem.appendChild(headerButton);
  listItem.appendChild(body);

  return listItem;
}

function loadItemState(id) {
  try {
    const raw = sessionStorage.getItem(ROADMAP_STORAGE_PREFIX + id);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error("Failed to load state", error);
    return {};
  }
}

function saveItemState(id, state) {
  try {
    sessionStorage.setItem(
      ROADMAP_STORAGE_PREFIX + id,
      JSON.stringify({ ...state })
    );
  } catch (error) {
    console.error("Failed to save state", error);
  }
}
