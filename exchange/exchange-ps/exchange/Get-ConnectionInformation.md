---
external help file: Microsoft.Exchange.Management.ExoPowershellGalleryModule.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-connectioninformation
applicable: Exchange Online
title: Get-ConnectionInformation
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ConnectionInformation

## SYNOPSIS
This cmdlet is available in the Exchange Online PowerShell module v3.0.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-ConnectionInformation cmdlet to get information about all REST-based connections in the current PowerShell instance with Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-ConnectionInformation [<CommonParameters>]
```

### ConnectionId
```
Get-ConnectionInformation -ConnectionId <String[]> [<CommonParameters>]
```

### ModulePrefix
```
Get-ConnectionInformation -ModulePrefix <String[]> [<CommonParameters>]
```

## DESCRIPTION
The Get-ConnectionInformation cmdlet returns the information about all active REST-based connections with Exchange Online in the current PowerShell instance. This cmdlet is equivalent to the Get-PSSession cmdlet that's used with remote PowerShell sessions.

## EXAMPLES

### Example 1
```powershell
Get-ConnectionInformation
```

This example returns a list of all active REST-based connections with Exchange Online in the current PowerShell instance.

### Example 2
```powershell
Get-ConnectionInformation -ConnectionId 1a9e45e8-e7ec-498f-9ac3-0504e987fa85
```

This example returns the active REST-based connection with the specified ConnectionId value.

### Example 3
```powershell
Get-ConnectionInformation -ModulePrefix Contoso,Fabrikam
```

This example returns a list of active REST-based connections that are using the specified prefix values.

## PARAMETERS

### -ConnectionId
**Note**: This parameter is available in version 3.2.0 or later of the module.

The ConnectionId parameter filters the connections by ConnectionId. ConnectionId is a GUID value in the output of the Get-ConnectionInformation cmdlet that uniquely identifies a connection, even if you have multiple connections open. You can specify multiple ConnectionId values separated by commas.

Don't use this parameter with the ModulePrefix parameter.

```yaml
Type: String[]
Parameter Sets: ConnectionId
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModulePrefix
**Note**: This parameter is available in version 3.2.0 or later of the module.

The ModulePrefix parameter filters the connections by ModulePrefix. When you use the Prefix parameter with the Connect-ExchangeOnline cmdlet, the specified text is added to the names of all Exchange Online cmdlets (for example, Get-InboundConnector becomes Get-ContosoInboundConnector). The ModulePrefix value is visible in the output of the Get-ConnectionInformation cmdlet. You can specify multiple ModulePrefix values separated by commas.

This parameter is meaningful only for connections that were created with the Prefix parameter.

Don't use this parameter with the ConnectionId parameter.

```yaml
Type: String[]
Parameter Sets: ModulePrefix
Aliases:

Required: True
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
