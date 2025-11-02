const ROADMAP_STORAGE_PREFIX = "roadmap_item_";
const STATUS_OPTIONS = ["未習得", "チャレンジ中", "習得済み"];
const EVALUATION_LEVEL_OPTIONS = [
  "一人で遂行できる",
  "助言があれば遂行できる",
  "できない"
];
const EVALUATION_FIELDS = [
  { key: "status", label: "状態", options: STATUS_OPTIONS },
  { key: "selfEvaluation", label: "自己評価", options: EVALUATION_LEVEL_OPTIONS },
  { key: "othersEvaluation", label: "他者評価", options: EVALUATION_LEVEL_OPTIONS }
];

const SKILL_CATEGORIES = {
  A: { label: "IT全般（業務知識）" },
  B: { label: "アーキテクト" },
  C: { label: "進行管理" },
  D: { label: "設計" },
  E: { label: "デベロップ" }
};

const roadmapData = [
  {
    id: "proposal",
    name: "提案",
    description:
      "顧客の課題を整理し、解決策と進め方を提示して合意形成を行うフェーズ。",
    children: [
      {
        id: "proposal-product-roadmap",
        name: "プロダクトロードマップ（提案機能の説明）",
        deliverable: "提案資料",
        skillCategories: ["A"],
        skillSubcategory: "IT全般（業務知識）",
        requiredSkill: "機能構成図を描くことができる"
      },
      {
        id: "proposal-release-plan",
        name: "リリース計画（コスト試算）",
        deliverable: "概算見積・開発体制図",
        skillCategories: ["A", "C"],
        skillSubcategory: "IT全般（業務知識）・進行管理",
        requiredSkill: "機能見積もり・工数算出ができる"
      },
      {
        id: "proposal-market-research",
        name: "市場調査・分析",
        deliverable: "調査報告書",
        skillCategories: ["A"],
        skillSubcategory: "IT全般",
        requiredSkill: "類似システムの比較検討資料を作成することができる"
      },
      {
        id: "proposal-technology-research",
        name: "技術調査",
        deliverable: "内向け技術助資料",
        skillCategories: ["B"],
        skillSubcategory: "アーキテクト",
        requiredSkill: "採用を検討する技術ごとに技術的に使えるかどうか検証できる"
      }
    ]
  },
  {
    id: "requirements",
    name: "要件定義",
    description: "期待する成果と体制を具体的な要件に落とし込むフェーズ。",
    children: [
      {
        id: "requirements-functional",
        name: "機能要件",
        deliverable: "要件定義書",
        skillCategories: ["D"],
        skillSubcategory: "設計",
        requiredSkill: "案件要件を明確化のもと進行ができる"
      },
      {
        id: "requirements-business-flow",
        name: "運用・業務フロー",
        deliverable: "業務フロー",
        skillCategories: ["D"],
        skillSubcategory: "設計",
        requiredSkill: "業務要件イメージをユーザーの運用落とし組むことができる"
      },
      {
        id: "requirements-feasibility",
        name: "フィジビリティー（技術検証）",
        deliverable: "内向け技術助資料",
        skillCategories: ["B"],
        skillSubcategory: "アーキテクト",
        requiredSkill: "案件要件を満たすことができる技術かどうか検証できる"
      },
      {
        id: "requirements-schedule",
        name: "スケジュール計画・チームビルディング",
        deliverable: "体制図",
        skillCategories: ["C"],
        skillSubcategory: "進行管理",
        requiredSkill: "プロジェクトに必要な要因確保、計画立てることができる"
      }
    ]
  },
  {
    id: "design",
    name: "設計",
    description: "要件を実現する仕組みと構成を設計するフェーズ。",
    children: [
      {
        id: "design-prototype",
        name: "プロトタイプ（UI試設・デザイン）",
        deliverable: "モック",
        skillCategories: ["E"],
        skillSubcategory: "デベロップ",
        requiredSkill: "機能要件から画面構成が作成できる"
      },
      {
        id: "design-functional",
        name: "機能設計（DB設計・動作仕様設計）",
        deliverable: "ER図、詳細設計書",
        skillCategories: ["D"],
        skillSubcategory: "設計",
        requiredSkill: "機能要件から動作要件、データ構成を作成できる"
      },
      {
        id: "design-infrastructure",
        name: "インフラ",
        deliverable: "構成図",
        skillCategories: ["B", "D"],
        skillSubcategory: "設計・アーキテクト",
        requiredSkill: "インフラ構成が作成できる"
      },
      {
        id: "design-quality-plan",
        name: "品質計画（保守・拡張性検証）",
        deliverable: "ドキュメント",
        skillCategories: ["A", "B"],
        skillSubcategory: "IT全般（業務知識）・アーキテクト",
        requiredSkill: "利用技術の評価方法を運用に落とすことができる"
      }
    ]
  },
  {
    id: "implementation",
    name: "実装",
    description: "環境構築と開発・テストを進めて成果物を作り上げるフェーズ。",
    children: [
      {
        id: "implementation-team-management",
        name: "チームマネージメント",
        deliverable: "WBS",
        skillCategories: ["C"],
        skillSubcategory: "進行管理",
        requiredSkill: "実装スケジュールを管理し作業遅延に対してフォロー施策を実施できる"
      },
      {
        id: "implementation-asset-preparation",
        name: "原稿準備（テキスト・画像）",
        deliverable: "リソース",
        skillCategories: ["C"],
        skillSubcategory: "進行管理",
        requiredSkill: "必要要項の収集、要員調整の調整ができる"
      },
      {
        id: "implementation-environment",
        name: "環境構築（開発環境・インフラ構築）",
        deliverable: "Docker・Cloud",
        skillCategories: ["B"],
        skillSubcategory: "アーキテクト",
        requiredSkill: "本番環境の構築、開発環境の構築ができる"
      },
      {
        id: "implementation-coding-html",
        name: "実装（コーディング）",
        deliverable: "ソース",
        skillCategories: ["E"],
        skillSubcategory: "デベロップ",
        requiredSkill: "プログラムの実装ができる（フロントコーディング html css）"
      },
      {
        id: "implementation-coding-vue",
        name: "実装（コーディング）",
        deliverable: "ソース",
        skillCategories: ["E"],
        skillSubcategory: "デベロップ",
        requiredSkill: "プログラムの実装ができる（フロント vue）"
      },
      {
        id: "implementation-coding-react",
        name: "実装（コーディング）",
        deliverable: "ソース",
        skillCategories: ["E"],
        skillSubcategory: "デベロップ",
        requiredSkill: "プログラムの実装ができる（フロント react）"
      },
      {
        id: "implementation-coding-laravel",
        name: "実装（コーディング）",
        deliverable: "ソース",
        skillCategories: ["E"],
        skillSubcategory: "デベロップ",
        requiredSkill: "プログラムの実装ができる（バック laravel）"
      },
      {
        id: "implementation-coding-node",
        name: "実装（コーディング）",
        deliverable: "ソース",
        skillCategories: ["E"],
        skillSubcategory: "デベロップ",
        requiredSkill: "プログラムの実装ができる（バック node）"
      },
      {
        id: "implementation-coding-python",
        name: "実装（コーディング）",
        deliverable: "ソース",
        skillCategories: ["E"],
        skillSubcategory: "デベロップ",
        requiredSkill: "プログラムの実装ができる（バック python）"
      },
      {
        id: "implementation-testing",
        name: "テスト",
        deliverable: "テスト仕様書・エビデンス",
        skillCategories: ["D"],
        skillSubcategory: "設計・実装",
        requiredSkill: "仕様書からテスト設計ができる"
      }
    ]
  },
  {
    id: "release",
    name: "リリース",
    description: "本番環境への移行と利用開始を支援するフェーズ。",
    children: [
      {
        id: "release-data-migration",
        name: "データ移行",
        deliverable: "データ移行テーブル",
        skillCategories: ["D", "E"],
        skillSubcategory: "設計・デベロップ",
        requiredSkill: "データ移行方法を設計ができる"
      },
      {
        id: "release-adoption-support",
        name: "導入支援（受入サポート・操作説明会）",
        deliverable: "操作説明書",
        skillCategories: ["C"],
        skillSubcategory: "進行管理",
        requiredSkill: "操作説明書を作成できる"
      }
    ]
  },
  {
    id: "operations",
    name: "運用",
    description: "リリース後の安定稼働と改善を推進するフェーズ。",
    children: [
      {
        id: "operations-helpdesk",
        name: "ヘルプデスク",
        deliverable: "問い合わせ対応",
        skillCategories: ["C", "D", "E"],
        skillSubcategory: "進行管理・設計・デベロップ",
        requiredSkill: "問い合わせ内容を把握し、修正内容をドキュメント化できる"
      },
      {
        id: "operations-monitoring",
        name: "リリース監視（パフォーマンス・不正）",
        deliverable: "監視・バグ対応",
        skillCategories: ["C", "B"],
        skillSubcategory: "進行管理・アーキテクト",
        requiredSkill:
          "リリース監視として原因特定できる。自分参加したプロジェクトの場合・他案件でドキュメントがある場合・他案件でドキュメントがない場合"
      },
      {
        id: "operations-maintenance",
        name: "保守管理",
        deliverable: "障害管理票・更新作業",
        skillCategories: ["C"],
        skillSubcategory: "進行管理",
        requiredSkill: "障害管理ができる。更新作業の管理ができる"
      },
      {
        id: "operations-feature-enhancement",
        name: "機能追加対応",
        deliverable: "機能追加設計・実装適用",
        skillCategories: ["A"],
        skillSubcategory: "IT全般（業務知識）・アーキテクト・設計",
        requiredSkill: "機能追加打ち合わせの進行ができる。機能見積もり・工数算出ができる"
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
  listItem.dataset.itemId = item.id;

  const storedState = loadItemState(item.id);
  const currentStatus = storedState.status || STATUS_OPTIONS[0];
  listItem.dataset.status = currentStatus;

  const headerButton = document.createElement("button");
  headerButton.type = "button";
  headerButton.className = "item-header";

  const headerContent = document.createElement("div");
  headerContent.className = "item-header-content";

  const title = document.createElement("div");
  title.className = "item-title";

  const titleText = document.createElement("span");
  titleText.textContent = item.name;
  title.appendChild(titleText);

  if (item.children && item.children.length > 0) {
    const completionSummary = document.createElement("span");
    completionSummary.className = "completion-summary";
    listItem.__completionSummary = completionSummary;
    title.appendChild(completionSummary);
  }

  headerContent.appendChild(title);

  if (item.skillCategories && item.skillCategories.length > 0) {
    const labelContainer = document.createElement("div");
    labelContainer.className = "skill-labels";

    item.skillCategories.forEach((code) => {
      const info = SKILL_CATEGORIES[code];
      if (!info) {
        return;
      }

      const label = document.createElement("span");
      label.className = `skill-label skill-label-${code.toLowerCase()}`;
      label.textContent = `${code}：${info.label}`;
      labelContainer.appendChild(label);
    });

    if (labelContainer.childElementCount > 0) {
      headerContent.appendChild(labelContainer);
    }
  }

  if (item.description) {
    const description = document.createElement("div");
    description.className = "item-description";
    description.textContent = item.description;
    headerContent.appendChild(description);
  }

  const statusPill = document.createElement("span");
  statusPill.className = "status-pill";
  statusPill.dataset.status = currentStatus;
  statusPill.textContent = currentStatus;

  headerButton.appendChild(headerContent);
  headerButton.appendChild(statusPill);

  const body = document.createElement("div");
  body.className = "item-body";
  if (storedState.expanded) {
    body.classList.add("active");
  }

  headerButton.addEventListener("click", () => {
    const isActive = body.classList.toggle("active");
    saveItemState(item.id, {
      ...loadItemState(item.id),
      expanded: isActive
    });
  });

  const meta = document.createElement("dl");
  meta.className = "item-meta";
  appendMeta(meta, "成果物・作業メニュー", item.deliverable);
  appendMeta(meta, "必要スキル", item.requiredSkill);
  if (meta.childElementCount > 0) {
    body.appendChild(meta);
  }

  const controls = document.createElement("div");
  controls.className = "controls";

  const isLeafItem = !item.children || item.children.length === 0;

  if (isLeafItem) {
    const evaluationGroup = document.createElement("div");
    evaluationGroup.className = "evaluation-group";

    EVALUATION_FIELDS.forEach((field) => {
      const fieldWrapper = document.createElement("label");
      fieldWrapper.className = "evaluation-field";

      const fieldTitle = document.createElement("span");
      fieldTitle.textContent = field.label;

      const select = document.createElement("select");
      field.options.forEach((optionValue) => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
      });

      const storedValue =
        field.key === "status"
          ? currentStatus
          : storedState[field.key] || field.options[0];
      select.value = storedValue;

      select.addEventListener("change", (event) => {
        const newValue = event.target.value;

        if (field.key === "status") {
          statusPill.textContent = newValue;
          statusPill.dataset.status = newValue;
          listItem.dataset.status = newValue;
          updateCompletionSummaryUpwards(listItem);
        }

        saveItemState(item.id, {
          ...loadItemState(item.id),
          [field.key]: newValue
        });
      });

      fieldWrapper.appendChild(fieldTitle);
      fieldWrapper.appendChild(select);
      evaluationGroup.appendChild(fieldWrapper);
    });

    controls.appendChild(evaluationGroup);
  }

  const memoLabel = document.createElement("label");
  memoLabel.className = "memo-field";
  const memoTitle = document.createElement("span");
  memoTitle.textContent = "メモ";
  const memoTextarea = document.createElement("textarea");
  memoTextarea.placeholder = "学んだことや疑問点をメモしましょう";
  memoTextarea.value = storedState.memo || "";
  memoTextarea.addEventListener("input", (event) => {
    saveItemState(item.id, {
      ...loadItemState(item.id),
      memo: event.target.value
    });
  });
  memoLabel.appendChild(memoTitle);
  memoLabel.appendChild(memoTextarea);

  controls.appendChild(memoLabel);

  body.appendChild(controls);

  if (item.children && item.children.length > 0) {
    const childrenWrapper = document.createElement("div");
    childrenWrapper.className = "children";
    const childList = createList(item.children);
    childrenWrapper.appendChild(childList);
    listItem.__childList = childList;
    body.appendChild(childrenWrapper);
  }

  listItem.appendChild(headerButton);
  listItem.appendChild(body);

  if (listItem.__completionSummary) {
    updateCompletionSummary(listItem);
  }

  return listItem;
}

function updateCompletionSummary(listItem) {
  if (!listItem.__completionSummary || !listItem.__childList) {
    return;
  }

  const childItems = Array.from(
    listItem.__childList.querySelectorAll(":scope > li.roadmap-item")
  );
  const total = childItems.length;

  if (total === 0) {
    listItem.__completionSummary.textContent = "";
    return;
  }

  const completedCount = childItems.filter(
    (child) => child.dataset.status === "習得済み"
  ).length;

  listItem.__completionSummary.textContent = `(${completedCount}/${total})`;
}

function updateCompletionSummaryUpwards(listItem) {
  let current = listItem;

  while (current && current instanceof HTMLElement) {
    if (current.__completionSummary) {
      updateCompletionSummary(current);
    }

    current = current.parentElement?.closest(".roadmap-item");
  }
}

function appendMeta(metaElement, label, value) {
  if (!value) {
    return;
  }

  const dt = document.createElement("dt");
  dt.textContent = label;
  const dd = document.createElement("dd");
  dd.textContent = value;

  metaElement.appendChild(dt);
  metaElement.appendChild(dd);
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
