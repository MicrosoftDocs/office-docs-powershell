---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-autosensitivitylabelrule
applicable: Office 365 Security & Compliance Center
title: Get-Label
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Set-AutoSensitivityLabelRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-AutoSensitivityLabelPolicy cmdlet to modify auto-labeling policy rules in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-AutoSensitivityLabelRule [-Identity] <ComplianceRuleIdParameter>
 [-AccessScope <AccessScope>]
 [-ActivationDate <System.DateTime>]
 [-Comment <String>]
 [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentExtensionMatchesWords <MultiValuedProperty>]
 [-Disabled <Boolean>]
 [-DocumentIsPasswordProtected <Boolean>]
 [-DocumentIsUnsupported <Boolean>]
 [-ExceptIfAccessScope <AccessScope>]
 [-ExceptIfContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ExceptIfContentExtensionMatchesWords <MultiValuedProperty>]
 [-ExceptIfDocumentIsPasswordProtected <Boolean>]
 [-ExceptIfDocumentIsUnsupported <Boolean>]
 [-ExceptIfFrom <RecipientIdParameter[]>]
 [-ExceptIfFromMemberOf <SmtpAddress[]>]
 [-ExceptIfProcessingLimitExceeded <Boolean>]
 [-ExceptIfRecipientDomainIs <MultiValuedProperty>]
 [-ExceptIfSenderIPRanges <MultiValuedProperty>]
 [-ExceptIfSentTo <MultiValuedProperty>]
 [-ExpiryDate <System.DateTime>]
 [-From <RecipientIdParameter[]>]
 [-FromMemberOf <SmtpAddress[]>]
 [-Priority <System.Int32>]
 [-ProcessingLimitExceeded <Boolean>]
 [-RecipientDomainIs <MultiValuedProperty>]
 [-ReportSeverityLevel <RuleSeverity>]
 [-RuleErrorAction <PolicyRuleErrorAction>]
 [-SenderIPRanges <MultiValuedProperty>]
 [-SentTo <MultiValuedProperty>]
 [-WhatIf]
 [-Workload <Workload>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity
The Identity parameter specifies the auto-labeling policy rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AccessScope
{{ Fill AccessScope Description }}

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Accepted values: InOrganization, NotInOrganization, None
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivationDate
{{ Fill ActivationDate Description }}

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
{{ Fill Comment Description }}

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentContainsSensitiveInformation
{{ Fill ContentContainsSensitiveInformation Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentExtensionMatchesWords
{{ Fill ContentExtensionMatchesWords Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
{{ Fill Disabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsPasswordProtected
{{ Fill DocumentIsPasswordProtected Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsUnsupported
{{ Fill DocumentIsUnsupported Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAccessScope
{{ Fill ExceptIfAccessScope Description }}

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Accepted values: InOrganization, NotInOrganization, None
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentContainsSensitiveInformation
{{ Fill ExceptIfContentContainsSensitiveInformation Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentExtensionMatchesWords
{{ Fill ExceptIfContentExtensionMatchesWords Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsPasswordProtected
{{ Fill ExceptIfDocumentIsPasswordProtected Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsUnsupported
{{ Fill ExceptIfDocumentIsUnsupported Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom
{{ Fill ExceptIfFrom Description }}

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromMemberOf
{{ Fill ExceptIfFromMemberOf Description }}

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfProcessingLimitExceeded
{{ Fill ExceptIfProcessingLimitExceeded Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
{{ Fill ExceptIfRecipientDomainIs Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderIPRanges
{{ Fill ExceptIfSenderIPRanges Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
{{ Fill ExceptIfSentTo Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpiryDate
{{ Fill ExpiryDate Description }}

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
{{ Fill From Description }}

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromMemberOf
{{ Fill FromMemberOf Description }}

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
{{ Fill Priority Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessingLimitExceeded
{{ Fill ProcessingLimitExceeded Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs
{{ Fill RecipientDomainIs Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportSeverityLevel
{{ Fill ReportSeverityLevel Description }}

```yaml
Type: RuleSeverity
Parameter Sets: (All)
Aliases:
Accepted values: Low, Medium, High, None, Informational, Information
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleErrorAction
{{ Fill RuleErrorAction Description }}

```yaml
Type: PolicyRuleErrorAction
Parameter Sets: (All)
Aliases:
Accepted values: Ignore, RetryThenBlock
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderIPRanges
{{ Fill SenderIPRanges Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
{{ Fill SentTo Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance Center PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Workload
{{ Fill Workload Description }}

```yaml
Type: Workload
Parameter Sets: (All)
Aliases:
Accepted values: None, Exchange, SharePoint, Intune, OneDriveForBusiness, PublicFolder, SharePointOnPremises, ExchangeOnPremises, AuditAlerting, Skype, ModernGroup, DynamicScope, Teams, UnifiedAuditAzure, EndpointDevices, ThirdPartyApps
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
