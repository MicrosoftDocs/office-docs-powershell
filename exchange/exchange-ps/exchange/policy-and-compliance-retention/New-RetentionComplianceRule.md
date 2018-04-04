---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-RetentionComplianceRule
schema: 2.0.0
---

# New-RetentionComplianceRule

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-RetentionComplianceRule cmdlet to create new retention rules in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-RetentionComplianceRule -ApplyComplianceTag <String> -Policy <PolicyIdParameter> [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>] [-ContentMatchQuery <String>]
 [-ExpirationDateOption <String>] [-RetentionComplianceAction <String>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
New-RetentionComplianceRule [-Name] <String> -Policy <PolicyIdParameter> [-Comment <String>] [-Confirm]
 [-ContentMatchQuery <String>] [-ExcludedItemClasses <MultiValuedProperty>] [-ExpirationDateOption <String>]
 [-RetentionComplianceAction <String>] [-RetentionDuration <Unlimited>]
 [-RetentionDurationDisplayHint <Days | Months | Years>] [-WhatIf] [<CommonParameters>]
```

### Set3
```
New-RetentionComplianceRule -Policy <PolicyIdParameter> -PublishComplianceTag <String> [-Confirm]
 [-ExpirationDateOption <String>] [-RetentionComplianceAction <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The retention rule must be added to an existing retention policy using the Policy parameter. Only one rule can be added to each retention policy.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
New-RetentionComplianceRule -Name SeptOneYear -Policy "Internal Company Policy" -RetentionDuration Unlimited
```

This example creates a new retention rule named SeptOneYear and adds it to the existing retention policy named "Internal Company Policy". Content will be held indefinitely.

## PARAMETERS

### -ApplyComplianceTag
The ApplyComplianceTag parameter specifies the label that's applied to email messages or documents by the rule (which affects how long the content is retained). A valid value for this parameter is the name of an existing label. If the value contains spaces, enclose the value in quotation marks.

You view and create labels by using the Get-ComplianceTag and New-ComplianceTag cmdlets.

You can't use this parameter with the Name or PublishComplianceTag parameters.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the retention rule. If the value contains spaces, enclose the value in quotation marks.

You can't use this parameter with the ApplyComplianceTag or PublishComplianceTag parameters.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the policy to contain the rule.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishComplianceTag
The PublishComplianceTag parameter specifies the label that's published for the rule, which makes the label visible to users in apps (for example, Outlook, SharePoint, and OneDrive). A valid value for this parameter is the name of an existing label. If the value contains spaces, enclose the value in quotation marks.

You view and create labels by using the Get-ComplianceTag and New-ComplianceTag cmdlets.

You can't use this parameter with the Name or ApplyComplianceTag parameters.

```yaml
Type: String
Parameter Sets: Set3
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: Set1
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

Use the Get-DLPSensitiveInformationType cmdlet to list the sensitive information types for your organization. For more information on sensitive information types, see Sensitive information types inventory (https://go.microsoft.com/fwlink/p/?LinkId=529420).

You can use this parameter with the ApplyComplianceTag parameter.

```yaml
Type: PswsHashtable[]
Parameter Sets: Set2
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentMatchQuery
The ContentMatchQuery parameter specifies a content search filter.

This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information about KQL, see Keyword Query Language syntax reference (https://go.microsoft.com/fwlink/p/?linkid=269603).

```yaml
Type: String
Parameter Sets: Set2, Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedItemClasses
The ExcludedItemClasses parameter specifies the types of messages to exclude from the rule. Typically, you use this parameter to exclude voicemail messages, IM conversations, and other Skype for Business Online content in mailboxes. Common Skype for Business values include:

- IPM.Note.Microsoft.Conversation

- IPM.Note.Microsoft.Conversation.Voice

- IPM.Note.Microsoft.Missed

- IPM.Note.Microsoft.Missed.Voice

- IPM.Note.Microsoft.Voicemail

- IPM.Note.Microsoft.VoiceMessage.UA

- IPM.Note.Microsoft.Voicemail.UM

- IPM.Note.Microsoft.Voicemail.UM.CA

You can specify multiple item class values by using the syntax "Value1","Value2",..."ValueN".

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpirationDateOption
The ExpirationDateOption parameter specifies whether the expiration date is calculated from the content creation date or last modification date. Valid values are:

- CreationAgeInDays

- ModificationAgeInDays

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

### -RetentionComplianceAction
The RetentionComplianceAction parameter specifies the retention action for the rule. Valid values are:

- Delete

- Keep

- KeepAndDelete

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

### -RetentionDuration
The RetentionDuration parameter specifies the hold duration for the retention rule. Valid values are:

- An integer: The hold duration in days.

- Unlimited: The content is held indefinitely.

```yaml
Type: Unlimited
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionDurationDisplayHint
The RetentionDurationDisplayHint parameter specifies the units that are used to display the retention duration in the Security & Compliance Center. Valid values are:

- Days

- Months

- Years

For example, if this parameter is set to the value Years, and the RetentionDuration parameter is set to the value 365, the Security & Compliance Center will display 1 year as the content hold duration.

```yaml
Type: Days | Months | Years
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/9ad613ff-dbb4-4a86-9f4c-ab212e68603a.aspx)

