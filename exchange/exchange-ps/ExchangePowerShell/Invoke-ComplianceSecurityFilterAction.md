---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/invoke-compliancesecurityfilteraction
schema: 2.0.0
title: Invoke-ComplianceSecurityFilterAction
---

# Invoke-ComplianceSecurityFilterAction

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Invoke-ComplianceSecurityFilterAction cmdlet to view and set compliance boundaries for Microsoft OneDrive sites in cloud-based organizations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Invoke-ComplianceSecurityFilterAction [-Action] <String> [[-EmailAddress] <String>] [-PropertyName] <String> [[-PropertyValue] <String>] [-SiteUrl] <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is useful in scenarios where the OneDrive site has fallen out of the compliance boundary due to a departed user and a corresponding inactive mailbox.

To use this cmdlet in Security & Compliance PowerShell, you need to be a member of the Compliance Administrator role group. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
PS C:\> Invoke-ComplianceSecurityFilterAction -Action GetStatus -PropertyName CustomAttribute1 -SiteUrl https://contoso-my.sharepoint.com/personal/lila_contoso_onmicrosoft_com/_layouts/15/onedrive.aspx

SiteUrlOrEmailAddress : https://contoso-my.sharepoint.com/personal/lila_contoso_onmicrosoft_com/_layouts/15/onedrive.aspx
BoundaryType          : UserMailbox
BoundaryInstruction   : Set via Set-Mailbox
BoundaryObjectId      : SPO_f82ace6e-817e-4752-8917-67164dabde98@SPO_775ea11f-a2af-7821-b04c-9848e903ce47
BoundaryStatus        : Success
BoundaryProperty      : CustomAttribute1
BoundaryPropertyValue :
```

This example returns the status of a OneDrive site to indicate it's associated to a user mailbox and the CustomAttribute1 property isn't currently set.

### Example 2
```powershell
PS C:\> Invoke-ComplianceSecurityFi1terAction -Action GetStatus -PropertyName "CustomAttribute3" -EmailAddress "nina@contoso.onmicrosoft.com"

SiteUrlOrEmailAddress : nina@contoso.onmicrosoft.com
BoundaryType          : UserMailbox
BoundaryInstruction   : Set via Set-Mailbox
BoundaryObjectId      : nina@contoso.onmicrosoft.com
BoundaryStatus        : Success
BoundaryProperty      : CustomAttribute3
BoundaryPropertyVa1ue :
```

This example returns the status of a mailbox to indicate the mailbox is inactive, and the CustomAttribute3 property isn't currently set.

### Example 3
```powershell
PS C:\> Invoke-ComplianceSecurityFi1terAction -Action GetStatus -PropertyName "CustomAttribute3" -EmailAddress "zhexuan@contoso.onmicrosoft.com"

SiteUrlOrEmailAddress : zhexuan@contoso.onmicrosoft.com
BoundaryType          : InactiveMailbox
BoundaryInstruction   : Set via Invoke-ComplianceSecurityFiIterAction -Set
BoundaryObjectId      : zhexuan@contoso.onmicrosoft.com
BoundaryStatus        : Success
BoundaryProperty      : CustomAttribute3
BoundaryPropertyVa1ue : test33
```

This example returns the status of a mailbox to indicate the mailbox is inactive, and the CustomAttribute3 property is currently set to test33.

### Example 4
```powershell
Invoke-ComplianceSecurityFilterAction -Action Set -PropertyName CustomAttribute1 -PropertyValue "Research and Development" -SiteUrl https://contoso-my.sharepoint.com/personal/lila_contoso_onmicrosoft_com/_layouts/15/onedrive.aspx
```

This example sets the boundary of the specified OneDrive site for a user who left the company.

### Example 5
```powershell
PS C:\> Invoke-ComplianceSecurityFiIterAction -Action Set -PropertyName "CustomAttribute3" -PropertyValue "ProjectX" -EmailAddress "zhexuan@contoso.onmicrosoft.com"

Set action succeeded, please use GetStatus to check the result.

PS C:\> Invoke-ComplianceSecurityFiIterAction -Action GetStatus -PropertyName "CustomAttribute3" -EmailAddress "zhexuan@contoso.onmicrosoft.com"

SiteUrlOrEmailAddress : zhexuan@contoso.onmicrosoft.com
BoundaryType          : InactiveMailbox
BoundaryInstruction   : Set via Invoke-ComplianceSecurityFiIterAction -Set
BoundaryObjectId      : zhexuan@contoso.onmicrosoft.com
BoundaryStatus        : Success
BoundaryProperty      : CustomAttribute3
BoundaryPropertyVa1ue : ProjectX
```

This example sets the boundary of the specified OneDrive site to the specified CustomAttribute3 property value, and runs another command to review the result.

## PARAMETERS

### -Action

> Applicable: Security & Compliance

The Action parameter specifies the action for the command. Valid values are:

- GetStatus
- Set

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

### -EmailAddress

> Applicable: Security & Compliance

The EmailAddress parameter specifies the the affected user mailbox. You can use the following values to uniquely identify the mailbox:

- Name
- Email address
- Alias
- ExchangeGUID

If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName

> Applicable: Security & Compliance

The PropertyName parameter specifies the name of the property of the compliance boundary for the OneDrive site that you want to view or modify. Valid values are:

- CustomAttribute1 to CustomAttribute15

Use the PropertyValue parameter to set the compliance boundary.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue

> Applicable: Security & Compliance

The PropertyValue parameter specifies the value of the PropertyName value when you use the Action parameter value Set to set the compliance boundary of a OneDrive site. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteUrl

> Applicable: Security & Compliance

The SiteUrl parameter specifies the OneDrive site that you want to view or modify. This parameter uses the syntax `https://<domain>-my.sharepoint.com/personal/<user>_<domain>_onmicrosoft_com/_layouts/15/onedrive.aspx`. For example: `https://contoso-my.sharepoint.com/personal/lila_contoso_onmicrosoft_com/_layouts/15/onedrive.aspx`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 5
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
