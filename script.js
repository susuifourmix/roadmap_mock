const ROADMAP_STORAGE_PREFIX = "roadmap_item_";
const STATUS_OPTIONS = ["未習得", "チャレンジ中", "習得済み"];

const roadmapData = [
  {
    id: "intake",
    name: "受注",
    description:
      "案件受注から提案までの段取りを整理し、プロジェクトの期待値をそろえる。",
    children: [
      {
        id: "project-roadmap",
        name: "プロジェクトロードマップ",
        description:
          "プロジェクト開始から完了までの工程やマイルストーンを俯瞰し、全体像を関係者と共有する。"
      },
      {
        id: "stakeholder-alignment",
        name: "ステークホルダー調整",
        description:
          "主要メンバーの役割や意思決定プロセスを整理し、合意形成の土台を整える。"
      },
      {
        id: "schedule-coordination",
        name: "スケジュール調整",
        description:
          "関係者の予定と前提条件を踏まえてマイルストーンとタスクの実行時期を調整する。"
      },
      {
        id: "issues-risks",
        name: "課題・懸念点",
        description:
          "想定される課題やリスクを洗い出し、対応策やエスカレーション経路を明確にする。"
      },
      {
        id: "proposal",
        name: "提案書",
        description:
          "背景・課題・解決策・効果を整理した提案資料を作成し、顧客と合意する。"
      },
      {
        id: "cost-estimation",
        name: "費用・見積",
        description:
          "工数や外部コストの根拠を明示した見積もりを提示し、予算計画を支援する。"
      }
    ]
  },
  {
    id: "requirements",
    name: "要件定義",
    description:
      "期待する成果を具体化し、関係者間で共通理解をつくるフェーズのスキル。",
    children: [
      {
        id: "functional-requirements",
        name: "機能要件",
        description:
          "ユーザーが実現したい行動やユースケースを整理し、必要な機能を明文化する。"
      },
      {
        id: "business-requirements",
        name: "業務要件",
        description:
          "現行業務の流れや制約を把握し、システム化に伴う変更点を定義する。"
      },
      {
        id: "requirement-hearing",
        name: "要件ヒアリング",
        description:
          "関係者へのヒアリングを通じてニーズ・課題・期待値を把握し、漏れなく要件を収集する。"
      },
      {
        id: "facilitation",
        name: "ファシリテーション",
        description:
          "会議やワークショップを設計・進行し、意見を引き出して合意形成につなげる。"
      },
      {
        id: "acceptance-criteria",
        name: "受入条件",
        description:
          "成果物を受け入れる判断基準と確認方法を定義し、品質の期待値を合わせる。"
      },
      {
        id: "requirements-document",
        name: "要件定義書",
        description:
          "決定した要件を構造化して文書化し、レビューと承認プロセスを整備する。"
      }
    ]
  },
  {
    id: "design",
    name: "設計",
    description:
      "要件を実現するための具体的な仕組みや構成を設計する段階のスキル。",
    children: [
      {
        id: "prototype",
        name: "プロトタイプ",
        description:
          "画面遷移や操作感を可視化する試作をつくり、要件の妥当性を検証する。"
      },
      {
        id: "design-assets",
        name: "設計資料（画面・デザイン）",
        description:
          "UI方針やレイアウト、スタイルガイドなどの設計資料を整え、合意形成を行う。"
      },
      {
        id: "technical-spec",
        name: "技術仕様（API・DB）",
        description:
          "API設計やデータモデル、インターフェース仕様を定義し、開発の指針を示す。"
      },
      {
        id: "infrastructure-design",
        name: "インフラ（環境・構成設計）",
        description:
          "ネットワーク構成、セキュリティ、スケーリングを考慮したインフラ設計をまとめる。"
      },
      {
        id: "nonfunctional-design",
        name: "非機能設計（性能・セキュリティ）",
        description:
          "性能・可用性・セキュリティなど非機能要件を満たすための方針を策定する。"
      },
      {
        id: "test-plan",
        name: "テスト計画",
        description:
          "テスト観点・責務・スケジュールを整理し、品質確保の進め方を定義する。"
      }
    ]
  },
  {
    id: "execution",
    name: "構築",
    description:
      "設計を基に開発を進め、チームとして成果物を完成させるためのスキル。",
    children: [
      {
        id: "team-management",
        name: "チームマネジメント",
        description:
          "体制や役割、コミュニケーションルールを整え、チームが動きやすい環境をつくる。"
      },
      {
        id: "development-environment",
        name: "開発環境",
        description:
          "ローカル・共有環境、CIなどの準備を整え、開発をスムーズに立ち上げる。"
      },
      {
        id: "development-progress",
        name: "開発進捗",
        description:
          "タスク管理やバーンダウンなどで進捗を可視化し、課題を早期に検知する。"
      },
      {
        id: "reviews",
        name: "レビュー",
        description:
          "仕様レビューやコードレビューを実施し、品質と認識のズレを是正する。"
      },
      {
        id: "training",
        name: "教育・研修",
        description:
          "新メンバーのオンボーディングやナレッジ共有を行い、チーム力を底上げする。"
      },
      {
        id: "testing",
        name: "テスト",
        description:
          "単体・結合・受入テストを計画通りに実施し、品質基準を満たしているか確認する。"
      }
    ]
  },
  {
    id: "release",
    name: "リリース",
    description:
      "システムを利用環境へ届けるための準備とリスクコントロールを担うスキル。",
    children: [
      {
        id: "release-plan",
        name: "リリース",
        description:
          "リリース判定の基準や実施日程、影響範囲を整理し、安全に公開できる体制を整える。"
      },
      {
        id: "migration-plan",
        name: "移行計画",
        description:
          "データ移行や切り戻し方法を含む移行手順を設計し、想定外の事態に備える。"
      },
      {
        id: "release-procedure",
        name: "リリース手順",
        description:
          "実行担当者・作業手順・チェックリストを整え、当日の運用を確実にする。"
      },
      {
        id: "known-issues",
        name: "既知課題",
        description:
          "既知の制約や残課題を整理し、関係者に共有してフォロー体制を整える。"
      },
      {
        id: "documentation",
        name: "ドキュメント",
        description:
          "マニュアルやFAQ、リリースノートを整備し、ユーザーとサポート体制へ引き継ぐ。"
      },
      {
        id: "support-transition",
        name: "サポート引き継ぎ",
        description:
          "運用チームへの引き継ぎ内容とサポートフローを確認し、リリース後の対応を円滑にする。"
      }
    ]
  },
  {
    id: "operations",
    name: "運用",
    description:
      "リリース後の品質維持と継続的な改善を実現するためのスキル。",
    children: [
      {
        id: "hypercare",
        name: "ハイパーケア",
        description:
          "リリース直後の集中的なモニタリングと支援体制を整え、障害を迅速に検知・対応する。"
      },
      {
        id: "inquiry-response",
        name: "問い合わせ対応",
        description:
          "問い合わせ窓口やSLAを定義し、ユーザーからの質問や要望を適切に処理する。"
      },
      {
        id: "operations-support",
        name: "運用支援",
        description:
          "運用手順や監視ポイントを整理し、日々のオペレーションを支援する。"
      },
      {
        id: "improvement-initiatives",
        name: "改善施策",
        description:
          "定量・定性データを分析し、継続的な改善アクションを企画・推進する。"
      },
      {
        id: "version-management",
        name: "バージョン管理",
        description:
          "バージョン方針や適用履歴を管理し、リリース状況を関係者と共有する。"
      },
      {
        id: "knowledge-sharing",
        name: "ナレッジ共有",
        description:
          "学びや事例をドキュメント・勉強会で共有し、組織の知見を蓄積する。"
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
