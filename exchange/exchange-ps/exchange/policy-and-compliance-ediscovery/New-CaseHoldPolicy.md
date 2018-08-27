---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-CaseHoldPolicy
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# New-CaseHoldPolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-CaseHoldPolicy cmdlet to create new case hold policies in the Security & Compliance Center.

After you use the New-CaseHoldPolicy cmdlet to create a case hold policy, you need to use the New-CaseHoldRule cmdlet to create a case hold rule and assign the rule to the policy. If you don't create a rule for the policy, the hold won't be created, and content locations won't be placed on hold.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-CaseHoldPolicy [-Name] <String> -Case <String> [-Comment <String>] [-Confirm] [-Enabled <$true | $false>]
 [-ExchangeLocation <MultiValuedProperty>] [-Force] [-PublicFolderLocation <MultiValuedProperty>]
 [-SharePointLocation <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CaseHoldPolicy -Name "Regulation 123 Compliance" -Case "123 Compliance Case" -ExchangeLocation "Kitty Petersen", "Scott Nakamura" -SharePointLocation "http://contoso.sharepoint.com/sites/teams/finance"
```

This example creates a case hold policy named "Regulation 123 Compliance" for the mailboxes of Kitty Petersen and Scott Nakamura, and the finance SharePoint Online site for the eDiscovery case named "123 Compliance Case".

Remember, after you create the policy, you need to create a rule for the policy by using the New-CaseHoldRule cmdlet.

## PARAMETERS

### -Case
The Case parameter specifies the eDiscovery case that you want to associate with the case hold policy. You can use the following values to identify the eDiscovery case:

- Name

- Identity (GUID value).

You can find these values by running the command: Get-ComplianceCase | Format-Table -Auto Name,Status,Identity.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name of the case hold policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
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

### -Enabled
The Enabled parameter specifies whether the policy is enabled or disabled. Valid values are:

- $true: The policy is enabled. This is the default value.

- $false: The policy is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeLocation
The ExchangeLocation parameter specifies the mailboxes to include in the policy. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

If no mailboxes are specified, then no mailboxes are placed on hold.

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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

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

### -PublicFolderLocation
The PublicFolderLocation parameter specifies that you want to include all public folders in the case hold policy. You use the value All for this parameter.

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

### -SharePointLocation
The SharePointLocation parameter specifies the SharePoint Online and OneDrive for Business sites to include. You identify a site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

Sites can't be added to the policy until they have been indexed. If no sites are specified, then no sites are placed on hold.

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

[Online Version](https://technet.microsoft.com/library/22daa8d4-9800-4b64-a085-95fac12df5b0.aspx)
