---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-audit/get-unifiedauditlogretentionpolicy
applicable: Office 365 Security & Compliance Center
title: Get-UnifiedAuditLogRetentionPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-UnifiedAuditLogRetentionPolicy

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-UnifiedAuditLogRetentionPolicy cmdlet to 

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UnifiedAuditLogRetentionPolicy
 [-Operation <String>]
 [-RecordType <AuditRecordType>]
 [-RetentionDuration <UnifiedAuditLogRetentionDuration>]
 [-UserId <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Operation
The Operations parameter filters the policy results by the operations that are specified in the policy. The available values for this parameter depend on the RecordType value. For a list of the available values for this parameter, see [Audited activities](https://go.microsoft.com/fwlink/p/?LinkId=708432).

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordType
The RecordType parameter filters the policy results by the record types that are defined in the policy. Valid values are:

- AeD

- AirInvestigation

- ApplicationAudit

- AzureActiveDirectory

- AzureActiveDirectoryAccountLogon

- AzureActiveDirectoryStsLogon

- CRM

- Campaign

- ComplianceDLPExchange

- ComplianceDLPSharePoint

- ComplianceDLPSharePointClassification

- ComplianceSupervisionExchange

- CustomerKeyServiceEncryption

- DLPEndpoint

- DataCenterSecurityCmdlet

- DataGovernance

- DataInsightsRestApiAudit

- Discovery

- ExchangeAdmin

- ExchangeAggregatedOperation

- ExchangeItem

- ExchangeItemAggregated

- ExchangeItemGroup

- HRSignal

- HygieneEvent

- InformationBarrierPolicyApplication

- InformationWorkerProtection

- Kaizala

- LabelExplorer

- MIPLabel

- MailSubmission

- MicrosoftFlow

- MicrosoftForms

- MicrosoftStream

- MicrosoftTeams

- MicrosoftTeamsAdmin

- MicrosoftTeamsAnalytics

- MicrosoftTeamsDevice

- MicrosoftTeamsShifts

- MipAutoLabelExchangeItem

- MipAutoLabelSharePointItem

- MipAutoLabelSharePointPolicyLocation

- OfficeNative

- OneDrive

- PowerAppsApp

- PowerAppsPlan

- PowerBIAudit

- Project

- Quarantine

- SecurityComplianceAlerts

- SecurityComplianceCenterEOPCmdlet

- SecurityComplianceInsights

- SharePoint

- SharePointCommentOperation

- SharePointContentTypeOperation

- SharePointFieldOperation

- SharePointFileOperation

- SharePointListItemOperation

- SharePointListOperation

- SharePointSharingOperation

- SkypeForBusinessCmdlets

- SkypeForBusinessPSTNUsage

- SkypeForBusinessUsersBlocked

- Sway

- SyntheticProbe

- TeamsHealthcare

- ThreatFinder

- ThreatIntelligence

- ThreatIntelligenceAtpContent

- ThreatIntelligenceUrl

- WorkplaceAnalytics

- Yammer

```yaml
Type: AuditRecordType
Parameter Sets: (All)
Aliases:
Accepted values: ExchangeAdmin, ExchangeItem, ExchangeItemGroup, SharePoint, SyntheticProbe, SharePointFileOperation, OneDrive, AzureActiveDirectory, AzureActiveDirectoryAccountLogon, DataCenterSecurityCmdlet, ComplianceDLPSharePoint, Sway, ComplianceDLPExchange, SharePointSharingOperation, AzureActiveDirectoryStsLogon, SkypeForBusinessPSTNUsage, SkypeForBusinessUsersBlocked, SecurityComplianceCenterEOPCmdlet, ExchangeAggregatedOperation, PowerBIAudit, CRM, Yammer, SkypeForBusinessCmdlets, Discovery, MicrosoftTeams, ThreatIntelligence, MailSubmission, MicrosoftFlow, AeD, MicrosoftStream, ComplianceDLPSharePointClassification, ThreatFinder, Project, SharePointListOperation, SharePointCommentOperation, DataGovernance, Kaizala, SecurityComplianceAlerts, ThreatIntelligenceUrl, SecurityComplianceInsights, MIPLabel, WorkplaceAnalytics, PowerAppsApp, PowerAppsPlan, ThreatIntelligenceAtpContent, LabelExplorer, TeamsHealthcare, ExchangeItemAggregated, HygieneEvent, DataInsightsRestApiAudit, InformationBarrierPolicyApplication, SharePointListItemOperation, SharePointContentTypeOperation, SharePointFieldOperation, MicrosoftTeamsAdmin, HRSignal, MicrosoftTeamsDevice, MicrosoftTeamsAnalytics, InformationWorkerProtection, Campaign, DLPEndpoint, AirInvestigation, Quarantine, MicrosoftForms, ApplicationAudit, ComplianceSupervisionExchange, CustomerKeyServiceEncryption, OfficeNative, MipAutoLabelSharePointItem, MipAutoLabelSharePointPolicyLocation, MicrosoftTeamsShifts, MipAutoLabelExchangeItem
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionDuration
The RetentionDuration parameter filters the policy results by the retention duration specified in the policy. Valid values are:

- ThreeMonths

- SixMonths

- NineMonths

- TwelveMonths

```yaml
Type: UnifiedAuditLogRetentionDuration
Parameter Sets: (All)
Aliases:
Accepted values: ThreeMonths, SixMonths, NineMonths, TwelveMonths
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserId
The UserIds parameter filters the policy results by the ID of the users who are specified in the policy.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
