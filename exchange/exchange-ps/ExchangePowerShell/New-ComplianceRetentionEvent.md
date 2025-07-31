---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-complianceretentionevent
schema: 2.0.0
title: New-ComplianceRetentionEvent
---

# New-ComplianceRetentionEvent

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-ComplianceRetentionEvent cmdlet to create compliance retention events in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ComplianceRetentionEvent -Name <String>
 [-AssetId <String>]
 [-Comment <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EventDateTime <DateTime>]
 [-EventTags <MultiValuedProperty>]
 [-EventType <ComplianceRuleIdParameter>]
 [-ExchangeAssetIdQuery <String>]
 [-PreviewOnly]
 [-SharePointAssetIdQuery <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-ComplianceRetentionEvent -Name "Research Project Employees" -EventTag 80e0d620-13ea-4ed9-b6a6-aa883278bcca -EventType e823b782-9a07-4e30-8091-034fc01f9347 -SharePointAssetIDQuery "EmployeeNumber:123456 EmployeeNumber:456789"
```

This example creates a compliance retention event named Research Project Employees with the following settings:

- EventTag: 80e0d620-13ea-4ed9-b6a6-aa883278bcca
- EventTpe: e823b782-9a07-4e30-8091-034fc01f9347
- SharePointAssetIDQuery: EmployeeNumber:123456 EmployeeNumber:456789

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies a unique name for the compliance retention event. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -AssetId

> Applicable: Security & Compliance

The AssetId parameter specifies the Property:Value pair found in the properties of SharePoint or OneDrive documents that's used for retention. For example:

- Product codes that you can use to retain content for only a specific product.
- Project codes that you can use to retain content for only a specific project.
- Employee IDs that you can use to retain content for only a specific person.

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

### -DomainController

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventDateTime

> Applicable: Security & Compliance

The EventDateTime parameter specifies the date-time of the event.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventTags

> Applicable: Security & Compliance

The EventTags parameter specifies the GUID value of the labels that are associated with the compliance retention event. Run the following command to see the available GUID values: `Get-ComplianceTag | Format-Table Name,GUID`.

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

### -EventType

> Applicable: Security & Compliance

The EventType parameter specifies the GUID value of the event that will start the retention period for labels that use this event type. Run the following command to see the available GUID values: `Get-ComplianceRetentionEventType | Format-Table Name,GUID`.

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAssetIdQuery

> Applicable: Security & Compliance

The ExchangeAssetIdQuery parameter specifies the keywords that are used to scope Exchange content for the compliance retention event. For details, see [Keyword queries and search conditions for Content Search](https://learn.microsoft.com/purview/ediscovery-keyword-queries-and-search-conditions).

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

### -PreviewOnly

> Applicable: Security & Compliance

{{ Fill PreviewOnly Description }}

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

### -SharePointAssetIdQuery

> Applicable: Security & Compliance

The SharePointAssetIdQuery parameter specifies one or more the Property:Value pairs that you've specified in the properties (also known as Columns) of SharePoint and OneDrive documents to scope the compliance retention event.

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
