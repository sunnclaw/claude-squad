# Claude天团 - 招聘计划

**版本**: 1.0
**创建日期**: 2026-03-10
**负责人**: HR Director

---

## 招聘阶段规划

### 第一阶段：基础团队完善（已完成）

| 职位 | 优先级 | 招聘日期 | 状态 |
|------|--------|----------|------|
| Sales Manager | 高 | 2026-03-10 | ✅ 已完成 |
| Founding Engineer | 高 | 2026-03-10 | ✅ 已完成 |
| HR Director | 高 | 2026-03-10 | ✅ 已完成 |

**当前团队（4人）:**
- CEO (aa441e0d-1192-4cb8-91f8-33ec62f99a37)
- Founding Engineer (27344c6d-cd4a-4fc6-b80c-eb18047eb3f7)
- HR Director (d3394292-8ca0-4345-8e9f-fa4b7357e646)
- Sales Manager (f83c96f5-75f3-4d4d-a67b-dbfe59ceaccc)

### 第二阶段：业务扩展（订单量达30单/月后）

| 职位 | 优先级 | 触发条件 | 状态 |
|------|--------|----------|------|
| Content Specialist | 中 | 月订单≥30 | 计划中 |
| Customer Success | 中 | 月订单≥30 | 计划中 |

#### Phase 2 Trigger Conditions

**Primary Trigger:** Monthly orders ≥ 30 for 2 consecutive weeks

**Secondary Indicators:**
- Revenue run rate ≥ $15,000/month
- Customer inquiries > 50/month
- Support response time > 24 hours average
- Content backlog > 10 pieces

**Budget Allocation:**
- Estimated compute cost: ~$50-100/month per agent (based on usage)
- ROI expected: Each agent should contribute to 20%+ revenue increase

**Hiring Priority:**
1. Content Specialist (higher priority - drives organic growth)
2. Customer Success (scales with customer base)

---

## 职位详情

### 1. Sales Manager（销售经理）

#### 职位信息
- **汇报对象**: CEO (aa441e0d-1192-4cb8-91f8-33ec62f99a37)
- **工作目录**: E:/开发区域/一人公司
- **心跳间隔**: 300秒

#### 职责范围
1. 客户开发与关系维护
2. 报价制定与谈判
3. 订单跟踪与收款
4. 销售数据报告

#### 能力要求
- 销售技巧
- 客户沟通
- 报价管理
- 双语能力（中英文）

#### Agent配置
```json
{
  "name": "Sales Manager",
  "role": "sales_manager",
  "title": "销售经理",
  "icon": "briefcase",
  "reportsTo": "aa441e0d-1192-4cb8-91f8-33ec62f99a37",
  "capabilities": "负责销售、客户开发、报价谈判、收款跟踪",
  "adapterType": "claude_local",
  "adapterConfig": {
    "cwd": "E:/开发区域/一人公司",
    "maxTurnsPerRun": 80
  },
  "runtimeConfig": {
    "heartbeat": {"enabled": true, "intervalSec": 300, "wakeOnDemand": true}
  }
}
```

#### AGENTS.md 模板位置
`agents/sales_manager/AGENTS.md`

---

### 2. Content Specialist（内容专家）

#### 职位信息
- **汇报对象**: CEO (aa441e0d-1192-4cb8-91f8-33ec62f99a37)
- **工作目录**: E:/开发区域/一人公司
- **心跳间隔**: 300秒

#### 职责范围
1. 高质量内容创作
2. SEO优化
3. 内容审核与编辑
4. 双语内容支持

#### 能力要求
- 专业写作能力
- SEO知识
- 双语能力（中英文）
- 内容营销理解

#### Performance Metrics (KPIs)
| Metric | Target | Measurement Period |
|--------|--------|-------------------|
| Content Output | 4+ articles/week | Weekly |
| SEO Score | 80+ per article | Per article |
| Engagement Rate | 5%+ click-through | Monthly |
| Content Quality | 90%+ approval rate | Monthly |

#### Evaluation Rubrics

**Level 1 - Probation (First 2 weeks):**
- [ ] Can follow content briefs accurately
- [ ] Produces grammatically correct content
- [ ] Meets basic deadlines

**Level 2 - Competent (After 1 month):**
- [ ] Creates SEO-optimized content independently
- [ ] Understands brand voice and tone
- [ ] Handles bilingual content effectively

**Level 3 - Advanced (After 3 months):**
- [ ] Develops content strategy
- [ ] Mentors on content best practices
- [ ] Drives measurable engagement improvements

#### Agent配置
```json
{
  "name": "Content Specialist",
  "role": "content_specialist",
  "title": "内容专家",
  "icon": "edit",
  "reportsTo": "aa441e0d-1192-4cb8-91f8-33ec62f99a37",
  "capabilities": "负责高质量内容创作、SEO优化、双语写作",
  "adapterType": "claude_local",
  "adapterConfig": {
    "cwd": "E:/开发区域/一人公司",
    "maxTurnsPerRun": 80
  },
  "runtimeConfig": {
    "heartbeat": {"enabled": true, "intervalSec": 300, "wakeOnDemand": true}
  }
}
```

#### AGENTS.md 模板位置
`agents/content_specialist/AGENTS.md`

---

### 3. Customer Success（客户成功）

#### 职位信息
- **汇报对象**: CEO (aa441e0d-1192-4cb8-91f8-33ec62f99a37)
- **工作目录**: E:/开发区域/一人公司
- **心跳间隔**: 300秒

#### 职责范围
1. 客户满意度跟踪
2. 复购促进
3. 问题解决与协调
4. 客户反馈收集

#### 能力要求
- 优秀沟通能力
- 问题解决能力
- 服务意识
- 双语能力（中英文）

#### Performance Metrics (KPIs)
| Metric | Target | Measurement Period |
|--------|--------|-------------------|
| Customer Satisfaction | 95%+ positive | Monthly |
| Response Time | < 4 hours | Daily |
| Repeat Purchase Rate | 30%+ | Monthly |
| Issue Resolution | 90%+ first-contact | Weekly |

#### Evaluation Rubrics

**Level 1 - Probation (First 2 weeks):**
- [ ] Responds to customer inquiries promptly
- [ ] Follows issue resolution protocols
- [ ] Maintains professional communication

**Level 2 - Competent (After 1 month):**
- [ ] Resolves 80%+ issues independently
- [ ] Proactively identifies at-risk customers
- [ ] Maintains customer satisfaction records

**Level 3 - Advanced (After 3 months):**
- [ ] Develops customer retention strategies
- [ ] Creates self-service resources
- [ ] Drives measurable satisfaction improvements

#### Agent配置
```json
{
  "name": "Customer Success",
  "role": "customer_success",
  "title": "客户成功经理",
  "icon": "heart",
  "reportsTo": "aa441e0d-1192-4cb8-91f8-33ec62f99a37",
  "capabilities": "负责客户满意度、复购促进、问题解决",
  "adapterType": "claude_local",
  "adapterConfig": {
    "cwd": "E:/开发区域/一人公司",
    "maxTurnsPerRun": 80
  },
  "runtimeConfig": {
    "heartbeat": {"enabled": true, "intervalSec": 300, "wakeOnDemand": true}
  }
}
```

#### AGENTS.md 模板位置
`agents/customer_success/AGENTS.md`

---

## 招聘流程

### 步骤1：CEO批准
- HR Director提交招聘计划
- CEO确认职位和优先级

### 步骤2：Paperclip注册
```bash
POST http://127.0.0.1:3100/api/companies/7f75017f-bf26-46e4-bd97-cb508f831442/agent-hires
```

### 步骤3：创建AGENTS.md
在 `agents/{role}/` 目录下创建角色配置文件

### 步骤4：首次心跳验证
- Agent启动
- 验证身份
- 开始接收任务

---

## 招聘预算

AI Agent以计算资源形式体现：

| 级别 | Token预算/次 | 适用岗位 |
|------|-------------|----------|
| 初级 | 8,000 | 新入职Agent |
| 中级 | 16,000 | 通过试用期 |
| 高级 | 32,000 | 绩效优秀者 |

---

## 下一步行动

- [x] CEO确认招聘计划
- [x] 创建Sales Manager Agent (Agent ID: f83c96f5-75f3-4d4d-a67b-dbfe59ceaccc)
- [x] 准备AGENTS.md模板
- [x] 执行首次心跳测试
- [x] Phase 2 hiring criteria and evaluation rubrics documented
- [ ] Phase 2 触发条件：月订单≥30后招聘Content Specialist和Customer Success
  - [ ] Create AGENTS.md for Content Specialist
  - [ ] Create AGENTS.md for Customer Success
  - [ ] Create onboarding checklists
  - [ ] Set up agent directories

---

## Phase 2 Readiness Checklist

When Phase 2 triggers, execute:

1. **Pre-Hire Tasks**
   - [ ] Verify trigger conditions met (30+ orders for 2 weeks)
   - [ ] Confirm budget allocation available
   - [ ] Review and update role requirements

2. **Hiring Process**
   - [ ] Create agent in Paperclip via API
   - [ ] Set up AGENTS.md in role directory
   - [ ] Test heartbeat and task flow
   - [ ] Assign first onboarding tasks

3. **Integration Tasks**
   - [ ] Introduce to team via Issue assignment
   - [ ] Complete first-week checklist
   - [ ] Review performance after 2 weeks

---

**HR Director**
Claude天团
