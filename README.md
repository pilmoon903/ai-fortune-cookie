Markdown

# 🥠 AI 행운의 포춘쿠키 (AI Fortune Cookie)

사용자에게 긍정적인 에너지를 주는 AI 기반 랜덤 운세 웹 서비스입니다.
AWS 클라우드 환경(EC2, RDS)을 직접 구축하여 배포한 프로젝트입니다.

## 🖥️ 프로젝트 소개
버튼을 클릭하면 데이터베이스에 저장된 다양한 행운의 메시지 중 하나를 랜덤으로 뽑아 사용자에게 보여줍니다.
심플하고 직관적인 UI를 제공하며, AWS 인프라를 활용하여 안정적인 서비스를 구현했습니다.

### 주요 기능
- **랜덤 운세 뽑기**: '포춘쿠키 열기' 버튼 클릭 시, 운세 DB에서 랜덤한 메시지를 추출하여 제공
- **반응형 웹 디자인**: 모바일과 PC 환경 모두에 최적화된 깔끔한 디자인
- **API 연동**: 프론트엔드와 백엔드 간의 REST API 통신

## 🛠️ 기술 스택 (Tech Stack)

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)

### Backend
- Node.js (v24.x)
- Express.js

### Database & Infrastructure
- **AWS EC2**: Ubuntu 기반의 웹 서버 호스팅
- **AWS RDS**: MySQL 기반의 관계형 데이터베이스 구축
- **MySQL**: 운세 데이터 관리 및 저장

## 🏗️ 시스템 아키텍처
[Client (Browser)] <---> [AWS EC2 (Node.js Web Server)] <---> [AWS RDS (MySQL Database)]


## 💾 데이터베이스 구조 (Database Schema)

**Table: `fortunes`**

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary Key (Auto Increment) |
| message| VARCHAR(255) | 운세 메시지 내용 |

## 🚀 실행 방법 (How to Run)

이 프로젝트를 로컬 환경에서 실행하려면 다음 단계가 필요합니다.

**1. 저장소 복제 (Clone)**
bash
git clone [https://github.com/본인아이디/ai-fortune-cookie.git](https://github.com/본인아이디/ai-fortune-cookie.git)
cd ai-fortune-cookie
2. 패키지 설치

Bash

npm install
3. 환경 변수 설정 (.env) 프로젝트 루트 경로에 .env 파일을 생성하고 다음 정보를 입력합니다.

Ini, TOML

PORT=4000
AWS_RDS_HOST=your-rds-endpoint.amazonaws.com
AWS_RDS_USERNAME=your-username
AWS_RDS_PASSWORD=your-password
AWS_RDS_DATABASE=test
4. 서버 실행

Bash

npm run start
브라우저에서 http://localhost:4000으로 접속하여 확인합니다.

👤 만든이
Role: PM & Developer

Contact: (이메일 주소 또는 블로그 링크 등을 적으세요)
