---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-outlookanywhere
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-OutlookAnywhere
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-OutlookAnywhere

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-OutlookAnywhere cmdlet to view Outlook Anywhere virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Server
```
Get-OutlookAnywhere -Server <ServerIdParameter>
 [-ADPropertiesOnly]
 [-DomainController <Fqdn>]
 [-ShowMailboxVirtualDirectories]
 [<CommonParameters>]
```

### Identity
```
Get-OutlookAnywhere [[-Identity] <VirtualDirectoryIdParameter>]
 [-ADPropertiesOnly]
 [-DomainController <Fqdn>]
 [-ShowMailboxVirtualDirectories]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-OutlookAnywhere -Server MBX01
```

This example returns all Outlook Anywhere virtual directories on the server named MBX01.

### Example 2
```powershell
Get-OutlookAnywhere -Identity "EXCH01\Rpc (Default Web Site)"
```

This example returns information about the Outlook Anywhere virtual directory named Rpc on the default web site of the server named EXCH01.

## PARAMETERS

### -Identity
The Identity parameter specifies the Outlook Anywhere virtual directory that you want to view. You can use any value that uniquely identifies the virtual directory. For example:

- Name or Server\\Name
- Distinguished name (DN)
- GUID

The Name value uses the syntax `"VirtualDirectoryName (WebsiteName)"` from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax `VirtualDirectoryName*`.

You can't use the Identity and Server parameters in the same command.

```yaml
Type: VirtualDirectoryIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Exchange server that hosts the virtual directory. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- ExchangeLegacyDN

You can't use the Server and Identity parameters in the same command.

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ADPropertiesOnly
The ADPropertiesOnly switch specifies whether to return only the virtual directory properties that are stored in Active Directory. You don't need to specify a value with this switch.

If you don't use this switch, the properties in Active Directory and in the Internet Information Services (IIS) metabase are returned.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowMailboxVirtualDirectories
The ShowMailboxVirtualDirectories switch shows information about backend virtual directories on Mailbox servers. You don't need to specify a value with this switch.

By default, this cmdlet shows information about virtual directories in the Client Access services on Mailbox servers. Client connections are proxied from the Client Access services on Mailbox servers to the backend services on Mailbox servers. Clients don't connect directly to the backend services.

We recommend that you use this parameter only under the direction of Microsoft Customer Service and Support.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
