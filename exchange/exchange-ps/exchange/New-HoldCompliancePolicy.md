---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-holdcompliancepolicy
applicable: Office 365 Security & Compliance Center
title: New-HoldCompliancePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-HoldCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the New-HoldCompliancePolicy cmdlet to create new preservation policies in the Security & Compliance Center.

Note: The New-HoldCompliancePolicy cmdlet has been replaced by the New-RetentionCompliancePolicy cmdlet. If you have scripts that use New-HoldCompliancePolicy, update them to use New-RetentionCompliancePolicy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-HoldCompliancePolicy [-Name] <String> [-Comment <String>] [-Confirm] [-Enabled <Boolean>]
 [-ExchangeLocation <MultiValuedProperty>] [-Force] [-PublicFolderLocation <MultiValuedProperty>]
 [-SharePointLocation <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
New policies are not valid and will not be applied until a preservation rule is added to the policy.

You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
New-HoldCompliancePolicy -Name "Regulation 123 Compliance" -ExchangeLocation "Kitty Petersen", "Scott Nakamura" -SharePointLocation "https://contoso.sharepoint.com/sites/teams/finance"
```

This example creates a preservation policy named "Regulation 123 Compliance" for the mailboxes of Kitty Petersen and Scott Nakamura, and the finance SharePoint Online site.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the preservation policy. If the value contains spaces, enclose the value in quotation marks.

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
The PublicFolderLocation parameter specifies that you want to include all public folders in the preservation policy. You use the value All for this parameter.

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
The SharePointLocation parameter specifies the SharePoint Online sites to include. You identify the site by its URL value, or you can use the value All to include all sites.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

SharePoint Online sites can't be added to the policy until they have been indexed. If no sites are specified, then no sites are placed on hold.

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
The WhatIf switch doesn't work in Office 365 Security & Compliance Center PowerShell.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
