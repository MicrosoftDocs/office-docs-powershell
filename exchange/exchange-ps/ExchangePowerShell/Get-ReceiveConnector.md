---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-receiveconnector
schema: 2.0.0
title: Get-ReceiveConnector
---

# Get-ReceiveConnector

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ReceiveConnector cmdlet to view Receive connectors on Mailbox servers and Edge Transport servers. Receive connectors listen for inbound SMTP connections on the Exchange server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-ReceiveConnector [[-Identity] <ReceiveConnectorIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Server
```
Get-ReceiveConnector [-Server <ServerIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
You can view Receive connectors on Mailbox servers and Edge Transport servers.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ReceiveConnector -Server Exchange01
```

This example returns a summary list of all Receive connectors on the server named Exchange01.

### Example 2
```powershell
Get-ReceiveConnector -Identity "Receive Connector for Contoso.com" | Format-List
```

This example displays detailed information for the Receive connector named Receive Connector for Contoso.com on the local server.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the Receive connector that you want to view. You can use any value that uniquely identifies the Receive connector. For example:

- Name
- Distinguished name (DN)
- GUID
- ServerName\\Name

You can't use this parameter with the Server parameter.

```yaml
Type: ReceiveConnectorIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Server parameter filters the results by the specified Mailbox server or Edge Transport server. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

You can't use this parameter with the Identity parameter.

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
