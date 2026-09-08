# Agent notes

## 首页友情链接

修改 `src/pages/index.astro` 的「友情链接」或「文档」卡片时，遵循项目规则：

- Cursor：`.cursor/rules/friendship-links.mdc`
- 要点：与文档区共用 `sm:grid-cols-3`；统一高度图标槽（如 `h-28` + padding 居中）；可用 `imgClass` 单独放大 logo，但不得打乱标题基线对齐
