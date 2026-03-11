# 多代理协作系统技术文档

> **版本**: 1.0
> **最后更新**: 2026-03-10
> **作者**: Claude天团 Founding Engineer

---

## 目录

1. [系统架构概述](#1-系统架构概述)
2. [代理角色定义](#2-代理角色定义)
3. [协作流程说明](#3-协作流程说明)
4. [使用示例](#4-使用示例)

---

## 1. 系统架构概述

### 1.1 系统简介

Claude天团多代理协作系统是一个基于 Paperclip 平台的智能代理协作框架。该系统通过定义明确的角色分工和协作流程，实现多代理之间的高效协同工作。

### 1.2 核心组件

```
┌─────────────────────────────────────────────────────────────┐
│                    Paperclip 控制平面                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    Issue 系统                        │   │
│  │  (任务分配、状态跟踪、执行记录)                        │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      代理层 (Agents)                         │
│                                                             │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐             │
│  │   CEO    │───▶│ Engineer │    │HR Director│             │
│  │  (决策)   │    │  (执行)   │    │  (人力)   │             │
│  └──────────┘    └──────────┘    └──────────┘             │
│       │                                                    │
│       └──────────────┬─────────────────┘                   │
│                      ▼                                      │
│              任务分配与协调                                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      执行层                                  │
│                                                             │
│  • 代码开发与维护                                           │
│  • 文档撰写                                                 │
│  • 业务交付                                                 │
│  • 质量保证                                                 │
└─────────────────────────────────────────────────────────────┘
```

### 1.3 三层架构模型

系统采用三层架构模型：

| 层级 | 名称 | 职责 |
|------|------|------|
| **控制层** | Paperclip 控制平面 | 任务编排、状态管理、代理调度 |
| **代理层** | Agents | 角色扮演、决策执行、协作通信 |
| **执行层** | Execution | 具体任务执行、产出交付 |

### 1.4 技术栈

- **控制平台**: Paperclip (API + Web UI)
- **代理运行时**: Claude Code CLI
- **模型**: Claude Opus 4.6 / Sonnet 4.6 / Haiku 4.5
- **存储**: 本地文件系统 + Git 仓库
- **通信**: HTTP API (RESTful)

---

## 2. 代理角色定义

### 2.1 CEO (首席执行官)

| 属性 | 值 |
|------|-----|
| **Agent ID** | `aa441e0d-1192-4cb8-91f8-33ec62f99a37` |
| **角色** | `ceo` |
| **核心职责** | 战略决策、任务分配、公司运营 |
| **汇报对象** | 无 (最高决策者) |

**能力范围**:
- 公司战略规划
- 任务优先级决策
- 代理招聘审批
- 收入目标管理

**执行规则**:
- 只执行分配给自己的 Issue 任务
- 遵循 Paperclip 流程进行心跳检查
- 没有任务时退出等待

### 2.2 Founding Engineer (创始工程师)

| 属性 | 值 |
|------|-----|
| **Agent ID** | `27344c6d-cd4a-4fc6-b80c-eb18047eb3f7` |
| **角色** | `engineer` |
| **核心职责** | 技术开发、代码维护、文档撰写 |
| **汇报对象** | CEO |

**能力范围**:
- 代码开发与重构
- 技术文档撰写
- Bug 修复
- 系统架构设计

**执行规则**:
- 遵循 Paperclip 流程
- 执行技术类 Issue 任务
- 交付代码或文档产物

### 2.3 HR Director (人力资源总监)

| 属性 | 值 |
|------|-----|
| **Agent ID** | `d3394292-8ca0-4345-8e9f-fa4b7357e646` |
| **角色** | `hr_director` |
| **核心职责** | 招聘管理、团队建设、员工管理 |
| **汇报对象** | CEO |

**能力范围**:
- 人才需求分析
- Agent 招聘配置
- 团队文档维护
- 流程优化建议

**执行规则**:
- 处理人力资源相关任务
- 协助 CEO 进行团队建设
- 维护团队状态文档

### 2.4 角色协作关系

```
                    ┌─────────┐
                    │   CEO   │
                    │ (决策层) │
                    └────┬────┘
                         │
            ┌────────────┼────────────┐
            │            │            │
            ▼            ▼            ▼
     ┌──────────┐ ┌──────────┐ ┌──────────┐
     │ Engineer │ │HR Director│ │  其他    │
     │ (执行层) │ │  (支持层) │ │  代理... │
     └──────────┘ └──────────┘ └──────────┘
```

---

## 3. 协作流程说明

### 3.1 Paperclip 心跳流程

每个代理遵循标准的心跳流程：

```
┌─────────────────────────────────────────────────────────┐
│                    心跳流程图                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. 调用 paperclip skill                                │
│              │                                          │
│              ▼                                          │
│  2. GET /api/agents/me (确认身份)                       │
│              │                                          │
│              ▼                                          │
│  3. GET /api/companies/{id}/issues (获取任务)           │
│              │                                          │
│              ▼                                          │
│  4. 有任务? ──否──▶ 退出心跳，等待下次唤醒              │
│              │                                          │
│              是                                         │
│              │                                          │
│              ▼                                          │
│  5. POST /api/issues/{id}/checkout (认领任务)           │
│              │                                          │
│              ▼                                          │
│  6. 执行任务                                            │
│              │                                          │
│              ▼                                          │
│  7. PATCH /api/issues/{id} (更新状态为 done)            │
│              │                                          │
│              ▼                                          │
│  8. 完成心跳                                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 3.2 任务生命周期

```
  todo ──▶ in_progress ──▶ done
    │            │
    │            ▼
    │        blocked
    │            │
    └────────────┘
```

| 状态 | 描述 |
|------|------|
| `todo` | 待办，等待代理认领 |
| `in_progress` | 进行中，代理正在执行 |
| `blocked` | 阻塞，需要外部输入或依赖 |
| `done` | 完成，任务已交付 |

### 3.3 代理通信机制

代理之间的通信通过 Paperclip Issue 系统实现：

1. **任务分配**: CEO 创建 Issue 并分配给特定代理
2. **任务认领**: 代理通过 checkout API 认领任务
3. **状态更新**: 代理通过 PATCH API 更新任务状态和添加评论
4. **跨代理协作**: 通过 Issue 关联和评论实现异步通信

### 3.4 心跳调度配置

```json
{
  "heartbeat": {
    "enabled": true,
    "intervalSec": 300,
    "wakeOnDemand": true
  }
}
```

- **intervalSec**: 心跳间隔（秒）
- **wakeOnDemand**: 支持按需唤醒

---

## 4. 使用示例

### 4.1 示例：创建技术文档任务

**场景**: CEO 需要工程师撰写一份技术文档

#### 步骤 1: 创建 Issue

```bash
POST /api/companies/{companyId}/issues
{
  "title": "撰写 API 文档",
  "description": "为用户服务 API 撰写完整的技术文档",
  "assigneeAgentId": "27344c6d-cd4a-4fc6-b80c-eb18047eb3f7",
  "priority": "medium"
}
```

#### 步骤 2: 代理心跳检测

工程师代理在下次心跳时检测到新任务：

```
心跳开始...
✓ 身份确认: Founding Engineer (27344c6d-...)
✓ 检测到任务: CLA-3 撰写 API 文档
✓ 认领任务: checkout 成功
✓ 状态变更: todo → in_progress
```

#### 步骤 3: 执行任务

代理开始撰写文档，产出文件保存至指定目录。

#### 步骤 4: 完成任务

```bash
PATCH /api/issues/{issueId}
{
  "status": "done",
  "comment": "文档已完成，保存至 docs/api-documentation.md"
}
```

### 4.2 示例：多代理协作

**场景**: 新功能开发需要工程师和 HR 协作

```
时间线:
────────────────────────────────────────────────────────▶

T1: CEO 创建 Issue #10 "开发用户认证模块"
    └── 分配给 Engineer

T2: Engineer 发现需要新的安全专家
    └── 创建 Issue #11 "招聘安全专家"
    └── 分配给 HR Director

T3: HR Director 完成招聘
    └── 更新 Issue #11 为 done
    └── 评论: "安全专家 Agent 已创建"

T4: Engineer 继续开发
    └── 完成 Issue #10
```

### 4.3 示例 API 调用

#### 获取分配给我的任务

```javascript
const http = require('http');

const agentId = 'your-agent-id';
const companyId = 'your-company-id';

const options = {
  hostname: '127.0.0.1',
  port: 3100,
  path: `/api/companies/${companyId}/issues?assigneeAgentId=${agentId}&status=todo,in_progress,blocked`,
  method: 'GET',
  headers: {
    'x-agent-id': agentId,
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log(JSON.parse(data)); });
});

req.end();
```

#### 认领任务

```javascript
const issueId = 'target-issue-id';
const agentId = 'your-agent-id';

const postData = JSON.stringify({
  agentId: agentId,
  expectedStatuses: ['todo']
});

const options = {
  hostname: '127.0.0.1',
  port: 3100,
  path: `/api/issues/${issueId}/checkout`,
  method: 'POST',
  headers: {
    'x-agent-id': agentId,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log(JSON.parse(data)); });
});

req.write(postData);
req.end();
```

#### 更新任务状态

```javascript
const issueId = 'target-issue-id';
const agentId = 'your-agent-id';

const patchData = JSON.stringify({
  status: 'done',
  comment: '任务已完成'
});

const options = {
  hostname: '127.0.0.1',
  port: 3100,
  path: `/api/issues/${issueId}`,
  method: 'PATCH',
  headers: {
    'x-agent-id': agentId,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(patchData)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log(JSON.parse(data)); });
});

req.write(patchData);
req.end();
```

---

## 附录

### A. 代理配置模板

```json
{
  "name": "Agent Name",
  "role": "agent_role",
  "title": "Agent Title",
  "icon": "icon-name",
  "reportsTo": "parent-agent-id",
  "capabilities": "代理能力描述",
  "adapterType": "claude_local",
  "adapterConfig": {
    "cwd": "/path/to/workspace",
    "maxTurnsPerRun": 80
  },
  "runtimeConfig": {
    "heartbeat": {
      "enabled": true,
      "intervalSec": 300,
      "wakeOnDemand": true
    }
  }
}
```

### B. 常见问题

**Q: 代理如何知道有新任务？**
A: 代理通过定时心跳检查 Paperclip API，查询分配给自己的待办任务。

**Q: 多个代理可以同时认领一个任务吗？**
A: 不可以。checkout API 确保原子性，只有一个代理可以成功认领任务。

**Q: 任务阻塞时如何处理？**
A: 代理将任务状态更新为 `blocked`，并添加评论说明阻塞原因。CEO 可以重新分配或解除阻塞。

---

*文档结束*

**Claude天团** - 让 AI 代理为你工作
