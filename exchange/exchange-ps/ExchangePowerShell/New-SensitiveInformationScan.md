---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan
applicable: Security & Compliance
title: New-SensitiveInformationScan
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-SensitiveInformationScan

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-SensitiveInformationScan cmdlet to create new on-demand classification scans. Learn more about on-demand classifications at [On-demand classification](https://learn.microsoft.com/purview/on-demand-classification).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-SensitiveInformationScan [-Name] <String>
 [-Comment <String>]
 [-Confirm]
 [-EndpointDlpLocation <MultiValuedProperty>]
 [-EndpointDlpLocationException <MultiValuedProperty>]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-ExchangeLocation <MultiValuedProperty>]
 [-ExchangeSender <SmtpAddress[]>]
 [-ExchangeSenderException <SmtpAddress[]>]
 [-ExchangeSenderMemberOf <RecipientIdParameter[]>]
 [-ExchangeSenderMemberOfException <RecipientIdParameter[]>]
 [-OneDriveLocation <MultiValuedProperty>]
 [-OneDriveLocationException <MultiValuedProperty>]
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-SharePointLocation <MultiValuedProperty>]
 [-SharePointLocationException <MultiValuedProperty>]
 [-TeamsLocation <MultiValuedProperty>]
 [-TeamsLocationException <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-SensitiveInformationScan "SharePoint scan" -SharePointLocation All

New-SensitiveInformationScanRule "SharePoint scan rule" -ContentExtensionMatchesWords "pdf", "docx" -Policy "SharePoint scan" -Workload SharePoint
```

This example creates a scan for all SharePoint sites scoped to pdf and docx files only.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies the unique name of the scan. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
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

### -EndpointDlpLocation

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The EndpointDLPLocation parameter specifies the user accounts to include in scan for devices. You identify the account by name or email address. You can use the value All to include all user accounts.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about onboarding devices to Purview, see [Learn about device onboarding](https://learn.microsoft.com/purview/endpoint-dlp-getting-started)).

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

### -EndpointDlpLocationException

> Applicable: Security & Compliance

**Note**: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

The EndpointDlpLocationException parameter specifies the user accounts to exclude in an on-demand classification scan for devices. You identify the account by name or email address. 

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

For more information about onboarding devices to Purview, see [Learn about device onboarding](https://learn.microsoft.com/purview/endpoint-dlp-getting-started)).

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

### -ExceptIfOneDriveSharedBy

> Applicable: Security & Compliance

The ExceptIfOneDriveSharedBy parameter specifies the users to exclude from the scan (the sites of the OneDrive user accounts are included in the scan). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, OneDrive sites need to be included in the scan (the OneDriveLocation parameter value is All, which is the default value).

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the OneDriveSharedBy or OneDriveSharedByMemberOf parameters.

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

### -ExceptIfOneDriveSharedByMemberOf

> Applicable: Security & Compliance

The ExceptIfOneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to exclude from the scan (the OneDrive sites of group members are excluded from the scan). You identify the groups by email address.

To use this parameter, OneDrive sites need to be included in the scan (the OneDriveLocation parameter value is All, which is the default value).

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the OneDriveSharedBy or OneDriveSharedByMemberOf parameters.

You can't use this parameter to specify Microsoft 365 Groups.

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

### -ExchangeLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -ExchangeSender

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -ExchangeSenderException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -ExchangeSenderMemberOf

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -ExchangeSenderMemberOfException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -OneDriveLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -OneDriveLocationException

> Applicable: Security & Compliance

This parameter specifies the OneDrive sites to exclude when you use the value All for the OneDriveLocation parameter. You identify the site by its URL value.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

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

### -OneDriveSharedBy

> Applicable: Security & Compliance

The OneDriveSharedBy parameter specifies the users to include in the scan (the sites of the OneDrive user accounts are included in the scan). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, OneDrive sites need to be included in the scan (the OneDriveLocation parameter value is All, which is the default value).

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the ExceptIfOneDriveSharedBy or ExceptIfOneDriveSharedByMemberOf parameters.

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

### -OneDriveSharedByMemberOf

> Applicable: Security & Compliance

The OneDriveSharedByMemberOf parameter specifies the distribution groups or mail-enabled security groups to include in the scan (the OneDrive sites of group members are included in the scan). You identify the groups by email address.

To use this parameter, OneDrive sites need to be included in the scan (the OneDriveLocation parameter value is All, which is the default value).

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the ExceptIfOneDriveSharedBy or ExceptIfOneDriveSharedByMemberOf parameters.

You can't use this parameter to specify Microsoft 365 Groups.

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

### -PolicyRBACScopes

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -SharePointLocation

> Applicable: Security & Compliance

The SharePointLocation parameter specifies the SharePoint sites to include in the scan. You identify the site by its URL value, or you can use the value All to include all sites.

You can't add SharePoint sites to the policy until they have been indexed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

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

### -SharePointLocationException

> Applicable: Security & Compliance

The SharePointLocationException parameter specifies the SharePoint sites to exclude when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

You can't add SharePoint sites to the scan until they have been indexed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

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

### -TeamsLocation

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -TeamsLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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
