---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-umserver
schema: 2.0.0
title: Get-UmServer
---

# Get-UMServer

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-UMServer cmdlet to view settings that are associated with the Unified Messaging (UM) server role.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UMServer [[-Identity] <UMServerIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-UMServer cmdlet retrieves the properties for a Unified Messaging server or returns a list of available UM servers from Active Directory. When the cmdlet is used for a single UM server, it returns the UM server properties including MaxCalls, MaxFaxCalls, and UMDialPlans. The properties and their values for the UM server are stored in the Unified Messaging section of the Exchange Server configuration object in Active Directory.

The ExchangeVersion attribute that's returned is the minimum version of Microsoft Exchange you can use to manage the returned object. This attribute isn't the same as the version of Microsoft Exchange that's displayed in the Exchange Management Console when you select Server Configuration.

After this task is completed, you can view the parameters and values for a single Unified Messaging server or a list of all of the Unified Messaging servers in Active Directory.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UMServer
```

This example returns a summary list of Unified Messaging servers in the organization.

### Example 2
```powershell
Get-UMServer -Identity MyUMServer | Format-List
```

This example returns detailed information for the Unified Messaging server named MyUMServer.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the Unified Messaging server that you want to view. You can use any value that uniquely identifies the server. For example:

- Name
- GUID
- Distinguished name (DN)
- ExchangeLegacyDN

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
