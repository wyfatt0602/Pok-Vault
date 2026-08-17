PokéVault Android Mobile / Tablet v13 — Supabase Cloud Edition
===============================================================

功能：
- Supabase Email/Password 登录
- 手机、平板、电脑共用同一份云端卡牌资料
- SLAB 大分类：PSA / CGC / CCIC / TAG / BGS / SGC / ACE / Other
- Raw Card / SLAB / ETB 以及未来自定义分类
- 搜索、分类、卖出、编辑、删除
- 图片上传（客户端压缩后存入 cards.image，跨设备同步）
- 成本、库存估值、净收入、未实现利润、持有天数
- JSON 备份 / 恢复
- PWA，可添加到 Android 主屏幕

本版本使用 Supabase Publishable Key；不要把 Secret Key 放进前端或 APK。

使用前：
1. 在 Supabase SQL Editor 运行同目录的 supabase_migration_v13.sql。
2. 确认 Authentication 用户已经建立。
3. 用你的邮箱密码登录 PokéVault。
