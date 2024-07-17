---
external help file: ExchangeOnlineManagement-help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/disconnect-exchangeonline
applicable: Exchange Online
title: Disconnect-ExchangeOnline
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Disconnect-ExchangeOnline

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Disconnect-ExchangeOnline cmdlet in the Exchange Online PowerShell module to disconnect the connections that you created using the Connect-ExchangeOnline or Connect-IPPSSession cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### DefaultParameterSet (Default)
```
Disconnect-ExchangeOnline
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### ConnectionId
```
Disconnect-ExchangeOnline -ConnectionId <String[]>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### ModulePrefix
```
Disconnect-ExchangeOnline -ModulePrefix <String[]>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is the counterpart to the Connect-ExchangeOnline and Connect-IPPSSession cmdlets.

This cmdlet disconnects any connections and clears the cache. After a successful disconnect, you can't successfully run any cmdlets for your organization.

Disconnect commands will likely fail if the profile path of the account that you used to connect contains special PowerShell characters (for example, `$`). The workaround is to connect using a different account that doesn't have special characters in the profile path.

## EXAMPLES

### Example 1
```powershell
Disconnect-ExchangeOnline
```

This example asks for confirmation before disconnecting from Exchange Online PowerShell or Security & Compliance PowerShell.

### Example 2
```powershell
Disconnect-ExchangeOnline -Confirm:$false
```

This example silently disconnects from Exchange Online PowerShell or Security & Compliance PowerShell without a confirmation prompt or any notification text.

### Example 3
```powershell
Disconnect-ExchangeOnline -ConnectionId 1a9e45e8-e7ec-498f-9ac3-0504e987fa85
```

This example disconnects the REST-based Exchange Online PowerShell connection with the specified ConnectionId value. Any other remote PowerShell connections to Exchange Online PowerShell or Security & Compliance PowerShell in the same Windows PowerShell window are also disconnected.

### Example 4
```powershell
Disconnect-ExchangeOnline -ModulePrefix Contoso,Fabrikam
```

This example disconnects the REST-based Exchange Online PowerShell connections that are using the specified prefix values. Any other remote PowerShell connections to Exchange Online PowerShell or Security & Compliance PowerShell in the same Windows PowerShell window are also disconnected.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionId
**Note**: This parameter is available in version 3.2.0 or later of the module.

The ConnectionId parameter specifies the REST API connections to disconnect by ConnectionId. ConnectionId is a GUID value in the output of the Get-ConnectionInformation cmdlet that uniquely identifies a connection, even if you have multiple connections open. You can specify multiple ConnectionId values separated by commas.

Don't use this parameter with the ModulePrefix parameter.

```yaml
Type: String[]
Parameter Sets: ConnectionId
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModulePrefix
**Note**: This parameter is available in version 3.2.0 or later of the module.

The ModulePrefix parameter specifies the REST API connections to disconnect by ModulePrefix. When you use the Prefix parameter with the Connect-ExchangeOnline cmdlet, the specified text is added to the names of all Exchange Online cmdlets (for example, Get-InboundConnector becomes Get-ContosoInboundConnector). The ModulePrefix value is visible in the output of the Get-ConnectionInformation cmdlet. You can specify multiple ModulePrefix values separated by commas.

Don't use this parameter with the ConnectionId parameter.

```yaml
Type: String[]
Parameter Sets: ModulePrefix
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online

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
