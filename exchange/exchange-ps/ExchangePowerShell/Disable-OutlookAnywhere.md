---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/disable-outlookanywhere
schema: 2.0.0
title: Disable-OutlookAnywhere
---

# Disable-OutlookAnywhere

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Disable-OutlookAnywhere cmdlet to disable Outlook Anywhere on Exchange Server 2010 Client Access servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Disable-OutlookAnywhere [-Identity] <VirtualDirectoryIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### Server
```
Disable-OutlookAnywhere [-Server <ServerIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Enabling Outlook Anywhere on the Client Access server prevents the server from accepting external connections by Outlook 2003 or later clients by using Outlook Anywhere.

When you run this cmdlet, it can take as long as an hour for the settings to become effective, depending on how long it takes for Active Directory to replicate.

After the Client Access server is disabled for Outlook Anywhere, you may want to remove the RPC over HTTP proxy Windows networking component.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Disable-OutlookAnywhere -Server CAS01
```

This example disables Outlook Anywhere on the Client Access server named CAS01.

### Example 2
```powershell
Disable-OutlookAnywhere -Identity: "exch01\rpc (Default Web Site)"
```

This example disables Outlook Anywhere on the specified virtual directory on the Client Access server named exch01.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the Outlook Anywhere virtual directory that you want to disable. You can use any value that uniquely identifies the virtual directory. For example:

- Name or Server\\Name
- Distinguished name (DN)
- GUID

The Name value uses the syntax `"VirtualDirectoryName (WebsiteName)"` from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax `VirtualDirectoryName*`.

You can't use the Identity and Server parameters in the same command.

```yaml
Type: VirtualDirectoryIdParameter
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

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

> Applicable: Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -Server

> Applicable: Exchange Server 2010

The Server parameter specifies the Client Access server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
