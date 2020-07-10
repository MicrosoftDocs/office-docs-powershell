---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-ipallowlistentry
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-IPAllowListEntry
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-IPAllowListEntry

## SYNOPSIS
This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Get-IPAllowListEntry cmdlet to view the IP address entries in the IP Allow list that's used by the Connection Filtering agent on Edge Transport servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### IPAddress
```
Get-IPAllowListEntry -IPAddress <IPAddress>
 [-ResultSize <Unlimited>]
 [-Server <ServerIdParameter>] [<CommonParameters>]
```

### Identity
```
Get-IPAllowListEntry [[-Identity] <IPListEntryIdentity>]
 [-ResultSize <Unlimited>]
 [-Server <ServerIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1
```powershell
Get-IPAllowListEntry
```

This example returns all entries in the IP Allow list on the local Edge Transport server.

### Example 2
```powershell
Get-IPAllowListEntry -IPAddress 192.168.0.1
```

This example returns an IP Allow list entry in which the specified IP address is included.

## PARAMETERS

### -IPAddress
The IPAddress parameter specifies an IP address to view in the IP Allow list entry or entries. For example, if you have an IP Allow list entry that specifies a range of IP addresses from 192.168.0.1 through 192.168.0.20, enter any IP address in the IP Allow list IP address range to return the IP Allow list entry.

```yaml
Type: IPAddress
Parameter Sets: IPAddress
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity integer value of the IP Allow list entry that you want to view. When you add an entry to the IP Allow list, the Identity value is automatically assigned.

```yaml
Type: IPListEntryIdentity
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

You can't use this parameter to configure other Edge Transport servers remotely.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
