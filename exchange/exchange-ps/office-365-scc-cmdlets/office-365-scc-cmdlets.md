---
title: "Office 365 Security &amp; Compliance Center cmdlets"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 6/30/2017
ms.audience: Admin
ms.topic: article
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: cfe2ace8-159e-461c-ad8a-8574194fd1be
description: "Learn about the cmdlets that are available in Office 365 Security &amp; Compliance Center PowerShell."
---

# Office 365 Security &amp; Compliance Center cmdlets

This topic lists the cmdlets that are available in Office 365 Security &amp; Compliance Center PowerShell. To connect to Security &amp; Compliance Center PowerShell, see [Connect to Office 365 Security &amp; Compliance Center PowerShell](../connect-to-office-365-scc-powershell/connect-to-office-365-scc-powershell.md).
  
## Auditing cmdlets

[Get-ActivityAlert](get-activityalert.md)
  
[New-ActivityAlert](new-activityalert.md)
  
[Remove-ActivityAlert](remove-activityalert.md)
  
[Set-ActivityAlert](set-activityalert.md)
  
> [!NOTE]
> The **Search-AdminAuditLog**, **Get-AdminAuditLogConfig**, and **New-AdminAuditLogSearch** cmdlets are available, but aren't supported.
  
## Content search cmdlets

[Get-ComplianceSearch](get-compliancesearch.md)
  
[New-ComplianceSearch](new-compliancesearch.md)
  
[Remove-ComplianceSearch](remove-compliancesearch.md)
  
[Set-ComplianceSearch](set-compliancesearch.md)
  
[Start-ComplianceSearch](start-compliancesearch.md)
  
[Stop-ComplianceSearch](stop-compliancesearch.md)
  
[Get-ComplianceSearchAction](get-compliancesearchaction.md)
  
[New-ComplianceSearchAction](new-compliancesearchaction.md)
  
[Remove-ComplianceSearchAction](remove-compliancesearchaction.md)
  
[Get-ComplianceSecurityFilter](get-compliancesecurityfilter.md)
  
[New-ComplianceSecurityFilter](new-compliancesecurityfilter.md)
  
[Remove-ComplianceSecurityFilter](remove-compliancesecurityfilter.md)
  
[Set-ComplianceSecurityFilter](set-compliancesecurityfilter.md)
  
## Data loss prevention (DLP) cmdlets

[Get-DlpCompliancePolicy](get-dlpcompliancepolicy.md)
  
[New-DlpCompliancePolicy](new-dlpcompliancepolicy.md)
  
[Remove-DlpCompliancePolicy](remove-dlpcompliancepolicy.md)
  
[Set-DlpCompliancePolicy](set-dlpcompliancepolicy.md)
  
[Get-DlpComplianceRule](get-dlpcompliancerule.md)
  
[New-DlpComplianceRule](new-dlpcompliancerule.md)
  
[Remove-DlpComplianceRule](remove-dlpcompliancerule.md)
  
[Set-DlpComplianceRule](set-dlpcompliancerule.md)
  
[Get-DlpSensitiveInformationType](get-dlpsensitiveinformationtype.md)
  
[Get-DlpSensitiveInformationTypeRulePackage](get-dlpsensitiveinformationtyperulepackage.md)
  
[New-DlpSensitiveInformationTypeRulePackage](new-dlpsensitiveinformationtyperulepackage.md)
  
[Remove-DlpSensitiveInformationTypeRulePackage](remove-dlpsensitiveinformationtyperulepackage.md)
  
[Set-DlpSensitiveInformationTypeRulePackage](set-dlpsensitiveinformationtyperulepackage.md)
  
## eDiscovery case cmdlets

[Get-CaseHoldPolicy](get-caseholdpolicy.md)
  
[New-CaseHoldPolicy](new-caseholdpolicy.md)
  
[Remove-CaseHoldPolicy](remove-caseholdpolicy.md)
  
[Set-CaseHoldPolicy](set-caseholdpolicy.md)
  
[Get-CaseHoldRule](get-caseholdrule.md)
  
[New-CaseHoldRule](new-caseholdrule.md)
  
[Remove-CaseHoldRule](remove-caseholdrule.md)
  
[Set-CaseHoldRule](set-caseholdrule.md)
  
[Get-ComplianceCase](get-compliancecase.md)
  
[New-ComplianceCase](new-compliancecase.md)
  
[Remove-ComplianceCase](remove-compliancecase.md)
  
[Set-ComplianceCase](set-compliancecase.md)
  
[Add-ComplianceCaseMember](add-compliancecasemember.md)
  
[Get-ComplianceCaseMember](get-compliancecasemember.md)
  
[Remove-ComplianceCaseMember](remove-compliancecasemember.md)
  
[Update-ComplianceCaseMember](update-compliancecasemember.md)
  
[Add-eDiscoveryCaseAdmin](add-ediscoverycaseadmin.md)
  
[Get-eDiscoveryCaseAdmin](get-ediscoverycaseadmin.md)
  
[Remove-eDiscoveryCaseAdmin](remove-ediscoverycaseadmin.md)
  
[Update-eDiscoveryCaseAdmin](update-ediscoverycaseadmin.md)
  
## Retention policy cmdlets

> [!NOTE]
> The **\*-HoldCompliance\*** cmdlets have been replaced by the **\*-RetentionCompliance\*** cmdlets.
  
[Get-ComplianceTag](get-compliancetag.md)
  
[New-ComplianceTag](new-compliancetag.md)
  
[Remove-ComplianceTag](remove-compliancetag.md)
  
[Set-ComplianceTag](set-compliancetag.md)
  
[Enable-ComplianceTagStorage](enable-compliancetagstorage.md)
  
[Get-ComplianceTagStorage](get-compliancetagstorage.md)
  
[Get-RetentionCompliancePolicy](get-retentioncompliancepolicy.md)
  
[New-RetentionCompliancePolicy](new-retentioncompliancepolicy.md)
  
[Remove-RetentionCompliancePolicy](remove-retentioncompliancepolicy.md)
  
[Set-RetentionCompliancePolicy](set-retentioncompliancepolicy.md)
  
[Get-RetentionComplianceRule](get-retentioncompliancerule.md)
  
[New-RetentionComplianceRule](new-retentioncompliancerule.md)
  
[Remove-RetentionComplianceRule](remove-retentioncompliancerule.md)
  
[Set-RetentionComplianceRule](set-retentioncompliancerule.md)
  
## Security and permissions cmdlets

[Get-ManagementRole](get-managementrole.md)
  
[Get-RoleGroup](get-rolegroup.md)
  
[New-RoleGroup](new-rolegroup.md)
  
[Remove-RoleGroup](remove-rolegroup.md)
  
[Set-RoleGroup](set-rolegroup.md)
  
[Add-RoleGroupMember](add-rolegroupmember.md)
  
[Get-RoleGroupMember](get-rolegroupmember.md)
  
[Remove-RoleGroupMember](remove-rolegroupmember.md)
  
[Update-RoleGroupMember](update-rolegroupmember.md)
  
## Supervision cmdlets

[Get-SupervisoryReviewPolicyV2](get-supervisoryreviewpolicyv2.md)
  
[New-SupervisoryReviewPolicyV2](new-supervisoryreviewpolicyv2.md)
  
[Remove-SupervisoryReviewPolicyV2](remove-supervisoryreviewpolicyv2.md)
  
[Set-SupervisoryReviewPolicyV2](set-supervisoryreviewpolicyv2.md)
  
[Get-SupervisoryReviewRule](get-supervisoryreviewrule.md)
  
[New-SupervisoryReviewRule](new-supervisoryreviewrule.md)
  
[Set-SupervisoryReviewRule](set-supervisoryreviewrule.md)
  
[Get-SupervisoryReviewReport](get-supervisoryreviewreport.md)
  
[Get-SupervisoryReviewPolicyReport](get-supervisoryreviewpolicyreport.md)
  
## User and group cmdlets

[Get-Group](get-group.md)
  
[Get-Recipient](get-recipient.md)
  
[Get-SecurityPrincipal](get-securityprincipal.md)
  
[Get-User](get-user.md)
  

