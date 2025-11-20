---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule
schema: 2.0.0
title: New-DlpComplianceRule
---

# New-DlpComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-DlpComplianceRule to create data loss prevention (DLP) rules in the Microsoft Purview compliance portal. DLP rules define sensitive information to be protected and the actions to take on rule matches.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DlpComplianceRule [-Name] <String> -Policy <PolicyIdParameter>
 [-AccessScope <Microsoft.Office.CompliancePolicy.Tasks.AccessScope>]
 [-ActivationDate <System.DateTime>]
 [-AddRecipients <PswsHashtable>]
 [-AdvancedRule <String>]
 [-AlertProperties <PswsHashtable>]
 [-AnyOfRecipientAddressContainsWords <MultiValuedProperty>]
 [-AnyOfRecipientAddressMatchesPatterns <MultiValuedProperty>]
 [-ApplyBrandingTemplate <String>]
 [-ApplyHtmlDisclaimer <PswsHashtable>]
 [-AttachmentIsNotLabeled <Boolean>]
 [-BlockAccess <Boolean>]
 [-BlockAccessScope <Microsoft.Office.CompliancePolicy.Tasks.BlockAccessScope>]
 [-Comment <String>]
 [-Confirm]
 [-ContentCharacterSetContainsWords <MultiValuedProperty>]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentExtensionMatchesWords <MultiValuedProperty>]
 [-ContentFileTypeMatches <MultiValuedProperty>]
 [-ContentIsNotLabeled <Boolean>]
 [-ContentIsShared <Boolean>]
 [-ContentPropertyContainsWords <MultiValuedProperty>]
 [-Disabled <Boolean>]
 [-DisplayName <String>]
 [-DocumentContainsWords <MultiValuedProperty>]
 [-DocumentCreatedBy <MultiValuedProperty>]
 [-DocumentCreatedByMemberOf <RecipientIdParameter[]>]
 [-DocumentIsPasswordProtected <Boolean>]
 [-DocumentIsUnsupported <Boolean>]
 [-DocumentMatchesPatterns <MultiValuedProperty>]
 [-DocumentNameMatchesPatterns <MultiValuedProperty>]
 [-DocumentNameMatchesWords <MultiValuedProperty>]
 [-DocumentSizeOver <Microsoft.Exchange.Data.ByteQuantifiedSize>]
 [-EncryptRMSTemplate <RmsTemplateIdParameter>]
 [-EndpointDlpRestrictions <PswsHashtable[]>]
 [-EnforcePortalAccess <Boolean>]
 [-EvaluateRulePerComponent <Boolean>]
 [-ExceptIfAccessScope <Microsoft.Office.CompliancePolicy.Tasks.AccessScope>]
 [-ExceptIfAnyOfRecipientAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfAnyOfRecipientAddressMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfContentCharacterSetContainsWords <MultiValuedProperty>]
 [-ExceptIfContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ExceptIfContentExtensionMatchesWords <MultiValuedProperty>]
 [-ExceptIfContentFileTypeMatches <MultiValuedProperty>]
 [-ExceptIfContentIsShared <Boolean>]
 [-ExceptIfContentPropertyContainsWords <MultiValuedProperty>]
 [-ExceptIfDocumentContainsWords <MultiValuedProperty>]
 [-ExceptIfDocumentCreatedBy <MultiValuedProperty>]
 [-ExceptIfDocumentCreatedByMemberOf <RecipientIdParameter[]>]
 [-ExceptIfDocumentIsPasswordProtected <Boolean>]
 [-ExceptIfDocumentIsUnsupported <Boolean>]
 [-ExceptIfDocumentMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfDocumentNameMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfDocumentNameMatchesWords <MultiValuedProperty>]
 [-ExceptIfDocumentSizeOver <Microsoft.Exchange.Data.ByteQuantifiedSize>]
 [-ExceptIfFrom <RecipientIdParameter[]>]
 [-ExceptIfFromAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfFromAddressMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfFromMemberOf <SmtpAddress[]>]
 [-ExceptIfFromScope <Microsoft.Office.CompliancePolicy.PolicyEvaluation.FromScope>]
 [-ExceptIfHasSenderOverride <Boolean>]
 [-ExceptIfHeaderContainsWords <PswsHashtable>]
 [-ExceptIfHeaderMatchesPatterns <PswsHashtable>]
 [-ExceptIfMessageSizeOver <Microsoft.Exchange.Data.ByteQuantifiedSize>]
 [-ExceptIfMessageTypeMatches <Microsoft.Office.CompliancePolicy.PolicyEvaluation.MessageTypes>]
 [-ExceptIfProcessingLimitExceeded <Boolean>]
 [-ExceptIfRecipientADAttributeContainsWords <PswsHashtable>]
 [-ExceptIfRecipientADAttributeMatchesPatterns <PswsHashtable>]
 [-ExceptIfRecipientDomainIs <MultiValuedProperty>]
 [-ExceptIfSenderADAttributeContainsWords <PswsHashtable>]
 [-ExceptIfSenderADAttributeMatchesPatterns <PswsHashtable>]
 [-ExceptIfSenderDomainIs <MultiValuedProperty>]
 [-ExceptIfSenderIPRanges <MultiValuedProperty>]
 [-ExceptIfSentTo <MultiValuedProperty>]
 [-ExceptIfSentToMemberOf <RecipientIdParameter[]>]
 [-ExceptIfSubjectContainsWords <MultiValuedProperty>]
 [-ExceptIfSubjectMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfSubjectOrBodyContainsWords <MultiValuedProperty>]
 [-ExceptIfSubjectOrBodyMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfUnscannableDocumentExtensionIs <MultiValuedProperty>]
 [-ExceptIfWithImportance <Microsoft.Office.CompliancePolicy.Tasks.WithImportance>]
 [-ExpiryDate <System.DateTime>]
 [-From <RecipientIdParameter[]>]
 [-FromAddressContainsWords <MultiValuedProperty>]
 [-FromAddressMatchesPatterns <MultiValuedProperty>]
 [-FromMemberOf <SmtpAddress[]>]
 [-FromScope <Microsoft.Office.CompliancePolicy.PolicyEvaluation.FromScope>]
 [-GenerateAlert <MultiValuedProperty>]
 [-GenerateIncidentReport <MultiValuedProperty>]
 [-HasSenderOverride <Boolean>]
 [-HeaderContainsWords <PswsHashtable>]
 [-HeaderMatchesPatterns <PswsHashtable>]
 [-ImmutableId <System.Guid>]
 [-IncidentReportContent <ReportContentOption[]>]
 [-MessageIsNotLabeled <Boolean>]
 [-MessageSizeOver <Microsoft.Exchange.Data.ByteQuantifiedSize>]
 [-MessageTypeMatches <Microsoft.Office.CompliancePolicy.PolicyEvaluation.MessageTypes>]
 [-MipRestrictAccess <PswsHashtable[]>]
 [-Moderate <PswsHashtable>]
 [-ModifySubject <PswsHashtable>]
 [-NonBifurcatingAccessScope <Microsoft.Office.CompliancePolicy.Tasks.NonBifurcatingAccessScope>]
 [-NotifyAllowOverride <OverrideOption[]>]
 [-NotifyEmailCustomSenderDisplayName <String>]
 [-NotifyEmailCustomSubject <String>]
 [-NotifyEmailCustomText <String>]
 [-NotifyEmailExchangeIncludeAttachment <Boolean>]
 [-NotifyEmailOnedriveRemediationActions <NotifyEmailRemediationActions>]
 [-NotifyOverrideRequirements <Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicyOverrideRequirements>]
 [-NotifyPolicyTipCustomDialog <String>]
 [-NotifyPolicyTipCustomText <String>]
 [-NotifyPolicyTipCustomTextTranslations <MultiValuedProperty>]
 [-NotifyPolicyTipDisplayOption <Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicyTipDisplayOption>]
 [-NotifyPolicyTipUrl <String>]
 [-NotifyUser <MultiValuedProperty>]
 [-NotifyUserType <Microsoft.Office.CompliancePolicy.PolicyEvaluation.NotifyUserType>]
 [-OnPremisesScannerDlpRestrictions <PswsHashtable[]>]
 [-PrependSubject <String>]
 [-Priority <System.Int32>]
 [-ProcessingLimitExceeded <Boolean>]
 [-Quarantine <Boolean>]
 [-RecipientADAttributeContainsWords <PswsHashtable>]
 [-RecipientADAttributeMatchesPatterns <PswsHashtable>]
 [-RecipientDomainIs <MultiValuedProperty>]
 [-RedirectMessageTo <RecipientIdParameter[]>]
 [-RemoveHeader <MultiValuedProperty>]
 [-RemoveRMSTemplate <Boolean>]
 [-ReportSeverityLevel <RuleSeverity>]
 [-RestrictAccess <System.Collections.Hashtable[]>]
 [-RuleErrorAction <Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicyRuleErrorAction>]
 [-SenderADAttributeContainsWords <PswsHashtable>]
 [-SenderADAttributeMatchesPatterns <PswsHashtable>]
 [-SenderAddressLocation <Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicySenderAddressLocation>]
 [-SenderDomainIs <MultiValuedProperty>]
 [-SenderIPRanges <MultiValuedProperty>]
 [-SentTo <MultiValuedProperty>]
 [-SentToMemberOf <RecipientIdParameter[]>]
 [-SetHeader <PswsHashtable>]
 [-SharedByIRMUserRisk <MultiValuedProperty>]
 [-StopPolicyProcessing <Boolean>]
 [-SubjectContainsWords <MultiValuedProperty>]
 [-SubjectMatchesPatterns <MultiValuedProperty>]
 [-SubjectOrBodyContainsWords <MultiValuedProperty>]
 [-SubjectOrBodyMatchesPatterns <MultiValuedProperty>]
 [-TriggerPowerAutomateFlow <String>]
 [-UnscannableDocumentExtensionIs <MultiValuedProperty>]
 [-ValidateRule]
 [-WhatIf]
 [-WithImportance <Microsoft.Office.CompliancePolicy.Tasks.WithImportance>]
 [<CommonParameters>]
```

## DESCRIPTION
Each new rule must contain one condition filter or test, and one associated action.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-DlpComplianceRule -Name "SocialSecurityRule" -Policy "USFinancialChecks" -ContentContainsSensitiveInformation @{Name="U.S. Social Security Number (SSN)"} -BlockAccess $True
```

This example creates a new DLP compliance rule named "SocialSecurityRule" that is assigned to the "USFinancialChecks" policy. The rule checks for social security numbers and blocks access if it finds them.

### Example 2
```powershell
$contains_complex_types = @{
    operator = "And"
    groups = @(
        @{
            operator = "Or"
            name = "PII Identifiers"
            sensitivetypes = @(
                @{
                    name = "Drug Enforcement Agency (DEA) Number"
                    maxconfidence = 100
                    minconfidence = 75
                    mincount = 1
                    maxcount = -1
                }
            )
        }
        @{
            operator = "Or"
            name = "Medical Terms"
            sensitivetypes = @(
                @{
                    name = "International Classification of Diseases (ICD-9-CM)"
                    maxconfidence = 100
                    minconfidence = 75
                    mincount = 1
                    maxcount = -1
                }
                @{
                    name = "International Classification of Diseases (ICD-10-CM)"
                    maxconfidence = 100
                    minconfidence = 75
                    mincount = 1
                    maxcount = -1
                }
                )
        }

    )
}

New-DLPComplianceRule -Name "Contoso Medical Information" -Policy "Contoso Medical Checks" -ContentContainsSensitiveInformation $contains_complex_types
```

This example creates a new DLP compliance rule named "Contoso Medical Information". The rule is assigned to the "Contoso Medical Checks" policy. It uses advanced syntax to search for the specified content.

### Example 3
```powershell
Contents of the file named C:\Data\Sensitive Type.txt:

{
"Version": "1.0",
"Condition": {
  "Operator": "And",
  "SubConditions": [
    {
      "ConditionName": "ContentContainsSensitiveInformation",
      "Value": [
        {
          "groups": [
            {
              "Operator": "Or",
              "labels": [
                {
                  "name": "defa4170-0d19-0005-000a-bc88714345d2",
                  "type": "Sensitivity"
                }
              ],
                "name": "Default",
                "sensitivetypes": [
                  {
                   "confidencelevel": "Low",
                   "name": "Credit Card Number"
                  }
                ]
            }
          ]
        }
      ]
    },
    {
      "Operator": "Not",
      "SubConditions": [
        {
          "Operator": "OR",
          "SubConditions": [
            {
              "ConditionName": "FromMemberOf",
              "Value": [
              "janesteam@contoso.com"
              ]
            },
            {
              "ConditionName": "SentTo",
              "Value": [
              "adele@contoso.com"
              ]
            }
          ],
        }
      ]
    }
  ]
 }
}

$data = Get-Content -Path "C:\Data\Sensitive Type.txt" -ReadCount 0 -encoding Byte

$string = [System.Text.Encoding]::UTF8.GetString($data)

New-DLPComplianceRule -Name "Contoso Rule 1" -Policy "Contoso Policy 1" -AdvancedRule $string -NotifyUser
```

This example uses the AdvancedRule parameter to read the following complex condition from a file: "Content contains sensitive information: "Credit card number OR Highly confidential" AND (NOT (Sender is a member of "Jane's Team" OR Recipient is "adele@contoso.com")).

### Example 4
```powershell

$myEntraAppId = ""

$myEntraAppName = ""

$locations = "[{`"Workload`":`"Applications`",`"Location`":`"$myEntraAppId`",`"LocationDisplayName`":`"$myEntraAppName`",`"LocationSource`":`"Entra`",`"LocationType`":`"Individual`",`"Inclusions`":[{`"Type`":`"Tenant`",`"Identity`":`"All`"}]}]"

New-DlpCompliancePolicy -Name "Test Entra DLP" -Mode Enable -Locations $locations -EnforcementPlanes @("Entra")

New-DlpComplianceRule -Name "Test Entra Rule" -Policy "Test Entra DLP" -ContentContainsSensitiveInformation @{Name = "credit card number"}  -GenerateAlert $true -GenerateIncidentReport @("siteadmin") -NotifyUser @("admin@contonso.onmicrosoft.com") -RestrictAccess @(@{setting="UploadText";value="Block"})
```

This is an example of applying a CCSI-based DLP rule that should be handled by an entra-registered enterprise application in the organization.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies the unique name of the new DLP rule. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy

> Applicable: Security & Compliance

The Policy parameter specifies the existing DLP policy that contains the new DLP rule. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID
- Id

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessScope

> Applicable: Security & Compliance

The AccessScope parameter specifies a condition for the DLP rule that's based on the access scope of the content. The rule is applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule is applied to content that's accessible or delivered to a recipient inside the organization.
- NotInOrganization: The rule is applied to content that's accessible or delivered to a recipient outside the organization.
- None: The condition isn't used.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.AccessScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivationDate

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddRecipients

> Applicable: Security & Compliance

The AddRecipients parameter specifies an action for the DLP rule that adds the specified recipients to email messages. This parameter uses the following syntax:

- `@{<AddToRecipients | CopyTo | BlindCopyTo> = "emailaddress"}`. For example, `@{AddToRecipients = "laura@contoso.com"}` or `@{BlindCopyTo = "julia@contoso.com"}`.
- `@{AddManagerAsRecipientType = "<To | Cc | Bcc>"}`. For example, `@{AddManagerAsRecipientType = "Bcc"}`.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdvancedRule

> Applicable: Security & Compliance

The AdvancedRule parameter uses complex rule syntax that supports multiple AND, OR, and NOT operators and nested groups.

This parameter uses JSON syntax that's similar to the traditional advanced syntax in Example 2, but read from a file that contains additional operators and combinations that aren't traditionally supported.

For syntax details, see Example 3.

```yaml
Type: String
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlertProperties

> Applicable: Security & Compliance

{{ Fill AlertProperties Description }}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressContainsWords

> Applicable: Security & Compliance

The AnyOfRecipientAddressContainsWords parameter specifies a condition for the DLP rule that looks for words or phrases in recipient email addresses. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 600.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressMatchesPatterns

> Applicable: Security & Compliance

The AnyOfRecipientAddressMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyBrandingTemplate

> Applicable: Security & Compliance

The ApplyBrandingTemplate parameter specifies an action for the DLP rule that applies a custom branding template for messages encrypted by Microsoft Purview Message Encryption. You identify the custom branding template by name. If the name contains spaces, enclose the name in quotation marks (").

Use the EnforcePortalAccess parameter to control whether external users are required to use the encrypted message portal to view encrypted messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyHtmlDisclaimer

> Applicable: Security & Compliance

The ApplyHtmlDisclaimer parameter specifies an action for the rule that adds disclaimer text to messages.This parameter uses the syntax: `@{Text = "Disclaimer text"; Location = <Append | Prepend>; FallbackAction = <Wrap | Ignore | Reject> }`.

- Text: Specifies the disclaimer text to add. Disclaimer text can include HTML tags and inline cascading style sheet (CSS) tags. You can add images using the IMG tag.
- Location: Specifies where to insert the HTML disclaimer text in the body of messages. Append = Add to the end of the message body. Prepend = Insert at the beginning of the message body.
- FallbackAction: Specifies what to do if the HTML disclaimer can't be added to a message. Wrap = The original message is wrapped in a new message envelope, and the disclaimer is used as the message body for the new message. Ignore = The rule is ignored and the message is delivered without the disclaimer. Reject = The message is rejected.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentIsNotLabeled

> Applicable: Security & Compliance

{{ Fill AttachmentIsNotLabeled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockAccess

> Applicable: Security & Compliance

The BlockAccess parameter specifies an action for the DLP rule that blocks access to the source item when the conditions of the rule are met. Valid values are:

- $true: Blocks further access to the source item that matched the rule. The owner, author, and site owner can still access the item.
- $false: Allows access to the source item that matched the rule. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockAccessScope

> Applicable: Security & Compliance

The BlockAccessScope parameter specifies the scope of the block access action. Valid values are:

- All: Blocks access to everyone except the owner and the last modifier.
- PerUser: Blocks access to external users.
- PerAnonymousUser: Blocks access to people through the "Anyone with the link" option in SharePoint and OneDrive.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.BlockAccessScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Security & Compliance

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentCharacterSetContainsWords

> Applicable: Security & Compliance

The ContentCharacterSetContainsWords parameter specifies a condition for the rule that looks for character set names in messages. You can specify multiple values separated by commas.

Supported character sets are `big5, din_66003, euc-jp, euc-kr, gb18030, gb2312, hz-gb-2312, iso-2022-jp, iso-2022-kr, iso-8859-1, iso-8859-13, iso-8859-15, iso-8859-2, iso-8859-3, iso-8859-4, iso-8859-5, iso-8859-6, iso-8859-7, iso-8859-8, iso-8859-9, koi8-r, koi8-u, ks_c_5601-1987, ns_4551-1, sen_850200_b, shift_jis, utf-7, utf-8, windows-1250, windows-1251, windows-1252, windows-1253, windows-1254, windows-1255, windows-1256, windows-1257, windows-1258, windows-874`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentContainsSensitiveInformation

> Applicable: Security & Compliance

The ContentContainsSensitiveInformation parameter specifies a condition for the rule that's based on a sensitive information type match in content. The rule is applied to content that contains the specified sensitive information type. In addition to sensitive information type, the parameter can also be applied to files that contain sensitivity labels.

This parameter uses the basic syntax `@(@{Name="SensitiveInformationType1";[minCount="Value"],@{Name="SensitiveInformationType2";[minCount="Value"],...)`. For example, `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"})`. Example for sensitivity label: `@(@{operator = "And"; groups = @(@{operator="Or";name="Default";labels=@(@{name="Confidential";type="Sensitivity"})})})`.

Use the Get-DLPSensitiveInformationType cmdlet to list the sensitive information types for your organization. For more information on sensitive information types, see [What the sensitive information types in Exchange look for](https://learn.microsoft.com/exchange/what-the-sensitive-information-types-in-exchange-look-for-exchange-online-help).

For an example of advanced syntax, see Example 2 in this article.

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentExtensionMatchesWords

> Applicable: Security & Compliance

The ContentExtensionMatchesWords parameter specifies a condition for the DLP rule that looks for words in file extensions. You can specify multiple words separated by commas. Irrespective of the original file type, this predicate matches based on the extension that is present in the name of the file.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentFileTypeMatches

> Applicable: Security & Compliance

{{ Fill ContentFileTypeMatches Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentIsNotLabeled

> Applicable: Security & Compliance

The ContentIsNotLabeled parameter specifies a condition for the DLP rule that looks for attachments or documents that aren't labeled. Valid values are:

- $true: Look for attachments or documents that aren't labeled.
- $false: Don't look for unlabeled attachments or documents.

In Exchange, this condition is matched only if both the attachment and the message body aren't labeled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentIsShared

> Applicable: Security & Compliance

The ContentIsNotLabeled parameter specifies a condition for the DLP rule that looks for attachments or documents that aren't labeled. Valid values are:

- $true: Look for attachments or documents that aren't labeled.
- $false: Don't look for unlabeled attachments or documents.

In Exchange, this condition is matched only if both the attachment and the message body aren't labeled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentPropertyContainsWords

> Applicable: Security & Compliance

The ContentPropertyContainsWords parameter specifies a condition for the DLP rule that's based on a property match in content. The rule is applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled

> Applicable: Security & Compliance

The Disabled parameter specifies whether the DLP rule is disabled. Valid values are:

- $true: The rule is disabled.
- $false: The rule is enabled. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName

> Applicable: Security & Compliance

{{ Fill DisplayName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentContainsWords

> Applicable: Security & Compliance

The DocumentContainsWords parameter specifies a condition for the DLP rule that looks for words in message attachments. Only supported attachment types are checked.

To specify multiple words or phrases, this parameter uses the syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentCreatedBy

> Applicable: Security & Compliance

The DocumentCreatedBy parameter specifies a condition for the DLP rule that looks for documents that are created by the specificed identity. You can specify multiple values separated by commas.

This parameter applies to Sharepoint and Onedrive workloads.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentCreatedByMemberOf

> Applicable: Security & Compliance

The DocumentCreatedByMemberOf parameter specifies a condition for the DLP rule that looks for documents that are created by a member of the specificed group. You can specify multiple values separated by commas.

This parameter applies to Sharepoint and Onedrive workloads.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsPasswordProtected

> Applicable: Security & Compliance

The DocumentIsPasswordProtected parameter specifies a condition for the DLP rule that looks for password protected files (because the contents of the file can't be inspected). Password detection works for Office documents, compressed files (.zip, .7z, .rar, .tar, etc.), and .pdf files. Valid values are:

- $true: Look for password protected files.
- $false: Don't look for password protected files.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsUnsupported

> Applicable: Security & Compliance

The DocumentIsUnsupported parameter specifies a condition for the DLP rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentMatchesPatterns

> Applicable: Security & Compliance

The DocumentMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in the content of message attachments by using regular expressions. Only supported attachment types are checked.

You can specify multiple text patterns by using the following syntax: `"Regular expression1","Regular expression2",..."Regular expressionN"`.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentNameMatchesPatterns

> Applicable: Security & Compliance

The DocumentNameMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in the name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentNameMatchesWords

> Applicable: Security & Compliance

The DocumentNameMatchesWords parameter specifies a condition for the DLP rule that looks for words or phrases in the name of message attachments. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentSizeOver

> Applicable: Security & Compliance

The DocumentSizeOver parameter specifies a condition for the DLP rule that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptRMSTemplate

> Applicable: Security & Compliance

The EncryptRMSTemplate parameter specifies an action for the DLP rule that applies rights management service (RMS) templates to files. You identify the RMS template by name. If the name contains spaces, enclose the name in quotation marks (").

Use the Get-RMSTemplate cmdlet to see the RMS templates that are available.

```yaml
Type: RmsTemplateIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndpointDlpRestrictions

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The EndpointDlpRestrictions parameter specifies the restricted endpoints for Endpoint DLP. This parameter uses the following syntax: `@(@{"Setting"="<Setting>"; "Value"="<Value>}",@{"Setting"="<Setting>"; "Value"="<Value>"},...)`.

The `<Setting>` value is one of the supported values.

The available values for `<Value>` are: Audit, Block, Ignore, or Warn.

Example values:

- `@{"Setting"="Print"; "Value"="Block"}`
- `@{"Setting"="CopyPaste"; "Value"="Block";}`
- `@{"Setting"="ScreenCapture"; "Value"="Block";}`
- `@{"Setting"="RemovableMedia"; "Value"="Block";}`
- `@{"Setting"="NetworkShare"; "Value"="Block";}`
- `@{"Setting"="Print"; "Value"="Audit";}`
- `@{"Setting"="UnallowedApps"; "Value"="notepad"; "value2"="Microsoft Notepad"}`

When you use the values Block or Warn in this parameter, you also need to use the NotifyUser parameter.

You can view and configure the available restrictions with the Get-PolicyConfig and Set-PolicyConfig cmdlets.

For more information about Endpoint DLP, see [Learn about Endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-learn-about).

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnforcePortalAccess

> Applicable: Security & Compliance

The EnforcePortalAccess parameter specifies whether external recipients are required to view encrypted mail using the encrypted message portal when the ApplyBrandingTemplate action is also specified. Valid values are:

- $true: External recipients are required to use the encrypted message portal to view encrypted messages.
- $false: External recipients aren't required to use the encrypted message portal. Outlook can decrypt messages inline.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EvaluateRulePerComponent

> Applicable: Security & Compliance

The EvaluateRulePerComponent parameter specifies whether a match for conditions and exceptions in the rule is contained within the same message component. Valid values are:

- $true: A DLP rule match for conditions and exceptions must be in the same message component (for example, in the message body or in a single attachment).
- $false: A DLP rule match for conditions and exceptions can be anywhere in the message.

For example, a DLP rule is configured to block messages that contain three or more Social Security numbers (SSNs). When the value of this parameter is $true, a message is blocked only if there are three or more SSNs in the message body, or there are three or more SSNs in a specific attachment. The DLP rule doesn't match and the message isn't blocked if there are two SSNs in the message body, one SSN in an attachment, and two SSNs in another attachment in the same email message.

**Note**: When the value of this parameter is $true, the scoping within Content Contains condition is overriden. In other words, even if the scoping is set to Attachments only, the message body is also scanned as a separate component. Even when the scoping is set to Message only, attachments are scanned as individual components. Same applies even when the Content Contains condition is within the NOT operator as well.

This parameter works with the following conditions or exceptions only:

- Content contains.
- Attachment contains.
- Attachment is not labeled.
- File extension is.

**Note**: Unsupported conditions evaluate the entire email message and attachments as a single component. Supported conditions are evaluated for each email message component.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAccessScope

> Applicable: Security & Compliance

The ExceptIfAccessScopeAccessScope parameter specifies an exception for the DLP rule that's based on the access scope of the content. The rule isn't applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule isn't applied to content that's accessible or delivered to a recipient inside the organization.
- NotInOrganization: The rule isn't applied to content that's accessible or delivered to a recipient outside the organization.
- None: The exception isn't used.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.AccessScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressContainsWords

> Applicable: Security & Compliance

The ExceptIfAnyOfRecipientAddressContainsWords parameter specifies an exception for the DLP rule that looks for words or phrases in recipient email addresses. You can specify multiple words separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 600.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentCharacterSetContainsWords

> Applicable: Security & Compliance

The ExceptIfContentCharacterSetContainsWords parameter specifies an exception for the rule that looks for character set names in messages.

To specify multiple words, this parameter uses the syntax: `Word1,word2,...wordN`. Don't use leading or trailing spaces.

Supported character sets are `big5, din_66003, euc-jp, euc-kr, gb18030, gb2312, hz-gb-2312, iso-2022-jp, iso-2022-kr, iso-8859-1, iso-8859-13, iso-8859-15, iso-8859-2, iso-8859-3, iso-8859-4, iso-8859-5, iso-8859-6, iso-8859-7, iso-8859-8, iso-8859-9, koi8-r, koi8-u, ks_c_5601-1987, ns_4551-1, sen_850200_b, shift_jis, utf-7, utf-8, windows-1250, windows-1251, windows-1252, windows-1253, windows-1254, windows-1255, windows-1256, windows-1257, windows-1258, windows-874`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentContainsSensitiveInformation

> Applicable: Security & Compliance

The ExceptIfContentContainsSensitiveInformation parameter specifies an exception for the rule that's based on a sensitive information type match in content. The rule isn't applied to content that contains the specified sensitive information type. In addition to sensitive information type, the parameter can also be applied to files that contain sensitivity labels.

This parameter uses the basic syntax `@(@{Name="SensitiveInformationType1";[minCount="Value"],@{Name="SensitiveInformationType2";[minCount="Value"],...)`. For example, `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"})`. Example for sensitivity label: `@(@{operator = "And"; groups = @(@{operator="Or";name="Default";labels=@(@{name="Confidential";type="Sensitivity"})})})`.

Use the Get-DLPSensitiveInformationType cmdlet to list the sensitive information types for your organization. For more information on sensitive information types, see [What the sensitive information types in Exchange look for](https://learn.microsoft.com/exchange/what-the-sensitive-information-types-in-exchange-look-for-exchange-online-help).

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentExtensionMatchesWords

> Applicable: Security & Compliance

The ExceptIfContentExtensionMatchesWords parameter specifies an exception for the DLP rule that looks for words in file extensions. You can specify multiple words separated by commas. Irrespective of what the original file type is, this predicate matches based on the extension that is present in the name of the file.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentFileTypeMatches

> Applicable: Security & Compliance

{{ Fill ExceptIfContentFileTypeMatches Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentIsShared

> Applicable: Security & Compliance

The ContentIsNotLabeled parameter specifies an exception for the DLP rule that looks for attachments or documents that aren't labeled. Valid values are:

- $true: Look for attachments or documents that aren't labeled.
- $false: Don't look for unlabeled attachments or documents.

In Exchange, this condition is matched only if both the attachment and the message body aren't labeled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentPropertyContainsWords

> Applicable: Security & Compliance

The ExceptIfContentPropertyContainsWords parameter specifies an exception for the DLP rule that's based on a property match in content. The rule is not applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentContainsWords

> Applicable: Security & Compliance

The ExceptIfDocumentContainsWords parameter specifies an exception for the DLP rule that looks for words in message attachments. Only supported attachment types are checked.

To specify multiple words or phrases, this parameter uses the syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentCreatedBy

> Applicable: Security & Compliance

The DocumentCreatedBy parameter specifies an exception for the DLP rule that looks for documents that are created by the specificed identity. You can specify multiple values separated by commas.

This parameter applies to Sharepoint and Onedrive workloads.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentCreatedByMemberOf

> Applicable: Security & Compliance

The DocumentCreatedByMemberOf parameter specifies an exception for the DLP rule that looks for documents that are created by a member of the specificed group. You can specify multiple values separated by commas.

This parameter applies to Sharepoint and Onedrive workloads.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsPasswordProtected

> Applicable: Security & Compliance

The ExceptIfDocumentIsPasswordProtected parameter specifies an exception for the DLP rule that looks for password protected files (because the contents of the file can't be inspected). Password detection works for Office documents, compressed files (.zip, .7z, .rar, .tar, etc.), and .pdf files. Valid values are:

- $true: Look for password protected files.
- $false: Don't look for password protected files.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsUnsupported

> Applicable: Security & Compliance

The ExceptIfDocumentIsUnsupported parameter specifies an exception for the DLP rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentNameMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfDocumentNameMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in the name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfDocumentMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in the content of message attachments by using regular expressions. Only supported attachment types are checked.

You can specify multiple text patterns by using the following syntax: `"Regular expression1","Regular expression2",..."Regular expressionN"`.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentNameMatchesWords

> Applicable: Security & Compliance

The ExceptIfDocumentNameMatchesWords parameter specifies an exception for the DLP rule that looks for words or phrases in the name of message attachments. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentSizeOver

> Applicable: Security & Compliance

The ExceptIfDocumentSizeOver parameter specifies an exception for the DLP rule that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom

> Applicable: Security & Compliance

The ExceptIfFrom parameter specifies an exception for the DLP rule that looks for messages from specific senders. You identify the senders by email address. You can specify multiple values separated by commas.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords

> Applicable: Security & Compliance

The ExceptIfFromAddressContainsWords parameter specifies an exception for the DLP rule that looks for words or phrases in the sender's email address. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word length is 128 characters. The maximum number of words or phrases is 50.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfFromAddressMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromMemberOf

> Applicable: Security & Compliance

The FromMemberOf parameter specifies an exception for the DLP rule that looks for messages sent by group members. You identify the group by its email address.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromScope

> Applicable: Security & Compliance

The ExceptIfFromScope parameter specifies an exception for the rule that looks for the location of message senders. Valid values are:

- InOrganization: The sender is a mailbox, mail user, group, or mail-enabled public folder in your organization or The sender's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain.
- NotInOrganization: The sender's email address isn't in an accepted domain or the sender's email address is in an accepted domain that's configured as an external relay domain.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.FromScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasSenderOverride

> Applicable: Security & Compliance

The ExceptIfHasSenderOverride parameter specifies an exception for the rule that looks for messages where the sender chose to override a DLP policy. Valid values are:

- $true: Look for messages where the sender took action to override a DLP policy.
- $false: Don't look for messages where the sender took action to override a DLP policy.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsWords

> Applicable: Security & Compliance

The HeaderContainsWords parameter specifies an exception for the DLP rule that looks for words in a header field.

To specify multiple words or phrases, this parameter uses the syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderMatchesPatterns

> Applicable: Security & Compliance

The HeaderMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageSizeOver

> Applicable: Security & Compliance

The ExceptIfMessageSizeOver parameter specifies an exception for the DLP rule that looks for messages larger than the specified size. The size include the message and all attachments.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageTypeMatches

> Applicable: Security & Compliance

The ExceptIfMessageTypeMatches parameter specifies an exception for the rule that looks for messages of the specified type. Valid values are:

- ApprovalRequest: Moderation request messages sent to moderators.
- AutomaticForward: Messages automatically forwarded to an alternative recipient (by Exchange, not by auto-forwarding rules that users configure in Outlook on the web or Outlook).
- AutomaticReply: Out of office (OOF) messages configured by the user.
- Calendaring: Meeting requests and responses.
- Encrypted: S/MIME encrypted messages.
- PermissionControlled: Messages protected with Rights Management, Office 365 Message Encryption (OME), and sensitivity labels (with encryption).
- ReadReceipt: Read receipts.
- Signed: Digitally signed messages.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.MessageTypes
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfProcessingLimitExceeded

> Applicable: Security & Compliance

The ExceptIfProcessingLimitExceeded parameter specifies an exception for the DLP rule that looks for files where scanning couldn't complete. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientADAttributeContainsWords

> Applicable: Security & Compliance

The ExceptIfRecipientADAttributeContainsWords parameter specifies an exception for the DLP rule that looks for words in Active Directory attributes of message recipients. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="Word"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="Word1";AttributeName2="Word2";...AttributeNameN="WordN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientADAttributeMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfRecipientADAttributeMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in Active Directory attributes of message recipients by using regular expressions. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="RegularExpression"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="RegularExpression1";AttributeName2="RegularExpression2";...AttributeNameN="RegularExpressionN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs

> Applicable: Security & Compliance

The ExceptIfRecipientDomainIs parameter specifies an exception for the DLP rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderADAttributeContainsWords

> Applicable: Security & Compliance

The ExceptIfSenderADAttributeContainsWords parameter specifies an exception for the DLP rule that looks for words in Active Directory attributes of message senders. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="Word"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="Word1";AttributeName2="Word2";...AttributeNameN="WordN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderADAttributeMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfSenderADAttributeMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in Active Directory attributes of message senders by using regular expressions. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="RegularExpression"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="RegularExpression1";AttributeName2="RegularExpression2";...AttributeNameN="RegularExpressionN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderDomainIs

> Applicable: Security & Compliance

The ExceptIfSenderDomainIs parameter specifies an exception for the DLP rule that looks for messages from senders with email address in the specified domains. You can specify multiple values separated by commas.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderIPRanges

> Applicable: Security & Compliance

The ExceptIfSenderIpRanges parameter specifies an exception for the DLP rule that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo

> Applicable: Security & Compliance

The ExceptIfSentTo parameter specifies an exception for the DLP rule that looks for recipients in messages. You identify the recipients by email address. You can specify multiple values separated by commas.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf

> Applicable: Security & Compliance

The ExceptIfSentToMemberOf parameter specifies an exception for the DLP rule that looks for messages sent to members of distribution groups, dynamic distribution groups, or mail-enabled security groups. You identify the groups by email address. You can specify multiple values separated by commas.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectContainsWords

> Applicable: Security & Compliance

The ExceptIfSubjectContainsWords parameter specifies an exception for the DLP rule that looks for words or phrases in the Subject field of messages. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfSubjectMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyContainsWords

> Applicable: Security & Compliance

The ExceptIfSubjectOrBodyContainsWords parameter specifies an exception for the rule that looks for words in the Subject field or body of messages.

To specify multiple words or phrases, this parameter uses the syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: <MultiValuedProperty>
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfSubjectOrBodyMatchesPatterns parameter specifies an exception for the rule that looks for text patterns in the Subject field or body of messages. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: <MultiValuedProperty>
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfUnscannableDocumentExtensionIs

> Applicable: Security & Compliance

The ExceptIfUnscannableDocumentExtensionIs parameter specifies an exception for the rule that looks for the specified true file extension when the files aren't scannable. Irrespective of what the original file type is, this predicate matches based on the extension that is present in the name of the file.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithImportance

> Applicable: Security & Compliance

The ExceptIfWithImportance parameter specifies an exception for the rule that looks for messages with the specified importance level. Valid values are:

- Low
- Normal
- High

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.WithImportance
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpiryDate

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From

> Applicable: Security & Compliance

The From parameter specifies a condition for the DLP rule that looks for messages from specific senders. You identify the senders by email address. You can specify multiple values separated by commas.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords

> Applicable: Security & Compliance

The FromAddressContainsWords parameter specifies a condition for the DLP rule that looks for words or phrases in the sender's email address. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word length is 128 characters. The maximum number of words or phrases is 50.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressMatchesPatterns

> Applicable: Security & Compliance

The FromAddressMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromMemberOf

> Applicable: Security & Compliance

The FromMemberOf parameter specifies a condition for the DLP rule that looks for messages sent by group members. You identify the group by its email address.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromScope

> Applicable: Security & Compliance

The FromScope parameter specifies a condition for the rule that looks for the location of message senders. Valid values are:

- InOrganization: The sender is a mailbox, mail user, group, or mail-enabled public folder in your organization or The sender's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain.
- NotInOrganization: The sender's email address isn't in an accepted domain or the sender's email address is in an accepted domain that's configured as an external relay domain.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.FromScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateAlert

> Applicable: Security & Compliance

The GenerateAlert parameter specifies an action for the DLP rule that notifies the specified users when the conditions of the rule are met. Valid values are:

- An email address.
- SiteAdmin

You can specify multiple values separated by commas.

The email message that's generated by this action contains a link to detailed information in the Microsoft Purview compliance portal (the details aren't in the email message itself).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateIncidentReport

> Applicable: Security & Compliance

The GenerateIncidentReport parameter specifies an action for the DLP rule that sends an incident report to the specified users when the conditions of the rule are met. Valid values are:

- An email address.
- SiteAdmin

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasSenderOverride

> Applicable: Security & Compliance

The SenderOverride parameter specifies a condition for the rule that looks for messages where the sender chose to override a DLP policy. Valid values are:

- $true: Look for messages where the sender took action to override a DLP policy.
- $false: Don't look for messages where the sender took action to override a DLP policy.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsWords

> Applicable: Security & Compliance

The HeaderContainsWords parameter specifies a condition for the DLP rule that looks for words in a header field.

To specify multiple words or phrases, this parameter uses the syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderMatchesPatterns

> Applicable: Security & Compliance

The HeaderMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmutableId

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncidentReportContent

> Applicable: Security & Compliance

The IncidentReportContent parameter specifies the content to include in the report when you use the GenerateIncidentReport parameter. Valid values are:

- All
- Default
- DetectionDetails
- Detections
- DocumentAuthor
- DocumentLastModifier
- MatchedItem
- OriginalContent
- RulesMatched
- Service
- Severity
- Title

You can specify multiple values separated by commas. You can only use the value "All" by itself. If you use the value "Default", the report includes the following content:

- DocumentAuthor
- MatchedItem
- RulesMatched
- Service
- Title

Therefore, any additional values that you use with the value "Default" are ignored.

```yaml
Type: ReportContentOption[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageIsNotLabeled

> Applicable: Security & Compliance

{{ Fill MessageIsNotLabeled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageSizeOver

> Applicable: Security & Compliance

The MessageSizeOver parameter specifies a condition for the DLP rule that looks for messages larger than the specified size. The size include the message and all attachments.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTypeMatches

> Applicable: Security & Compliance

The MessageTypeMatches parameter specifies a condition for the rule that looks for messages of the specified type. Valid values are:

- ApprovalRequest: Moderation request messages sent to moderators.
- AutomaticForward: Messages automatically forwarded to an alternative recipient (by Exchange, not by auto-forwarding rules that users configure in Outlook on the web or Outlook).
- AutomaticReply: Out of office (OOF) messages configured by the user.
- Calendaring: Meeting requests and responses.
- Encrypted: S/MIME encrypted messages.
- PermissionControlled: Messages protected with Rights Management, Office 365 Message Encryption (OME), and sensitivity labels (with encryption).
- ReadReceipt: Read receipts.
- Signed: Digitally signed messages.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MessageTypes
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MipRestrictAccess

> Applicable: Security & Compliance

{{ Fill MipRestrictAccess Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Moderate

> Applicable: Security & Compliance

The Moderate parameter specifies an action for the DLP rule that sends the email message to a moderator. This parameter uses the syntax: `@{ModerateMessageByManager = <$true | $false>; ModerateMessageByUser = "emailaddress1,emailaddress2,...emailaddressN"}`.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModifySubject

> Applicable: Security & Compliance

The ModifySubject parameter uses regular expressions to find text patterns in the subject of the email message, and then modifies the subject with the text that you specify. This parameter uses the syntax: `@{Patterns="RegEx1","RegEx2",..."RegEx10}"; SubjectText="Replacement Text"; ReplaceStrategy="Value"}`.

The `ReplaceStrategy=` property uses one of the following values:

- Replace: Replaces all regular expression matches (the `Patterns=` value) in the subject with the `SubjectText=` value.
- Append: Removes all regular expression matches (the `Patterns=` value) in the subject and inserts the `SubjectText=` value at the end of the subject.
- Prepend: Removes all regular expression matches (the `Patterns=` value) and inserts the `SubjectText=` value at the beginning of the subject.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

```yaml
Type: PswsHashtable
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NonBifurcatingAccessScope

> Applicable: Security & Compliance

The NonBifurcatingAccessScope parameter specifies a condition for the DLP rule that looks for recipients in the specified access scope. The rule is applied to all copies of the message. Valid values are:

- HasInternal: At least one recipient is inside the organization.
- HasExternal: At least one recipient is outside the organization.
- None: The condition isn't used.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.NonBifurcatingAccessScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyAllowOverride

> Applicable: Security & Compliance

The NotifyAllowOverride parameter specifies the notification override options when the conditions of the rule are met. Valid values are:

- FalsePositive: Allows overrides in the case of false positives.
- WithAcknowledgement: Allows overrides with explicit user acknowledgement. (Exchange only)
- WithoutJustification: Allows overrides without justification.
- WithJustification: Allows overrides with justification.

You can specify multiple values separated by commas. The values WithoutJustification and WithJustification are mutually exclusive.

```yaml
Type: OverrideOption[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmailCustomSenderDisplayName

> Applicable: Security & Compliance

{{ Fill NotifyEmailCustomSenderDisplayName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmailCustomSubject

> Applicable: Security & Compliance

The NotifyEmailCustomSubject parameter specifies the custom text in the subject line of email notification message that's sent to recipients when the conditions of the rule are met.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmailCustomText

> Applicable: Security & Compliance

The NotifyEmailCustomText parameter specifies the custom text in the email notification message that's sent to recipients when the conditions of the rule are met.

This parameter has a 5000 character limit, and supports plain text, HTML tags, and the following tokens (variables):

- %%AppliedActions%%: The actions applied to the content.
- %%ContentURL%%: The URL of the document on the SharePoint site or OneDrive site.
- %%MatchedConditions%%: The conditions that were matched by the content. Use this token to inform people of possible issues with the content.
- %%BlockedMessageInfo%%: The details of the message that was blocked. Use this token to inform people of the details of the message that was blocked.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmailExchangeIncludeAttachment

> Applicable: Security & Compliance

{{ Fill NotifyEmailExchangeIncludeAttachment Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmailOnedriveRemediationActions

> Applicable: Security & Compliance

{{ Fill NotifyEmailOnedriveRemediationActions Description }}

```yaml
Type: NotifyEmailRemediationActions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyOverrideRequirements

> Applicable: Security & Compliance

{{ Fill NotifyOverrideRequirements Description }}

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicyOverrideRequirements
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyPolicyTipCustomDialog

> Applicable: Security & Compliance

{{ Fill NotifyPolicyTipCustomDialog Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyPolicyTipCustomText

> Applicable: Security & Compliance

The NotifyPolicyTipCustomText parameter specifies the custom text in the Policy Tip notification message that's shown to recipients when the conditions of the rule are met. The maximum length is 256 characters. HTML tags and tokens (variables) aren't supported.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyPolicyTipCustomTextTranslations

> Applicable: Security & Compliance

The NotifyPolicyTipCustomTextTranslations parameter specifies the localized policy tip text that's shown when the conditions of the rule are met, based on the client settings. This parameter uses the syntax `CultureCode:Text`.

Valid culture codes are supported values from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

To enter multiple values, use the following syntax: `"Value1","Value2",..."ValueN"`. For example: `"en:PolicyTipInEnglish","zh:警告：这个文件含有非法内容","th:คำแนะนำนโยบายในไทย"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyPolicyTipDisplayOption

> Applicable: Security & Compliance

The NotifyPolicyTipDialogOption parameter specifies a display option for the policy tip. Valid values are:

- Tip: Displays policy tip at the top of the mail. This value is the default.
- Dialog: Displays policy tip at the top of the mail and as a popup dialog. (exchange only)

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicyTipDisplayOption
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyPolicyTipUrl

> Applicable: Security & Compliance

The NotifyPolicyTipUrl parameter specifies the URL in the popup dialog for Exchange workloads. This URL value has priority over the global: `Set-PolicyConfig -ComplianceUrl`.

```yaml
Type: String
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUser

> Applicable: Security & Compliance

The NotifyUser parameter specifies an action for the DLP rule that notifies the specified users when the conditions of the rule are met. Valid values are:

- An email address.
- LastModifier
- Owner
- SiteAdmin

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUserType

> Applicable: Security & Compliance

The NotifyUserType parameter specifies the type of notification that's used for the rule. Valid values are:

- NotSet
- Email
- PolicyTip
- Email,PolicyTip

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.NotifyUserType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremisesScannerDlpRestrictions

> Applicable: Security & Compliance

{{ Fill OnPremisesScannerDlpRestrictions Description }}

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrependSubject

> Applicable: Security & Compliance

The PrependSubject parameter specifies an action for the rule that adds text to add to the beginning of the Subject field of messages. The value for this parameter is text that you specify. If the text contains spaces, enclose the value in quotation marks (").

Consider ending the value for this parameter with a colon (:) and a space, or at least a space, to separate it from the original subject.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority

> Applicable: Security & Compliance

The Priority parameter specifies a priority value for the rule that determines the order of rule processing within the policy. A lower integer value indicates a higher priority, the value 0 is the highest priority, and rules can't have the same priority value.

Valid values and the default value for this parameter depend on the number of existing rules in the policy. For example, if there are 8 existing rules:

- Valid priority values for the existing 8 rules are from 0 through 7.
- Valid priority values for a new 9th rule that you add to the policy are from 0 through 8.
- The default value for a new 9th rule that you add to the policy is 8.

If you modify the priority value of a rule, the position of the rule in the list changes to match the priority value you specify. In other words, if you set the priority value of a rule to the same value as an existing rule, the priority value of the existing rule and all other lower priority rules after it is increased by 1.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessingLimitExceeded

> Applicable: Security & Compliance

The ProcessingLimitExceeded parameter specifies a condition for the DLP rule that looks for files where scanning couldn't complete. You can use this condition to create rules that work together to identify and process messages where the content couldn't be fully scanned. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Quarantine

> Applicable: Security & Compliance

This parameter specifies an action or part of an action for the rule.

The Quarantine parameter specifies an action that quarantines messages. Valid values are:

- $true: The message is delivered to the hosted quarantine.
- $false: The message is not quarantined.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientADAttributeContainsWords

> Applicable: Security & Compliance

The RecipientADAttributeContainsWords parameter specifies a condition for the DLP rule that looks for words in Active Directory attributes of message recipients. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="Word"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="Word1";AttributeName2="Word2";...AttributeNameN="WordN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientADAttributeMatchesPatterns

> Applicable: Security & Compliance

The RecipientADAttributeMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in Active Directory attributes of message recipients by using regular expressions. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="RegularExpression"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="RegularExpression1";AttributeName2="RegularExpression2";...AttributeNameN="RegularExpressionN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs

> Applicable: Security & Compliance

The RecipientDomainIs parameter specifies a condition for the DLP rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectMessageTo

> Applicable: Security & Compliance

The RedirectMessageTo parameter specifies an action for the DLP rule that redirects the message to the specified email address. You can specify multiple values separated by commas.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveHeader

> Applicable: Security & Compliance

The RemoveHeader parameter specifies an action for the DLP rule that removes a header field from the message header. This parameter uses the syntax `HeaderName` or `"HeaderName:HeaderValue"`.You can specify multiple header names or header name and value pairs separated by commas: `HeaderName1,"HeaderName2:HeaderValue2",HeaderName3,..."HeaderNameN:HeaderValueN"`.

The maximum header name length is 64 characters, and header names can't contains spaces or colons ( : ). The maximum header value length is 128 characters.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveRMSTemplate

> Applicable: Security & Compliance

The RemoveRMSTemplate parameter specifies an action for the DLP rule that removes Microsoft Purview Message Encryption from messages and their attachments. Valid values are:

- $true: The message and attachments are decrypted.
- $False: The messages and attachments are not decrypted.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportSeverityLevel

> Applicable: Security & Compliance

The ReportSeverityLevel parameter specifies the severity level of the incident report for content detections based on the rule. Valid values are:

- None: You can't select this value if the rule has no actions configured.
- Low: This value is the default.
- Medium
- High

```yaml
Type: RuleSeverity
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictAccess

> Applicable: Security & Compliance

{{ Fill RestrictAccess Description }}

```yaml
Type: System.Collections.Hashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleErrorAction

> Applicable: Security & Compliance

The RuleErrorAction parameter specifies what to do if an error is encountered during the evaluation of the rule. Valid values are:

- Ignore
- RetryThenBlock
- Blank (the value $null): This value is the default.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicyRuleErrorAction
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderADAttributeContainsWords

> Applicable: Security & Compliance

The SenderADAttributeContainsWords parameter specifies a condition for the DLP rule that looks for words in Active Directory attributes of message senders. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="Word"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="Word1";AttributeName2="Word2";...AttributeNameN="WordN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderADAttributeMatchesPatterns

> Applicable: Security & Compliance

The SenderADAttributeMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in Active Directory attributes of message senders by using regular expressions. You can use any of the following Active Directory attributes:

- City
- Company
- Country or Region
- CustomAttribute1 to CustomAttribute15
- Department
- DisplayName
- Email Addresses
- Fax
- FirstName
- HomePhoneNumber
- Initials
- LastName
- Manager
- Mobile Phone
- Notes
- Office
- OtherFax
- OtherHomePhone
- Other Telephone
- Pager
- Phone
- Post Office Box
- State or Province
- Street Address
- Title
- UserLogonName
- Postal Code

This parameter uses the syntax: `@{AttributeName="RegularExpression"}`. To specify multiple attributes, use the following syntax: `@{AttributeName1="RegularExpression1";AttributeName2="RegularExpression2";...AttributeNameN="RegularExpressionN"}`. Don't use words with leading or trailing spaces.

When you specify multiple attributes, the OR operator is used.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderAddressLocation

> Applicable: Security & Compliance

The SenderAddressLocation parameter specifies where to look for sender addresses in conditions and exceptions that examine sender email addresses. Valid values are:

- Header: Only examine senders in the message headers (the From field). This value is the default.
- Envelope: Only examine senders from the message envelope (the MAIL FROM value used in SMTP message transmission, which is typically stored in the Return-Path field).
- HeaderOrEnvelope: Examine senders in the message header (the From field) and the message envelope (the Return-Path field).

Message envelope searching is available only for the following conditions and exceptions:

- From and ExceptIfFrom
- FromAddressContainsWords and ExceptIfFromAddressContainsWords
- FromAddressMatchesPatterns and ExceptIfFromAddressMatchesPatterns
- FromMemberOf and ExceptIfFromMemberOf
- SenderDomainIs and ExceptIfSenderDomainIs

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicySenderAddressLocation
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomainIs

> Applicable: Security & Compliance

The SenderDomainIs parameter specifies a condition for the DLP rule that looks for messages from senders with email address in the specified domains. You can specify multiple values separated by commas.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderIPRanges

> Applicable: Security & Compliance

The SenderIpRanges parameter specifies a condition for the DLP rule that looks for senders whose IP addresses matches the specified value or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo

> Applicable: Security & Compliance

The SentTo parameter specifies a condition for the DLP rule that looks for recipients in messages. You identify the recipients by email address. You can specify multiple values separated by commas.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf

> Applicable: Security & Compliance

The SentToMemberOf parameter specifies a condition for the DLP rule that looks for messages sent to members of distribution groups, dynamic distribution groups, or mail-enabled security groups. You identify the groups by email address. You can specify multiple values separated by commas.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetHeader

> Applicable: Security & Compliance

The SetHeader parameter specifies an action for the DLP rule that adds or modifies a header field and value in the message header. This parameter uses the syntax `"HeaderName:HeaderValue"`. You can specify multiple header name and value pairs separated by commas: `"HeaderName1:HeaderValue1",HeaderName2:HeaderValue2",..."HeaderNameN:HeaderValueN"`.

The maximum header name length is 64 characters, and header names can't contains spaces or colons ( : ). The maximum header value length is 128 characters.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharedByIRMUserRisk

> Applicable: Security & Compliance

The SharedByIRMUserRisk parameter specifies the risk category of the user performing the violating action. Valid values are:

- FCB9FA93-6269-4ACF-A756-832E79B36A2A (Elevated Risk Level)
- 797C4446-5C73-484F-8E58-0CCA08D6DF6C (Moderate Risk Level)
- 75A4318B-94A2-4323-BA42-2CA6DB29AAFE (Minor Risk Level)

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopPolicyProcessing

> Applicable: Security & Compliance

The StopPolicyProcessing parameter specifies an action that stops processing more DLP policy rules. Valid values are:

- $true: Stop processing more rules.
- $false: Continue processing more rules after this one.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContainsWords

> Applicable: Security & Compliance

The SubjectContainsWords parameter specifies a condition for the DLP rule that looks for words or phrases in the Subject field of messages. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectMatchesPatterns

> Applicable: Security & Compliance

The SubjectMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 300.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyContainsWords

> Applicable: Security & Compliance

The SubjectOrBodyContainsWords parameter specifies a condition for the rule that looks for words in the Subject field or body of messages.

To specify multiple words or phrases, this parameter uses the syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: <MultiValuedProperty>
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyMatchesPatterns

> Applicable: Security & Compliance

The SubjectOrBodyMatchesPatterns parameter specifies a condition for the rule that looks for text patterns in the Subject field or body of messages. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: <MultiValuedProperty>
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TriggerPowerAutomateFlow

> Applicable: Security & Compliance

{{ Fill TriggerPowerAutomateFlow Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnscannableDocumentExtensionIs

> Applicable: Security & Compliance

The UnscannableDocumentExtensionIs parameter specifies a condition for the rule that looks for the specified true file extension when the files aren't scannable. Irrespective of the original file type, this predicate matches based on the extension that is present in the name of the file.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidateRule

> Applicable: Security & Compliance

{{ Fill ValidateRule Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithImportance

> Applicable: Security & Compliance

The WithImportance parameter specifies a condition for the rule that looks for messages with the specified importance level. Valid values are:

- Low
- Normal
- High

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.WithImportance
Parameter Sets: (All)
Aliases:

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
