import { DatabaseModule } from '@/infra/database/database.module'
import { AuthenticateControler } from '@/infra/http/controllers/authenticate.controller'
import { CreateAccountControler } from '@/infra/http/controllers/create-account.controller'
import { CreateQuestionControler } from '@/infra/http/controllers/create-question.controller'
import { FetchRecentQuestionsControler } from '@/infra/http/controllers/fetch-recent-questions.controller'
import { Module } from '@nestjs/common'

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountControler,
    AuthenticateControler,
    CreateQuestionControler,
    FetchRecentQuestionsControler,
  ],
})
export class HttpModule {}
