---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-reportsubmissionrule
applicable: Exchange Online
title: Set-ReportSubmissionRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-ReportSubmissionRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ReportSubmissionRule cmdlet to modify the report submission rule in your cloud-based organization. The report submission rule identifies the user submissions mailbox (where to deliver user reported messages).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ReportSubmissionRule [-Identity] <RuleIdParameter>
 [-Comments <String>]
 [-Confirm]
 [-Name <String>]
 [-ReportSubmissionPolicy <ReportSubmissionPolicyIdParameter>]
 [-SentTo <RecipientIdParameter[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The SentTo parameter identifies the email address of the user submissions mailbox.

If you set the email address of the user submissions mailbox in the Microsoft 365 Defender portal at <https://security.microsoft.com/userSubmissionsReportMessage>, the same email address is also set in the *\-ReportSubmissionPolicy cmdlets:

- Microsoft integrated reporting: The ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhishAddresses parameters.
- Third-party tools: The ThirdPartyReportAddresses parameter.

When you use this cmdlet to set the email address of the user submissions mailbox, the corresponding parameters in the *\-ReportSubmissionPolicy cmdlets are not updated.


You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ReportSubmissionRule -Identity DefaultReportSubmissionRule -SentTo "userreportedmessages@contoso.com"
```

This example changes the user submissions mailbox to userreportedmessages@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the report submission rule that you want to modify. The default rule is named DefaultReportSubmissionRule.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Comments
The Comments parameter specifies informative comments for the rule, such as what the rule is used for or how it has changed over time. The length of the comment can't exceed 1024 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the report submission rule. When the rule is automatically created, the name of the rule is DefaultReportSubmissionRule. We recommend using this value to avoid confusion.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportSubmissionPolicy
The ReportSubmissionPolicy parameter specifies the report submission policy that's associated with this rule. The only available policy is named DefaultReportSubmissionPolicy.

```yaml
Type: ReportSubmissionPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
The SentTo parameter specifies the email address of the user submissions mailbox that you want to use. User reported messages are sent to the user submissions mailbox.

The value of this parameter is meaningful only if user reporting to a user submissions mailbox is enabled in the \*-ReportSubmissionPolicy cmdlets:

- Microsoft integrated reporting: `-EnableThirdPartyAddress $false`, `-ReportJunkToCustomizedAddress $true`, `-ReportNotJunkToCustomizedAddress $true`, and `-ReportPhishToCustomizedAddress $true`.
- A third-party product: `-EnableReportToMicrosoft $false`, `-EnableThirdPartyAddress $true`, `-ReportJunkToCustomizedAddress $false`, `-ReportNotJunkToCustomizedAddress $false`, and `-ReportPhishToCustomizedAddress $false`.

If you set the email address of the user submissions mailbox in the Microsoft 365 Defender portal at <https://security.microsoft.com/userSubmissionsReportMessage>, the following parameters in the *\-ReportSubmissionPolicy cmdlets are set to the same value:

- Microsoft integrated reporting: ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhishAddresses (all three must be the same value).
- A third-party product: ThirdPartyReportAddresses.

When you use this cmdlet to set the email address of the user submissions mailbox, the related parameter values in the *\-ReportSubmissionPolicy cmdlets are not updated. But, that doesn't matter, because only the value of the SentTo parameter specifies the email address of the user submissions mailbox. You can update the related values in the \*-ReportSubmissionPolicy cmdlets for consistency and to avoid confusion.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online

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
