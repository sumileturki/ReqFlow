-- AddEmailToWorkspaceInvite
ALTER TABLE "public"."WorkspaceInvite" ADD COLUMN "email" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "WorkspaceInvite_workspaceId_email_key" ON "public"."WorkspaceInvite"("workspaceId", "email");
