---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-CaseHoldPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Set-CaseHoldPolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-CaseHoldPolicy cmdlet to modify existing case hold policies in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### RetryDistribution
```
Set-CaseHoldPolicy [-Identity] <PolicyIdParameter> [-RetryDistribution]
 [-Confirm]
 [-UpdateStatistics]
 [-WhatIf] [<CommonParameters>]
```

### Identity
```
Set-CaseHoldPolicy [-Identity] <PolicyIdParameter>
 [-AddExchangeLocation <MultiValuedProperty>]
 [-AddPublicFolderLocation <MultiValuedProperty>]
 [-AddSharePointLocation <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-Enabled <$true | $false>] [-Force]
 [-RemoveExchangeLocation <MultiValuedProperty>]
 [-RemovePublicFolderLocation <MultiValuedProperty>]
 [-RemoveSharePointLocation <MultiValuedProperty>]
 [-UpdateStatistics]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CaseHoldPolicy -Identity "Regulation 123 Compliance" -AddExchangeLocation "Kitty Petersen" -AddSharePointLocation "http://contoso.sharepoint.com/sites/teams/finance" -RemovePublicFolderLocation All -Comment "Added new counsel, 9/9/14"
```

This example makes the following changes to the existing case hold policy named "Regulation 123 Compliance":

- Adds the mailbox for the user named Kitty Petersen.

- Adds the SharePoint Online site http://contoso.sharepoint.com/sites/teams/finance.

- Removes public folders.

- Updates the comment.

## PARAMETERS

### -Identity
The Identity parameter specifies the case hold policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RetryDistribution
The RetryDistribution switch specifies whether to redistribute the policy to all Exchange Online and SharePoint Online locations. Locations whose initial distributions succeeded aren't included in the retry. Policy distribution errors are reported when you use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RetryDistribution
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocation
The AddExchangeLocation parameter specifies the mailboxes to add to the list of included mailboxes. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddPublicFolderLocation
The AddPublicFolderLocation parameter specifies that you want to add all public folders to the case hold policy. You use the value All for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocation
The AddSharePointLocation parameter specifies the SharePoint Online sites to add to the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

SharePoint Online sites can't be added to the policy until they have been indexed.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
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
Parameter Sets: Identity
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

### -Enabled
The Enabled parameter specifies whether the policy is enabled. Valid values are:

- $true: The policy is enabled. This is the default value.

- $false: The policy is disabled.

```yaml
Type: $true | $false
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocation
The RemoveExchangeLocation parameter specifies the existing mailboxes to remove from the policy. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePublicFolderLocation
The RemovePublicFolderLocation parameter specifies that you want to remove all public folders from the case hold policy. You use the value All for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocation
The RemoveSharePointLocation parameter specifies the SharePoint Online sites to remove from the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateStatistics
The UpdateStatistics switch specifies whether you want to update the search results for the hold. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/54995117-7af8-4a6f-b2e7-be8eb78d34a4.aspx)
