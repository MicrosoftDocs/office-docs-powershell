---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-label
applicable: Office 365 Security & Compliance Center
title: New-Label
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-Label

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc-powershell).

Use the New-Label cmdlet to create sensitivity labels in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-Label [-Name] <String> -DisplayName <String>
 [-AdvancedSettings <PswsHashtable>]
 [-Comment <String>]
 [-Confirm]
 [-LocaleSettings <<MultiValuedProperty>]
 [-ParentId <ComplianceRuleIdParameter>]
 [-Tooltip <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
New-Label -DisplayName "My New label" -Name "New Label"
```

This example create a new label named "New Label" with a display name "My New Label".

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the sensitivity label. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -DisplayName
The DisplayName parameter specifies the display name for the sensitivity label. The display name appears in the Microsoft Office and is used by Outlook users to select the appropriate sensitivity label before they send a message.

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

### -AdvancedSettings
The AdvancedSettings parameter enables client-specific features and capabilities on the sensitivity label. The settings that you configure with this parameter only affect apps that are designed for the setting. For more information, see [How to configure advanced settings for the client by using Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/azure/information-protection/rms-client/clientv2-admin-guide-customizations#how-to-configure-advanced-settings-for-the-client-by-using-office-365-security--compliance-center-powershell).

```yaml
Type: PswsHashtable
Parameter Sets: (All)
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

### -LocaleSettings
The LocaleSettings parameter specifies one or more localized label name or label Tooltips in different languages. Regions include all region codes supported in Office Client applications. Valid values use the following syntax:

- Label display names: {"localeKey":"DisplayName","Settings":[{"Key":"en-us","Value":"English display name"},{"Key":"de-de","Value":"Deutscher Anzeigename"},{"Key":"es-es","Value":"Nombre para mostrar en español"}]}

- Label Tooltips: {"localeKey":"Tooltip","Settings":[{"Key":"en-us","Value":"English Tooltip"},{"Key":"de-de",Value":"Deutscher Tooltip"},{"Key":"es-es","Value":"Tooltip Español"}]}

The languages you use in the display name and Tooltip must mach. For example, you can't have a German display name without a corresponding German ToolTip.

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

### -ParentId
The ParentId parameter specifies the parent label that you want this label to be under (a sublabel). You can use any value that uniquely identifies the parent sensitivity label. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tooltip
The ToolTip parameter specifies the default tooltip and sensitivity label description that's seen by users. It the value contains spaces, enclose the value in quotation marks (").

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
