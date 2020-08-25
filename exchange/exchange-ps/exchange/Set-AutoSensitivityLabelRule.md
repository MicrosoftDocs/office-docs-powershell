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
{{ Set-AutoSensitivityLabelRule -Identity "SocialSecurityRule1" -Comment "Example" }}
```

{{ This example changes the rule property "Comment" with the rule name "SocialSecurityRule1" to the text "Example". }}

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
The AccessScope parameter specifies a condition for the auto-labeling policy rule that's based on the access scope of the content. The rule is applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule is applied to content that's accessible inside the organization.
- NotInOrganization: The rule is applied to content that's accessible outside the organization.
- None: The condition isn't used.

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
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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
The ContentContainsSensitiveInformation parameter specifies a condition for the rule that's based on a sensitive information type match in content. The rule is applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax @(@{Name="\<SensitiveInformationType1\>";[minCount="\<Value\>"],@{Name="\<SensitiveInformationType2\>";[minCount="\<Value\>"],...). For example, @(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"}).

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
The ContentExtensionMatchesWords parameter specifies a condition for the auto-labeling policy rule that looks for words in file name extensions. You can specify multiple words separated by commas.

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
The Disabled parameter specifies whether the case hold rule is enabled or disabled. Valid values are:

- $true: The rule is disabled.

- $false: The rule is enabled. This is the default value.

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
The DocumentIsPasswordProtected parameter specifies a condition for the auto-labeling policy rule that looks for password protected files (because the contents of the file can't be inspected). Password detection only works for Office documents and .zip files. Valid values are:

- $true: Look for password protected files.

- $false: Don't look for password protected files.

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
The DocumentIsUnsupported parameter specifies a condition for the auto-labeling policy rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

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
The ExceptIfAccessScopeAccessScope parameter specifies an exception for the auto-labeling policy rule that's based on the access scope of the content. The rule isn't applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule isn't applied to content that's accessible inside the organization.
- NotInOrganization: The rule isn't applied to content that's accessible outside the organization.
- None: The exception isn't used.

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
The ExceptIfContentContainsSensitiveInformation parameter specifies an exception for the auto-labeling policy rule that's based on a sensitive information type match in content. The rule isn't applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax @(@{Name="\<SensitiveInformationType1\>";[minCount="\<Value\>"],@{Name="\<SensitiveInformationType2\>";[minCount="\<Value\>"],...). For example, @(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"}).

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
The ExceptIfContentExtensionMatchesWords parameter specifies an exception for the auto-labeling policy rule that looks for words in file name extensions. You can specify multiple words separated by commas.

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
The ExceptIfDocumentIsPasswordProtected parameter specifies an exception for the auto-labeling policy rule that looks for password protected files (because the contents of the file can't be inspected). Password detection only works for Office documents and .zip files. Valid values are:

- $true: Look for password protected files.
- $false: Don't look for password protected files.

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
The ExceptIfDocumentIsUnsupported parameter specifies an exception for the auto-labeling policy rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

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
The ExceptIfFrom parameter specifies an exception for the auto-labeling policy rule that looks for messages from specific senders. You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

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
The ExceptIfFromMemberOf parameter specifies an exception for the auto-labeling policy rule that looks for messages sent by group members. You identify the group members by their email addresses.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

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
The ExceptIfProcessingLimitExceeded parameter specifies an exception for the auto-labeling policy rule rule that looks for files where scanning couldn't complete. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

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
The ExceptIfRecipientDomainIs parameter specifies an exception for the auto-labeling policy rule that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

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
The ExceptIfSenderIpRanges parameter specifies an exception for the auto-labeling policy rule rule that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple IP addresses or ranges separated by commas.

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
The ExceptIfSentTo parameter specifies an exception for the auto-labeling policy rule that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can use this exception in auto-labeling policies that are scoped only to Exchange.

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
{{ This parameter is reserved for internal Microsoft use. }}

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
{{ This parameter is reserved for internal Microsoft use. }}

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
{{ This parameter is reserved for internal Microsoft use. }}

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
{{ This parameter is reserved for internal Microsoft use. }}

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
The ProcessingLimitExceeded parameter specifies a condition for the auto-labeling policy rule that looks for files where scanning couldn't complete. You can use this condition to create rules that work together to identify and process messages where the content couldn't be fully scanned. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

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
The RecipientDomainIs parameter specifies a condition for the auto-labeling policy rule that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

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
The ReportSeverityLevel parameter specifies the severity level of the incident report for content detections based on the rule. Valid values are:

- None: You can't select this value if the rule has no actions configured.
- Low: This is the default value.
- Medium
- High

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
The RuleErrorAction parameter specifies what to do if an error is encountered during the evaluation of the rule. Valid values are:

- Ignore
- RetryThenBlock
- Blank (the value $null): This is the default value.

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
The SenderIpRanges parameter specifies a condition for the auto-sensitivity policy rule that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple IP addresses or ranges separated by commas.

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
The SentTo parameter specifies a condition for the auto-sensitivity policy rule that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can use this condition in auto-sensitivity policies that are scoped only to Exchange.

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
The Workload parameter specifies the workload. Valid values are:

- AuditAlerting
- DynamicScope
- EndpointDevices
- Exchange
- ExchangeOnPremises
- Intune
- ModernGroup
- OneDriveForBusiness
- PublicFolder
- SharePoint
- SharePointOnPremises
- Skype
- Teams
- ThirdPartyApps
- UnifiedAuditAzure

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
