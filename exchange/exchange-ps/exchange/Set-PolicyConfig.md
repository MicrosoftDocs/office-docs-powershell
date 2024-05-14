---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-policyconfig
applicable: Security & Compliance
title: Set-PolicyConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-PolicyConfig

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-PolicyConfig cmdlet to modify the endpoint restrictions that are configured in the organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-PolicyConfig [[-Identity] <OrganizationIdParameter>]
 [-CaseHoldPolicyLimit <Int32>]
 [-ClassificationScheme <ClassificationScheme>]
 [-ComplianceUrl <String>]
 [-Confirm]
 [-DlpAppGroups <PswsHashtable[]>]
 [-DlpAppGroupsPsws <PswsHashtable[]>]
 [-DlpNetworkShareGroups <PswsHashtable>]
 [-DlpPrinterGroups <PswsHashtable>]
 [-DlpRemovableMediaGroups <PswsHashtable>]
 [-DocumentIsUnsupportedSeverity <RuleSeverity>]
 [-EnableAdvancedRuleBuilder <Boolean>]
 [-EnableLabelCoauth <Boolean>]
 [-EnableSpoAipMigration <Boolean>]
 [-EndpointDlpGlobalSettings <PswsHashtable[]>]
 [-EndpointDlpGlobalSettingsPsws <PswsHashtable[]>]
 [-ExtendTeamsDlpPoliciesToSharePointOneDrive <Boolean>]
 [-InformationBarrierMode <InformationBarrierMode>]
 [-InformationBarrierPeopleSearchRestriction <InformationBarrierPeopleSearchRestriction>]
 [-IsDlpSimulationOptedIn <Boolean>]
 [-OnPremisesWorkload <Workload>]
 [-ProcessingLimitExceededSeverity <RuleSeverity>]
 [-PurviewLabelConsent <Boolean>]
 [-ReservedForFutureUse <Boolean>]
 [-RetentionForwardCrawl <Boolean>]
 [-RuleErrorAction <PolicyRuleErrorAction>]
 [-SenderAddressLocation <PolicySenderAddressLocation>]
 [-SiteGroups <PswsHashtable[]>]
 [-SiteGroupsPsws <PswsHashtable[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity
You don't need to use this parameter. The only endpoint restrictions object in the organization is named Settings.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -CaseHoldPolicyLimit
{{ Fill CaseHoldPolicyLimit Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClassificationScheme
{{ Fill ClassificationScheme Description }}

```yaml
Type: ClassificationScheme
Parameter Sets: (All)
Aliases:
Accepted values: Default, V0_AggregatedOnly, V1_DetailedResults
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComplianceUrl
{{ Fill ComplianceUrl Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpAppGroups
{{ Fill DlpAppGroups Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpAppGroupsPsws
{{ Fill DlpAppGroupsPsws Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpNetworkShareGroups
{{ Fill DlpNetworkShareGroups Description }}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpPrinterGroups
{{ Fill DlpPrinterGroups Description }}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpRemovableMediaGroups
{{ Fill DlpRemovableMediaGroups Description }}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsUnsupportedSeverity
{{ Fill DocumentIsUnsupportedSeverity Description }}

```yaml
Type: RuleSeverity
Parameter Sets: (All)
Aliases:
Accepted values: Low, Medium, High, None, Informational, Information
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAdvancedRuleBuilder
{{ Fill EnableAdvancedRuleBuilder Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableLabelCoauth
The EnableLabelCoauth parameter enables or disables co-authoring support in Office desktop apps for the entire organization. Valid value are:

- $true: Co-authoring support in Office desktop apps is enabled. When documents are labeled and encrypted by sensitivity labels, multiple users can edit these documents at the same time. Labeling information for unencrypted files is no longer saved in custom properties. Don't enable co-authoring if you use any apps, services, scripts, or tools that read or write labeling metadata to the old location.
- $false: Co-authoring support in Office desktop apps is disabled.

Disabling co-authoring support in Office desktop apps in the organization has the following consequences:

- For apps and services that support the new labeling metadata, they now revert to the original metadata format and location when labels are read or saved.
- The new metadata format and location for Office documents that was used while the setting was enabled will not be copied to the original format and location. As a result, this labeling information for unencrypted Word, Excel, and PowerPoint files will be lost.
- Co-authoring and AutoSave no longer work in your organization for labeled and encrypted documents.
- Sensitivity labels remain enabled for Office files in OneDrive and SharePoint.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSpoAipMigration
The EnableSpoAipMigration parameter enables or disables built-in labeling for supported Office files in SharePoint and OneDrive. Valid values are:

- $true: Users can apply your sensitivity labels in Office for the web. Users will see the Sensitivity button on the ribbon so they can apply labels, and see any applied label name on the status bar.
- $false: Users can't apply your sensitivity labels in Office for the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndpointDlpGlobalSettings
The EndpointDlpGlobalSettings parameter specifies the global endpoints. This parameter uses the following syntax: `@(@{"Setting"="<Setting>"; "Value"="<Value>}",@{"Setting"="<Setting>"; "Value"="<Value>"},...)`.

The value of `<Setting>` is one of the supported values.

Example values:

- `@{"Setting"="PathExclusion"; "Value"="C:\Windows";}`
- `@{"Setting"="PathExclusion"; "Value"="%AppData%\Mozilla";}`
- `@{"Setting"="PathExclusion"; "Value"="C:\Users\*\Desktop";}`
- `@{"Setting"="UnallowedApp"="Notepad ++;"Executable"="notepad++"}`
- `@{"Setting"="UnallowedApp"="Executable"="cmd"}`
- `@{"Setting"="UnallowedBrowser"="Chrome";"Executable"="chrome"}`
- `@{"Setting"="CloudAppRestrictions"="Allow"}`
- `@{"Setting"="CloudAppRestrictionList"="1.1.2.2"}`
- `@{"Setting"="CloudAppRestrictionList"="subdomain.com"}`
- `@{"Setting"="CloudAppRestrictionList"="another.differentdomain.edu"}`
- `@{"Setting"="ShowEndpointJustificationDropdown"; "True";}`

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndpointDlpGlobalSettingsPsws
{{ Fill EndpointDlpGlobalSettingsPsws Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendTeamsDlpPoliciesToSharePointOneDrive
The ExtendTeamsDlpPoliciesToSharePointOneDrive parameter enables the Teams DLP Policy to automatically extend protection to the content stored in OneDrive shared in 1:1 chats and content stored in SharePoint associated with Teams teams shared through channel chats. Valid values are:

- $true
- $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InformationBarrierMode
The InformationBarrierMode parameter specifies the mode that controls the total number of segments and how many segments a user can be part of. Valid values are:

- SingleSegment: Users in the organization can have 5000 segments but can only be assigned to one segment.
- MultiSegment: Users in the organization can have 5000 segments and can be assigned up to 10 segments. For more information, see [Use multi-segment support in information barriers](https://learn.microsoft.com/purview/information-barriers-multi-segment).

```yaml
Type: InformationBarrierMode
Parameter Sets: (All)
Aliases:
Accepted values: SingleSegment, MultiSegment
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InformationBarrierPeopleSearchRestriction
{{ Fill InformationBarrierPeopleSearchRestriction Description }}

```yaml
Type: InformationBarrierPeopleSearchRestriction
Parameter Sets: (All)
Aliases:
Accepted values: Enabled, Disabled
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDlpSimulationOptedIn
{{ Fill IsDlpSimulationOptedIn Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremisesWorkload
{{ Fill OnPremisesWorkload Description }}

```yaml
Type: Workload
Parameter Sets: (All)
Aliases:
Accepted values: None, Exchange, SharePoint, Intune, OneDriveForBusiness, PublicFolder, SharePointOnPremises, ExchangeOnPremises, AuditAlerting, Skype, ModernGroup, DynamicScope, Teams, UnifiedAuditAzure, EndpointDevices, ThirdPartyApps, OnPremisesScanner
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessingLimitExceededSeverity
{{ Fill ProcessingLimitExceededSeverity Description }}

```yaml
Type: RuleSeverity
Parameter Sets: (All)
Aliases:
Accepted values: Low, Medium, High, None, Informational, Information
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PurviewLabelConsent
{{ Fill PurviewLabelConsent Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReservedForFutureUse
{{ Fill ReservedForFutureUse Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionForwardCrawl
{{ Fill RetentionForwardCrawl Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleErrorAction
The RuleErrorAction parameter specifies what to do if an error is encountered during the evaluation of the rule. Valid values are:

- Ignore
- RetryThenBlock (This is the default value)

```yaml
Type: PolicyRuleErrorAction
Parameter Sets: (All)
Aliases:
Accepted values: Ignore, RetryThenBlock
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderAddressLocation
The SenderAddressLocation parameter specifies where to look for sender addresses in conditions and exceptions that examine sender email addresses. Valid values are:

- Header: Only examine senders in the message headers (for example, the From, Sender, or Reply-To fields). This is the default value.
- Envelope: Only examine senders from the message envelope (the MAIL FROM value that was used in the SMTP transmission, which is typically stored in the Return-Path field).
- HeaderOrEnvelope: Examine senders in the message header and the message envelope.

```yaml
Type: PolicySenderAddressLocation
Parameter Sets: (All)
Aliases:
Accepted values: Header, Envelope, HeaderOrEnvelope
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteGroups
{{ Fill SiteGroups Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteGroupsPsws
{{ Fill SiteGroupsPsws Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
