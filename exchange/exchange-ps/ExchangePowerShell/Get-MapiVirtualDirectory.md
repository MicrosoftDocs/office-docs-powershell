---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mapivirtualdirectory
schema: 2.0.0
title: Get-MapiVirtualDirectory
---

# Get-MapiVirtualDirectory

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MapiVirtualDirectory cmdlet to view Message Application Programming Interface (MAPI) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. A MAPI virtual directory is used by supported versions of Microsoft Outlook to connect to mailboxes by using the MAPIHTTP protocol.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Server
```
Get-MapiVirtualDirectory -Server <ServerIdParameter>
 [-ADPropertiesOnly]
 [-DomainController <Fqdn>]
 [-ShowMailboxVirtualDirectories]
 [<CommonParameters>]
```

### Identity
```
Get-MapiVirtualDirectory [[-Identity] <VirtualDirectoryIdParameter>]
 [-ADPropertiesOnly]
 [-DomainController <Fqdn>]
 [-ShowMailboxVirtualDirectories]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MapiVirtualDirectory -Server ContosoMail
```

This example returns a summary list of the MAPI virtual directories on the server named ContosoMail.

### Example 2
```powershell
Get-MapiVirtualDirectory -Identity "ContosoMail\mapi (Default Web Site)" | Format-List

Get-MapiVirtualDirectory "ContosoMail\mapi (Default Web Site)" | Format-List

Get-MapiVirtualDirectory ContosoMai\mapi* | Format-List
```

These examples return detailed information for the MAPI virtual directory named "mapi (Default Web Site)" on the server named ContosoMail. All three commands do the same thing.

### Example 3
```powershell
Get-MapiVirtualDirectory
```

This example returns a summary list of all MAPI virtual directories in the client access services on all Mailbox servers in the organization.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the MAPI virtual directory that you want to view. You can use any value that uniquely identifies the virtual directory. For example:

- Name or Server\\Name
- Distinguished name (DN)
- GUID

The Name value uses the syntax `"VirtualDirectoryName (WebsiteName)"` from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax `VirtualDirectoryName*`.

You can't use the Identity and Server parameters in the same command.

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: VirtualDirectoryIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ADPropertiesOnly

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ADPropertiesOnly switch specifies whether to return only the virtual directory properties that are stored in Active Directory. You don't need to specify a value with this switch.

If you don't use this switch, the properties in Active Directory and in the Internet Information Services (IIS) metabase are returned.

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

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -ShowMailboxVirtualDirectories

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The ShowMailboxVirtualDirectories switch shows information about backend virtual directories on Mailbox servers. You don't need to specify a value with this switch.

By default, this cmdlet shows information about virtual directories in the Client Access services on Mailbox servers. Client connections are proxied from the Client Access services on Mailbox servers to the backend services on Mailbox servers. Clients don't connect directly to the backend services.

We recommend that you use this parameter only under the direction of Microsoft Customer Service and Support.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
