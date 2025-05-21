{ pkgs, ... }: {
  channel= "24.11";

  packages = [
    pkgs.nodejs_23
    pkgs.corepack_22
  ];

  env = {};
  idx = {
    extensions = [
      "astro-build.astro-vscode"
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
      "bradlc.vscode-tailwindcss"
      "usernamehw.errorlens"
      "pflannery.vscode-versionlens"
      "heybourn.headwind"
      "Tobermory.es6-string-html"
      "unifiedjs.vscode-mdx"
      "kisstkondoros.vscode-gutter-preview"
      "ms-vscode.vscode-typescript-next"
      "YoavBls.pretty-ts-errors"
      "ultram4rine.vscode-choosealicense"
      "EditorConfig.EditorConfig"
      "aaron-bond.better-comments"
      "mrmlnc.vscode-duplicate"
      "ctcuff.font-preview"
      "miguelsolorio.fluent-icons"
      "codezombiech.gitignore"
      "GitHub.vscode-pull-request-github"
      "wix.vscode-import-cost"
      "ms-vscode.live-server"
      "zhuangtongfa.material-theme"
      "christian-kohler.path-intellisense"
      "YuTengjing.vscode-archive"
      "red-hat.vscode-yaml"
      "red-hat.vscode-xml"
      "yzhang.markdown-all-in-one"
    ];

    workspace = {
      onCreate = {
        pnpm-install = "pnpm i"
      };
    };

    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "pnpm" "run" "dev" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web"
        }
      }
    };
  };
}
