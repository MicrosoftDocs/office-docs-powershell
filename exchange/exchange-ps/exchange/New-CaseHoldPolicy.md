---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-caseholdpolicy
applicable: Security & Compliance
title: New-CaseHoldPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-CaseHoldPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-CaseHoldPolicy cmdlet to create new case hold policies in the Microsoft Purview compliance portal.

> [!NOTE]
> After you use the New-CaseHoldPolicy cmdlet to create a case hold policy, you need to use the New-CaseHoldRule cmdlet to create a case hold rule and assign the rule to the policy. **If you don't create a rule for the policy, the hold won't be created, and content locations won't be placed on hold**.
>
> Running this cmdlet causes a full synchronization across your organization, which is a significant operation. If you need to create multiple policies, wait until the policy distribution is successful before running the cmdlet again for the next policy. For information about the distribution status, see [Get-CaseHoldPolicy](https://learn.microsoft.com/powershell/module/exchange/get-caseholdpolicy).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-CaseHoldPolicy [-Name] <String> -Case <String>
 [-Comment <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-ExchangeLocation <MultiValuedProperty>]
 [-Force]
 [-PublicFolderLocation <MultiValuedProperty>]
 [-SharePointLocation <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-CaseHoldPolicy -Name "Regulation 123 Compliance" -Case "123 Compliance Case" -ExchangeLocation "Kitty Petersen", "Scott Nakamura" -SharePointLocation "https://contoso.sharepoint.com/sites/teams/finance"
```

This example creates a case hold policy named "Regulation 123 Compliance" for the mailboxes of Kitty Petersen and Scott Nakamura, and the finance SharePoint Online site for the eDiscovery case named "123 Compliance Case".

Remember, after you create the policy, you need to create a rule for the policy by using the New-CaseHoldRule cmdlet.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the case hold policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Case
The Case parameter specifies the eDiscovery case that you want to associate with the case hold policy. You can use the following values to identify the eDiscovery case:

- Name
- Identity (GUID value).

You can find these values by running the command: Get-ComplianceCase | Format-Table -Auto Name,Status,Identity.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
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

### -Enabled
The Enabled parameter specifies whether the policy is enabled or disabled. Valid values are:

- $true: The policy is enabled. This is the default value.
- $false: The policy is disabled.

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

### -ExchangeLocation
The ExchangeLocation parameter specifies the mailboxes to include in the policy. Valid values are:

- A mailbox
- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

To specify a mailbox or distribution group, you can use the following values:

- Name
- SMTP address. To specify an inactive mailbox, precede the address with a period (.).
- Microsoft Entra ObjectId. Use the [Get-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/get-mguser) or [Get-MgGroup](https://learn.microsoft.com/powershell/module/microsoft.graph.groups/get-mggroup) cmdlets in Microsoft Graph PowerShell to find this value.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

If no mailboxes are specified, then no mailboxes are placed on hold.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointLocation
The SharePointLocation parameter specifies the SharePoint Online and OneDrive for Business sites to include. You identify a site by its URL value.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

Sites can't be added to the policy until they have been indexed. If no sites are specified, then no sites are placed on hold.

```yaml
Type: MultiValuedProperty
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
