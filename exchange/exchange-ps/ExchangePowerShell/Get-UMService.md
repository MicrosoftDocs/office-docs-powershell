---
applicable: Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-umservice
schema: 2.0.0
title: Get-UMService
---

# Get-UMService

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-UMService cmdlet to view the settings of the Microsoft Exchange Unified Messaging service on Exchange 2013 or Exchange 2016 Mailbox servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UMService [[-Identity] <UMServerIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
When the cmdlet is used for a single Exchange server, it returns the Unified Messaging service properties, including MaxCalls, MaxFaxCalls and UMDialPlans. The properties and their values for the Exchange server are stored in the Unified Messaging section of the Exchange Server configuration object in Active Directory.

The ExchangeVersion attribute that's returned is the minimum version of Exchange you can use to manage the returned object. This attribute isn't the same as the version of Exchange that's displayed in the Exchange admin center when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UMService
```

This example displays a summary list of the Microsoft Exchange Unified Messaging service settings on all Exchange servers in the Active Directory forest.

### Example 2
```powershell
Get-UMService -Identity MBX01 | Format-List
```

This example displays detailed information for the Microsoft Exchange Unified Messaging service settings on the server named MBX01.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the Mailbox server that hosts the Unified Messaging service configuration you want to view. You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: UMServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016

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
