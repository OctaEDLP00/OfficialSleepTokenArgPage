{ pkgs, ... }: {
  channel = "stable-24.11";

  packages = [ pkgs.nodejs_23 pkgs.corepack_22 ];
  env = {};
  idx = {
    extensions = [
      "marcoq.vscode-typescript-to-json-schema"
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
      "yzhang.markdown-all-in-one"
      "redhat.vscode-xml"
      "redhat.vscode-yaml"
      "christian-kohler.npm-intellisense"
      "eamodio.gitlens"
    ];

    workspace = {
      onCreate = {
        install = ''pnpm i'';
      };
    };

    previews = {
      enable = true;
      previews = {
        web = {
          command =
            [ "pnpm" "run" "dev" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
