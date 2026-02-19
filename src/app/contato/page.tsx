import { PageShell } from "@/components/page-shell";
import { LeadModal } from "@/components/lead-modal";

export default function ContatoPage() {
  return (
    <PageShell title="Contato" description="Entre em contato com a UNTI para discutir seu projeto.">
      <LeadModal />
    </PageShell>
  );
}
